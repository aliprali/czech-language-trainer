function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function regexEscape(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
    return `<div style="color:#c0392b;font-weight:600;">Chyba: data/tables.js se nenačetl.</div>`;
  }
  const t = DECLENSION_TABLES[vzorId];
  if (!t) return `<div style="color:#c0392b;">Neznámá tabulka: ${escapeHtml(vzorId)}</div>`;
  const lang = Store.getLang("en");
  const pick = o => (typeof o === "object" ? (o[lang] || o.en || o.cs) : o);
  const title = pick(t.label) || vzorId;

  let html = opts.showTitle === false
    ? `<div class="vzor-title">Vzor: ${escapeHtml(title)}</div>`
    : `<h4>${escapeHtml(title)}</h4>`;
  if (t.example) html += `<div class="example">${escapeHtml(t.example)}</div>`;

  html += "<table>";
  html += "<tr>" + t.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("") + "</tr>";
  for (const row of t.rows) {
    html += "<tr>" + row.map(c => `<td>${escapeHtml(c)}</td>`).join("") + "</tr>";
  }
  html += "</table>";

  if (t.alternations) {
    const alt = pick(t.alternations);
    if (alt) html += `<div class="alt-note">${escapeHtml(alt)}</div>`;
  }
  if (t.note) {
    const n = pick(t.note);
    if (n) html += `<div class="example" style="margin-top:8px;font-style:normal;">${escapeHtml(n)}</div>`;
  }
  return html;
}

function buildVerbPanel(w) {
  let html = "";

  if (w.features) {
    const parts = [];
    if (w.features.tense) parts.push(w.features.tense);
    if (w.features.person) parts.push(w.features.person + ". os.");
    if (w.features.number) parts.push(w.features.number);
    if (parts.length) html += `<div class="features">${escapeHtml(parts.join(" · "))}</div>`;
  }
  if (w.aspect_pair) {
    html += `<div class="aspect-pair"><b>Vidová dvojice:</b> ${escapeHtml(w.aspect_pair)}</div>`;
  }

  if (w.conjugation) {
    const c = w.conjugation;
    if (c.present) {
      const labels = { ja: "já", ty: "ty", on: "on/ona/ono", my: "my", vy: "vy", oni: "oni/ony/ona" };
      html += `<div class="verb-section"><div class="verb-section-title">Přítomný čas</div><table class="conj-table">`;
      for (const k of ["ja","ty","on","my","vy","oni"]) {
        if (c.present[k]) html += `<tr><td>${labels[k]}</td><td>${escapeHtml(c.present[k])}</td></tr>`;
      }
      html += `</table></div>`;
    }
    if (c.past) {
      const labels = { on_m: "on (m.)", on_f: "ona (f.)", on_n: "ono (n.)", oni_m: "oni (m.)", oni_f: "ony (f.)" };
      html += `<div class="verb-section"><div class="verb-section-title">Minulý čas</div><table class="conj-table">`;
      for (const k of ["on_m","on_f","on_n","oni_m","oni_f"]) {
        if (c.past[k]) html += `<tr><td>${labels[k]}</td><td>${escapeHtml(c.past[k])}</td></tr>`;
      }
      html += `</table></div>`;
    }
    if (c.future) {
      html += `<div class="verb-section"><div class="verb-section-title">Budoucí čas</div><div class="future">${escapeHtml(c.future)}</div></div>`;
    }
  }

  if (w.governs && w.governs.length) {
    html += `<div class="governs"><b>Váže:</b> ${w.governs.map(escapeHtml).join(", ")}</div>`;
  }
  if (w.examples && w.examples.length) {
    html += `<div class="examples"><b>Příklad:</b> ${w.examples.map(escapeHtml).join(" · ")}</div>`;
  }
  return html;
}

function buildNounAdjPanel(w) {
  let html = "";
  if (w.features) {
    const parts = [];
    if (w.features.case) parts.push(w.features.case);
    if (w.features.number) parts.push(w.features.number);
    if (w.features.gender) parts.push(w.features.gender);
    if (w.features.degree) parts.push(w.features.degree);
    if (parts.length) html += `<div class="features">${escapeHtml(parts.join(" · "))}</div>`;
  }
  if (w.note) html += `<div class="instance-note">${escapeHtml(w.note)}</div>`;

  if (w.driven_by && typeof Reading !== "undefined" && Reading.state.currentText) {
    const driver = Reading.state.currentText.words[w.driven_by];
    if (driver) {
      const name = driver.lemma || driver.surface || w.driven_by;
      html += `<div class="driven-by">Řízeno: <b>${escapeHtml(name)}</b></div>`;
    }
  }
  if (w.vzor) html += buildVzorTable(w.vzor, { showTitle: false });
  return html;
}

function buildPronounPanel(w) {
  let html = "";
  if (w.features) {
    const parts = [];
    if (w.features.case) parts.push(w.features.case);
    if (w.features.number) parts.push(w.features.number);
    if (w.features.gender) parts.push(w.features.gender);
    if (parts.length) html += `<div class="features">${escapeHtml(parts.join(" · "))}</div>`;
  }
  if (w.note) html += `<div class="instance-note">${escapeHtml(w.note)}</div>`;

  if (w.driven_by && typeof Reading !== "undefined" && Reading.state.currentText) {
    const driver = Reading.state.currentText.words[w.driven_by];
    if (driver) {
      const name = driver.lemma || driver.surface || w.driven_by;
      html += `<div class="driven-by">Řízeno: <b>${escapeHtml(name)}</b></div>`;
    }
  }

  if (w.lemma === "ona") {
    html += `<div class="vzor-title">Osobní zájmeno: ona</div>`;
    html += `<table class="conj-table">
      <tr><td>Nom</td><td>ona</td></tr>
      <tr><td>Gen</td><td>jí / ní</td></tr>
      <tr><td>Dat</td><td>jí / ní</td></tr>
      <tr><td>Akuz</td><td>ji / ni</td></tr>
      <tr><td>Lok</td><td>ní</td></tr>
      <tr><td>Instr</td><td>jí / ní</td></tr>
    </table>`;
  }
  return html;
}

function buildWordPanel(wordKey) {
  if (typeof Reading === "undefined" || !Reading.state.currentText) {
    return `<div style="color:#c0392b;">Text není načten.</div>`;
  }
  const w = Reading.state.currentText.words[wordKey];
  if (!w) return `<div style="color:#c0392b;">Neznámé slovo: ${escapeHtml(wordKey)}</div>`;

  // Reflexive particle — delegate to the verb it belongs to
  if (w.pos === "particle" && w.reflexive_of) {
    const verb = Reading.state.currentText.words[w.reflexive_of];
    if (verb) {
      const lang = Store.getLang("en");
      const verbLemma = verb.lemma || verb.surface;
      let html = `<h4>${escapeHtml(w.surface)} <span class="surface">zvratná částice</span></h4>`;
      html += `<div class="gloss">Zvratná částice patří k slovesu <b>${escapeHtml(verbLemma)}</b>. Ve větě může stát jinde než sloveso, ale vždy k němu patří.</div>`;
      if (w.gloss) {
        const g = typeof w.gloss === "object" ? (w.gloss[lang] || w.gloss.en || w.gloss.cs || "") : w.gloss;
        if (g) html += `<div class="instance-note">${escapeHtml(g)}</div>`;
      }
      html += `<div class="vzor-title">Sloveso ${escapeHtml(verbLemma)}${verb.reflexive ? " " + escapeHtml(verb.reflexive) : ""}</div>`;
      html += buildVerbPanel(verb);
      return html;
    }
  }

  const lang = Store.getLang("en");
  const surface = w.surface || wordKey;
  const lemma = w.lemma || surface;
  const displayLemma = w.reflexive ? `${lemma} ${w.reflexive}` : lemma;

  let html = "<h4>" + escapeHtml(displayLemma);
  if (w.surface && w.surface !== w.lemma) html += ` <span class="surface">(${escapeHtml(w.surface)})</span>`;
  if (w.aspect) {
    const badge = w.aspect === "perfective" ? "dokonavé" : "nedokonavé";
    html += ` <span class="verb-badge ${w.aspect}">${badge}</span>`;
  }
  html += "</h4>";

  if (w.reflexive) {
    html += `<div class="reflexive-note">Zvratné sloveso — částice <b>${escapeHtml(w.reflexive)}</b>.</div>`;
  }

  if (w.gloss) {
    const g = typeof w.gloss === "object" ? (w.gloss[lang] || w.gloss.en || w.gloss.cs || "") : w.gloss;
    if (g) html += `<div class="gloss">${escapeHtml(g)}</div>`;
  }

  if (w.pos === "verb") html += buildVerbPanel(w);
  else if (w.pos === "pronoun") html += buildPronounPanel(w);
  else html += buildNounAdjPanel(w);
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

    // Highlight the governing word (e.g., the verb whose case this noun takes)
    if (w.driven_by) {
      const el = document.querySelector(`.hoverable[data-word="${w.driven_by}"]`);
      if (el) el.classList.add("driver-highlight");
    }

    // Highlight the reflexive partner — verb ↔ particle
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

function getLocalized(field, lang) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] || field.en || field.cs || Object.values(field)[0] || "";
}

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