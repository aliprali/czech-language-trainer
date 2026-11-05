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
    if (s.note) parts.push(escapeHtml(s.note));
    let credit = parts.join(", ");
    if (s.url) credit += ` · <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">odkaz</a>`;
    $("reading-credit").innerHTML = credit;

    $("reading-body").innerHTML = renderText(t);
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

  return { start, home, state };
})();