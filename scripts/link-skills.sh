#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
target="${AGENT_SKILLS_DIR:-$HOME/.agents/skills}"

mkdir -p "$target"

python3 - "$root" "$target" <<'PY'
import json
import os
import pathlib
import shutil
import sys

root = pathlib.Path(sys.argv[1])
target = pathlib.Path(sys.argv[2])
manifest = json.loads((root / ".claude-plugin" / "plugin.json").read_text())

for rel in manifest["skills"]:
    src = root / rel
    dst = target / src.name
    if dst.exists() or dst.is_symlink():
        if dst.is_symlink() or dst.is_file():
            dst.unlink()
        else:
            shutil.rmtree(dst)
    os.symlink(src, dst)
    print(f"linked {dst} -> {src}")
PY
