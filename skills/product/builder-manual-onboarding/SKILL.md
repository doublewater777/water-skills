---
name: builder-manual-onboarding
description: Use when onboarding the first 10-100 users manually, learning from high-touch service, and preventing premature automation before the founder understands users.
---

# Builder Manual Onboarding

Goal: serve the first 10-100 users manually to buy learning, not efficiency.

Project record: update `.builder/stages/06-manual-onboarding.md`. Store each named core user under `.builder/evidence/users/user-name-or-id.md`; store onboarding scripts or import notes under `.builder/evidence/artifacts/`.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link onboarding learnings to that cycle.

The founder should know the names, contexts, and blockers of core users.

## Manual Actions

Use high-touch actions:

- DM each user.
- Schedule onboarding calls.
- Help import data.
- Watch where they get stuck.
- Ask why they returned or stopped.
- Create a small private group.
- Fix workflow issues manually before automating.

## What To Learn

For each core user, capture:

- who they are
- their exact scenario
- current workaround
- why they tried the product
- first friction point
- value moment
- reason for returning
- reason for not returning
- words they use to describe the product

## Output

```markdown
Manual onboarding plan:
User count target:
Recruiting source:
Onboarding steps:
Founder touchpoints:
Data/import help needed:
Questions during onboarding:

Core user notes:
- Name:
  Scenario:
  Blocker:
  Value moment:
  Return reason:
```

## Gate

Pass if:

- The builder can name each core user and their scenario.
- Repeated blockers and value moments are visible.
- The onboarding process reveals what should be productized later.

Fail if:

- Users are anonymous too early.
- The team only watches aggregate analytics.
- Automation hides why users succeed or fail.

If failed, re-establish direct contact before interpreting retention.

## Project Update

Write or update:

- `Current Summary`: who has been onboarded and what was learned.
- `Evidence`: named user files, blockers, value moments, return reasons.
- `Decisions`: what should stay manual and what might later be productized.
- `Open Questions`: users to follow up with.
- `Gate`: pass/fail and whether the team knows users personally.
