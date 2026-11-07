function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function regexEscape(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const UI_STRINGS = {
  presentTense:   { cs: "Přítomný čas",          en: "Present tense" },
  pastTense:      { cs: "Minulý čas",             en: "Past tense" },
  futureTense:    { cs: "Budoucí čas",            en: "Future tense" },
  aspectPair:     { cs: "Vidová dvojice",         en: "Aspect pair" },
  governs:        { cs: "Váže",                   en: "Governs" },
  examples:       { cs: "Příklad",                en: "Example" },
  vzor:           { cs: "Vzor",                   en: "Pattern" },
  comparePattern: { cs: "Vzor pro srovnání",      en: "Compare pattern" },
  drivenBy:       { cs: "Řízeno",                 en: "Governed by" },
  drivenByPrep:   { cs: "Pád řízen předložkou",   en: "Case governed by preposition" },
  reflexiveVerb:  { cs: "Zvratné sloveso — částice", en: "Reflexive verb — particle" },
  reflexivePart:  { cs: "zvratná částice",        en: "reflexive particle" },
  reflexiveBelongs:{ cs: "Zvratná částice patří k slovesu", en: "Reflexive particle belongs to verb" },
  reflexiveNote:  { cs: "Ve větě může stát jinde než sloveso, ale vždy k němu patří.", en: "In a sentence it may stand elsewhere than the verb, but always belongs to it." },
  prepGoverns:    { cs: "Předložka +",            en: "Preposition +" },
  spokenAs:       { cs: "Čte se",                 en: "Pronounced" },
  degrees:        { cs: "Stupňování",             en: "Degrees of comparison" },
  positive:       { cs: "pozitiv",                en: "positive" },
  comparative:    { cs: "komparativ",             en: "comparative" },
  superlative:    { cs: "superlativ",             en: "superlative" },
  ordinalDecl:    { cs: "Skloňování řadové číslovky", en: "Ordinal declension" },
  person:         { cs: "os.",                    en: "pers." },
  perfective:     { cs: "dokonavé",               en: "perfective" },
  imperfective:   { cs: "nedokonavé",             en: "imperfective" },
  verbLabel:      { cs: "Sloveso",                en: "Verb" },
};

const CASE_NAMES = {
  nominativ:    { cs: "nominativ",    en: "nominative" },
  genitiv:      { cs: "genitiv",      en: "genitive" },
  dativ:        { cs: "dativ",        en: "dative" },
  akuzativ:     { cs: "akuzativ",     en: "accusative" },
  vokativ:      { cs: "vokativ",      en: "vocative" },
  lokál:        { cs: "lokál",        en: "locative" },
  instrumentál: { cs: "instrumentál", en: "instrumental" },
};

const TENSE_NAMES = {
  present:    { cs: "přítomný čas",  en: "present" },
  past:       { cs: "minulý čas",    en: "past" },
  future:     { cs: "budoucí čas",   en: "future" },
  infinitive: { cs: "infinitiv",     en: "infinitive" },
};

const DEGREE_NAMES = {
  pozitiv:    { cs: "pozitiv",    en: "positive" },
  komparativ: { cs: "komparativ", en: "comparative" },
  superlativ: { cs: "superlativ", en: "superlative" },
};

function getLocalized(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || field.cs || Object.values(field)[0] || "";
}

function tr(key, lang) {
  const v = UI_STRINGS[key];
  if (!v) return key;
  return v[lang] || v.en || v.cs || key;
}

function caseName(c, lang) {
  if (!c) return "";
  return c.split("/").map(part => {
    const p = part.trim();
    const v = CASE_NAMES[p];
    return v ? (v[lang] || v.en || v.cs || p) : p;
  }).join(" / ");
}

function tenseName(t, lang) {
  const v = TENSE_NAMES[t];
  return v ? (v[lang] || v.en || v.cs || t) : t;
}

function degreeName(d, lang) {
  const v = DEGREE_NAMES[d];
  return v ? (v[lang] || v.en || v.cs || d) : d;
}

function renderPrompt(q) {
  let html = escapeHtml(q.prompt);
  if (!Array.isArray(q.hover_refs) || q.hover_refs.length === 0) return html;
  for (const ref of q.hover_refs) {
    const wordEsc = escapeHtml(ref.word);
    const re = new RegExp(
      `(?<![\\p{L}\\p{N}])${regexEscape(wordEsc)}(?![\\p{L}\\p{N}])`, "gu"
    );
    const noteAttr = ref.note ? ` data-note="${escapeHtml(ref.note)}"` : "";
    html = html.replace(re,
      m => `<span class="hoverable" data-table="${escapeHtml(ref.table)}"${noteAttr}>${m}</span>`);
  }
  return html;
}

function buildVzorTable(vzorId, opts = {}) {
  if (typeof DECLENSION_TABLES === "undefined") {
    return `<div style="color:#c0392b;font-weight:600;">Error: data/tables.js not loaded.</div>`;
  }
  const t = DECLENSION_TABLES[vzorId];
  if (!t) return `<div style="color:#c0392b;">Unknown table: ${escapeHtml(vzorId)}</div>`;
  const lang = Store.getLang("en");
  const title = getLocalized(t.label, lang) || vzorId;

  let html = opts.showTitle === false
    ? (opts.hideLabel ? "" : `<div class="vzor-title">${escapeHtml(tr("vzor", lang))}: ${escapeHtml(title)}</div>`)
    : `<h4>${escapeHtml(title)}</h4>`;
  if (t.example) html += `<div class="example">${escapeHtml(t.example)}</div>`;

  html += "<table>";
  html += "<tr>" + t.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("") + "</tr>";
  for (const row of t.rows) {
    html += "<tr>" + row.map(c => `<td>${escapeHtml(c)}</td>`).join("") + "</tr>";
  }
  html += "</table>";

  if (t.alternations) {
    const alt = getLocalized(t.alternations, lang);
    if (alt) html += `<div class="alt-note">${escapeHtml(alt)}</div>`;
  }
  if (t.note) {
    const n = getLocalized(t.note, lang);
    if (n) html += `<div class="example" style="margin-top:8px;font-style:normal;">${escapeHtml(n)}</div>`;
  }
  return html;
}

function buildIrregularTable(t, lang) {
  if (!t) return "";
  const label = getLocalized(t.label, lang);
  let html = `<div class="vzor-title">${escapeHtml(label)}</div>`;
  if (t.example) html += `<div class="example">${escapeHtml(t.example)}</div>`;
  html += "<table>";
  html += "<tr>" + t.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("") + "</tr>";
  for (const row of t.rows) {
    html += "<tr>" + row.map(c => `<td>${escapeHtml(c)}</td>`).join("") + "</tr>";
  }
  html += "</table>";
  return html;
}

function buildVerbPanel(w, lang) {
  let html = "";

  if (w.features) {
    const parts = [];
    if (w.features.tense) parts.push(tenseName(w.features.tense, lang));
    if (w.features.person) parts.push(w.features.person + ". " + tr("person", lang));
    if (w.features.number) parts.push(w.features.number);
    if (parts.length) html += `<div class="features">${escapeHtml(parts.join(" · "))}</div>`;
  }
  if (w.aspect_pair) {
    html += `<div class="aspect-pair"><b>${escapeHtml(tr("aspectPair", lang))}:</b> ${escapeHtml(w.aspect_pair)}</div>`;
  }

  if (w.conjugation) {
    const c = w.conjugation;
    const personLabels = {
      ja:  { cs: "já", en: "I" },
      ty:  { cs: "ty", en: "you (sg)" },
      on:  { cs: "on/ona/ono", en: "he/she/it" },
      my:  { cs: "my", en: "we" },
      vy:  { cs: "vy", en: "you (pl)" },
      oni: { cs: "oni/ony/ona", en: "they" },
    };
    const pastLabels = {
      on_m:  { cs: "on (m.)",   en: "he (m.)" },
      on_f:  { cs: "ona (f.)",  en: "she (f.)" },
      on_n:  { cs: "ono (n.)",  en: "it (n.)" },
      oni_m: { cs: "oni (m.)",  en: "they (m.)" },
      oni_f: { cs: "ony (f.)",  en: "they (f.)" },
    };
    if (c.present) {
      html += `<div class="verb-section"><div class="verb-section-title">${escapeHtml(tr("presentTense", lang))}</div><table class="conj-table">`;
      for (const k of ["ja","ty","on","my","vy","oni"]) {
        if (c.present[k]) {
          const lab = personLabels[k] || { cs: k, en: k };
          html += `<tr><td>${escapeHtml(lab[lang] || lab.en)}</td><td>${escapeHtml(c.present[k])}</td></tr>`;
        }
      }
      html += `</table></div>`;
    }
    if (c.past) {
      html += `<div class="verb-section"><div class="verb-section-title">${escapeHtml(tr("pastTense", lang))}</div><table class="conj-table">`;
      for (const k of ["on_m","on_f","on_n","oni_m","oni_f"]) {
        if (c.past[k]) {
          const lab = pastLabels[k] || { cs: k, en: k };
          html += `<tr><td>${escapeHtml(lab[lang] || lab.en)}</td><td>${escapeHtml(c.past[k])}</td></tr>`;
        }
      }
      html += `</table></div>`;
    }
    if (c.future) {
      html += `<div class="verb-section"><div class="verb-section-title">${escapeHtml(tr("futureTense", lang))}</div><div class="future">${escapeHtml(c.future)}</div></div>`;
    }
  }

  if (w.governs && w.governs.length) {
    html += `<div class="governs"><b>${escapeHtml(tr("governs", lang))}:</b> ${w.governs.map(g => escapeHtml(caseName(g, lang))).join(", ")}</div>`;
  }
  if (w.examples && w.examples.length) {
    html += `<div class="examples"><b>${escapeHtml(tr("examples", lang))}:</b> ${w.examples.map(escapeHtml).join(" · ")}</div>`;
  }
  return html;
}

function buildDegreesTable(d, title, lang) {
  if (!d) return "";
  const cell = v => {
    if (v == null) return "";
    if (typeof v === "string") return escapeHtml(v);
    if (typeof v === "object") return escapeHtml([v.m, v.f, v.n].filter(Boolean).join(" / "));
    return "";
  };
  let html = `<div class="verb-section"><div class="verb-section-title">${escapeHtml(title)}</div><table class="conj-table">`;
  html += `<tr><td>${escapeHtml(tr("positive", lang))}</td><td>${cell(d.positive)}</td></tr>`;
  html += `<tr><td>${escapeHtml(tr("comparative", lang))}</td><td>${cell(d.comparative)}</td></tr>`;
  html += `<tr><td>${escapeHtml(tr("superlative", lang))}</td><td>${cell(d.superlative)}</td></tr>`;
  html += `</table></div>`;
  return html;
}

function buildNominalPanel(w, lang) {
  let html = "";

  if (w.features) {
    const parts = [];
    if (w.features.case) parts.push(caseName(w.features.case, lang));
    if (w.features.number) parts.push(w.features.number);
    if (w.features.gender) parts.push(w.features.gender);
    if (w.features.degree) parts.push(degreeName(w.features.degree, lang));
    if (parts.length) html += `<div class="features">${escapeHtml(parts.join(" · "))}</div>`;
  }
  if (w.note) html += `<div class="instance-note">${escapeHtml(getLocalized(w.note, lang))}</div>`;

  if (w.driven_by && typeof Reading !== "undefined" && Reading.state.currentText) {
    const driver = Reading.state.currentText.words[w.driven_by];
    if (driver) {
      const name = driver.lemma || driver.surface || w.driven_by;
      if (driver.pos === "preposition") {
        const gov = (driver.governs && driver.governs.length) ? ` (${caseName(driver.governs[0], lang)})` : "";
        html += `<div class="driven-by">${escapeHtml(tr("drivenByPrep", lang))} <b>${escapeHtml(name)}</b>${escapeHtml(gov)}.</div>`;
      } else {
        html += `<div class="driven-by">${escapeHtml(tr("drivenBy", lang))}: <b>${escapeHtml(name)}</b></div>`;
      }
    }
  }

  if (w.degrees) html += buildDegreesTable(w.degrees, tr("degrees", lang), lang);
  if (w.related)  html += buildDegreesTable(w.related, getLocalized(w.related.label, lang), lang);

  if (w.irregularTable) {
    html += buildIrregularTable(w.irregularTable, lang);
    if (w.vzor) {
      const vs = DECLENSION_TABLES[w.vzor];
      const vsLabel = vs ? getLocalized(vs.label, lang) : w.vzor;
      html += `<div class="vzor-title" style="margin-top:12px;">${escapeHtml(tr("comparePattern", lang))}: ${escapeHtml(vsLabel)}</div>`;
      html += buildVzorTable(w.vzor, { showTitle: false, hideLabel: true });
    }
  } else if (w.vzor) {
    html += buildVzorTable(w.vzor, { showTitle: false });
  }

  return html;
}

function buildPrepositionPanel(w, lang) {
  let html = "";
  if (w.governs && w.governs.length) {
    html += `<div class="prep-governs">${escapeHtml(tr("prepGoverns", lang))} <b>${w.governs.map(g => escapeHtml(caseName(g, lang))).join(", ")}</b></div>`;
  }
  if (w.note) html += `<div class="instance-note">${escapeHtml(getLocalized(w.note, lang))}</div>`;
  if (w.examples && w.examples.length) {
    html += `<div class="examples"><b>${escapeHtml(tr("examples", lang))}:</b> ${w.examples.map(escapeHtml).join(" · ")}</div>`;
  }
  return html;
}

function buildNumberPanel(w, lang) {
  let html = "";
  if (w.features) {
    const parts = [];
    if (w.features.case) parts.push(caseName(w.features.case, lang));
    if (w.features.gender) parts.push(w.features.gender);
    if (w.features.number) parts.push(w.features.number);
    if (parts.length) html += `<div class="features">${escapeHtml(parts.join(" · "))}</div>`;
  }
  if (w.spoken) {
    html += `<div class="spoken">${escapeHtml(tr("spokenAs", lang))}: <b>${escapeHtml(w.spoken)}</b></div>`;
  }
  if (w.ordinal) {
    html += `<div class="verb-section"><div class="verb-section-title">${escapeHtml(tr("ordinalDecl", lang))}</div><table class="conj-table">`;
    const labels = {
      nom_m: { cs: "Nom m.", en: "Nom m." },
      nom_f: { cs: "Nom f.", en: "Nom f." },
      nom_n: { cs: "Nom n.", en: "Nom n." },
      gen_m: { cs: "Gen m.", en: "Gen m." },
      gen_f: { cs: "Gen f.", en: "Gen f." },
      gen_n: { cs: "Gen n.", en: "Gen n." },
    };
    for (const k of ["nom_m","nom_f","nom_n","gen_m","gen_f","gen_n"]) {
      if (w.ordinal[k]) {
        const lab = labels[k];
        html += `<tr><td>${escapeHtml(lab[lang] || lab.en)}</td><td>${escapeHtml(w.ordinal[k])}</td></tr>`;
      }
    }
    html += `</table></div>`;
  }
  if (w.note) html += `<div class="instance-note">${escapeHtml(getLocalized(w.note, lang))}</div>`;
  return html;
}

function buildWordPanel(wordKey) {
  if (typeof Reading === "undefined" || !Reading.state.currentText) {
    return `<div style="color:#c0392b;">Text not loaded.</div>`;
  }
  const w = Reading.state.currentText.words[wordKey];
  if (!w) return `<div style="color:#c0392b;">Unknown word: ${escapeHtml(wordKey)}</div>`;

  const lang = Store.getLang("en");

  if (w.pos === "particle" && w.reflexive_of) {
    const verb = Reading.state.currentText.words[w.reflexive_of];
    if (verb) {
      const verbLemma = verb.lemma || verb.surface;
      let html = `<h4>${escapeHtml(w.surface)} <span class="surface">${escapeHtml(tr("reflexivePart", lang))}</span></h4>`;
      html += `<div class="gloss">${escapeHtml(tr("reflexiveBelongs", lang))} <b>${escapeHtml(verbLemma)}</b>. ${escapeHtml(tr("reflexiveNote", lang))}</div>`;
      if (w.gloss) {
        const g = getLocalized(w.gloss, lang);
        if (g) html += `<div class="instance-note">${escapeHtml(g)}</div>`;
      }
      html += `<div class="vzor-title">${escapeHtml(tr("verbLabel", lang))} ${escapeHtml(verbLemma)}${verb.reflexive ? " " + escapeHtml(verb.reflexive) : ""}</div>`;
      html += buildVerbPanel(verb, lang);
      return html;
    }
  }

  const surface = w.surface || wordKey;
  const lemma = w.lemma || surface;
  const displayLemma = (w.reflexive && !lemma.includes(w.reflexive)) ? `${lemma} ${w.reflexive}` : lemma;

  let html = "<h4>" + escapeHtml(displayLemma);
  if (w.surface && w.surface !== w.lemma) html += ` <span class="surface">(${escapeHtml(w.surface)})</span>`;
  if (w.aspect) {
    html += ` <span class="verb-badge ${w.aspect}">${escapeHtml(tr(w.aspect, lang))}</span>`;
  }
  html += "</h4>";

  if (w.reflexive) {
    html += `<div class="reflexive-note">${escapeHtml(tr("reflexiveVerb", lang))} <b>${escapeHtml(w.reflexive)}</b>.</div>`;
  }

  if (w.gloss) {
    const g = getLocalized(w.gloss, lang);
    if (g) html += `<div class="gloss">${escapeHtml(g)}</div>`;
  }

  if (w.pos === "verb") html += buildVerbPanel(w, lang);
  else if (w.pos === "preposition") html += buildPrepositionPanel(w, lang);
  else if (w.pos === "number") html += buildNumberPanel(w, lang);
  else html += buildNominalPanel(w, lang);
  return html;
}

const Tooltip = (() => {
  let el, hideTimer;

  function get() {
    if (!el) el = document.getElementById("hover-tooltip");
    return el;
  }

  function place(target) {
    const e = get();
    const r = target.getBoundingClientRect();
    const eR = e.getBoundingClientRect();
    let top = r.bottom + 6;
    let left = r.left;
    if (left + eR.width > window.innerWidth - 10) left = window.innerWidth - eR.width - 10;
    if (top + eR.height > window.innerHeight - 10) top = r.top - eR.height - 6;
    e.style.top = Math.max(10, top) + "px";
    e.style.left = Math.max(10, left) + "px";
  }

  function show(target, tableId, instanceNote) {
    clearTimeout(hideTimer);
    const e = get();
    let html = buildVzorTable(tableId, { showTitle: true });
    if (instanceNote) html += `<div class="instance-note">${escapeHtml(instanceNote)}</div>`;
    e.innerHTML = html;
    e.classList.add("visible");
    place(target);
    clearDriverHighlight();
  }

  function showWord(target, wordKey) {
    clearTimeout(hideTimer);
    const e = get();
    e.innerHTML = buildWordPanel(wordKey);
    e.classList.add("visible");
    place(target);
    highlightDriver(wordKey);
  }

  function highlightDriver(wordKey) {
    clearDriverHighlight();
    if (typeof Reading === "undefined" || !Reading.state.currentText) return;
    const words = Reading.state.currentText.words;
    const w = words[wordKey];
    if (!w) return;

    if (w.driven_by) {
      const el = document.querySelector(`.hoverable[data-word="${w.driven_by}"]`);
      if (el) el.classList.add("driver-highlight");
    }

    let partnerKey = null;
    if (w.pos === "verb" && w.reflexive) {
      for (const k in words) {
        if (words[k].reflexive_of === wordKey) { partnerKey = k; break; }
      }
    } else if (w.pos === "particle" && w.reflexive_of) {
      partnerKey = w.reflexive_of;
    }
    if (partnerKey) {
      const el = document.querySelector(`.hoverable[data-word="${partnerKey}"]`);
      if (el) el.classList.add("reflexive-highlight");
    }
  }

  function clearDriverHighlight() {
    document.querySelectorAll(".driver-highlight, .reflexive-highlight").forEach(el => {
      el.classList.remove("driver-highlight");
      el.classList.remove("reflexive-highlight");
    });
  }

  function hide() {
    const e = get();
    if (e) e.classList.remove("visible");
    clearDriverHighlight();
  }

  return { show, showWord, hide };
})();

function handleHover(e) {
  const word = e.target.closest(".hoverable");
  const tip = e.target.closest("#hover-tooltip");
  if (word) {
    if (word.dataset.word) Tooltip.showWord(word, word.dataset.word);
    else Tooltip.show(word, word.dataset.table, word.dataset.note || null);
  } else if (tip) {
    clearTimeout(window.__tt);
  } else {
    Tooltip.hide();
  }
}

document.addEventListener("mouseover", handleHover);
document.addEventListener("click", handleHover);

document.addEventListener("mouseout", e => {
  if (e.target.closest(".hoverable") || e.target.closest("#hover-tooltip")) {
    window.__tt = setTimeout(() => Tooltip.hide(), 120);
  }
});

const LANG_NAMES = {
  cs: "Čeština", en: "English", de: "Deutsch", ru: "Русский",
  uk: "Українська", vi: "Tiếng Việt", zh: "中文", es: "Español",
  fr: "Français", pl: "Polski",
};

function normalize(s) {
  return s.trim().toLowerCase().normalize("NFC");
}

function availableLangs() {
  const set = new Set();
  for (const t in QUESTION_BANK) {
    for (const q of QUESTION_BANK[t]) {
      if (q.explanation && typeof q.explanation === "object")
        Object.keys(q.explanation).forEach(l => set.add(l));
      if (q.hint && typeof q.hint === "object")
        Object.keys(q.hint).forEach(l => set.add(l));
    }
  }
  if (set.size === 0) set.add("cs");
  return Array.from(set);
}

const Renderers = {
  multiple_choice: {
    render(q, container, submit, ctx = {}) {
      const order = ctx.order || q.options.map((_, i) => i);
      const correctDisplayIdx = order.indexOf(q.correct);
      order.forEach((origIdx, displayIdx) => {
        const b = document.createElement("button");
        b.textContent = q.options[origIdx];
        b.onclick = () => submit({
          correct: origIdx === q.correct,
          selected: displayIdx,
          correctDisplayIdx,
        });
        container.appendChild(b);
      });
    },
    showResult(q, container, result) {
      const btns = container.getElementsByTagName("button");
      for (const b of btns) b.disabled = true;
      if (result.selected !== undefined)
        btns[result.selected].classList.add(result.correct ? "correct-btn" : "wrong-btn");
      if (!result.correct && result.correctDisplayIdx !== undefined)
        btns[result.correctDisplayIdx].classList.add("correct-btn");
    },
    correctDisplay(q) { return q.options[q.correct]; },
  },
  type_in: {
    render(q, container, submit, ctx = {}) {
      const saved = ctx.saved || {};
      const input = document.createElement("input");
      input.type = "text";
      input.className = "type-input";
      input.placeholder = "Napiš odpověď…";
      input.autocomplete = "off";
      input.spellcheck = false;
      if (saved.answered) {
        input.value = saved.userAnswer || "";
        input.disabled = true;
        input.classList.add(saved.correct ? "correct-input" : "wrong-input");
      }
      const btn = document.createElement("button");
      btn.className = "check-btn";
      btn.textContent = "Zkontrolovat";
      if (saved.answered) btn.disabled = true;
      function check() {
        const val = input.value.trim();
        if (!val) return;
        const ok = [q.answer, ...(q.accept || [])].some(c => normalize(c) === normalize(val));
        input.disabled = btn.disabled = true;
        input.classList.add(ok ? "correct-input" : "wrong-input");
        submit({ correct: ok, userAnswer: val });
      }
      btn.onclick = check;
      input.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
      container.appendChild(input);
      container.appendChild(btn);
    },
    showResult() {},
    correctDisplay(q) { return q.answer; },
  },
};

const Quiz = (() => {
  const state = { topic: null, questions: [], idx: 0, answers: {} };
  const $ = id => document.getElementById(id);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function shuffleOrder(n) {
    return shuffle(Array.from({ length: n }, (_, i) => i));
  }
  const current = () => state.questions[state.idx];
  const lang = () => Store.getLang("en");
  const correctCount = () => Object.values(state.answers).filter(a => a.answered && a.correct).length;
  const answeredCount = () => Object.values(state.answers).filter(a => a.answered).length;

  function questionTopic(q) {
    for (const t in QUESTION_BANK) {
      if (QUESTION_BANK[t].some(x => x.id === q.id)) return t;
    }
    return state.topic;
  }

  function home() {
    $("start-screen").style.display = "block";
    $("quiz-container").style.display = "none";
    $("score-container").style.display = "none";
    $("reading-container").style.display = "none";
  }

  function start(topic) {
    if (topic === "mixed") {
      const all = [];
      for (const t in QUESTION_BANK) all.push(...QUESTION_BANK[t]);
      if (all.length < 5) { alert("Nedostatek otázek."); return; }
      state.questions = shuffle([...all]).slice(0, 15);
    } else {
      if (!QUESTION_BANK[topic] || !QUESTION_BANK[topic].length) {
        alert("Toto téma nemá žádné otázky.");
        return;
      }
      state.questions = shuffle([...QUESTION_BANK[topic]]).slice(0, 10);
    }
    state.topic = topic;
    state.idx = 0;
    state.answers = {};
    Store.setTopic(topic);
    $("start-screen").style.display = "none";
    $("quiz-container").style.display = "block";
    $("score-container").style.display = "none";
    $("reading-container").style.display = "none";
    render();
  }

  function render() {
    const q = current();
    if (!state.answers[q.id]) state.answers[q.id] = {};
    const saved = state.answers[q.id];

    $("progress").textContent = `Otázka ${state.idx + 1} z ${state.questions.length}`;
    $("sentence").innerHTML = renderPrompt(q);
    $("hint").textContent = getLocalized(q.hint, lang());

    const fb = $("feedback");
    fb.className = "feedback";
    fb.style.display = "";
    fb.textContent = "";
    $("explanation").textContent = "";

    const opts = $("options");
    opts.innerHTML = "";
    const R = Renderers[q.type];
    if (!R) { opts.textContent = `Neznámý typ: ${q.type}`; return; }

    let order;
    if (q.type === "multiple_choice") {
      if (!saved.order) saved.order = shuffleOrder(q.options.length);
      order = saved.order;
    }

    R.render(q, opts, result => onSubmitAnswer(q, result), { order, saved });

    if (saved.answered) {
      R.showResult(q, opts, saved);
      showFeedback(q, saved);
    }
    updateNavButtons();
  }

  function onSubmitAnswer(q, result) {
    const saved = state.answers[q.id];
    if (saved.answered) return;
    saved.answered = true;
    saved.correct = result.correct;
    if (q.type === "multiple_choice") {
      saved.selected = result.selected;
      saved.correctDisplayIdx = result.correctDisplayIdx;
    } else if (q.type === "type_in") {
      saved.userAnswer = result.userAnswer;
    }
    Renderers[q.type].showResult(q, $("options"), saved);
    showFeedback(q, saved);
    Store.recordAnswer(q.id, saved.correct, questionTopic(q));
    updateNavButtons();
  }

  function showFeedback(q, saved) {
    const fbEl = $("feedback");
    if (saved.correct) {
      fbEl.textContent = "Správně! 🎉";
      fbEl.classList.add("correct");
    } else {
      fbEl.textContent = `Chyba. Správně: ${Renderers[q.type].correctDisplay(q)}`;
      fbEl.classList.add("wrong");
    }
    $("explanation").textContent = getLocalized(q.explanation, lang());
  }

  function updateNavButtons() {
    const prevBtn = $("prev-btn");
    const nextBtn = $("next-btn");
    if (!prevBtn || !nextBtn) return;
    prevBtn.disabled = state.idx === 0;
    const isLast = state.idx === state.questions.length - 1;
    nextBtn.textContent = isLast ? "Dokončit test" : "Další →";
  }

  function prev() {
    if (state.idx === 0) return;
    state.idx--;
    render();
  }

  function next() {
    if (state.idx < state.questions.length - 1) {
      state.idx++;
      render();
    } else {
      finish();
    }
  }

  function finish() {
    $("quiz-container").style.display = "none";
    $("score-container").style.display = "block";
    const total = state.questions.length;
    const answered = answeredCount();
    const correct = correctCount();
    $("final-score").textContent = `${correct} / ${total}`;
    const parts = [];
    if (state.topic !== "mixed") {
      const s = Store.topicStats(state.topic);
      if (s.seen) parts.push(`Celkem: ${s.correct} / ${s.seen} (${Math.round(100 * s.correct / s.seen)} %)`);
    }
    const unanswered = total - answered;
    if (unanswered > 0) parts.push(`Nezodpovězeno: ${unanswered}`);
    $("lifetime").textContent = parts.join(" · ");
  }

  function refreshExplanation() {
    const saved = state.answers[current().id];
    if (saved && saved.answered) {
      $("explanation").textContent = getLocalized(current().explanation, lang());
      $("hint").textContent = getLocalized(current().hint, lang());
    }
  }

  return { start, next, prev, home, finish, refreshExplanation, state };
})();