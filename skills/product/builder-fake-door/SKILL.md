---
name: builder-fake-door
description: Use when validating demand before building code through landing pages, waitlists, demo screenshots, manual service offers, preorder buttons, or other real-action tests.
---

# Builder Fake Door

Goal: validate demand with real action before building the product.

Project record: update `.builder/stages/04-fake-door.md`. Store each test under `.builder/evidence/experiments/YYYY-MM-DD-fake-door-name.md`; store landing copy, screenshots, forms, and demo artifacts under `.builder/evidence/artifacts/`.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link the fake-door experiment to that cycle.

A fake door is not a trick. It is a low-cost test that shows whether the target user will move toward the solution.

## Valid Fake Door Types

- Landing page with waitlist.
- Screenshot or video demo with contact form.
- Manual concierge service offer.
- Preorder, deposit, or paid pilot button.
- Calendar booking for onboarding.
- Private beta application.

Choose the smallest test that measures the riskiest assumption.

## Test Design

Define before launching:

- Target wedge.
- Promise being tested.
- User action that counts.
- Traffic source.
- Minimum sample size or time window.
- Pass threshold.
- What happens after users convert.

Avoid vanity signals:

- likes
- vague praise
- impressions
- "interesting"
- shares without signups

## Output

```markdown
Fake Door Test:
Target user:
Promise:
Surface:
Traffic source:
Conversion action:
Pass threshold:
Time window:
Follow-up plan for converters:
```

## Gate

Pass if:

- Users voluntarily leave contact info, book a call, join a waitlist, or pay.
- The conversion comes from the target wedge.
- Some users ask when they can use it.

Fail if:

- Only likes or polite praise appear.
- Converters are outside the wedge.
- The copy is too vague to test the specific pain.

If failed, revisit `builder-narrow-wedge` or `builder-hypothesis`.

## Project Update

Write or update:

- `Current Summary`: test design and current result.
- `Inputs`: target wedge, promise, traffic source, pass threshold.
- `Evidence`: conversion data and raw artifacts.
- `Decisions`: whether the demand signal is strong enough for MVP.
- `Gate`: pass/fail and next stage or loop-back.
