# Builder Project System

Use this structure inside any project that is being evaluated with the Builder Framework.

Root directory:

```text
.builder/
├── project.yaml
├── README.md
├── stages/
│   ├── 01-hypothesis.md
│   ├── 02-user-interviews.md
│   ├── 03-narrow-wedge.md
│   ├── 04-fake-door.md
│   ├── 05-mvp-loop.md
│   ├── 06-manual-onboarding.md
│   ├── 07-retention-signals.md
│   ├── 08-super-users.md
│   ├── 09-business-model.md
│   ├── 10-growth-channel.md
│   ├── 11-scale-playbook.md
│   └── 12-pmf-maintenance.md
├── cycles/
│   ├── index.md
│   └── YYYY-MM-DD-feature-slug/
│       ├── goal.md
│       ├── assumptions.md
│       ├── experiments.md
│       ├── implementation.md
│       ├── results.md
│       └── retro.md
├── evidence/
│   ├── interviews/
│   ├── experiments/
│   ├── metrics/
│   ├── users/
│   └── artifacts/
├── gates/
│   └── history.md
├── decisions/
└── retros/
```

## project.yaml

Canonical project state:

```yaml
name:
idea:
current_stage: 01-hypothesis
target_wedge:
core_user:
core_pain:
core_action:
active_cycle:
latest_gate:
  stage:
  cycle:
  verdict:
  date:
  loop_back_to:
cycles:
  - id:
    feature:
    status:
    started_at:
    completed_at:
    linked_stage:
updated_at:
```

## New Feature Rule

Every new feature, meaningful product change, channel experiment, pricing change, onboarding change, or positioning iteration must create or update a feature cycle under `.builder/cycles/`.

Do not treat a feature as "just implementation" until its cycle records:

- the goal
- the assumption being tested
- the expected user behavior change
- the relevant Builder stage
- the evidence needed for Gate review
- the result and retro

If a user asks to add a feature and no cycle exists, create one before implementation planning.

Cycle id format:

```text
YYYY-MM-DD-feature-slug
```

Example:

```text
.builder/cycles/2026-06-06-watch-page-turning/
```

## Cycle Index

Maintain `.builder/cycles/index.md` as the table of contents for all feature cycles:

```markdown
# Feature Cycles

| Cycle | Feature | Status | Linked Stage | Gate | Decision | Follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-06-06-watch-page-turning | Watch page turning | active | 05-mvp-loop | unknown | testing | |
```

Update the index whenever a cycle starts, pauses, ships, fails, gets superseded, or spawns a follow-up cycle.

## Cycle Files

### goal.md

```markdown
---
cycle:
feature:
status: active | paused | shipped | failed | superseded
linked_stage:
started_at:
completed_at:
---

# Goal

## User Problem

## Target User

## Desired Behavior Change

## Success Criteria

## Non-Goals
```

### assumptions.md

```markdown
# Assumptions

## Riskiest Assumption

## Supporting Assumptions

## What Would Falsify This

## Linked Evidence
```

### experiments.md

```markdown
# Experiments

## Planned Experiments

## Measurement Plan

## Pass Threshold

## Stop / Loop-back Condition
```

### implementation.md

```markdown
# Implementation

## Scope

## Included

## Excluded

## Dependencies

## Release Notes
```

### results.md

```markdown
# Results

## Observed Behavior

## Metrics

## User Feedback

## What Changed

## Gate Evidence
```

### retro.md

```markdown
# Retro

## What We Believed

## What We Learned

## Decision

## Follow-up Cycle

## Archive / Continue / Loop Back
```

## Stage File Format

Every `.builder/stages/*.md` file should use this shape:

```markdown
---
stage:
status: not_started | active | passed | failed | revisiting
gate: unknown | pass | weak_pass | fail
updated_at:
loop_back_to:
---

# Stage Name

## Current Summary

## Related Cycles

## Inputs

## Evidence

## Decisions

## Open Questions

## Gate

Verdict:
Reason:
Next action:
Loop-back if failed:

## Change Log
```

## Evidence Files

Use stable dated filenames:

- `evidence/interviews/YYYY-MM-DD-person-or-segment.md`
- `evidence/experiments/YYYY-MM-DD-fake-door-name.md`
- `evidence/metrics/YYYY-MM-DD-retention.md`
- `evidence/users/user-name-or-id.md`
- `evidence/artifacts/` for screenshots, demos, exported data, landing-page copy, forms, or raw notes.

Each evidence file should answer:

```markdown
---
type:
date:
source:
related_stage:
related_cycle:
---

# Title

## Raw Observation

## What It Proves

## What It Does Not Prove

## Linked Decisions
```

## Gate History

Append every Gate result to `.builder/gates/history.md`:

```markdown
## YYYY-MM-DD - stage-name

Cycle:
Verdict:
Evidence:
Weakest assumption:
Decision:
Next stage:
Loop-back:
```

## Decisions

Use `decisions/YYYY-MM-DD-short-title.md` when a meaningful product, audience, pricing, channel, or positioning choice is made.

```markdown
# Decision Title

Date:
Stage:
Cycle:

## Decision

## Evidence

## Alternatives Considered

## Reversal Trigger
```

## Retros

Use `retros/YYYY-MM-DD-retro.md` or `retros/YYYY-QN.md` for project-level review cycles. Use `.builder/cycles/*/retro.md` for feature-level retros.

Track:

- what we believed
- what evidence changed
- what loop-back happened
- what we should stop doing
- what should be automated or productized

## Working Rule

When a builder skill runs inside a project directory:

1. Create `.builder/` if missing.
2. Read `project.yaml` and the relevant stage file if present.
3. If the task adds or changes a feature, create or update `.builder/cycles/YYYY-MM-DD-feature-slug/`.
4. Update the relevant stage file with current summary, related cycles, evidence, decisions, open questions, and Gate result.
5. Append the Gate result to `gates/history.md`.
6. Update `project.yaml.current_stage`, `active_cycle`, `latest_gate`, `cycles`, and `updated_at`.

If there is no project directory, provide the same structure as an artifact plan and ask where to create it only when file writes are required.
