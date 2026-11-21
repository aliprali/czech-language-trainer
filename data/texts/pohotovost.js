const TEXT_POHOTOVOST = {
  id: "pohotovost",
  title: "Byl jsem v práci na pohotovosti",
  level: "B1",
  category: "story",
  practiceTopic: "text_04_pohotovost",
  source: {
    author: "Vlastní zápis",
    note: { cs: "Podle poznámek z hodiny", en: "Based on class notes" }
  },
  text: `Minulý týden jsem měl {{pohotovost}}. Ve čtvrtek v sedm ráno mi zavolali: jeden z našich {{kotel}} se rozbil. Pracuji v {{teplarna}}, kde vyrábíme teplo a elektřinu pro celé město, takže takový problém se musí řešit hned.

Celý víkend jsem pracoval – dva dny od sedmi ráno do osmi večer. Nejdřív jsem potřeboval {{sehnat}} pracovníky na úklid. Našel jsem je a oni uklízeli, zatímco jsme my připravovali všechno ostatní.

Kotel je vysoký asi čtyřicet metrů a má možná padesát tisíc litrů vody. Ta voda se vaří a dělá {{para}}. Pára pohání {{turbina}}, turbína vyrábí elektřinu a taky teplou vodu pro město.

Na {{plast}} kotle jsme našli {{prasklina}}. Byla jen pět milimetrů dlouhá a asi dva milimetry široká, ale i tak byla nebezpečná. Když kotel tekl, mohlo to poškodit věci kolem. Proto jsme nejdřív museli uklidit, a potom jsme měřili kolem praskliny, abychom věděli, kolik toho musíme opravit.

Použili jsme {{leseni}}. Celý pátek jsme pracovali na tomto problému. Nemohli jsme opravit hlavní prasklinu, dokud jsme nevyřešili všechno kolem. Po přípravě jsme mohli prasklinu opravit a museli jsme {{vymenit}} pět {{trubka}}.

Během té pohotovosti {{uniknout}} možná pět tisíc litrů vody. To je pořád dost – pět tisíc litrů by {{stacit}} třeba na malé koupaliště. Ztráceli jsme asi pět set litrů za hodinu. Kdybychom to neopravili, ztratili bychom víc a víc.

V kotli je {{tlak}} šedesát barů. To je dvacetkrát vyšší tlak než v {{pneumatika}} auta, a {{odpovidat}} to {{hloubka}} dvaceti metrů pod vodou.`,
  words: {
    pohotovost: {
      surface: "pohotovost",
      lemma: "pohotovost",
      pos: "noun",
      gloss: { cs: "pohotovost / služba v pohotovosti", en: "on-call duty" },
      features: { case: "akuzativ", number: "sg", gender: "f" },
      vzor: "kost"
    },
    kotel: {
      surface: "kotlů",
      lemma: "kotel",
      pos: "noun",
      gloss: { cs: "kotel", en: "boiler" },
      features: { case: "genitiv", number: "pl", gender: "m" },
      vzor: "stroj",
      note: { cs: "po „z“ + genitiv; -e- vypuštěno: kotel → kotlů", en: "after “z” + genitive; fleeting -e-: kotel → kotlů" }
    },
    teplarna: {
      surface: "teplárně",
      lemma: "teplárna",
      pos: "noun",
      gloss: { cs: "teplárna", en: "heating plant" },
      features: { case: "lokál", number: "sg", gender: "f" },
      vzor: "žena",
      note: { cs: "r→ř: teplárna → teplárně", en: "r→ř: teplárna → teplárně" }
    },
    sehnat: {
      surface: "sehnat",
      lemma: "sehnat",
      pos: "verb",
      gloss: { cs: "sehnat, obstarat", en: "get / find" },
      aspect: "perfective",
      aspect_pair: "sehnat (pf.) / shánět (impf.)",
      governs: ["akuzativ"],
      conjugation: {
        past: { on_m: "sehnal", on_f: "sehnala", on_n: "sehnalo", oni_m: "sehnali", oni_f: "sehnaly" }
      }
    },
    para: {
      surface: "páru",
      lemma: "pára",
      pos: "noun",
      gloss: { cs: "pára", en: "steam" },
      features: { case: "akuzativ", number: "sg", gender: "f" },
      vzor: "žena"
    },
    turbina: {
      surface: "turbínu",
      lemma: "turbína",
      pos: "noun",
      gloss: { cs: "turbína", en: "turbine" },
      features: { case: "akuzativ", number: "sg", gender: "f" },
      vzor: "žena"
    },
    plast: {
      surface: "plášti",
      lemma: "plášť",
      pos: "noun",
      gloss: { cs: "plášť (kotle)", en: "shell / casing (of a boiler)" },
      features: { case: "lokál", number: "sg", gender: "m" },
      vzor: "stroj"
    },
    prasklina: {
      surface: "prasklinu",
      lemma: "prasklina",
      pos: "noun",
      gloss: { cs: "prasklina", en: "crack" },
      features: { case: "akuzativ", number: "sg", gender: "f" },
      vzor: "žena"
    },
    leseni: {
      surface: "lešení",
      lemma: "lešení",
      pos: "noun",
      gloss: { cs: "lešení", en: "scaffolding" },
      features: { case: "akuzativ", number: "sg", gender: "n" },
      vzor: "stavení"
    },
    vymenit: {
      surface: "vyměnit",
      lemma: "vyměnit",
      pos: "verb",
      gloss: { cs: "vyměnit", en: "replace" },
      aspect: "perfective",
      aspect_pair: "vyměnit (pf.) / vyměňovat (impf.)",
      governs: ["akuzativ"],
      conjugation: {
        past: { on_m: "vyměnil", on_f: "vyměnila", on_n: "vyměnilo", oni_m: "vyměnili", oni_f: "vyměnily" }
      }
    },
    trubka: {
      surface: "trubek",
      lemma: "trubka",
      pos: "noun",
      gloss: { cs: "trubka", en: "pipe" },
      features: { case: "genitiv", number: "pl", gender: "f" },
      vzor: "žena",
      note: { cs: "po „pěti“ (5+) → genitiv plurálu", en: "after “five” (5+) → genitive plural" }
    },
    uniknout: {
      surface: "uniklo",
      lemma: "uniknout",
      pos: "verb",
      gloss: { cs: "uniknout, vytéct", en: "leak / escape" },
      aspect: "perfective",
      aspect_pair: "uniknout (pf.) / unikat (impf.)",
      governs: ["dativ"],
      conjugation: {
        past: { on_m: "unikl", on_f: "unikla", on_n: "uniklo", oni_m: "unikli", oni_f: "unikly" }
      }
    },
    stacit: {
      surface: "stačilo",
      lemma: "stačit",
      pos: "verb",
      gloss: { cs: "stačit", en: "be enough" },
      aspect: "imperfective",
      aspect_pair: "stačit (impf.) / (pf. stačit — nemá pf. protějšek)",
      governs: ["dativ"],
      conjugation: {
        past: { on_m: "stačil", on_f: "stačila", on_n: "stačilo", oni_m: "stačili", oni_f: "stačily" }
      }
    },
    tlak: {
      surface: "tlak",
      lemma: "tlak",
      pos: "noun",
      gloss: { cs: "tlak", en: "pressure" },
      features: { case: "nominativ", number: "sg", gender: "m" },
      vzor: "stroj"
    },
    pneumatika: {
      surface: "pneumatice",
      lemma: "pneumatika",
      pos: "noun",
      gloss: { cs: "pneumatika", en: "tyre" },
      features: { case: "lokál", number: "sg", gender: "f" },
      vzor: "žena"
    },
    odpovidat: {
      surface: "odpovídá",
      lemma: "odpovídat",
      pos: "verb",
      gloss: { cs: "odpovídat (čemu)", en: "correspond (to)" },
      aspect: "imperfective",
      aspect_pair: "odpovídat (impf.) / odpovědět (pf.)",
      governs: ["dativ"],
      conjugation: {
        present: { ja: "odpovídám", ty: "odpovídáš", on: "odpovídá", my: "odpovídáme", vy: "odpovídáte", oni: "odpovídají" }
      }
    },
    hloubka: {
      surface: "hloubce",
      lemma: "hloubka",
      pos: "noun",
      gloss: { cs: "hloubka", en: "depth" },
      features: { case: "dativ", number: "sg", gender: "f" },
      vzor: "žena",
      driven_by: "odpovidat",
      note: { cs: "k→c: hloubka → hloubce (dativ po „odpovídat“)", en: "k→c: hloubka → hloubce (dative after “odpovídat”)" }
    }
  }
};