import csv
import io
from pathlib import Path

path = Path("questions.csv")
content = path.read_text(encoding="utf-8-sig")

# 1. Oprava slepených řádků (to způsobovalo chybu v importu)
content = content.replace('otáčením."dat-40', 'otáčením."\ndat-40')
content = content.replace('vy → vám."vc-31', 'vy → vám."\nvc-31')
content = content.replace('fits you."txt3-04', 'fits you."\ntxt3-04')

reader = csv.DictReader(io.StringIO(content))
fieldnames = reader.fieldnames
rows = list(reader)

# 2. Oprava špatných slovosledů a gramatiky
for row in rows:
    if row["id"] == "dat-29":
        row["prompt"] = "Zabývá se ___ ({{stavení:umění}})."
        row["explanation_cs"] = "Instrumentál sg. neutra měkkého: umění → uměním."
        row["explanation_en"] = "Instrumental sg. soft neuter: umění → uměním."
    elif row["id"] == "gen-22":
        row["tags"] = "akuzativ|fem|adj"
        row["hint"] = 'Akuzativ (Na koho/co? po "ptát se")'
        row["options"] = "té otázky|tu otázku|té otázce"
        row["correct"] = "B"
        row["explanation_cs"] = "Akuzativ sg. fem.: ptát se na + akuzativ → tu otázku."
        row["explanation_en"] = "Accusative sg. fem.: ptát se na + accusative → tu otázku."
    elif row["id"] == "min-26":
        row["tags"] = "minulý_čas|neut|plur"
        row["options"] = "zpívali|zpívaly|zpívala"
        row["correct"] = "C"
        row["explanation_cs"] = "Děvčata = neutrum plurál → zpívala."
        row["explanation_en"] = "Děvčata = neuter plural → zpívala."
    elif row["id"] == "dat-39":
        row["prompt"] = "Hodiny se srovnaly s ___ (otáčení) planety."
        row["options"] = "otáčení|otáčením|otáčenímu|otáčeních"
        row["correct"] = "B"

# Uložit opravené CSV
with path.open("w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print("✓ CSV bylo úspěšně opraveno a očištěno.")