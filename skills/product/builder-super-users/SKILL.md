---
name: builder-super-users
description: Use when identifying the product's strongest users and reverse-engineering positioning from who uses it most, tolerates bugs, returns, pays, or refers.
---

# Builder Super Users

Goal: find who cannot let go of the product and use them to sharpen positioning.

Project record: update `.builder/stages/08-super-users.md`. Store each super-user profile under `.builder/evidence/users/`; store positioning drafts under `.builder/evidence/artifacts/` or `decisions/`.

If this work creates or changes a product feature, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link super-user evidence and positioning decisions to that cycle.

Shift from "what product did we build?" to "which type of person cannot live without this, and why?"

## Super User Signals

Look for users who:

- use it the most
- return without prompting
- tolerate bugs
- ask for specific improvements
- pay or renew
- refer others
- say it directly solved their problem
- change their workflow around it

## Deep-Dive Questions

For each super user:

- Who are they?
- What exact scenario creates the pain?
- What did they replace?
- Which feature matters most?
- What would they do if the product disappeared?
- What words do they use to describe the value?
- Why do they need it more than other users?

## Output

```markdown
Super user list:
1.
2.
3.

Shared traits:
Shared scenarios:
Replaced tools/workarounds:
Most-valued capability:
Positioning sentence:
Users to deprioritize:
```

## Gate

Pass if:

- A clear core user profile exists.
- The same scenario appears repeatedly.
- The positioning can be stated from the user's perspective.

Fail if:

- Users are scattered with no pattern.
- The team is averaging all users together.
- The product is optimized for weak users instead of strong users.

If failed, pause expansion and keep focusing on retained users.

## Project Update

Write or update:

- `Current Summary`: super-user pattern and positioning sentence.
- `Evidence`: user profiles, usage, payments, referrals, bug tolerance.
- `Decisions`: core user to optimize for and users to deprioritize.
- `Open Questions`: missing deep dives.
- `Gate`: pass/fail and whether positioning is sharp enough.
