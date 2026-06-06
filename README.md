# Water Skills

Personal agent skills I use and develop.

This repo follows the small, composable skill-library shape used by
[`mattpocock/skills`](https://github.com/mattpocock/skills): skills live under
bucket folders in `skills/`, promoted skills are listed in the top-level
README and `.claude-plugin/plugin.json`, while personal drafts and deprecated
skills stay out of the plugin manifest.

## Install Locally

Link promoted skills into the local agent skills directory:

```bash
./scripts/link-skills.sh
```

List skills in the library:

```bash
./scripts/list-skills.sh
```

## Buckets

- [Product](./skills/product/README.md): product discovery, validation, PMF, growth, and builder workflows.
- [Risk](./skills/risk/README.md): name availability, platform policy, compliance, and launch-risk checks.
- [Distribution](./skills/distribution/README.md): launch messaging and platform-native distribution kits.
- [Engineering](./skills/engineering/README.md): daily code work.
- [Productivity](./skills/productivity/README.md): non-code workflow tools.
- [Design](./skills/design/README.md): UI, visual, brand, and product design workflows.
- [Misc](./skills/misc/README.md): useful but rarely used.
- [Personal](./skills/personal/README.md): tied to my own setup; not included in plugin manifest.
- [In Progress](./skills/in-progress/README.md): drafts; not included in plugin manifest.
- [Deprecated](./skills/deprecated/README.md): no longer used; not included in plugin manifest.

## Product

- [builder-business-model](./skills/product/builder-business-model/SKILL.md) - Validate who pays, why they pay now, and whether payment strengthens retention.
- [builder-fake-door](./skills/product/builder-fake-door/SKILL.md) - Validate demand before building through waitlists, demos, manual service offers, and preorder tests.
- [builder-feature-cycle](./skills/product/builder-feature-cycle/SKILL.md) - Record every feature increment as a learning cycle with goal, assumptions, experiments, implementation, results, and retro.
- [builder-framework](./skills/product/builder-framework/SKILL.md) - Orchestrate the Builder Framework stages, Gate checks, loop-backs, and project records.
- [builder-growth-channel](./skills/product/builder-growth-channel/SKILL.md) - Choose product-matched growth channels and validate repeatable acquisition before scaling.
- [builder-hypothesis](./skills/product/builder-hypothesis/SKILL.md) - Convert a raw idea or feature list into a falsifiable product hypothesis.
- [builder-manual-onboarding](./skills/product/builder-manual-onboarding/SKILL.md) - Manually onboard the first 10-100 users to learn from direct user contact.
- [builder-mvp-loop](./skills/product/builder-mvp-loop/SKILL.md) - Design a single closed-loop MVP that proves one core value chain.
- [builder-narrow-wedge](./skills/product/builder-narrow-wedge/SKILL.md) - Find the smallest reachable user wedge with strong, frequent pain.
- [builder-pmf-maintenance](./skills/product/builder-pmf-maintenance/SKILL.md) - Run recurring PMF health checks for retention decay, competitors, and positioning drift.
- [builder-retention-signals](./skills/product/builder-retention-signals/SKILL.md) - Evaluate PMF through behavior, business, and emotional signals.
- [builder-scale-playbook](./skills/product/builder-scale-playbook/SKILL.md) - Turn manually validated actions into repeatable systems and automation.
- [builder-super-users](./skills/product/builder-super-users/SKILL.md) - Identify strongest users and reverse-engineer positioning from them.
- [builder-user-interviews](./skills/product/builder-user-interviews/SKILL.md) - Run and analyze past-behavior user interviews.

## Risk

- [name-availability-check](./skills/risk/name-availability-check/SKILL.md) - Check product, app, feature, domain, package, repository, and handle names for collision and preliminary trademark risk.
- [product-compliance-check](./skills/risk/product-compliance-check/SKILL.md) - Check product or feature launch risks across platform policy, privacy, payments, AI, UGC, sensitive domains, and target markets.

## Distribution

- [launch-distribution-kit](./skills/distribution/launch-distribution-kit/SKILL.md) - Generate a bilingual launch distribution kit for app tools and feature releases across app stores, owned channels, international communities, China platforms, developer channels, email, press kit, and social posts.

## Maintenance Rules

- Every skill folder must contain `SKILL.md`.
- Every promoted skill in `product`, `risk`, `distribution`, `engineering`, `productivity`, `design`, or `misc` must appear in both this README and `.claude-plugin/plugin.json`.
- Every bucket README must list the skills in that bucket.
- Skills in `personal`, `in-progress`, and `deprecated` must not appear in `.claude-plugin/plugin.json`.
- Keep `SKILL.md` concise; move long templates, examples, or systems into `references/`.
