---
name: builder-narrow-wedge
description: Use when narrowing a broad market or user group into the smallest reachable wedge with high pain, high frequency, willingness to pay, and potential for a 10x experience.
---

# Builder Narrow Wedge

Goal: find the smallest audience where the product can feel essential.

Project record: update `.builder/stages/03-narrow-wedge.md`. Store segment comparison notes under `.builder/evidence/artifacts/` or `.builder/evidence/users/` when they identify specific user groups.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link that cycle in this stage file.

Early success does not come from covering more people. It comes from making a tiny group extremely satisfied.

## Wedge Criteria

Score each candidate segment on:

- Pain strength: how costly is the problem?
- Frequency: how often does it happen?
- Reachability: where can we find these people?
- Willingness to pay: who has budget or urgency?
- 10x potential: can the solution be dramatically better than the workaround?
- Founder access: can the builder talk to them repeatedly?

## Narrowing Pattern

Convert broad labels into precise situations:

- bad: "readers"
- better: "heavy ebook readers"
- best: "iPad + Apple Watch + local ebook heavy readers who hate manual page turning"

Add constraints until the segment is recruitable and testable.

## Process

1. List possible segments from interviews.
2. Remove segments with weak pain or no workaround.
3. Remove segments the builder cannot reach.
4. Compare the top 3 segments using the criteria.
5. Choose one wedge for the next test.

## Output

```markdown
Candidate wedges:
1.
2.
3.

Chosen wedge:
One-sentence user description:
Where to find them:
Top pain:
Current workaround:
Why this wedge first:
Why not the others:
```

## Gate

Pass if:

- The user group can be described in one sentence.
- The builder knows where to find them.
- The pain is strong, frequent, and behavior-backed.

Fail if:

- The answer is "everyone".
- The segment is defined by demographics but not behavior.
- The builder cannot recruit them.

If failed, return to `builder-user-interviews` and screen for stronger users.

## Project Update

Write or update:

- `Current Summary`: chosen wedge in one sentence.
- `Inputs`: candidate wedges considered.
- `Evidence`: interview/user links proving pain, frequency, reachability, and willingness to pay.
- `Decisions`: chosen wedge and rejected wedges.
- `Gate`: pass/fail and recruiting next action.
