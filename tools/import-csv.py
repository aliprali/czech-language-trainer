#!/usr/bin/env python3
"""Usage: python3 tools/import-csv.py"""
import csv
import json
import sys
import hashlib
import re
from pathlib import Path

# Nastavení cest
ROOT_DIR = Path(__file__).resolve().parent.parent
QUESTIONS_DIR = ROOT_DIR / "data" / "questions"
OUT_FILE = ROOT_DIR / "data" / "questions.js"

if not QUESTIONS_DIR.exists():
    print(f"✗ Složka {QUESTIONS_DIR} neexistuje.")
    sys.exit(1)

# Najdeme VŠECHNY csv soubory ve složce data/questions a jejích podsložkách
csv_files = list(QUESTIONS_DIR.rglob("*.csv"))
if not csv_files:
    print(f"✗ Ve složce {QUESTIONS_DIR} nejsou žádné .csv soubory.")
    sys.exit(1)

# Regex pro zpracování hover tagů (např. {{žena:dívka}})
MARKER_RE = re.compile(r"\{\{([^:}|]+):([^}|]+)(?:\|([^}]+))?\}\}")

def parse_markers(prompt):
    refs = []
    errors = []
    
    def repl(m):
        tbl = m.group(1).strip()
        word = m.group(2).strip()
        note = (m.group(3) or "").strip()
        
        if not tbl or not word:
            errors.append(f"prázdný marker {m.group(0)!r}")
            return m.group(0)
            
        ref = {"word": word, "table": tbl}
        if note:
            ref["note"] = note
        refs.append(ref)
        return word
        
    clean_prompt = MARKER_RE.sub(repl, prompt)
    
    # Ověříme, že slovo z markeru v čistém textu skutečně existuje
    for ref in refs:
        pattern = r"(?<!\w)" + re.escape(ref["word"]) + r"(?!\w)"
        if not re.search(pattern, clean_prompt, re.UNICODE):
            errors.append(f"slovo z markeru {ref['word']!r} nebylo nalezeno v textu")
            
    return clean_prompt, refs, errors

bank = {}
errors = []
seen_ids = set()
total_questions = 0

print(f"Načítám {len(csv_files)} CSV souborů...")

for csv_path in csv_files:
    if csv_path.name.startswith("~"): 
        continue
    
    print(f"  → {csv_path.relative_to(QUESTIONS_DIR)}")
    
    with csv_path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        
        if not reader.fieldnames or "prompt" not in reader.fieldnames:
            continue

        for lineno, row in enumerate(reader, start=2):
            topic = (row.get("topic") or "").strip()
            prompt_raw = (row.get("prompt") or "").strip()
            
            if not topic or not prompt_raw:
                continue

            # AUTOMATICKÉ GENEROVÁNÍ ID
            hash_str = f"{topic}_{prompt_raw}"
            short_hash = hashlib.md5(hash_str.encode('utf-8')).hexdigest()[:6]
            prefix = re.sub(r'[^a-z]', '', topic.split('_')[0])[:4]
            qid = f"{prefix}-{short_hash}"
            
            if qid in seen_ids:
                errors.append(f"{csv_path.name} (řádek {lineno}): Duplikát otázky! (stejný text)")
                continue
            seen_ids.add(qid)

            # Zpracování hover tagů
            clean_prompt, hover_refs, marker_errors = parse_markers(prompt_raw)
            if marker_errors:
                errors.extend([f"{csv_path.name} (řádek {lineno}): {e}" for e in marker_errors])
                continue

            q = {
                "id": qid,
                "type": row.get("type") or "multiple_choice",
                "level": row.get("level") or "A2",
                "tags": [t.strip() for t in row.get("tags", "").split("|") if t.strip()],
                "prompt": clean_prompt,
            }
            
            if hover_refs:
                q["hover_refs"] = hover_refs
            if row.get("hint"): 
                q["hint"] = row["hint"]
            if row.get("source"): 
                q["source"] = row["source"].strip()

            qtype = q["type"]

            if qtype == "multiple_choice":
                options = [o.strip() for o in row.get("options", "").split("|") if o.strip()]
                if len(options) < 2:
                    errors.append(f"{csv_path.name} (řádek {lineno}): méně než 2 možnosti")
                    continue
                q["options"] = options
                
                correct_raw = row.get("correct", "").strip()
                idx = -1
                if len(correct_raw) == 1 and correct_raw.isalpha():
                    idx = ord(correct_raw.upper()) - ord("A")
                elif correct_raw.isdigit():
                    idx = int(correct_raw)
                    
                if idx < 0 or idx >= len(options):
                    errors.append(f"{csv_path.name} (řádek {lineno}): špatná správná odpověď {correct_raw!r}")
                    continue
                q["correct"] = idx
                
            elif qtype == "type_in":
                answer = row.get("answer", "")
                if not answer:
                    errors.append(f"{csv_path.name} (řádek {lineno}): type_in chybí answer")
                    continue
                q["answer"] = answer
                accept = row.get("accept", "")
                if accept:
                    q["accept"] = [a.strip() for a in accept.split("|") if a.strip()]
            else:
                errors.append(f"{csv_path.name} (řádek {lineno}): neznámý typ {qtype!r}")
                continue

            expl = {}
            if row.get("explanation_cs"): expl["cs"] = row["explanation_cs"]
            if row.get("explanation_en"): expl["en"] = row["explanation_en"]
            if expl: q["explanation"] = expl

            bank.setdefault(topic, []).append(q)
            total_questions += 1

if errors:
    print("\n✗ Errors:", file=sys.stderr)
    for e in errors: 
        print("  " + e, file=sys.stderr)
    sys.exit(1)

# Uložení
js = "// AUTO-GENERATED from CSV files. Edit the CSVs, not this file.\n"
js += "const QUESTION_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n"
OUT_FILE.write_text(js, encoding="utf-8")

print(f"\n✓ Úspěšně naimportováno {total_questions} otázek → {OUT_FILE.name}")