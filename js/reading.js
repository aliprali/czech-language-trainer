const Reading = (() => {
  const state = { currentText: null };
  const $ = id => document.getElementById(id);

  function home() {
    $("start-screen").style.display = "block";
    $("quiz-container").style.display = "none";
    $("score-container").style.display = "none";
    $("reading-container").style.display = "none";
  }

  function start(textId) {
    const text = TEXTS.find(t => t.id === textId);
    if (!text) { alert("Text nenalezen."); return; }
    state.currentText = text;
    $("start-screen").style.display = "none";
    $("quiz-container").style.display = "none";
    $("score-container").style.display = "none";
    $("reading-container").style.display = "block";
    render();
    window.scrollTo(0, 0);
  }

  function render() {
    const t = state.currentText;
    $("reading-title").textContent = t.title;
    $("reading-level").textContent = t.level || "";

    const s = t.source || {};
    const parts = [];
    if (s.author) parts.push(escapeHtml(s.author));
    if (s.title) parts.push("„" + escapeHtml(s.title) + '"');
    if (s.publication) parts.push(escapeHtml(s.publication));
    if (s.date) parts.push(escapeHtml(s.date));
    if (s.note) parts.push(escapeHtml(getLocalized(s.note, Store.getLang("en"))));
    let credit = parts.join(", ");
    if (s.url) credit += ` · <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">odkaz</a>`;
    $("reading-credit").innerHTML = credit;

    $("reading-body").innerHTML = renderText(t);

    renderPractice(t);
  }

  function renderText(t) {
    let html = escapeHtml(t.text);
    html = html.replace(/\{\{(\w+)\}\}/g, (m, key) => {
      const w = t.words[key];
      if (!w) return `<span class="missing">[${escapeHtml(key)}]</span>`;
      const surface = w.surface || key;
      return `<span class="hoverable" data-word="${escapeHtml(key)}">${escapeHtml(surface)}</span>`;
    });
    return html;
  }

  function renderPractice(t) {
    const el = $("reading-practice");
    if (!el) return;

    if (!t.practiceTopic) {
      el.style.display = "none";
      return;
    }

    // Spočítáme VŠECHNY otázky, které mají source shodný s ID textu (např. "kometa")
    let count = 0;
    if (typeof QUESTION_BANK !== "undefined") {
      for (const tKey in QUESTION_BANK) {
        count += QUESTION_BANK[tKey].filter(q => q.source === t.id).length;
      }
    }

    el.innerHTML = `
      <div class="reading-practice-label">Procvič si slovíčka a mluvnici z tohoto textu:</div>
      <button class="practice-btn" onclick="Quiz.start('${escapeHtml(t.practiceTopic)}')">
        Procvičit slovíčka z textu (${count} otázek)
      </button>`;
    el.style.display = "block";
  }

  return { start, home, state };
})();