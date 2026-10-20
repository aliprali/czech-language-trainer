// Usage: node tools/import-csv.js questions.csv
const fs = require("fs");
const path = require("path");

function parseCSV(text) {
  const rows = []; let row = [], field = "", inQ = false, i = 0;
  while (i < text.length) {
    const c = text[i];
    if (inQ) {
      if (c === '"') { if (text[i+1] === '"') { field += '"'; i += 2; continue; } inQ = false; i++; continue; }
      field += c; i++; continue;
    }
    if (c === '"') { inQ = true; i++; continue; }
    if (c === ",") { row.push(field); field = ""; i++; continue; }
    if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i+1] === "\n") i++;
      row.push(field); field = "";
      if (row.some(f => f !== "")) rows.push(row);
      row = []; i++; continue;
    }
    field += c; i++;
  }
  if (field || row.length) { row.push(field); if (row.some(f => f !== "")) rows.push(row); }
  return rows;
}

const [, , csvPath, outArg] = process.argv;
if (!csvPath) { console.error("Usage: node tools/import-csv.js <input.csv> [output.js]"); process.exit(1); }

const text = fs.readFileSync(csvPath, "utf8").replace(/^\uFEFF/, "");
const rows = parseCSV(text);
if (rows.length < 2) { console.error("No data rows."); process.exit(1); }

const header = rows[0].map(h => h.trim().toLowerCase());
const explCols = header.filter(h => h.startsWith("explanation_"));
const data = rows.slice(1).map((r, i) => {
  const o = { __row: i + 2 };
  header.forEach((c, j) => { o[c] = (r[j] || "").trim(); });
  return o;
});

const bank = {}, errors = [], ids = new Set();

for (const row of data) {
  const tag = `Row ${row.__row} (${row.id || "?"})`;
  if (!row.id) { errors.push(`${tag}: missing id`); continue; }
  if (ids.has(row.id)) { errors.push(`${tag}: duplicate id`); continue; }
  ids.add(row.id);
  if (!row.topic) { errors.push(`${tag}: missing topic`); continue; }
  if (!row.prompt) { errors.push(`${tag}: missing prompt`); continue; }

  const q = {
    id: row.id,
    type: row.type || "multiple_choice",
    level: row.level || "A2",
    tags: row.tags ? row.tags.split("|").map(s => s.trim()).filter(Boolean) : [],
    prompt: row.prompt,
  };
  if (row.hint) q.hint = row.hint;

  if (q.type === "multiple_choice") {
    q.options = row.options.split("|").map(s => s.trim()).filter(Boolean);
    if (q.options.length < 2) { errors.push(`${tag}: needs ≥2 options`); continue; }
    let idx = -1;
    if (/^[a-z]$/i.test(row.correct)) idx = row.correct.toUpperCase().charCodeAt(0) - 65;
    else if (/^\d+$/.test(row.correct)) idx = parseInt(row.correct, 10);
    if (idx < 0 || idx >= q.options.length) { errors.push(`${tag}: bad correct "${row.correct}"`); continue; }
    q.correct = idx;
  } else if (q.type === "type_in") {
    if (!row.answer) { errors.push(`${tag}: type_in needs answer`); continue; }
    q.answer = row.answer;
    if (row.accept) q.accept = row.accept.split("|").map(s => s.trim()).filter(Boolean);
  } else { errors.push(`${tag}: unknown type "${q.type}"`); continue; }

  const ex = {};
  for (const c of explCols) if (row[c]) ex[c.replace("explanation_", "")] = row[c];
  if (Object.keys(ex).length) q.explanation = ex;

  (bank[row.topic] = bank[row.topic] || []).push(q);
}

if (errors.length) { console.error("✗ Errors:\n  " + errors.join("\n  ")); process.exit(1); }

const outPath = outArg || path.join(__dirname, "..", "data", "questions.js");
const js = "// AUTO-GENERATED from CSV. Edit the CSV, not this file.\n" +
           "const QUESTION_BANK = " + JSON.stringify(bank, null, 2) + ";\n";
fs.writeFileSync(outPath, js, "utf8");

const total = Object.values(bank).reduce((n, a) => n + a.length, 0);
console.log(`✓ ${total} questions → ${outPath}`);
Object.entries(bank).forEach(([t, a]) => console.log(`   ${t}: ${a.length}`));