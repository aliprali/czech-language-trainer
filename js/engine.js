// Language display names for the language selector dropdown
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
    render(q, container, submit) {
      q.options.forEach((opt, i) => {
        const b = document.createElement("button");
        b.textContent = opt;
        b.onclick = () => submit({ correct: i === q.correct, selected: i });
        container.appendChild(b);
      });
    },
    showResult(q, container, result) {
      const btns = container.getElementsByTagName("button");
      for (const b of btns) b.disabled = true;
      if (result.selected !== undefined)
        btns[result.selected].classList.add(result.correct ? "correct-btn" : "wrong-btn");
      if (!result.correct) btns[q.correct].classList.add("correct-btn");
    },
    correctDisplay(q) { return q.options[q.correct]; },
  },
  type_in: {
    render(q, container, submit) {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "type-input";
      input.placeholder = "Napiš odpověď…";
      input.autocomplete = "off";
      input.spellcheck = false;

      const btn = document.createElement("button");
      btn.className = "check-btn";
      btn.textContent = "Zkontrolovat";

      function check() {
        const val = input.value.trim();
        if (!val) return;
        const ok = [q.answer, ...(q.accept || [])].some(c => normalize(c) === normalize(val));
        input.disabled = btn.disabled = true;
        input.classList.add(ok ? "correct-input" : "wrong-input");
        submit({ correct: ok });
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
  const state = { topic: null, questions: [], idx: 0, score: 0, answered: false };
  const $ = id => document.getElementById(id);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const current = () => state.questions[state.idx];
  const lang = () => Store.getLang("en");

  function home() {
    $("start-screen").style.display = "block";
    $("quiz-container").style.display = "none";
    $("score-container").style.display = "none";
  }

  function start(topic) {
    if (!QUESTION_BANK[topic] || !QUESTION_BANK[topic].length) {
      alert("Toto téma nemá žádné otázky.");
      return;
    }
    state.topic = topic;
    state.questions = shuffle([...QUESTION_BANK[topic]]).slice(0, 10);
    state.idx = 0;
    state.score = 0;
    state.answered = false;
    Store.setTopic(topic);
    $("start-screen").style.display = "none";
    $("quiz-container").style.display = "block";
    $("score-container").style.display = "none";
    render();
  }

  function render() {
    const q = current();
    state.answered = false;

    $("progress").textContent = `Otázka ${state.idx + 1} z ${state.questions.length}`;
    $("sentence").textContent = q.prompt;
    $("hint").textContent = getLocalized(q.hint, lang());

    const fb = $("feedback");
    fb.className = "feedback";
    fb.style.display = "";
    fb.textContent = "";
    $("explanation").textContent = "";
    $("next-button").style.display = "none";

    const opts = $("options");
    opts.innerHTML = "";
    const R = Renderers[q.type];
    if (!R) { opts.textContent = `Neznámý typ: ${q.type}`; return; }

    R.render(q, opts, result => {
      if (state.answered) return;
      state.answered = true;
      R.showResult(q, opts, result);

      const fbEl = $("feedback");
      if (result.correct) {
        fbEl.textContent = "Správně! 🎉";
        fbEl.classList.add("correct");
        state.score++;
      } else {
        fbEl.textContent = `Chyba. Správně: ${R.correctDisplay(q)}`;
        fbEl.classList.add("wrong");
      }
      $("explanation").textContent = getLocalized(q.explanation, lang());
      Store.recordAnswer(q.id, result.correct, state.topic);
      $("next-button").style.display = "block";
    });
  }

  function next() {
    state.idx++;
    if (state.idx < state.questions.length) return render();
    $("quiz-container").style.display = "none";
    $("score-container").style.display = "block";
    $("final-score").textContent = `${state.score} / ${state.questions.length}`;
    const s = Store.topicStats(state.topic);
    $("lifetime").textContent = s.seen
      ? `Celkem: ${s.correct} / ${s.seen} (${Math.round(100 * s.correct / s.seen)} %)`
      : "";
  }

  function refreshExplanation() {
    if (state.answered) {
      $("explanation").textContent = getLocalized(current().explanation, lang());
      $("hint").textContent = getLocalized(current().hint, lang());
    }
  }

  return { start, next, home, refreshExplanation, state };
})();