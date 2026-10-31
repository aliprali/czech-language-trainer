#!/usr/bin/env python3
"""Usage: python3 tools/mark-all.py questions.csv"""
import csv, re, sys
from pathlib import Path

# Each entry: (vzor, word) or (vzor, word, note)
MARKERS = {
    # ── DATIV / INSTRUMENTÁL ──
    "dat-01": [("mladý", "starý"), ("pan", "dědeček", "-ek → -k: dědeček → dědečkovi")],
    "dat-02": [("mladý", "dlouhé"), ("město", "pero")],
    "dat-03": [("ten", "ta"), ("mladý", "nová"), ("žena", "profesorka", "k→c: profesorka → profesorce")],
    "dat-04": [("můj", "moje"), ("růže", "sestřenice")],
    "dat-05": [("pan", "pan"), ("muž", "ředitel")],
    "dat-06": [("mladý", "mladý"), ("pan", "bratr")],
    "dat-07": [("jarní", "moderní"), ("hrad", "vlak")],
    "dat-08": [("ten", "ten"), ("mladý", "vtipný"), ("hrad", "film")],
    "dat-09": [("ten", "ta"), ("mladý", "velká"), ("žena", "budova")],
    "dat-10": [("mladý", "čerstvé"), ("město", "máslo")],
    "dat-11": [("můj", "můj"), ("jarní", "nejlepší"), ("pan", "kamarád")],
    "dat-12": [("mladý", "malá"), ("žena", "lžička", "k→č: lžička → lžičkou")],
    "dat-13": [("můj", "moje"), ("žena", "maminka", "k→c: maminka → mamince")],
    "dat-14": [("mladý", "nová"), ("žena", "sekačka", "k→č: sekačka → sekačkou")],
    "dat-15": [("ten", "tento"), ("mladý", "těžký"), ("hrad", "úkol")],
    "dat-16": [("žena", "kamarádka", "k→c: kamarádka → kamarádce")],
    "dat-17": [("muž", "učitel")],
    "dat-18": [("pan", "soused")],
    "dat-19": [("žena", "učitelka", "k→c: učitelka → učitelce")],
    "dat-20": [("pan", "doktor")],
    "dat-21": [("ten", "ta"), ("žena", "otázka", "k→c: otázka → otázce")],
    "dat-23": [("žena", "firma")],
    "dat-24": [("ten", "ten"), ("hrad", "problém")],
    "dat-25": [("město", "auto")],
    "dat-26": [("stroj", "nůž")],
    "dat-28": [("ten", "ta"), ("žena", "hra")],
    "dat-29": [("stavení", "umění")],
    "dat-30": [("město", "pero")],
    "dat-31": [("hrad", "vlak")],
    "dat-32": [("muž", "ředitel")],
    "dat-33": [("žena", "kamarádka")],
    "dat-ti-01": [("žena", "Praha", "h→z: Praha → Praze")],
    "dat-ti-02": [("žena", "kniha", "h→z: kniha → knize")],
    "dat-ti-03": [("kuře", "dítě")],
    "dat-ti-04": [("město", "kolo")],
    "dat-ti-05": [("město", "město")],
    "dat-ti-06": [("hrad", "dům")],

    # ── GENITIV / AKUZATIV ──
    "gen-01": [("mladý", "velký"), ("pan", "pes", "-e- vypuštěno: pes → psa")],
    "gen-02": [("mladý", "krásné"), ("město", "město")],
    "gen-03": [("mladý", "bílý"), ("hrad", "cukr")],
    "gen-04": [("mladý", "česká"), ("město", "piva")],
    "gen-05": [("mladý", "mladá"), ("žena", "lékařka")],
    "gen-06": [("náš", "náš"), ("hrad", "cíl")],
    "gen-07": [("mladý", "ztracený"), ("stroj", "klíč")],
    "gen-08": [("můj", "tvoje"), ("kost", "pomoc")],
    "gen-09": [("mladý", "starý"), ("mladý", "známý")],
    "gen-10": [("mladý", "nové"), ("město", "auto")],
    "gen-11": [("náš", "naše"), ("žena", "škola")],
    "gen-12": [("ten", "ta"), ("mladý", "hlasitá"), ("žena", "hudba")],
    "gen-13": [("stavení", "náměstí")],
    "gen-14": [("mladý", "zajímavá"), ("žena", "kniha")],
    "gen-15": [("růže", "práce")],
    "gen-16": [("žena", "přednáška")],
    "gen-17": [("žena", "káva")],
    "gen-18": [("náš", "náš"), ("hrad", "dům")],
    "gen-19": [("žena", "tma")],
    "gen-21": [("můj", "tvůj"), ("pan", "bratr")],
    "gen-22": [("ten", "ta"), ("žena", "otázka")],
    "gen-23": [("ten", "ta"), ("žena", "žena")],
    "gen-24": [("stroj", "most")],
    "gen-25": [("hrad", "stůl")],
    "gen-26": [("mladý", "nový"), ("stroj", "počítač")],
    "gen-27": [("ten", "ta"), ("žena", "hudba")],
    "gen-28": [("můj", "tvůj"), ("pan", "bratr")],
    "gen-29": [("žena", "dívka")],
    "gen-30": [("stroj", "klíče")],
    "gen-31": [("žena", "škola")],
    "gen-ti-01": [("žena", "voda")],
    "gen-ti-02": [("žena", "voda")],
    "gen-ti-03": [("žena", "kniha")],
    "gen-ti-04": [("město", "město")],
    "gen-ti-05": [("muž", "muž")],
    "gen-ti-06": [("žena", "škola")],

    # ── LOKÁL ──
    "lok-01": [("mladý", "nový"), ("hrad", "projekt")],
    "lok-02": [("žena", "Praha", "h→z: Praha → Praze")],
    "lok-03": [("mladý", "malý"), ("hrad", "stůl")],
    "lok-04": [("ten", "ta"), ("mladý", "stará"), ("píseň", "skříň")],
    "lok-05": [("mladý", "krásná"), ("žena", "dovolená")],
    "lok-06": [("jarní", "hlavní"), ("stavení", "nádraží")],
    "lok-07": [("náš", "naše"), ("žena", "univerzita")],
    "lok-08": [("ten", "ten"), ("mladý", "hodný"), ("pan", "kluk", "k→c: kluk → klukovi")],
    "lok-09": [("mladý", "příjemná"), ("žena", "kavárna")],
    "lok-10": [("mladý", "pohodlná"), ("píseň", "postel")],
    "lok-11": [("ten", "ten"), ("hrad", "film")],
    "lok-12": [("růže", "lednice")],
    "lok-13": [("žena", "střecha", "ch→š: střecha → střeše")],
    "lok-15": [("stroj", "oběd")],
    "lok-16": [("žena", "kniha", "h→z: kniha → knize")],
    "lok-17": [("stroj", "gauč")],
    "lok-18": [("růže", "práce")],
    "lok-19": [("město", "Brno")],
    "lok-20": [("město", "Slovensko")],
    "lok-21": [("žena", "cesta")],
    "lok-22": [("pan", "kamarád")],
    "lok-23": [("město", "auto")],
    "lok-24": [("žena", "stěna")],
    "lok-25": [("žena", "dovolená")],
    "lok-26": [("stroj", "prosinec")],
    "lok-27": [("ten", "ta"), ("kost", "věc")],
    "lok-28": [("ten", "ta"), ("žena", "kniha", "h→z: kniha → knize")],
    "lok-29": [("ten", "ten"), ("hrad", "ostrov")],
    "lok-30": [("stavení", "cvičení")],
    "lok-ti-01": [("město", "Brno")],
    "lok-ti-02": [("žena", "Praha", "h→z: Praha → Praze")],
    "lok-ti-03": [("hrad", "les")],
    "lok-ti-04": [("město", "okno")],
    "lok-ti-05": [("město", "Rusko")],
    "lok-ti-06": [("růže", "ulice")],

    # ── SLOVESA + PÁD ──
    "vc-01": [("žena", "čeština")],
    "vc-02": [("můj", "moje"), ("žena", "sestra", "r→ř: sestra → sestře")],
    "vc-03": [("ten", "ta"), ("růže", "práce")],
    "vc-04": [("růže", "televize")],
    "vc-05": [("žena", "hudba")],
    "vc-06": [("ten", "ten"), ("muž", "muž")],
    "vc-07": [("pan", "profesor", "r→ř: profesor → profesora")],
    "vc-08": [("žena", "babička", "k→c: babička → babičce")],
    "vc-09": [("můj", "moje"), ("žena", "babička", "k→c: babička → babičce")],
    "vc-10": [("žena", "kamarádka")],
    "vc-11": [("žena", "dovolená")],
    "vc-12": [("jarní", "mladší"), ("pan", "bratr")],
    "vc-13": [("žena", "schůzka", "k→c: schůzka → schůzku")],
    "vc-14": [("ten", "ten"), ("mladý", "velký"), ("pan", "pes", "-e- vypuštěno: pes → psa")],
    "vc-15": [("pan", "studenti")],
    "vc-16": [("pan", "pan"), ("pan", "doktor")],
    "vc-17": [("pan", "dědeček", "-ek → -k: dědeček → dědečka")],
    "vc-18": [("náš", "náš"), ("hrad", "plán")],
    "vc-ti-01": [("pan", "kamarád")],
    "vc-ti-02": [("žena", "kniha", "h→z: kniha → knize")],

    # ── NOMINATIV PLURÁL (mark the singular in the sentence) ──
    "pl-01": [("pan", "student")],
    "pl-02": [("pan", "kluk", "k→c: kluk → kluci")],
    "pl-03": [("pan", "profesor", "r→ř: profesor → profesoři")],
    "pl-04": [("hrad", "hrad")],
    "pl-05": [("stroj", "počítač")],
    "pl-06": [("stroj", "stroj")],
    "pl-07": [("hrad", "autobus")],
    "pl-08": [("pan", "hoch", "ch→š: hoch → hoši")],
    "pl-09": [("žena", "žena")],
    "pl-10": [("žena", "kniha")],
    "pl-11": [("růže", "restaurace")],
    "pl-12": [("kost", "věc")],
    "pl-13": [("píseň", "kancelář")],
    "pl-14": [("město", "město")],
    "pl-15": [("město", "auto")],
    "pl-16": [("stavení", "nádraží")],
    "pl-17": [("kuře", "kuře")],
    "pl-ti-01": [("růže", "ulice")],
    "pl-ti-02": [("moře", "moře")],
    "pl-ti-03": [("pan", "bratr", "r→ř: bratr → bratři")],
}

def strip_markers(prompt):
    return re.sub(r"\{\{[^:}]+:([^}|]+)(?:\|[^}]*)?\}\}", r"\1", prompt)

def add_markers(prompt, markers):
    for m in markers:
        if len(m) == 3:
            vzor, word, note = m
            tag = f"{{{{{vzor}:{word}|{note}}}}}"
        else:
            vzor, word = m
            tag = f"{{{{{vzor}:{word}}}}}"
        pattern = r"(?<!\w)" + re.escape(word) + r"(?!\w)"
        prompt = re.sub(pattern, tag, prompt, count=1)
    return prompt

csv_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("questions.csv")
rows, fieldnames = [], []
with csv_path.open(encoding="utf-8-sig", newline="") as f:
    reader = csv.DictReader(f)
    fieldnames = reader.fieldnames
    rows = list(reader)

updated, skipped = 0, []
for row in rows:
    qid = (row.get("id") or "").strip()
    if qid not in MARKERS:
        if qid and qid.startswith("min-"):
            pass  # past_tense: skip silently
        elif qid:
            skipped.append(qid)
        continue
    original = row["prompt"]
    cleaned = strip_markers(original)
    marked  = add_markers(cleaned, MARKERS[qid])
    if marked != original:
        row["prompt"] = marked
        updated += 1

# Skip corrupted rows (extra commas → None key) instead of crashing.
clean_rows = []
for row in rows:
    if None in row:
        print(f"WARNING: skipping corrupted row id={row.get('id','?')!r}, extras={row[None]!r}")
        continue
    clean_rows.append(row)

# Write to a temp file first, then rename — crash-safe.
tmp = csv_path.with_suffix(".csv.tmp")
# Skip corrupted rows (extra commas → None key) instead of crashing.
clean_rows = []
for row in rows:
    if None in row:
        print(f"WARNING: skipping corrupted row id={row.get('id','?')!r}, extras={row[None]!r}")
        continue
    clean_rows.append(row)

# Write to a temp file first, then rename — crash-safe.
tmp = csv_path.with_suffix(".csv.tmp")
with tmp.open("w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(clean_rows)
tmp.replace(csv_path)

print(f"✓ Updated {updated} prompts")

print(f"✓ Updated {updated} prompts")
if skipped:
    print(f"  ({len(skipped)} rows not in marker map: {', '.join(skipped)})")