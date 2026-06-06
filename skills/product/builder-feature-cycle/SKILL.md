---
name: builder-feature-cycle
description: Use whenever adding, changing, testing, or shipping a feature in a Builder Framework project so the work is captured as a durable cycle with goal, assumptions, experiments, implementation, results, and retro.
---

# Builder Feature Cycle

Goal: every feature increment becomes a learning cycle, not just implementation work.

Use this before planning or building a new feature, changing an existing feature, altering onboarding, changing pricing, testing a growth channel, or revising positioning.

Project record: create or update `.builder/cycles/YYYY-MM-DD-feature-slug/`. Also link the cycle from `.builder/project.yaml`, the relevant `.builder/stages/*.md`, and `.builder/gates/history.md`.

## Cycle Folder

Create:

```text
.builder/cycles/YYYY-MM-DD-feature-slug/
├── goal.md
├── assumptions.md
├── experiments.md
├── implementation.md
├── results.md
└── retro.md
```

## Process

1. Name the feature or product change.
2. Link it to the relevant Builder stage.
3. Write the user problem and target user.
4. State the desired behavior change.
5. Identify the riskiest assumption.
6. Define the experiment or measurement plan.
7. Define implementation scope and non-goals.
8. After release or test, record observed behavior and metrics.
9. Close with a retro: continue, archive, loop back, or start a follow-up cycle.

## Cycle Content

`goal.md` should answer:

- What user problem is this feature meant to address?
- Which target user or wedge is it for?
- What behavior should change?
- What counts as success?
- What is explicitly out of scope?

`assumptions.md` should answer:

- What must be true for this feature to matter?
- What would falsify the idea?
- Which existing evidence supports it?

`experiments.md` should answer:

- How will the feature be tested?
- What will be measured?
- What is the pass threshold?
- What triggers a loop-back?

`implementation.md` should answer:

- What will be built?
- What will not be built?
- What dependencies exist?
- What release notes or handoff details matter?

`results.md` should answer:

- What happened after users saw or used it?
- What behavior changed?
- What metrics moved?
- What evidence is strong, weak, or missing?

`retro.md` should answer:

- What did we believe?
- What did we learn?
- What decision follows?
- Should this cycle continue, close, or spawn another cycle?

## Output

```markdown
Cycle:
Feature:
Linked stage:
Target user:
User problem:
Desired behavior change:
Riskiest assumption:
Experiment / measurement:
Implementation scope:
Success criteria:
Loop-back trigger:
Next action:
```

## Gate

Pass if:

- The feature has a clear target user and behavior-change goal.
- The riskiest assumption is explicit.
- Success and loop-back criteria are measurable.
- The cycle is linked to a Builder stage and project evidence.

Fail if:

- The feature is only justified by "seems useful."
- No target user or behavior change is named.
- There is no plan to measure whether it mattered.

If failed, return to the relevant Builder stage before implementation.
