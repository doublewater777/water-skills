#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

find "$root/skills" -mindepth 3 -maxdepth 3 -name SKILL.md | sort | while read -r skill_file; do
  skill_dir="$(dirname "$skill_file")"
  bucket="$(basename "$(dirname "$skill_dir")")"
  name="$(basename "$skill_dir")"
  description="$(awk '
    /^description:/ {
      sub(/^description:[[:space:]]*/, "")
      print
      exit
    }
  ' "$skill_file")"
  printf "%s/%s - %s\n" "$bucket" "$name" "$description"
done
