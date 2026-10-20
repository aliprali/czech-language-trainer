const Store = (() => {
  const KEY = "czechTrainer.v1";
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
  const write = d => { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} };

  return {
    getTopic(fallback) { return read().topic || fallback; },
    setTopic(t)        { const d = read(); d.topic = t; write(d); },
    getLang(fallback)  { return read().lang || fallback; },
    setLang(l)         { const d = read(); d.lang = l; write(d); },
    recordAnswer(id, correct, topic) {
      const d = read();
      const h = (d.history = d.history || {});
      const e = (h[id] = h[id] || { seen: 0, correct: 0, topic });
      e.seen++; if (correct) e.correct++;
      write(d);
    },
    topicStats(topic) {
      const h = read().history || {};
      let seen = 0, correct = 0;
      for (const id in h) if (h[id].topic === topic) { seen += h[id].seen; correct += h[id].correct; }
      return { seen, correct };
    },
  };
})();