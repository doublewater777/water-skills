---
name: launch-distribution-kit
description: Generate a bilingual launch distribution kit for app tools and feature releases across app stores, owned channels, international communities, China platforms, developer channels, email, press kit, and social posts.
---

# Launch Distribution Kit

Use this when preparing product or feature launch messaging, especially for app tools. Generate a complete distribution pack, not just isolated copy.

Default output: Chinese + English. Default product type: app tool.

## Source of Truth

Prefer project evidence over imagination:

1. `.builder/project.yaml`
2. active `.builder/cycles/*/goal.md`, `assumptions.md`, `results.md`, and `retro.md`
3. `.builder/stages/03-narrow-wedge.md`, `05-mvp-loop.md`, `07-retention-signals.md`, and `08-super-users.md`
4. recent `name-availability-check` and `product-compliance-check` artifacts
5. app metadata, changelog, README, website copy, screenshots, or release notes

If the source material is missing, ask only for the smallest missing inputs: product name, target user, problem, feature/change, proof point, platforms, and tone.

## Required Preflight

Before writing distribution copy:

- Check whether a current `name-availability-check` result exists for the product or feature name.
- Check whether a current `product-compliance-check` result exists for the launch.
- If risk results are missing, state that messaging is draft-only until checks are done.
- Create or update a `.builder/cycles/YYYY-MM-DD-feature-slug/` cycle if the distribution is for a new feature or meaningful change.

## Platform Selection

Read `references/platform-map.md` when selecting channels.

For app tools, default recommended channels:

- App Store / Google Play metadata.
- Official website or landing page.
- Changelog and in-app announcement.
- WeChat official account.
- Toutiao / 今日头条.
- Xiaohongshu.
- Jike.
- Zhihu.
- Shaoshupai if the product fits productivity or tool audiences.
- V2EX if there is a technical or indie-builder angle.
- Product Hunt.
- X / Threads.
- Reddit or Hacker News only when the content is problem-led and non-promotional.
- Email/newsletter if an audience exists.

Do not generate every platform when it would create noise. Recommend a channel set, then generate the selected pack.

## Message Construction

Create one shared message spine:

```markdown
Core message:
Target user:
Pain:
New capability:
Proof points:
Differentiation:
CTA:
Do-not-say list:
Risk notes:
```

Then rewrite for each platform. Do not merely translate.

## Output Structure

```markdown
# Launch Distribution Kit

## Context Used

## Core Message

## Recommended Channel Mix

## Chinese Distribution Pack

### 微信公众号
### 头条号 / 今日头条
### 小红书
### 即刻
### 知乎
### 少数派
### V2EX
### 朋友圈 / 微信群
### 抖音 / Bilibili Short Script

## English Distribution Pack

### App Store / Google Play Metadata
### Product Hunt
### X / Threads
### LinkedIn
### Reddit / Hacker News
### Email / Newsletter

## Owned Channels

### Landing Page
### Changelog
### In-App Announcement
### FAQ
### Press Kit

## Do-Not-Say List

## Launch Checklist

## Open Risks
```

## Style Rules

- Match each platform's native format and tolerance for promotion.
- Avoid unsupported claims, superlatives, legal/medical/financial promises, or policy-sensitive wording.
- Make Chinese platform copy concrete, experience-led, and less slogan-heavy.
- Make English community copy problem-led, concise, and non-hype.
- Preserve facts and proof points across languages.
- Keep claims aligned with risk-check findings.

## Project Records

If `.builder/` exists, save the generated kit under `.builder/evidence/artifacts/YYYY-MM-DD-launch-distribution-kit.md`.

If an active cycle exists, link the kit from that cycle's `implementation.md`, `results.md`, or `retro.md`.
