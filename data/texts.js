const TEXTS = [
  {
    id: "txt-001",
    title: "Zelená kometa nad Českem",
    level: "B1",
    source: {
      publication: "Deník.cz",
      title: "Už brzy Češi na obloze uvidí zelenou kometu",
      date: "2026-11-03",
      url: "https://www.denik.cz/vesmir/vesmir-zelena-kometa-cesko-listopad-kdy-a-jak-nejlepe-pozorovat/",
      note: "Upraveno a zkráceno pro výuku."
    },
    text: "K Zemi se {{w1}} {{w2}} 161P/Hartley-IRAS. Koncem {{w3}} {{w5}} nejblíže {{w4}}, a proto {{w5}} {{w6}}. Astronom Martin Ratcliffe {{w7}}: „Nejblíže k {{w4}} bude 27. listopadu.\" {{w8}} v {{w9}} {{w18}} mohou {{w10}} na {{w11}} v {{w12}} Orla. {{w13}} ale {{w14}} a musí být daleko od {{w15}} {{w16}}. {{w2}} se k nám už {{w17}} dalších čtyřicet let.",

    words: {
      w1: {
        surface: "vrací", pos: "verb", lemma: "vracet",
        gloss: { en: "returns", cs: "vrací se" },
        aspect: "imperfective", aspect_pair: "vrátit",
        features: { tense: "present", person: "3", number: "sg" },
        conjugation: {
          present: { ja: "vracím", ty: "vracíš", on: "vrací", my: "vracíme", vy: "vracíte", oni: "vracejí" },
          past: { on_m: "vracel", on_f: "vracela", on_n: "vracelo", oni_m: "vraceli", oni_f: "vracely" },
          future: "budu vracet"
        },
        governs: [],
        examples: ["Vrací se domů."]
      },
      w2: {
        surface: "kometa", pos: "noun", lemma: "kometa",
        gloss: { en: "comet", cs: "kometa" },
        features: { case: "nominativ", number: "sg", gender: "fem" },
        vzor: "žena"
      },
      w3: {
        surface: "listopadu", pos: "noun", lemma: "listopad",
        gloss: { en: "November", cs: "listopad" },
        features: { case: "genitiv", number: "sg", gender: "masc_inanim" },
        vzor: "hrad",
        note: "genitiv po předložce koncem"
      },
      w4: {
        surface: "Slunci", pos: "noun", lemma: "Slunce",
        gloss: { en: "the Sun", cs: "Slunce" },
        features: { case: "dativ", number: "sg", gender: "neut" },
        vzor: "moře",
        note: "dativ po k / nejblíže; stejný tvar pro lokál"
      },
      w5: {
        surface: "bude", pos: "verb", lemma: "být",
        gloss: { en: "will be", cs: "bude" },
        aspect: "imperfective",
        features: { tense: "future", person: "3", number: "sg" },
        conjugation: {
          present: { ja: "jsem", ty: "jsi", on: "je", my: "jsme", vy: "jste", oni: "jsou" },
          past: { on_m: "byl", on_f: "byla", on_n: "bylo", oni_m: "byli", oni_f: "byly" },
          future: "budu, budeš, bude, budeme, budete, budou"
        },
        governs: [],
        examples: ["Zítra bude hezky."]
      },
      w6: {
        surface: "jasnější", pos: "adj", lemma: "jasný",
        gloss: { en: "brighter", cs: "jasnější" },
        features: { case: "nominativ", number: "sg", gender: "fem", degree: "komparativ" },
        vzor: "jarní",
        note: "shoda s podmětem kometa (fem. sg.)"
      },
      w7: {
        surface: "řekl", pos: "verb", lemma: "říct",
        gloss: { en: "said", cs: "řekl" },
        aspect: "perfective", aspect_pair: "říkat",
        features: { tense: "past", person: "3", number: "sg", gender: "masc" },
        conjugation: {
          present: null,
          past: { on_m: "řekl", on_f: "řekla", on_n: "řeklo", oni_m: "řekli", oni_f: "řekly" },
          future: "řeknu, řekneš, řekne, řekneme, řeknete, řeknou"
        },
        governs: ["akuzativ", "dativ"],
        examples: ["Řekl mi pravdu."]
      },
      w8: {
        surface: "Lidé", pos: "noun", lemma: "člověk",
        gloss: { en: "people", cs: "lidé" },
        features: { case: "nominativ", number: "pl", gender: "masc_anim" },
        vzor: "pan",
        note: "nepravidelné: člověk → lidé"
      },
      w9: {
        surface: "Česku", pos: "noun", lemma: "Česko",
        gloss: { en: "Czechia", cs: "Česko" },
        features: { case: "lokál", number: "sg", gender: "neut" },
        vzor: "město",
        note: "lokál po předložce v"
      },
      w10: {
        surface: "vidět", pos: "verb", lemma: "vidět",
        gloss: { en: "to see", cs: "vidět" },
        aspect: "imperfective", aspect_pair: "uvidět",
        features: { tense: "infinitive" },
        conjugation: {
          present: { ja: "vidím", ty: "vidíš", on: "vidí", my: "vidíme", vy: "vidíte", oni: "vidí" },
          past: { on_m: "viděl", on_f: "viděla", on_n: "vidělo", oni_m: "viděli", oni_f: "viděly" },
          future: "budu vidět"
        },
        governs: ["akuzativ"],
        examples: ["Vidím tě."]
      },
      w11: {
        surface: "obloze", pos: "noun", lemma: "obloha",
        gloss: { en: "sky", cs: "obloha" },
        features: { case: "lokál", number: "sg", gender: "fem" },
        vzor: "žena",
        note: "h→z: obloha → obloze; po předložce na (kde?)"
      },
      w12: {
        surface: "souhvězdí", pos: "noun", lemma: "souhvězdí",
        gloss: { en: "constellation", cs: "souhvězdí" },
        features: { case: "lokál", number: "sg", gender: "neut" },
        vzor: "stavení",
        note: "po předložce v"
      },
      w13: {
        surface: "Potřebují", pos: "verb", lemma: "potřebovat",
        gloss: { en: "they need", cs: "potřebují" },
        aspect: "imperfective",
        features: { tense: "present", person: "3", number: "pl" },
        conjugation: {
          present: { ja: "potřebuji", ty: "potřebuješ", on: "potřebuje", my: "potřebujeme", vy: "potřebujete", oni: "potřebují" },
          past: { on_m: "potřeboval", on_f: "potřebovala", on_n: "potřebovalo", oni_m: "potřebovali", oni_f: "potřebovaly" },
          future: "budu potřebovat"
        },
        governs: ["akuzativ"],
        examples: ["Potřebuji pomoc."]
      },
      w14: {
        surface: "dalekohled", pos: "noun", lemma: "dalekohled",
        gloss: { en: "telescope", cs: "dalekohled" },
        features: { case: "akuzativ", number: "sg", gender: "masc_inanim" },
        vzor: "hrad",
        driven_by: "w13"
      },
      w15: {
        surface: "městských", pos: "adj", lemma: "městský",
        gloss: { en: "city (adj.)", cs: "městský" },
        features: { case: "genitiv", number: "pl" },
        vzor: "mladý",
        note: "genitiv po předložce od"
      },
      w16: {
        surface: "světel", pos: "noun", lemma: "světlo",
        gloss: { en: "lights", cs: "světla" },
        features: { case: "genitiv", number: "pl", gender: "neut" },
        vzor: "město",
        note: "genitiv po předložce od"
      },
      w17: {
        surface: "nevrátí", pos: "verb", lemma: "nevrátit",
        gloss: { en: "will not return", cs: "nevrátí se" },
        aspect: "perfective", aspect_pair: "nevracet",
        features: { tense: "future", person: "3", number: "sg" },
        conjugation: {
          present: null,
          past: { on_m: "nevrátil", on_f: "nevrátila", on_n: "nevrátilo", oni_m: "nevrátili", oni_f: "nevrátily" },
          future: "nevrátím, nevrátíš, nevrátí, nevrátíme, nevrátíte, nevrátí"
        },
        governs: [],
        examples: ["Už se nevrátí."]
      },
      w18: {
        surface: "ji", pos: "pronoun", lemma: "ona",
        gloss: { en: "her / it", cs: "ji" },
        features: { case: "akuzativ", number: "sg", gender: "fem" },
        driven_by: "w10",
        note: "klitikon; akuzativ fem. sg. od ona"
      }
    }
  }
];