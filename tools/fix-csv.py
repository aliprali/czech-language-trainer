import csv
import io
from pathlib import Path

path = Path("questions.csv")
content = path.read_text(encoding="utf-8-sig")
reader = csv.DictReader(io.StringIO(content))
fieldnames = reader.fieldnames
rows = list(reader)

for row in rows:
    if row["id"] == "dat-29":
        row["prompt"] = "Zabývá se ___ ({{stavení:umění}})."
        row["explanation_cs"] = "Instrumentál sg. neutra měkkého: umění → uměním."
        row["explanation_en"] = "Instrumental sg. soft neuter: umění → uměním."

with path.open("w", encoding="utf-8", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(rows)

print("✓ Opraveno dat-29.")