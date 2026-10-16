#!/usr/bin/env node
import {execFileSync} from 'node:child_process';

const account = process.env.CLOUDFLARE_ACCOUNT_ID || '';
const providers = ['spaceship','cloudflare','namesilo','dynadot','porkbun','namecheap'];
const excludedProviders = [];
const defaultProviders = providers.filter(p=>!excludedProviders.some(x=>x.provider===p));
function secret(provider, field) {
  const env = `${provider.toUpperCase()}_${field.toUpperCase().replaceAll('-','_')}`;
  if (process.env[env]) return process.env[env];
  try { return execFileSync('/usr/bin/security', ['find-generic-password','-s',`registrar-quickbuy-${provider}`,'-a',field,'-w'],{encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim(); }
  catch { throw new Error(`Missing ${provider} ${field}; connect the account first.`); }
}
async function request(url, options = {}) {
  const response = await fetch(url, {...options,signal:AbortSignal.timeout(25000)});
  const raw = await response.text();
  let body; try { body = JSON.parse(raw); } catch { throw new Error(`HTTP ${response.status}: provider returned a non-JSON response`); }
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${JSON.stringify(body.errors || body.error || 'request rejected')}`);
  if (body.success === false) throw new Error(JSON.stringify(body.errors));
  return body;
}
function domainName(value) {
  if (!value || /[\s/\\:@?#%]/.test(value)) throw new Error('Pass a bare domain name.');
  const name = new URL(`https://${value}`).hostname.toLowerCase();
  if (name.length > 253 || !name.includes('.') || !name.split('.').every(x=>/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(x))) throw new Error('Invalid domain name.');
  return name;
}
async function cf(path, payload) {
  if (!account) throw new Error("Missing CLOUDFLARE_ACCOUNT_ID; configure the local account first.");
  return request(`https://api.cloudflare.com/client/v4/accounts/${account}/${path}`, {
    method:payload ? 'POST':'GET', headers:{Authorization:`Bearer ${secret('cloudflare','api-token')}`,'Content-Type':'application/json'},
    ...(payload ? {body:JSON.stringify(payload)} : {})
  });
}
async function ns(operation, params={}) {
  const q = new URLSearchParams({version:'1',type:'json',key:secret('namesilo','api-key'),...params});
  const body=await request(`https://www.namesilo.com/api/${operation}?${q}`);
  if (Number(body.reply?.code)!==300) throw new Error(`NameSilo ${body.reply?.code}: ${body.reply?.detail || 'request failed'}`);
  return body.reply;
}
async function pb(path, payload={}, preview=false) {
  const response=await fetch(`https://api.porkbun.com/api/json/v3${path}`, {
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({apikey:secret('porkbun','api-key'),secretapikey:secret('porkbun','secret-api-key'),...payload}),
    signal:AbortSignal.timeout(25000)
  });
  const body=await response.json();
  delete body.yourIp; delete body.ip; delete body.xForwardedFor;
  if(preview) return {httpStatus:response.status,validationPassed:body.status==='SUCCESS' && body.wouldSucceed===true,...body};
  if(!response.ok || body.status!=='SUCCESS') throw new Error(`Porkbun ${body.code||response.status}: ${body.message||'request failed'}`);
  return body;
}
async function dd(command, params={}) {
  const q=new URLSearchParams({key:secret('dynadot','api-key'),command,...params});
  const body=await request(`https://api.dynadot.com/api3.json?${q}`);
  const result=Object.values(body)[0];
  if (command==='get_account_balance' && result?.Error==='There is no balance in your account') return {status:'no_balance',balance:0,providerMessage:result.Error};
  if (result?.Status==='error' || (result?.ResponseCode!==undefined && Number(result.ResponseCode)!==0)) throw new Error(`Dynadot: ${result?.Error || result?.Status || 'request failed'}`);
  return body;
}
function spaceship(args) {
  const body=JSON.parse(execFileSync('spaceship',[...args,'--json'],{encoding:'utf8',stdio:['ignore','pipe','pipe']}));
  if (!body.ok) throw new Error(body.error?.message || 'Spaceship failed');
  return body.result;
}
async function check(provider, name) {
  if(provider==='spaceship') return spaceship(['domains','check',name]);
  if(provider==='cloudflare') return cf('registrar/domain-check',{domains:[name]});
  if(provider==='namesilo') return ns('checkRegisterAvailability',{domains:name});
  if(provider==='porkbun') return pb(`/domain/checkDomain/${name}`);
  if(provider==='dynadot') return dd('search',{domain0:name,show_price:'1',currency:'USD'});
  return {status:'browser_or_mcp_required',provider,domain:name,reason:'No Namecheap API adapter is configured in this CLI; verify production API eligibility or use signed-in browser checkout.'};
}
async function doctor(provider) {
  if(provider==='spaceship') return spaceship(['doctor']);
  if(provider==='cloudflare') return cf('tokens/verify');
  if(provider==='namesilo') return ns('getAccountBalance');
  if(provider==='dynadot') return dd('get_account_balance');
  if(provider==='porkbun') return pb('/ping');
  return {status:'browser_or_mcp_required',provider};
}
async function main() {
  const [command,provider,value,...extra]=process.argv.slice(2);
  if(command==='help' || !command) return {defaultProviders,excludedProviders,commands:['doctor <provider|all>','check <provider|all> <domain>','prices namesilo','plan <provider> <domain>'],note:'Read-only preflight CLI. No command submits a purchase, registers, renews, tops up or changes DNS.'};
  if(!providers.includes(provider) && provider!=='all') throw new Error(`Unknown provider; choose ${providers.join(', ')}`);
  if(extra.length || (['doctor','prices'].includes(command) && value)) throw new Error('Unexpected arguments. This CLI does not accept --apply or payment flags.');
  if(command==='prices' && provider==='namesilo') return ns('getPrices');
  if(!['doctor','check','plan'].includes(command)) throw new Error('Unknown command. Run help.');
  if(command==='plan') {
    if(provider==='all') throw new Error('Choose one provider for a purchase plan.');
    const domain=domainName(value);
    return {provider,domain,checkedAt:new Date().toISOString(),availability:await check(provider,domain),...(provider==='porkbun'?{providerValidation:await pb(`/domain/create/${domain}`,{cost:0,agreeToTerms:'yes',dryRun:true},true)}:{}),purchaseSubmitted:false,next:'Use the matching provider reference in domain-quickbuy. Verify term, final total, renewal, contacts, privacy, auto-renew and payment source before submitting. A plan is not a provider validation or a reservation.'};
  }
  const domain=command==='check'?domainName(value):undefined;
  const run=p=>command==='doctor'?doctor(p):check(p,domain);
  if(provider!=='all') return run(provider);
  const results=await Promise.all(defaultProviders.map(async p=>{try{const result=await run(p);return {provider:p,ok:result?.status!=='browser_or_mcp_required',state:result?.status==='browser_or_mcp_required'?'unverified':'verified_read_only',result}}catch(e){return {provider:p,ok:false,error:e.message}}}));
  return {checkedAt:new Date().toISOString(),allConnected:results.every(x=>x.ok),scope:'defaultProviders',excludedProviders,purchaseReadiness:'Not established by API read checks',results};
}
main().then(result=>console.log(JSON.stringify({ok:true,result},null,2))).catch(error=>{console.log(JSON.stringify({ok:false,error:error.message}));process.exitCode=1;});
