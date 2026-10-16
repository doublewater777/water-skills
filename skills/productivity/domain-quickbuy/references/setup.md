# 本机配置

本仓库不包含账号、密钥、真实联系人或银行卡。每台机器分别接通后运行 `doctor all`；查询成功不等于可以付款。

## CLI 依赖

Node.js 18+。Spaceship 路径需要官方 `spaceship` CLI 已登录且可在 PATH 中找到；没有时按官方安装说明配置，或使用官方 MCP。其他平台通过 Node 内置 fetch 调用官方 API。

## 环境变量

- `CLOUDFLARE_ACCOUNT_ID` 与 `CLOUDFLARE_API_TOKEN`。
- `NAMESILO_API_KEY`。
- `DYNADOT_API_KEY`。
- `PORKBUN_API_KEY` 与 `PORKBUN_SECRET_API_KEY`。

密钥不要提交 Git。macOS 可用钥匙串替代密钥环境变量，service 为 `registrar-quickbuy-<provider>`，account 分别为 Cloudflare `api-token`、NameSilo/Dynadot `api-key`、Porkbun `api-key` 和 `secret-api-key`。Cloudflare account ID 仍需单独设置。非 macOS 使用环境变量。

## 平台状态与偏好

Namecheap 生产 API 资格在账号内核实，未开通时走已登录网页。Porkbun 纳入 CLI `all` 默认查询和比价；API/MCP 购买验证受阻时可走官方网页备选，实际下单前核实账号和付款条件。

运行记录和私人账号状态另存在本机，不写入公开仓库。每次购买前按 providers.md 核实联系人、协议、隐私、续费和付款来源。
