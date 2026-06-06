---
name: product-compliance-check
description: Check product or feature launch compliance risks for platform policy, privacy, payments, subscriptions, AI, UGC, sensitive domains, and target-market regulation before shipping.
---

# Product Compliance Check

Use this before launching a product, adding a feature, changing onboarding, changing payments, adding AI, collecting new data, adding UGC, or entering a sensitive market.

This is a practical launch risk screen, not legal advice. For high-risk areas, recommend qualified legal or compliance review.

## Source Rule

Compliance and platform policies change. Always browse current official sources. Prefer Apple, Google, regulator, and first-party policy pages. Read `references/source-map.md` for source targets when needed.

If live lookup is unavailable, say the check is incomplete and list the unresolved sources.

## Inputs

Collect only what is missing:

- Product or feature description.
- Target platforms: iOS, Android, web, browser extension, API, desktop, or other.
- Target markets, defaulting to US, China, and EU.
- User data collected, stored, shared, or exported.
- Permissions requested.
- Payments, subscriptions, IAP, external payment links, refunds, or trials.
- AI features, model outputs, user inputs, and training/data retention behavior.
- UGC, social, messaging, content moderation, reporting, or copyright exposure.
- Sensitive domains: finance, medical, legal, education, children, mental health, biometrics, location, employment, housing, credit, or politics.

## Risk Areas

Check applicable areas:

1. Platform policy:
   - Apple App Review Guidelines.
   - Google Play Developer Policy.
   - Browser extension or marketplace policy if relevant.
2. Privacy and data:
   - privacy policy coverage.
   - data minimization.
   - tracking and consent.
   - account deletion.
   - data export/deletion requests.
   - privacy labels or data safety forms.
3. Payments and subscriptions:
   - IAP requirements.
   - external payment restrictions.
   - subscription disclosures.
   - trials, renewal, cancellation, refunds.
4. AI:
   - generated content disclosure.
   - user input handling.
   - training and retention claims.
   - sensitive advice and hallucination risk.
   - safety fallback and human review.
5. UGC and content:
   - moderation.
   - reporting.
   - blocking.
   - copyright.
   - illegal, adult, violent, hateful, or abusive content.
6. Sensitive industries:
   - finance, medical, legal, children, education, mental health, biometrics, precise location, regulated advice.
7. Market-specific concerns:
   - US, China, EU by default.
   - Add local sources when the user names another target market.
8. Release assets:
   - store copy.
   - screenshots.
   - permissions wording.
   - claims in marketing pages.
   - privacy labels and data safety declarations.

## Risk Levels

- `Blocker`: likely rejection, takedown, legal exposure, or user-harm risk before launch.
- `High Risk`: should be changed or reviewed before launch.
- `Watch`: acceptable to launch if documented and monitored.
- `Clear in checked scope`: no obvious issue found in checked sources.

## Output

```markdown
Product / feature:
Target markets:
Platforms:
Data collected:
Payments:
AI / UGC / sensitive domains:

Overall risk:
Blocking risks:
High risks:
Watch items:

Policy evidence:
- Source:
  Requirement:
  Link:
  Impact:

Required changes:
Recommended safeguards:
Recommended review owner:
Incomplete checks:
Not legal advice:
```

## Project Records

If the project has `.builder/`, save the result under `.builder/evidence/artifacts/YYYY-MM-DD-product-compliance-check.md`.

If an active feature cycle exists, link the result in that cycle's `assumptions.md`, `implementation.md`, or `results.md` depending on timing.

## Boundaries

Do not guarantee compliance. Say "no obvious issue found in checked sources" when appropriate.

Do not rely on stale model memory for platform rules. Browse official sources and cite links.

Do not let a feature proceed when a `Blocker` is found unless the user explicitly accepts the risk and the risk is documented.
