---
name: builder-retention-signals
description: Use when evaluating retention, PMF, and evidence quality through behavior signals, business signals, and emotional signals without over-trusting surveys.
---

# Builder Retention Signals

Goal: decide whether PMF is emerging by looking at behavior first.

Project record: update `.builder/stages/07-retention-signals.md`. Store cohort cuts, retention charts, paid conversion, renewal, and referral data under `.builder/evidence/metrics/`.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link retention metrics and PMF reads to that cycle.

Priority:

`behavior signals > business signals > emotional survey signals > likes/praise`

## Signal Types

Behavior signals:

- D1/D7/D30 retention.
- Core feature reuse rate.
- Repeat workflow completion.
- Retention curve flattening.
- Users return without founder prompting.

Business signals:

- paid conversion.
- renewal.
- expansion.
- referrals.
- paid users increasing core behavior frequency.

Emotional signals:

- Sean Ellis 40% survey.
- "Very disappointed if unavailable."
- Useful as directional input, not a hard gate.
- Biased because churned users are often missing.

## Process

1. Define the core action.
2. Define the return interval that fits the use case.
3. Review retention by cohort, not just aggregate counts.
4. Separate target-wedge users from accidental users.
5. Compare retained users against churned users.
6. Identify the behavior pattern behind retention.

## Output

```markdown
Core action:
Expected use frequency:
Retention view:
D1:
D7:
D30:
Core reuse rate:
Paid/renewal signal:
Referral signal:
Survey signal:

PMF read:
Main risk:
Next experiment:
```

## Gate

Pass if:

- Retention curve trends toward stability.
- Core action repeats.
- Some users refer or pull others in.

Fail if:

- Retention keeps falling toward zero.
- Growth masks churn.
- Survey love is not matched by behavior.

If failed, iterate core value before investing in growth.

## Project Update

Write or update:

- `Current Summary`: PMF read and signal priority.
- `Inputs`: core action and expected use frequency.
- `Evidence`: D1/D7/D30, reuse, paid, renewal, referral, and survey files.
- `Decisions`: whether to iterate core value or continue.
- `Gate`: pass/fail and whether growth is allowed.
