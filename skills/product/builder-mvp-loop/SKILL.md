---
name: builder-mvp-loop
description: Use when designing a single closed-loop MVP that validates one core value chain, avoids product bloat, and checks whether users return after receiving value.
---

# Builder MVP Loop

Goal: build one closed loop that proves the solution, not a full product.

Project record: update `.builder/stages/05-mvp-loop.md`. Store product sketches, prototypes, scope cuts, and test artifacts under `.builder/evidence/artifacts/`; store loop-completion results under `.builder/evidence/metrics/`.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link MVP scope, implementation, and results to that cycle.

Closed loop:

`user enters -> pain is triggered -> core capability is used -> user gets value -> user wants to return`

## MVP Scope

Include only what is needed for the core value chain.

Usually exclude:

- full account systems
- multi-platform sync
- polished settings
- complex AI agents
- points systems
- social systems
- dashboards not needed for the loop

Ugly is acceptable. Weak core value is not.

## Process

1. Name the single job the MVP must do.
2. Map the closed loop in 5 steps.
3. Identify the smallest version of each step.
4. Remove every feature not required for the loop.
5. Define the second-use trigger.
6. Instrument enough to know whether the loop was completed.

## Output

```markdown
Core value:
Target user:

Closed loop:
1. Entry:
2. Pain trigger:
3. Core action:
4. Value delivered:
5. Return trigger:

Included:
Excluded:
Success metric:
Second-use signal:
```

## Gate

Pass if:

- A real user completes the full loop.
- At least some users return for a second use.
- The core action maps directly to the validated pain.

Fail if:

- Users complete once and disappear.
- The MVP tests too many features at once.
- The builder cannot say what "returning" means.

If failed, strengthen the core value or revisit the wedge.

## Project Update

Write or update:

- `Current Summary`: the single closed loop.
- `Inputs`: core value, target user, included/excluded scope.
- `Evidence`: users who completed the loop and returned.
- `Decisions`: scope cuts and second-use definition.
- `Gate`: pass/fail and loop-back if users do not return.
