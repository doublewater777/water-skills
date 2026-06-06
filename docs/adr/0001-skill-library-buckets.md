# 0001 - Skill Library Buckets

## Decision

Organize skills by bucket under `skills/`:

- `product`
- `risk`
- `distribution`
- `engineering`
- `productivity`
- `design`
- `misc`
- `personal`
- `in-progress`
- `deprecated`

Only promoted skills in `product`, `risk`, `distribution`, `engineering`, `productivity`, `design`, and `misc` are included in `.claude-plugin/plugin.json`.

## Why

This keeps the library installable while still allowing many personal, experimental, or deprecated skills to live in the same repository without being exposed by default.

## Consequences

Adding a promoted skill requires updating:

- the top-level `README.md`
- the bucket `README.md`
- `.claude-plugin/plugin.json`

Draft and personal skills can be added without updating the plugin manifest.
