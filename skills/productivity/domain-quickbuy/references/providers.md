# 平台操作参考

## Spaceship

先配置官方 `spaceship` CLI 或 MCP。先运行 `spaceship doctor --json`，按现有 spaceship skill 读取实时参数。

- 查询：`spaceship domains check example.com --json`（不含价格）；MCP `domains_check_availability` 的 schema 应在当前会话中发现，返回可注册状态与报价。
- CLI 预览：`spaceship domains register example.com --registrant CONTACT_ID --years 1 --json`，没有 `--apply` 时仅打印预览。检查预览里的 autoRenew 默认值。
- MCP `domain_register` 首次不带 confirmationToken，返回 `confirmation_required`，可以验证联系人、报价和默认付款卡。只有已授权实际购买才能按工具 schema 接受确认 token。
- CLI 真正执行需要 `--apply --yes --confirm example.com`，执行前用 `--help` 核对最新 schema 和用户授权。不要把预览当作已注册。

## Cloudflare

官方文档：https://developers.cloudflare.com/registrar/registrar-api/

Bearer token + account ID。需要 Registrar 写权限、默认注册人、有效默认付款方式和域名注册协议。仅支持 API 当前覆盖的后缀和域名类型，不能从网页支持推断 API 支持。使用 Cloudflare nameservers。

- 只读报价：POST `/client/v4/accounts/{account}/registrar/domain-check`，JSON `{"domains":["example.com"]}`。
- **付费注册**：POST `/client/v4/accounts/{account}/registrar/registrations`，最小 body `{"domain_name":"example.com"}`。会直接扣默认付款方式；没有独立确认步骤，当前不要调用来测试。
- API 默认 auto_renew=false，privacy_mode=redaction（后缀支持时）；网页默认可能不同。需要修改时先读当前 API schema。
- 201 已完成或 202 处理中；查询响应里的 status link，或 GET `/registrar/registrations/{domain}/registration-status`，不要因 202 重复提交。
- 网页购买路径：账户 → Domains → Registrations → Buy domain → 精确搜索 → Buy now → 注册人 → Continue to pay → 最终付款页。核对最终总额和付款卡，扣款前验证停在这里。

## NameSilo

官方文档：https://www.namesilo.com/api-reference
管理密钥：https://www.namesilo.com/account/api-manager

API 路径 `/api/{operation}?version=1&type=json&key=...`，不要打印带 key 的 URL。成功 reply.code=300。

- 只读：`getAccountBalance`、`checkRegisterAvailability`（domains 参数）、`getPrices`。
- 注册：`registerDomain` 是付费动作。2026-10-15核对的官方参数：`domain`、`years`（1–10）必需；`private=1` 启用隐私（省略默认无隐私），`auto_renew=0/1` 显式指定（省略默认开启）。不要把参数写成 privacy。
- 支付：至少一张 verified credit card 或足额余额；`payment_id` 指定已验证卡，省略时尝试账户余额。余额为零不代表只能充值，但没有已验证卡也不能声称可 API 购买。不自动充值或搬用其他平台银行卡。
- 联系人：可传 `contact_id`，也可完整提供 `fn,ln,ad,cy,st,zp,ct,em,ph`，可选 `ad2`；字段用 URLSearchParams 编码，`ph` 不带国家拨号码。部分必填字段缺失会使整套传入联系人被忽略，退回默认资料。
- **301 / 302 也可能已成功注册**：301表示注册成功但使用默认 nameservers，302表示注册成功但使用默认联系人。不要将它们当成失败重新下单；查域名、订单和实际设置再修复差异。
- 官方注册文档引用 `getAccountContacts` 获取联系人 ID，但本机实际请求在2026-10-15返回107 Invalid API operation；该路径未验证可用，不假设已拿到联系人 ID。购买前用网页确认默认注册人或按当前文档提供完整联系方式。
- 最新 schema：https://www.namesilo.com/api-reference/pages?uid=domains%2Fregister-domain；`.us`、`.ca`、`.eu` 等还有额外条件，按对应后缀文档核对。
- 网页：https://www.namesilo.com/domain/search-domains → 精确结果加入购物车 → cart → 设置真实地址并保存 → CHECKOUT → 最终总价和付款方式。无卡时由用户添加或选其已授权付款方式。
- 网站可能显示默认示例地址，必须替换为真实信息。API 返回的 duration 字段不要当作本次购买年限；以请求年限和最终结账页为准。

## Dynadot

官方文档：https://www.dynadot.com/domain/api-document
API 管理：https://www.dynadot.com/account/domain/setting/api.html

先完成账户资料，再生成 production key；新密钥最多约 10 分钟传播。支持受限密钥和独立 IP allowlist。不要为了查询启用绕过账号锁/域名锁。

当前脚本使用 API3：`https://api.dynadot.com/api3.json`，参数 key、command。
- `command=search&domain0=example.com&show_price=1&currency=USD` 为只读。
- `command=get_account_balance` 只读账户检测。
- 正式注册之前读取最新官方 schema，或通过登录网页结账。不猜 API3 与 REST v2 的密钥、权限和响应结构是否可混用。
- invalid key 不是接入成功，传播时间过去后仍失败则检查 key 与 API 版本、权限、IP。

## Porkbun

纳入默认比价。API/MCP 注册若因账号验证受阻，保留报价并提供官方网页购买作为备选；网页能否完成付款需在当次流程中核实，不能从 API 错误推断整个平台不能购买。

统一 CLI 提供官方 API 适配器（需先配置凭据）：`doctor porkbun` 验证密钥（不输出IP），`check porkbun example.com` 查询，`plan porkbun example.com` 调用 `/domain/create/{domain}`，固定 `dryRun:true,cost:0,agreeToTerms:"yes"`，不创建订单或扣款。检查 `providerValidation`，不是仅看外层命令 `ok`。

API 凭据位于 Keychain `registrar-quickbuy-porkbun` / accounts `api-key` 和 `secret-api-key`；可用 `PORKBUN_API_KEY` / `PORKBUN_SECRET_API_KEY` 覆盖。官方 OpenAPI：https://porkbun.com/api/json/v3/spec ，生产 base URL 为 `https://api.porkbun.com/api/json/v3`。

若预检返回 `VERIFICATION_REQUIRED`，先解决账号验证。`PHONE_VERIFY_FAILED` 可能包含服务商对号码的限制，按原始错误处理，停止盲目重试，不使用虚假号码或推断国籍政策。验证码不写入持久报告。


官方服务器：https://mcp.porkbun.com/mcp
官方说明：https://porkbun.com/mcp
官方 npm：`@porkbunllc/mcp-server`。优先官方远程 OAuth；`codex mcp add porkbun --url https://mcp.porkbun.com/mcp`，已配置则 `codex mcp login porkbun`。配置成功不等于 OAuth 完成。

- 用当前 MCP tool discovery 查看 `check_domain`、`register_domain`、账户验证和余额工具的真实 schema。
- 付费工具支持 dry run；先按 schema 执行 dryrun，资金参数以 `_cents` 命名（1108 表示 $11.08）。不要猜 dry-run 参数拼写。
- 钱包信用余额、Stripe Link、USDC 等支持由当前工具决定；普通购买不等于会自动扣保存的卡。充值、自动充值是独立动作，不可隐含授权。
- `/mcp/no-purchases` 不提供注册等购买工具；`/mcp/no-topups` 不支持充值或直接卡支付。需要购买能力时选完整端点，权限在 OAuth 时选择。
- 无 Google 注册入口时，用用户明确授权的普通账户流程；随机密码存 macOS 钥匙串。人机验证和可能的邮箱/手机验证完成后再授权 OAuth。
- 保持工具生成的幂等键，重试先查原结果。

## Namecheap

官方 API：https://www.namecheap.com/support/api/intro/
注册参数：https://www.namecheap.com/support/api/methods/domains/create/

在账户 Tools 检查生产 API 资格；若显示 Not available，不能假设有生产密钥。生产 API 需要 IPv4 白名单，沙箱资格不能代替生产。

有权限后用官方 API 的 domains.check / domains.create schema；没有权限优先登录浏览器购买。不要为满足 API 条件自动充值或购买。

网页搜索：https://www.namecheap.com/domains/registration/results/?domain=example.com
加入购物车后确认确实存在准确域名再结账。若出现 BANNED 或购物车为空，记录原始现象并停止盲目重试；不要把搜索报价当作付款流程通过。2026-10-15 官方客服确认原探测域名因关键词被禁，并非已证实的账号封禁。用户的真实购买目标不能擅自改名；只做流程测试时，可用独立中性探测域名。命中禁词的真实目标应按官方审核流程处理。

Namecheap 资格参考（2026-10-15 官方客服说明）：20个域名、$50余额、过去两年消费$50，满足其一；以当前账户和官方要求为准。免条件人工例外需官方确认，不为资格自动消费或充值。网页路径为购物车 → 真实联系人 → Whois设置 → Payment Option；未提供付款信息时停在这里。
