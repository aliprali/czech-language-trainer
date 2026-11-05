const TEXTS = [
  {
    id: "txt-001",
    title: "Zelená kometa nad Českem",
    level: "B1",
    practiceTopic: "text_01_kometa",
    source: {
      publication: "Deník.cz",
      title: "Už brzy Češi na obloze uvidí zelenou kometu",
      date: "2026-11-03",
      url: "https://www.denik.cz/vesmir/vesmir-zelena-kometa-cesko-listopad-kdy-a-jak-nejlepe-pozorovat/",
      note: "Upraveno a zkráceno pro výuku."
    },
    text: "{{w0a}} {{w0b}} {{w1p}} {{w1}} {{w2}} 161P/Hartley-IRAS. {{w3a}} {{w3}} {{w5}} {{w4a}} {{w4}}, a proto {{w5}} {{w6}}. Astronom Martin Ratcliffe {{w7}}: „{{w4a}} {{w0a}} {{w4}} bude {{w27}} {{w3}}.\" {{w8}} v {{w9}} {{w18}} mohou {{w10}} na {{w11}} v {{w12}} Orla. {{w13}} ale {{w14}} a musí být daleko od {{w15}} {{w16}}. {{w2}} {{w17p}} {{w0a}} {{w19}} už {{w17}} dalších čtyřicet let.",

    words: {
      w0a: {
        surface: "K", pos: "preposition", lemma: "k",
        governs: ["dativ"],
        gloss: { cs: "k", en: "to / towards" },
        note: {
          cs: "k + dativ. Zde: vracet se k + dativ (vrací se k Zemi); nejblíže k + dativ (nejblíže k Slunci); vrátit se k + dativ (nevrátí se k nám).",
          en: "k + dative. Here: vracet se k + dative (vrací se k Zemi); nejblíže k + dative (nejblíže k Slunci); vrátit se k + dative (nevrátí se k nám)."
        },
        examples: ["Vrací se k Zemi.", "Nejblíže k Slunci."]
      },
      w0b: {
        surface: "Zemi", pos: "noun", lemma: "Země",
        gloss: { cs: "Země", en: "Earth" },
        features: { case: "dativ", number: "sg", gender: "fem" },
        vzor: "růže",
        driven_by: "w0a"
      },
      w1: {
        surface: "vrací", pos: "verb", lemma: "vracet",
        reflexive: "se",
        gloss: { cs: "vrací se", en: "returns" },
        aspect: "imperfective", aspect_pair: "vrátit se",
        features: { tense: "present", person: "3", number: "sg" },
        conjugation: {
          present: { ja: "vracím", ty: "vracíš", on: "vrací", my: "vracíme", vy: "vracíte", oni: "vracejí" },
          past: { on_m: "vracel", on_f: "vracela", on_n: "vracelo", oni_m: "vraceli", oni_f: "vracely" },
          future: "budu vracet"
        },
        governs: [],
        examples: ["Vrací se domů."]
      },
      w1p: {
        surface: "se", pos: "particle", lemma: "se",
        reflexive_of: "w1",
        gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" }
      },
      w2: {
        surface: "kometa", pos: "noun", lemma: "kometa",
        gloss: { cs: "kometa", en: "comet" },
        features: { case: "nominativ", number: "sg", gender: "fem" },
        vzor: "žena"
      },
      w3a: {
        surface: "Koncem", pos: "preposition", lemma: "koncem",
        governs: ["genitiv"],
        gloss: { cs: "koncem", en: "at the end of" },
        note: {
          cs: "předložka (temporální) + genitiv",
          en: "preposition (temporal) + genitive"
        },
        examples: ["Koncem listopadu."]
      },
      w3: {
        surface: "listopadu", pos: "noun", lemma: "listopad",
        gloss: { cs: "listopad", en: "November" },
        features: { case: "genitiv", number: "sg", gender: "masc_inanim" },
        vzor: "hrad",
        note: {
          cs: "genitiv: po předložce koncem; u data (27. listopadu)",
          en: "genitive: after preposition koncem; in dates (27 listopadu)"
        }
      },
      w4: {
        surface: "Slunci", pos: "noun", lemma: "Slunce",
        gloss: { cs: "Slunce", en: "the Sun" },
        features: { case: "dativ", number: "sg", gender: "neut" },
        vzor: "moře",
        driven_by: "w0a",
        note: {
          cs: "stejný tvar pro lokál",
          en: "same form for locative"
        }
      },
      w4a: {
        surface: "nejblíže", pos: "adverb", lemma: "blízko",
        gloss: { cs: "nejblíže", en: "closest" },
        degrees: {
          positive: "blízko",
          comparative: "blíže",
          superlative: "nejblíže"
        },
        related: {
          label: { cs: "Přídavné jméno", en: "Adjective" },
          positive: { m: "blízký", f: "blízká", n: "blízké" },
          comparative: { m: "bližší", f: "bližší", n: "bližší" },
          superlative: { m: "nejbližší", f: "nejbližší", n: "nejbližší" }
        },
        note: {
          cs: "superlativ příslovce; od přídavného jména blízký",
          en: "superlative adverb; from adjective blízký"
        }
      },
      w5: {
        surface: "bude", pos: "verb", lemma: "být",
        gloss: { cs: "bude", en: "will be" },
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
        gloss: { cs: "jasnější", en: "brighter" },
        features: { case: "nominativ", number: "sg", gender: "fem", degree: "komparativ" },
        vzor: "jarní",
        degrees: {
          positive: { m: "jasný", f: "jasná", n: "jasné" },
          comparative: { m: "jasnější", f: "jasnější", n: "jasnější" },
          superlative: { m: "nejjasnější", f: "nejjasnější", n: "nejjasnější" }
        },
        note: {
          cs: "shoda s podmětem kometa (fem. sg.)",
          en: "agrees with subject kometa (fem. sg.)"
        }
      },
      w7: {
        surface: "řekl", pos: "verb", lemma: "říct",
        gloss: { cs: "řekl", en: "said" },
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
        gloss: { cs: "lidé", en: "people" },
        features: { case: "nominativ", number: "pl", gender: "masc_anim" },
        vzor: "pan",
        note: {
          cs: "nepravidelné: člověk → lidé",
          en: "irregular: člověk → lidé"
        },
        irregularTable: {
          label: { cs: "Nepravidelné skloňování", en: "Irregular declension" },
          example: "člověk / lidé",
          columns: ["", "Sg", "Pl"],
          rows: [
            ["Nom",   "člověk",               "lidé / lidi"],
            ["Gen",   "člověka",              "lidí"],
            ["Dat",   "člověku / člověkovi",  "lidem"],
            ["Akuz",  "člověka",              "lidi"],
            ["Vok",   "člověče",              "lidé"],
            ["Lok",   "člověku / člověkovi",  "lidech"],
            ["Instr", "člověkem",             "lidmi"],
          ]
        }
      },
      w9: {
        surface: "Česku", pos: "noun", lemma: "Česko",
        gloss: { cs: "Česko", en: "Czechia" },
        features: { case: "lokál", number: "sg", gender: "neut" },
        vzor: "město",
        note: {
          cs: "lokál po předložce v",
          en: "locative after preposition v"
        }
      },
      w10: {
        surface: "vidět", pos: "verb", lemma: "vidět",
        gloss: { cs: "vidět", en: "to see" },
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
        gloss: { cs: "obloha", en: "sky" },
        features: { case: "lokál", number: "sg", gender: "fem" },
        vzor: "žena",
        note: {
          cs: "h→z: obloha → obloze; po předložce na (kde?)",
          en: "h→z: obloha → obloze; after preposition na (where?)"
        }
      },
      w12: {
        surface: "souhvězdí", pos: "noun", lemma: "souhvězdí",
        gloss: { cs: "souhvězdí", en: "constellation" },
        features: { case: "lokál", number: "sg", gender: "neut" },
        vzor: "stavení",
        note: {
          cs: "po předložce v",
          en: "after preposition v"
        }
      },
      w13: {
        surface: "Potřebují", pos: "verb", lemma: "potřebovat",
        gloss: { cs: "potřebují", en: "they need" },
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
        gloss: { cs: "dalekohled", en: "telescope" },
        features: { case: "akuzativ", number: "sg", gender: "masc_inanim" },
        vzor: "hrad",
        driven_by: "w13"
      },
      w15: {
        surface: "městských", pos: "adj", lemma: "městský",
        gloss: { cs: "městský", en: "city (adj.)" },
        features: { case: "genitiv", number: "pl" },
        vzor: "mladý",
        note: {
          cs: "genitiv po předložce od",
          en: "genitive after preposition od"
        }
      },
      w16: {
        surface: "světel", pos: "noun", lemma: "světlo",
        gloss: { cs: "světla", en: "lights" },
        features: { case: "genitiv", number: "pl", gender: "neut" },
        vzor: "město",
        note: {
          cs: "genitiv po předložce od",
          en: "genitive after preposition od"
        }
      },
      w17: {
        surface: "nevrátí", pos: "verb", lemma: "nevrátit",
        reflexive: "se",
        gloss: { cs: "nevrátí se", en: "will not return" },
        aspect: "perfective", aspect_pair: "nevracet se",
        features: { tense: "future", person: "3", number: "sg" },
        conjugation: {
          present: null,
          past: { on_m: "nevrátil", on_f: "nevrátila", on_n: "nevrátilo", oni_m: "nevrátili", oni_f: "nevrátily" },
          future: "nevrátím, nevrátíš, nevrátí, nevrátíme, nevrátíte, nevrátí"
        },
        governs: [],
        examples: ["Už se nevrátí."]
      },
      w17p: {
        surface: "se", pos: "particle", lemma: "se",
        reflexive_of: "w17",
        gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" }
      },
      w18: {
        surface: "ji", pos: "pronoun", lemma: "ona",
        gloss: { cs: "ji", en: "her / it" },
        features: { case: "akuzativ", number: "sg", gender: "fem" },
        vzor: "on",
        driven_by: "w10",
        note: {
          cs: "klitikon; akuzativ fem. sg. od ona",
          en: "clitic; accusative fem. sg. of ona"
        }
      },
      w19: {
        surface: "nám", pos: "pronoun", lemma: "my",
        gloss: { cs: "nám", en: "us" },
        features: { case: "dativ", number: "pl" },
        vzor: "my",
        driven_by: "w0a"
      },
      w27: {
        surface: "27.", pos: "number", lemma: "dvacet sedm",
        gloss: { cs: "dvacátého sedmého", en: "27th (of)" },
        features: { case: "genitiv", number: "sg", gender: "masc" },
        spoken: "dvacátého sedmého",
        ordinal: {
          nom_m: "dvacátý sedmý", nom_f: "dvacátá sedmá", nom_n: "dvacáté sedmé",
          gen_m: "dvacátého sedmého", gen_f: "dvacáté sedmé", gen_n: "dvacátého sedmého"
        },
        note: {
          cs: "čte se u data: dvacátého sedmého listopadu",
          en: "read in dates: dvacátého sedmého listopadu"
        }
      }
    }
  }
];