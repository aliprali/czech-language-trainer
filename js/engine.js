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

const Tooltip = (() => {
  let el, hideTimer;

  function get() {
    if (!el) el = document.getElementById("hover-tooltip");
    return el;
  }

  function build(tableId, instanceNote) {
    if (typeof DECLENSION_TABLES === "undefined") {
      return `<div style="color:#c0392b;font-weight:600;">Chyba: data/tables.js se nenačetl.</div>`;
    }
    const t = DECLENSION_TABLES[tableId];
    if (!t) return `<div style="color:#c0392b;">Neznámá tabulka: ${escapeHtml(tableId)}</div>`;
    const lang = Store.getLang("en");
    const pick = o => (typeof o === "object" ? (o[lang] || o.en || o.cs) : o);
    const title = pick(t.label) || tableId;

    let html = `<h4>${escapeHtml(title)}</h4>`;
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
    if (instanceNote) {
      html += `<div class="instance-note">${escapeHtml(instanceNote)}</div>`;
    }
    return html;
  }

  function show(target, tableId, instanceNote) {
    clearTimeout(hideTimer);
    const e = get();
    e.innerHTML = build(tableId, instanceNote);
    e.classList.add("visible");

    const r = target.getBoundingClientRect();
    const eR = e.getBoundingClientRect();
    let top = r.bottom + 6;
    let left = r.left;
    if (left + eR.width > window.innerWidth - 10) left = window.innerWidth - eR.width - 10;
    if (top + eR.height > window.innerHeight - 10) top = r.top - eR.height - 6;
    e.style.top = Math.max(10, top) + "px";
    e.style.left = Math.max(10, left) + "px";
  }

  function hide() {
    const e = get();
    if (e) e.classList.remove("visible");
  }

  return { show, hide };
})();

document.addEventListener("mouseover", e => {
  const word = e.target.closest(".hoverable");
  const tip  = e.target.closest("#hover-tooltip");
  if (word) Tooltip.show(word, word.dataset.table, word.dataset.note || null);
  else if (tip) clearTimeout(window.__tt);
  else Tooltip.hide();
});

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