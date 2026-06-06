---
name: builder-framework
description: Use when helping turn an idea into a product through the Builder Framework: diagnose the current stage, route to the right builder-* skill, enforce Gate checks, and loop backward when evidence is weak.
---

# Builder Framework

Use this as the orchestrator for the Builder Framework: 12 stages, 4 loops, and one rule: do not build from an idea; build from the strongest pain of the narrowest reachable user group.

When working inside a project, maintain a `.builder/` project system so every stage and every feature cycle has a durable place for evidence, Gate decisions, loop-backs, and retros. Read `references/project-system.md` before creating or updating project records.

Core formula:

`narrow user's strong pain x frequent simple solution x retention + payment + referral evidence = worth scaling`

## Operating Principles

- Treat this as a loop, not a linear checklist.
- Prefer evidence from past behavior over opinions about future intent.
- Do not move to MVP until demand is proven by real action.
- Do not move to growth until retention has stabilized.
- If a Gate fails, name the failed assumption and route backward.
- Every new feature or meaningful iteration must create or update a `.builder/cycles/YYYY-MM-DD-feature-slug/` cycle before implementation planning.

## Stage Router

When the user brings an idea or product, first classify the current stage:

1. Raw idea or feature list: use `builder-hypothesis`.
2. Hypothesis exists but user evidence is thin: use `builder-user-interviews`.
3. Interviews exist but audience is broad: use `builder-narrow-wedge`.
4. Narrow audience exists but no real demand action: use `builder-fake-door`.
5. Demand signal exists but product loop is unclear: use `builder-mvp-loop`.
6. MVP exists but founder is detached from users: use `builder-manual-onboarding`.
7. Users exist but PMF is unclear: use `builder-retention-signals`.
8. Retention pockets exist but positioning is fuzzy: use `builder-super-users`.
9. Users love it but payment model is unproven: use `builder-business-model`.
10. Business model works but growth channels are random: use `builder-growth-channel`.
11. One channel or workflow works manually: use `builder-scale-playbook`.
12. Product has PMF and scale: use `builder-pmf-maintenance`.

If the user asks to add a new feature, improve an existing feature, change onboarding, change pricing, test a channel, or adjust positioning, first use `builder-feature-cycle` to create or update the cycle.

## Conversation Flow

1. Ask for the smallest missing input needed to classify the stage.
2. State the current stage and why.
3. Run the matching skill.
4. End with a Gate verdict:
   - `Pass`: evidence is strong enough to move forward.
   - `Weak Pass`: move forward only with an explicit risk.
   - `Fail`: loop backward and name the stage to revisit.

## Project Records

If the current working directory is a product/project repo, ensure `.builder/` exists using `references/project-system.md`.

Always update:

- `.builder/project.yaml`
- the relevant `.builder/stages/*.md`
- the active `.builder/cycles/YYYY-MM-DD-feature-slug/` when the task changes the product
- `.builder/gates/history.md`

Use evidence files under `.builder/evidence/` for interviews, experiments, metrics, user notes, and artifacts.

## Gate Report Format

```markdown
Current stage:
Evidence:
Weakest assumption:
Gate verdict:
Next action:
Loop-back if failed:
```

## Red Flags

- "Everyone needs this."
- "People said they would use it."
- "We should build MVP first and see."
- "Let's try all channels."
- "Retention is bad, so we need more growth."
- "Users are anonymous; we only look at aggregate metrics."

When red flags appear, slow down and route backward.
