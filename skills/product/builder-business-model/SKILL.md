---
name: builder-business-model
description: Use when validating who pays, why they pay now, which pricing model fits naturally, and whether payment strengthens or weakens the product's retention loop.
---

# Builder Business Model

Goal: validate payment as part of PMF, not as a late spreadsheet exercise.

Project record: update `.builder/stages/09-business-model.md`. Store pricing tests, paid pilots, invoices, renewal notes, and CAC/LTV assumptions under `.builder/evidence/metrics/` or `.builder/evidence/experiments/`.

If this work creates or changes pricing, packaging, monetization, or a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link payment evidence to that cycle.

Core questions:

- Who pays?
- Why now?
- What value do they believe they are buying?
- Does payment increase or reduce core usage?
- Can LTV eventually exceed CAC?

## Model Options

Consider the natural unit of value:

- per use: value is episodic or transactional
- subscription: value recurs on a predictable rhythm
- take rate: value is tied to money flow or marketplace activity
- enterprise contract: value is organizational, high-stakes, or compliance-heavy
- paid pilot: value needs onboarding, trust, or integration

## Validation Signals

Strong signals:

- users renew
- paid users use the core behavior more
- users ask for invoices or team access
- users compare price to current workaround cost
- users expand usage after paying

Weak signals:

- one-time payment followed by disappearance
- discounts required to create interest
- payment from non-core users
- pricing feedback from people who never had the pain

## Output

```markdown
Buyer:
User:
Payment trigger:
Current workaround cost:
Pricing model:
Why this model fits:
Renewal/expansion signal:
CAC/LTV assumptions:
Risks:
```

## Gate

Pass if:

- Someone renews or pays and increases core behavior.
- The buyer and user are clear.
- Price maps to a real current cost or urgency.

Fail if:

- Users pay once and vanish.
- Payment is disconnected from retention.
- Buyer and user incentives conflict.

If failed, return to retention and core value before scaling sales.

## Project Update

Write or update:

- `Current Summary`: buyer, user, payment trigger, and model.
- `Evidence`: payment, renewal, expansion, and usage-after-payment.
- `Decisions`: selected pricing model and rejected alternatives.
- `Open Questions`: CAC/LTV assumptions still unproven.
- `Gate`: pass/fail and loop-back target.
