#!/usr/bin/env python3
"""Usage: python3 tools/import-csv.py questions.csv [output.js]"""
import csv
import json
import re
import sys
from pathlib import Path

if len(sys.argv) < 2:
    print("Usage: python3 tools/import-csv.py <input.csv> [output.js]", file=sys.stderr)
    sys.exit(1)

csv_path = Path(sys.argv[1])
out_path = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(__file__).resolve().parent.parent / "data" / "questions.js"
tables_path = out_path.parent / "tables.js"

# Extract known vzor IDs from data/tables.js — single source of truth.
known_vzory = set()
if tables_path.exists():
    text = tables_path.read_text(encoding="utf-8")
    known_vzory = set(re.findall(r'^\s*"([^"]+)":\s*\{', text, re.MULTILINE))
    if not known_vzory:
        print(f"WARN: could not extract vzory from {tables_path}", file=sys.stderr)

MARKER_RE = re.compile(r"\{\{([^:}|]+):([^}|]+)(?:\|([^}]+))?\}\}")

def parse_markers(prompt):
    refs = []
    errors = []

    def repl(m):
        tbl = m.group(1).strip()
        word = m.group(2).strip()
        note = (m.group(3) or "").strip()
        if not tbl or not word:
            errors.append(f"empty marker {m.group(0)!r}")
            return m.group(0)
        ref = {"word": word, "table": tbl}
        if note:
            ref["note"] = note
        refs.append(ref)
        return word

    clean = MARKER_RE.sub(repl, prompt)

    for ref in refs:
        pattern = r"(?<!\w)" + re.escape(ref["word"]) + r"(?!\w)"
        if not re.search(pattern, clean, re.UNICODE):
            errors.append(f"marker word {ref['word']!r} not found in prompt")
        if known_vzory and ref["table"] not in known_vzory:
            errors.append(f"unknown vzor {ref['table']!r}")

    return clean, refs, errors


with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
    reader = csv.DictReader(f)
    raw_rows = list(reader)
    header = [(h or "").strip().lower() for h in (reader.fieldnames or [])]

if not raw_rows:
    print("No data rows.", file=sys.stderr)
    sys.exit(1)

rows = []
for r in raw_rows:
    clean = {}
    for k, v in r.items():
        if k is None:
            continue
        clean[k.strip().lower()] = (v or "").strip()
    rows.append(clean)

expl_cols = [h for h in header if h.startswith("explanation_")]

bank = {}
errors = []
seen_ids = set()

for lineno, row in enumerate(rows, start=2):
    rid = row.get("id", "")
    tag = f"Row {lineno} ({rid or '?'})"

    if not rid:
        errors.append(f"{tag}: missing id")
        continue
    if rid in seen_ids:
        errors.append(f"{tag}: duplicate id")
        continue
    seen_ids.add(rid)

    if None in row:
        errors.append(
            f"{tag}: extra field(s) — likely an unquoted comma. "
            f"Wrap any field containing a comma in double quotes. "
            f"Extras: {row[None]!r}"
        )
        continue

    topic = row.get("topic", "")
    if not topic:
        errors.append(f"{tag}: missing topic")
        continue

    prompt_raw = row.get("prompt", "")
    if not prompt_raw:
        errors.append(f"{tag}: missing prompt")
        continue

    prompt, refs, marker_errors = parse_markers(prompt_raw)
    if marker_errors:
        errors.extend([f"{tag}: {e}" for e in marker_errors])
        continue

    q = {
        "id": rid,
        "type": row.get("type") or "multiple_choice",
        "level": row.get("level") or "A2",
        "tags": [t.strip() for t in row.get("tags", "").split("|") if t.strip()],
        "prompt": prompt,
    }
    if refs:
        q["hover_refs"] = refs
    if row.get("hint"):
        q["hint"] = row["hint"]

    qtype = q["type"]

    if qtype == "multiple_choice":
        options = [o.strip() for o in row.get("options", "").split("|") if o.strip()]
        if len(options) < 2:
            errors.append(f"{tag}: needs at least 2 options")
            continue
        q["options"] = options

        correct_raw = row.get("correct", "").strip()
        idx = -1
        if len(correct_raw) == 1 and correct_raw.isalpha():
            idx = ord(correct_raw.upper()) - ord("A")
        elif correct_raw.isdigit():
            idx = int(correct_raw)
        if idx < 0 or idx >= len(options):
            errors.append(f"{tag}: bad correct value {correct_raw!r}")
            continue
        q["correct"] = idx

    elif qtype == "type_in":
        answer = row.get("answer", "")
        if not answer:
            errors.append(f"{tag}: type_in needs answer")
            continue
        q["answer"] = answer
        accept = row.get("accept", "")
        if accept:
            q["accept"] = [a.strip() for a in accept.split("|") if a.strip()]

    else:
        errors.append(f"{tag}: unknown type {qtype!r}")
        continue

    expl = {}
    for col in expl_cols:
        val = row.get(col, "")
        if val:
            expl[col.replace("explanation_", "")] = val
    if expl:
        q["explanation"] = expl

    bank.setdefault(topic, []).append(q)

if errors:
    print("✗ Errors:", file=sys.stderr)
    for e in errors:
        print("  " + e, file=sys.stderr)
    sys.exit(1)

out_path.parent.mkdir(parents=True, exist_ok=True)
js = "// AUTO-GENERATED from CSV. Edit the CSV, not this file.\n"
js += "const QUESTION_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n"
out_path.write_text(js, encoding="utf-8")

total = sum(len(qs) for qs in bank.values())
print(f"✓ {total} questions → {out_path}")
for t, qs in bank.items():
    print(f"   {t}: {len(qs)}")

hover_count = sum(1 for qs in bank.values() for q in qs if "hover_refs" in q)
if known_vzory:
    print(f"   ({hover_count} questions with hover tables, {len(known_vzory)} vzory available)")