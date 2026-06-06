---
name: builder-growth-channel
description: Use when choosing growth channels that match the product type instead of trying every channel, and when manually validating repeatable acquisition before scaling.
---

# Builder Growth Channel

Goal: choose channels that match the product and manually prove one repeatable path.

Project record: update `.builder/stages/10-growth-channel.md`. Store channel tests under `.builder/evidence/experiments/`; store acquisition and retained-user metrics under `.builder/evidence/metrics/`.

If this work creates or changes a growth motion, channel test, onboarding flow, or product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link channel evidence to that cycle.

Do not try all channels. Channel choice depends on product type, buyer, price point, and where the wedge already gathers.

## Channel Matrix

- Low-price B2C: content, SEO, short video, communities, App Store search, social sharing.
- High-price B2B: outbound, sales, industry channels, consultative selling.
- Tool SaaS: SEO, free tools, templates, PLG, integrations.
- Social/collaboration products: invites, sharing flows, network effects.
- Developer tools: GitHub, docs, demos, Hacker News, technical communities.

## Process

1. Identify product type and buyer.
2. List where the target wedge already spends attention.
3. Pick 1-2 channels to test manually.
4. Define a qualified user, not just a visitor.
5. Run a small repeatable acquisition test.
6. Compare channels by retained target users, not traffic.

## Output

```markdown
Product type:
Target wedge:
Buyer:
Likely channels:
Chosen test channel:
Manual test:
Qualified user definition:
Success threshold:
Retention check:
```

## Gate

Pass if:

- One channel repeatedly brings target users.
- Those users activate and retain.
- The channel has a plausible path to scale.

Fail if:

- All channels produce weak users.
- Channel tests measure traffic but not retained users.
- The team blames channel before checking positioning.

If failed, revisit positioning or super users.

## Project Update

Write or update:

- `Current Summary`: chosen channel and why it fits.
- `Inputs`: product type, buyer, wedge, candidate channels.
- `Evidence`: channel tests, qualified users, retention by source.
- `Decisions`: channel to scale or reject.
- `Gate`: pass/fail and whether positioning needs revision.
