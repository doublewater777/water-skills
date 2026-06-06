---
name: builder-scale-playbook
description: Use when turning manually validated acquisition, onboarding, support, or referral motions into repeatable systems, automation, and dashboards.
---

# Builder Scale Playbook

Goal: productize and automate only what already worked manually.

Project record: update `.builder/stages/11-scale-playbook.md`. Store process docs, templates, automation specs, and dashboards under `.builder/evidence/artifacts/`; store conversion/quality metrics under `.builder/evidence/metrics/`.

If this work creates or changes automation, process, onboarding, support, referral, or product functionality, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link the scaled motion to that cycle.

"Do things that don't scale" means learn the truth manually first, then turn the effective motion into process, product, and automation.

## What To Scale

Scale actions that have proven repeatable:

- onboarding script
- sales narrative
- content funnel
- referral mechanism
- support answer
- data import workflow
- activation checklist
- reporting dashboard

Do not scale noise, one-off heroics, or workflows that only the founder can improvise.

## Process

1. Choose one manual motion that worked.
2. Write the exact steps.
3. Identify which steps require judgment.
4. Turn repeated steps into templates, product flows, or automation.
5. Define quality checks so scale does not damage retention.
6. Track conversion from acquisition through retained use.

## Output

```markdown
Manual motion:
Evidence it works:
Repeatable steps:
Judgment-heavy steps:
Automation candidates:
Process owner:
Dashboard metrics:
Quality risks:
Next system to build:
```

## Gate

Pass if:

- A specific acquisition + onboarding flow can reproduce conversion.
- The team can explain why it works.
- Automation preserves or improves activation and retention.

Fail if:

- Reproduction rate is low.
- The process is not documented.
- Scaling increases churn or support confusion.

If failed, keep doing it manually until the pattern is clear.

## Project Update

Write or update:

- `Current Summary`: manual motion being scaled.
- `Evidence`: proof the motion works repeatedly.
- `Decisions`: what to automate, template, or productize.
- `Open Questions`: judgment-heavy steps not ready for automation.
- `Gate`: pass/fail and quality risks.
