Skills are organized into bucket folders under `skills/`:

- `product/` - product discovery, validation, PMF, growth, and builder workflows
- `risk/` - name availability, platform policy, compliance, and launch-risk checks
- `distribution/` - launch messaging and platform-native distribution kits
- `engineering/` - daily code work
- `productivity/` - daily non-code workflow tools
- `design/` - UI, visual, brand, and product design workflows
- `misc/` - useful but rarely used
- `personal/` - tied to my own setup, not promoted
- `in-progress/` - drafts not ready to ship
- `deprecated/` - no longer used

Every skill in `product/`, `risk/`, `distribution/`, `engineering/`, `productivity/`, `design/`, or `misc/` must have:

- a `SKILL.md`
- a reference in the top-level `README.md`
- an entry in the matching bucket `README.md`
- an entry in `.claude-plugin/plugin.json`

Skills in `personal/`, `in-progress/`, and `deprecated/` must not appear in `.claude-plugin/plugin.json`.

Use short, composable skills. Put long examples, templates, project systems, or reference material in `references/` inside the skill folder.
