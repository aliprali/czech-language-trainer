#!/usr/bin/env python3
"""Rebuild questions.csv from data/questions.js (valid JSON object)."""
import csv, json, re
from pathlib import Path

src = Path("data/questions.js")
dst = Path("questions.csv")

text = src.read_text(encoding="utf-8")
m = re.search(r"const QUESTION_BANK\s*=\s*(\{.*\});\s*$", text, re.DOTALL)
if not m:
    raise SystemExit(f"Could not parse {src}")
bank = json.loads(m.group(1))

fieldnames = [
    "id","topic","type","level","tags","prompt","hint","options","correct",
    "answer","accept","explanation_cs","explanation_en",
]

def add_markers(prompt, refs):
    for ref in refs:
        w, t, n = ref["word"], ref["table"], ref.get("note","")
        tag = f"{{{{{t}:{w}|{n}}}}}" if n else f"{{{{{t}:{w}}}}}"
        prompt = re.sub(r"(?<!\w)"+re.escape(w)+r"(?!\w)", tag, prompt, count=1)
    return prompt

rows = []
for topic, qs in bank.items():
    for q in qs:
        prompt = q["prompt"]
        if q.get("hover_refs"):
            prompt = add_markers(prompt, q["hover_refs"])
        exp = q.get("explanation", {})
        rows.append({
            "id": q["id"], "topic": topic, "type": q["type"],
            "level": q["level"], "tags": "|".join(q.get("tags", [])),
            "prompt": prompt, "hint": q.get("hint",""),
            "options": "|".join(q.get("options", [])),
            "correct": chr(65+q["correct"]) if "correct" in q else "",
            "answer": q.get("answer",""),
            "accept": "|".join(q.get("accept", [])),
            "explanation_cs": exp.get("cs",""),
            "explanation_en": exp.get("en",""),
        })

with dst.open("w", encoding="utf-8", newline="") as f:
    w = csv.DictWriter(f, fieldnames=fieldnames)
    w.writeheader()
    w.writerows(rows)

print(f"✓ Rebuilt {len(rows)} rows → {dst}")