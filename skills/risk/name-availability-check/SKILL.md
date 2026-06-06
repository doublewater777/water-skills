---
name: name-availability-check
description: Check product, app, feature, domain, package, repository, and social handle names for collision, squatting, confusing similarity, and preliminary trademark risk before launch or feature work.
---

# Name Availability Check

Use this before naming a product, app, feature, module, package, repository, domain, or public handle.

Default scope: global internet product, with United States and China prioritized. This is a practical risk screen, not legal advice or a trademark clearance opinion.

## Source Rule

This skill depends on current external state. Always browse or query current sources. Prefer official registries and platform pages. Read `references/source-map.md` for source targets when needed.

If live lookup is unavailable, say the check is incomplete and list the sources that still need manual verification.

## Inputs

Collect only what is missing:

- Candidate name and variants.
- Product or feature description.
- Target markets, defaulting to US and China.
- Platforms: web, iOS, Android, GitHub, package registry, social, or other.
- Technical stack if package names matter.
- Desired domains or TLDs.

## Checks

Run the relevant checks:

1. Exact web search for the candidate name.
2. Similarity search for spelling variants, spacing, pluralization, abbreviations, and phonetic lookalikes.
3. Domain availability and existing domain usage.
4. App Store and Google Play app-name collision or confusing similarity.
5. GitHub repository or organization name collision.
6. Package registry checks based on stack: npm, PyPI, crates.io, RubyGems, Packagist, Go packages, Maven, or others.
7. Social handle checks for major launch channels.
8. Preliminary trademark search:
   - USPTO for US.
   - CNIPA for China when accessible.
   - WIPO Global Brand Database for international signal.
   - EUIPO if Europe is relevant.

## Risk Heuristics

Mark `High` when:

- An identical name exists in the same product category.
- A similar trademark exists in the same or adjacent class.
- A major competitor uses a confusingly similar name.
- The name is already used by a package, app, or domain central to the launch.

Mark `Medium` when:

- The collision is in a different category but still visible.
- The name is available in some channels but blocked in important ones.
- Similar marks exist but class/category overlap is unclear.

Mark `Low` when:

- No meaningful collision appears in priority markets and channels.
- Similar uses are unrelated and unlikely to confuse users.

## Output

```markdown
Name:
Variants checked:
Product / feature:
Target markets:
Platforms checked:

Collision risk:
Trademark risk:
Platform/package risk:
Confusing similarity:

Evidence:
- Source:
  Finding:
  Link:

Recommended action:
Reservation checklist:
Legal review needed:
Incomplete checks:
```

Recommended actions:

- `Greenlight for working name`
- `Reserve quickly`
- `Use with caution`
- `Rename recommended`
- `Legal review before launch`

## Project Records

If the project has `.builder/`, save the result under `.builder/evidence/artifacts/YYYY-MM-DD-name-availability-check.md`.

If an active feature cycle exists, link the result in that cycle's `assumptions.md`, `implementation.md`, or `results.md` depending on timing.

## Boundaries

Do not claim a name is legally safe. Say "no obvious conflicts found in checked sources" instead.

Do not use non-official trademark summaries as final evidence when official registries are available.
