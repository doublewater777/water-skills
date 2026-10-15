---
name: domain-quickbuy
description: 在 Spaceship、Porkbun、NameSilo、Dynadot、Namecheap 和 Cloudflare 选择适合站点类型的域名后缀、查询域名、比较实时报价、检查账号购买条件并执行已授权的域名注册。适用于快速买域名和验证到扣款前的流程。
---

# 快速购买域名

优先本机 CLI 和官方 API，Porkbun 同时支持本机 API CLI 和官方 MCP；没有 API 权限时使用已登录浏览器。读取 [平台操作参考](references/providers.md) 中当前选定平台的部分；新机器先读 [本机配置](references/setup.md)。安装技能不代表平台已经登录或具备购买条件，每次操作都核实当前状态。

## 选后缀与候选域名

为新站选域名、`.com` 已注册或评估 `.ai` 时，先读 [后缀选择规则](references/tld-selection.md)。默认优先 `.com`，再按站点类型考虑 `.org`、`.net`、`.app`；主流后缀全占用时优先改词。`.ai` 核实最短年限和首付总额。用户明确指定的购买目标优先，不擅自改名。

## 平台排除偏好

用户已于 2026-10-15 将 Porkbun 标记为当前不可购买：本账号无法完成中国手机号验证。默认选平台、比价和推荐均排除 Porkbun，不再重试验证；只有用户明确要求重新检查或恢复时才使用。CLI 的 `all` 自动跳过它，并输出排除原因。这是当前账号的购买阻塞，不代表已证实的国籍政策。

## 快速预检

Node.js 18+；macOS 钥匙串保存 API 凭据，不在聊天、报告或命令输出中打印密钥。

```sh
node ~/.codex/skills/domain-quickbuy/scripts/registrar.mjs doctor all
node ~/.codex/skills/domain-quickbuy/scripts/registrar.mjs check all example.com
node ~/.codex/skills/domain-quickbuy/scripts/registrar.mjs plan cloudflare example.com
```

脚本执行只读请求和不扣款的预检；`plan porkbun` 会额外调用官方 `dryRun:true` 注册预检，其余平台的 `plan` 为本地预检。预检不保留或购买域名。`ok` 代表命令运行情况，`allConnected` 和逐平台状态才表示只读接通情况。Spaceship CLI check 不返回价格，必须通过官方 MCP 或结账页补充报价。Namecheap 的 fallback 状态表示需要另行验证，不能当作成功接入。Porkbun 的 `providerValidation.validationPassed`、`wouldSucceed` 和错误码用于判断注册准备情况；查询可用不代表账号已通过手机验证或资金充足。

## 从意图到购买

1. 使用用户指定的准确域名、平台、年限、总金额上限、隐私和续费偏好。缺少会影响扣款的关键参数才询问；已经明确的授权持续有效。
2. 下单前重新检查可注册状态和实时报价。区分首年、续费、最短注册年限、溢价、税费和附加服务；比较相同年限的总价。比价结果必须同时列首年含费总额和当前续费年总额；若续费未查到，标为待核实并补查官方价格页，不只凭首年优惠推荐。不要把 API 的 `duration` 等字段猜成年限或价格倍数。
3. 检查真实注册人联系方式、付款来源、余额或卡，以及平台所需协议。复用已验证联系方式；不要用示例地址补表单。不要从其他平台提取银行卡信息。
4. 输出明确的购买摘要：域名、平台、年限、最终总额/币种、续费价格、隐私、自动续费、付款来源、剩余阻塞。用户要求“扣款前验证”时停在 dry run / 最终付款页，不执行注册、充值或最终付款。
5. 用户已授权实际购买且参数完整时，使用下列官方路径提交一次。若金额超出上限、域名发生变化或出现未授权附加服务，先处理差异。
6. 保留订单 ID、幂等键和响应状态。超时或异步处理中先查订单/域名状态，禁止盲目重试付款。成功以平台返回的已注册状态为准，再给出到期时间、隐私、续费和后续验证要求。

人机验证和浏览器权限弹窗由用户完成；交接后暂停浏览器操作，用户确认后恢复原任务空间。没有 API 资格、余额不足、缺少付款方式都应明确报告，不能以只读查询成功声称已可购买。
