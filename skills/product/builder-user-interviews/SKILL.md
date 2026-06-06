---
name: builder-user-interviews
description: Use when planning, running, or analyzing Builder Framework user interviews that validate past behavior instead of future intent.
---

# Builder User Interviews

Goal: interview 10-20 people and classify them by evidence of real pain.

Project record: update `.builder/stages/02-user-interviews.md`. Store each interview under `.builder/evidence/interviews/YYYY-MM-DD-person-or-segment.md`. Append the Gate result to `.builder/gates/history.md`.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link that cycle in this stage file and any interview evidence it depends on.

Only ask about past behavior. Do not ask whether the idea is good, whether they would use it, or whether they would pay.

## Interview Script

Core questions:

- When was the last time this problem happened?
- What triggered it?
- What did you do to solve it?
- What tools, hacks, people, or spreadsheets did you use?
- How much time or money did it cost?
- What happened because the problem was not solved well?
- Why did you stop using other solutions?
- Have you tried to solve this more than once?

Follow-up prompts:

- Show me the actual workflow.
- What did you do immediately before and after?
- Who else was involved?
- What would have happened if you ignored it?

## Forbidden Questions

- Do you like this idea?
- Would you use this if I built it?
- Would you pay for it?
- Would you recommend it?
- Is this feature important?

If the user asks a forbidden question, translate it into a past-behavior question.

## User Classification

Classify each interviewee:

- `A - strong pain`: recently had the problem, spent real time or money, used a workaround, and is willing to continue the conversation.
- `B - weak pain`: recognizes the annoyance but has not actively tried to solve it.
- `C - fake demand`: likes the idea but has no concrete recent scenario.

Only A users should drive the next stage.

## Analysis Output

```markdown
Interview count:
A users:
B users:
C users:

Repeated pain patterns:
Current workarounds:
Costs observed:
Quotes from past behavior:
Recruiting sources that worked:

Recommendation:
```

## Gate

Pass if:

- At least 5 A users exist.
- Their pain is recent and behavior-backed.
- Their workarounds reveal a repeated pattern.

Fail if:

- Most people are C users.
- Users only praise the idea.
- No one has tried to solve the pain before.

If failed, return to `builder-hypothesis` and redefine the user or problem.

## Project Update

Write or update:

- `Current Summary`: interview count and A/B/C distribution.
- `Evidence`: links to interview files and repeated behavior patterns.
- `Decisions`: whether only A users continue.
- `Open Questions`: missing segments or unclear behavior.
- `Gate`: pass/fail and loop-back target.
