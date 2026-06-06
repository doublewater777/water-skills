---
name: builder-pmf-maintenance
description: Use when a product has PMF or scale and needs quarterly checks for retention decay, new competitors, changing user expectations, and positioning drift.
---

# Builder PMF Maintenance

Goal: maintain PMF after it appears. PMF is not a finish line.

Project record: update `.builder/stages/12-pmf-maintenance.md`. Store quarterly reviews under `.builder/retros/`; store retention, renewal, expansion, churn, and competitor notes under `.builder/evidence/metrics/` or `.builder/evidence/artifacts/`.

If this work creates or changes a product feature, positioning, pricing, or market response, first create or update the active `.builder/cycles/YYYY-MM-DD-feature-slug/` via `builder-feature-cycle`, then link maintenance evidence and retro notes to that cycle.

Markets, competitors, and user expectations change. A product can have strong PMF and later lose clarity.

## Quarterly PMF Review

Ask every quarter:

- Is retention declining?
- Are renewal rates stable or rising?
- Are core users changing their expectations?
- Are new competitors changing the frame?
- Is positioning still clear?
- Are new segments diluting focus?
- Are paid users expanding or shrinking usage?

## Review Inputs

Use:

- cohort retention
- renewal and expansion
- support tickets
- churn interviews
- super user interviews
- competitor changes
- pricing objections
- usage frequency shifts

## Output

```markdown
Quarter:
Core user:
Core action:
Retention trend:
Renewal trend:
Expansion trend:
Churn reasons:
New competitor pressure:
User expectation changes:
Positioning risk:
PMF verdict:
Action:
```

## Gate

Pass if:

- core retention and renewal are stable or rising
- positioning remains sharp
- super users still describe strong dependence

Fail if:

- retention starts sliding
- renewal weakens
- new segments blur the product
- competitors change expectations faster than the product responds

If failed, return to `builder-retention-signals` and `builder-super-users`.

## Project Update

Write or update:

- `Current Summary`: current PMF health.
- `Evidence`: retention, renewal, expansion, churn interviews, competitor pressure.
- `Decisions`: maintain, reposition, revisit core users, or return to retention.
- `Open Questions`: changing expectations to investigate.
- `Gate`: pass/fail and loop-back stage.
