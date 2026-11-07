import csv
import io
from pathlib import Path

fixes = {
    "dat-04": {
        "prompt": "Jdu do kina s ___ ({{můj:moje}} {{růže:sestřenice}}).",
        "options": "mojí sestřenici|mojí sestřenicí|moje sestřenice"
    },
    "dat-22": {"prompt": "Blahopřeju ___ ({{pan:vítěz}}).", "options": "vítězům|vítězi|vítěze"},
    "dat-39": {"prompt": "Hodiny se srovnaly s ___ (otáčení) planety.", "options": "otáčení|otáčením|otáčenímu|otáčeních"},
    "dat-46": {"prompt": "Dám to k ___ (máslo).", "options": "máslu|máslo|máslem|másle", "hint": "Dativ po k"},
    "gen-15": {"prompt": "Vracím se z ___ ({{růže:práce}})."},
    "gen-16": {"prompt": "Během ___ ({{žena:přednáška}}) jsem usnul."},
    "gen-17": {"prompt": "Místo ___ ({{žena:káva}}) piju čaj."},
    "gen-19": {"prompt": "Bojím se ___ ({{žena:tma}})."},
    "gen-22": {
        "tags": "akuzativ|fem|adj",
        "hint": 'Akuzativ (Na koho/co? po "ptát se")',
        "options": "té otázky|tu otázku|té otázce",
        "correct": "B",
        "explanation_cs": "Akuzativ sg. fem.: ptát se na + akuzativ → tu otázku.",
        "explanation_en": "Accusative sg. fem.: ptát se na + accusative → tu otázku."
    },
    "gen-29": {"prompt": "Viděl jsem ___ ({{žena:dívka}})."},
    "gen-30": {
        "tags": "akuzativ|masc_inanim|plur",
        "prompt": "Hledám ___ ({{stroj:klíč}}).",
        "explanation_cs": "Akuzativ pl. muž. neživ. vzor stroj: klíč → klíče.",
        "explanation_en": "Accusative pl. masc. inanim. pattern stroj: klíč → klíče."
    },
    "gen-31": {"prompt": "Vracím se do ___ ({{žena:škola}})."},
    "lok-18": {"prompt": "Mluví o ___ (jeho {{růže:práce}})."},
    "min-04": {
        "prompt": "Děti si ___ (hrát) venku.",
        "options": "hrály|hráli|hrálo",
        "correct": "A",
        "explanation_cs": "Děti = femininum plurál → hrály si.",
        "explanation_en": "Děti = feminine plural → hrály si."
    },
    "min-26": {
        "tags": "minulý_čas|neut|plur",
        "options": "zpívali|zpívaly|zpívala",
        "correct": "C",
        "explanation_cs": "Děvčata = neutrum plurál → zpívala.",
        "explanation_en": "Děvčata = neuter plural → zpívala."
    },
    "vc-26": {"prompt": "Rolák ___ (ty) bude slušet.", "options": "tobě|ty|tebe|tebou", "correct": "A"},
    "vc-27": {"prompt": "Černá barva sluší ___ (blondýnky).", "options": "blondýnkám|blondýnky|blondýnkách|blondýnkami", "correct": "A"},
    "vc-28": {"prompt": "Ten klobouk sluší ___ (moje sestra).", "options": "mojí sestře|mojí sestrou|moji sestru|moje sestra", "correct": "A"},
    "vc-30": {"prompt": "Svetr by ___ (vy) měl v pase sedět.", "options": "vy|vás|vám|vámi", "correct": "C"},
    "vc-31": {"prompt": "Oversized svetr padne ___ (většina žen).", "options": "většině žen|většina žen|většinou žen|většiny žen", "correct": "A"},
    "vc-32": {"prompt": "Ten kabát padne ___ (já) v ramenou.", "options": "mně|mě|mnou|já", "correct": "A"},
    "txt3-03": {"prompt": "Co byste měli zkontrolovat při výběru svetru?", "options": "Jestli vám sedí|Jestli je značkový|Jestli je z dovozu|Jestli má zip", "correct": "A"}
}

path = Path("questions.csv")
content = path.read_text(encoding="utf-8-sig")

# Oprava slepených řádků
content = content.replace('otáčením."dat-40', 'otáčením."\ndat-40')
content = content.replace('vy → vám."vc-31', 'vy → vám."\nvc-31')
content = content.replace('fits you."txt3-04', 'fits you."\ntxt3-04')

reader = csv.DictReader(io.StringIO(content))
fieldnames = reader.fieldnames
rows = list(reader)

for row in rows:
    qid = row["id"]
    if qid in fixes:
        for k, v in fixes[qid].items():
            row[k] = v

with path.open("w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print("✓ Všechny chyby v CSV byly opraveny.")