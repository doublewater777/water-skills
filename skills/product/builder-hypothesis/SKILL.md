---
name: builder-hypothesis
description: Use when converting a raw product idea, feature list, startup concept, or vague problem statement into a falsifiable Builder Framework hypothesis.
---

# Builder Hypothesis

Goal: turn an idea into one sentence that can be proven wrong.

Project record: update `.builder/stages/01-hypothesis.md`. If `.builder/` is missing, use `builder-framework`'s `references/project-system.md` structure first. Store raw notes or source material under `.builder/evidence/artifacts/` when useful.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link that cycle in this stage file.

Do not accept feature lists, broad markets, or generic pain. Force the user to name a specific user, scenario, pain, current workaround, proposed core solution, and observable action.

## Hypothesis Template

```text
I believe [specific user] in [specific scenario] has [pain].
They currently use [alternative/workaround], but it fails because [specific failure].
If I provide [core solution], they will [observable action].
```

## Process

1. Extract the user's raw idea.
2. Identify the broad user category they are assuming.
3. Narrow it into a reachable user segment.
4. Replace opinions with behavior:
   - bad: "they want productivity"
   - good: "they spend 2 hours every Friday reconciling invoices manually"
5. Name the current workaround.
6. Define the action that would prove demand:
   - booking a call
   - leaving contact info
   - paying a deposit
   - switching from a current tool
   - using the workflow twice

## Questions To Ask

Ask only what is missing:

- Who has this pain today?
- In what exact situation does the pain appear?
- What do they do now instead?
- What does the workaround cost in time, money, status, risk, or frustration?
- What specific action would convince us they care?

## Output

```markdown
Falsifiable hypothesis:

User:
Scenario:
Pain:
Current workaround:
Why workaround is bad:
Core solution:
Proof action:

Assumptions to test:
1.
2.
3.
```

## Gate

Pass if:

- The hypothesis can be falsified.
- The user segment is specific enough to recruit.
- The proof action is observable.

Fail if:

- It says "many people", "everyone", or "users".
- It describes a solution before proving the pain.
- The proof action is only an opinion or survey answer.

If failed, rewrite the hypothesis before moving to interviews.

## Project Update

Write or update:

- `Current Summary`: final falsifiable hypothesis.
- `Inputs`: raw idea, feature list, or user-provided context.
- `Evidence`: any facts supporting the user, pain, workaround, or proof action.
- `Open Questions`: assumptions still untested.
- `Gate`: pass/fail and whether to move to `02-user-interviews`.
