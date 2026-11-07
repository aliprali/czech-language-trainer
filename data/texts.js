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
      note: {
        cs: "Upraveno a zkráceno pro výuku.",
        en: "Adapted and shortened for teaching."
        }
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
  },

    {
    id: "txt-002",
    title: "Na planetě už nám nezáleží",
    level: "B1",
    practiceTopic: "text_02_cas",
    source: {
      publication: "Seznam Zprávy",
      title: "Na planetě už nám nezáleží, shodli se experti na měření času",
      author: "Pavel Kasík",
      date: "2025",
      url: "https://www.seznamzpravy.cz/clanek/zahranicni-na-planete-uz-nam-nezalezi-shodli-se-experti-na-mereni-casu-319734",
      note: { cs: "Upraveno a zkráceno pro výuku.", en: "Adapted and shortened for teaching." }
    },
    text: "{{w35}} {{w36}} {{w1p}} ve Versailles {{w1}} {{w2}} na {{w3}} {{w4}} z {{w37}} {{w38}}. {{w5}} {{w5p}}, že {{w39}} {{w40}} {{w41}} (UTC) už nebude {{w6}} s {{w7}} {{w8}}. Dosud {{w42}} {{w43}} občas {{w9}} takzvanou {{w10}} {{w11}}, aby se {{w12}} {{w13p}} {{w13}} s {{w14}} {{w15}}. Od {{w45}} {{w64}} se to {{w44}} {{w44p}} zhruba sedmadvacetkrát. Problém je, že rotace Země je {{w16}}. Dlouhodobě se sice {{w17}}, ale v {{w48}} {{w47}} se naopak mírně {{w18}}. Mohlo by tak {{w19}} na „{{w20}}\" přestupnou sekundu, tedy {{w21}} jedné sekundy. Takový {{w22}} do {{w23}} {{w24}} ale nikdo nikdy {{w25}}. Experti se proto rozhodli přestupné sekundy úplně {{w26}}. „{{w12}} jsou {{w49}} {{w50}} {{w51}}, jehož {{w52}} jsou {{w63}} a {{w53}},\" {{w54}} {{w55}} {{w56}} {{w27}} už v {{w46}} {{w65}}. „Už {{w57}} {{w58}} {{w27}} čas od {{w59}} {{w60}}.\" Poprvé v {{w28}} tak {{w61}} čas nebude {{w29}} v {{w30}} {{w62}} planety. Pro {{w31}} {{w32}} to ale {{w33}} žádnou {{w34}}.",

    words: {
      w1: { surface: "sešli", pos: "verb", lemma: "sejít", reflexive: "se",
            gloss: { cs: "sešli se", en: "gathered" },
            aspect: "perfective", aspect_pair: "scházet se",
            features: { tense: "past", person: "3", number: "pl", gender: "masc_anim" },
            conjugation: {
              present: null,
              past: { on_m: "sešel", on_f: "sešla", on_n: "sešlo", oni_m: "sešli", oni_f: "sešly" },
              future: "sejdu, sejdeš, sejde, sejdeme, sejdete, sejdou"
            },
            governs: [], examples: ["Sešli jsme se v pět."] },
      w1p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w1",
             gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w2: { surface: "odborníci", pos: "noun", lemma: "odborník",
            gloss: { cs: "odborník", en: "expert" },
            features: { case: "nominativ", number: "pl", gender: "masc_anim" }, vzor: "pan",
            note: { cs: "k→c: odborník → odborníci", en: "k→c: odborník → odborníci" } },

      w3: { surface: "měření", pos: "noun", lemma: "měření",
            gloss: { cs: "měření", en: "measurement" },
            features: { case: "akuzativ", number: "sg", gender: "neut" }, vzor: "stavení" },

      w4: { surface: "času", pos: "noun", lemma: "čas",
            gloss: { cs: "čas", en: "time" },
            features: { case: "genitiv", number: "sg", gender: "masc_inanim" }, vzor: "hrad" },

      w5: { surface: "rozhodli", pos: "verb", lemma: "rozhodnout", reflexive: "se",
            gloss: { cs: "rozhodli se", en: "decided" },
            aspect: "perfective", aspect_pair: "rozhodovat se",
            features: { tense: "past", person: "3", number: "pl", gender: "masc_anim" },
            conjugation: {
              present: null,
              past: { on_m: "rozhodl", on_f: "rozhodla", on_n: "rozhodlo", oni_m: "rozhodli", oni_f: "rozhodly" },
              future: "rozhodnu, rozhodneš, rozhodne, rozhodneme, rozhodnete, rozhodnou"
            },
            governs: [], examples: ["Rozhodli jsme se zůstat."] },
      w5p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w5",
             gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w6: { surface: "svázán", pos: "verb", lemma: "svázat",
            gloss: { cs: "svázán", en: "bound" },
            aspect: "perfective", aspect_pair: "svazovat",
            features: { tense: "passive", gender: "masc", number: "sg" },
            conjugation: {
              present: null,
              past: { on_m: "svázán", on_f: "svázána", on_n: "svázáno", oni_m: "svázáni", oni_f: "svázány" },
              future: null
            },
            governs: [], examples: ["Je svázán slibem."] },

      w7: { surface: "rotací", pos: "noun", lemma: "rotace",
            gloss: { cs: "rotace", en: "rotation" },
            features: { case: "instrumentál", number: "sg", gender: "fem" }, vzor: "růže",
            note: { cs: "po předložce s (s kým/čím?)", en: "after preposition s (with what?)" } },

      w8: { surface: "Země", pos: "noun", lemma: "Země",
            gloss: { cs: "Země", en: "Earth" },
            features: { case: "genitiv", number: "sg", gender: "fem" }, vzor: "růže",
            note: { cs: "genitiv: čeho? — rotace Země", en: "genitive: of what? — rotation of the Earth" } },

      w9: { surface: "vložit", pos: "verb", lemma: "vložit",
            gloss: { cs: "vložit", en: "to insert" },
            aspect: "perfective", aspect_pair: "vkládat",
            features: { tense: "infinitive" },
            conjugation: {
              present: null,
              past: { on_m: "vložil", on_f: "vložila", on_n: "vložilo", oni_m: "vložili", oni_f: "vložily" },
              future: "vložím, vložíš, vloží, vložíme, vložíte, vloží"
            },
            governs: ["akuzativ"], examples: ["Vložil minci do automatu."] },

      w10: { surface: "přestupnou", pos: "adj", lemma: "přestupný",
             gloss: { cs: "přestupný", en: "leap (adj.)" },
             features: { case: "akuzativ", number: "sg", gender: "fem" }, vzor: "mladý" },

      w11: { surface: "sekundu", pos: "noun", lemma: "sekunda",
             gloss: { cs: "sekunda", en: "second" },
             features: { case: "akuzativ", number: "sg", gender: "fem" }, vzor: "žena" },

      w12: { surface: "hodiny", pos: "noun", lemma: "hodiny",
             gloss: { cs: "hodiny", en: "clock" },
             features: { case: "nominativ", number: "pl", gender: "fem" }, vzor: "žena",
             note: { cs: "pomnožné podstatné jméno (jen plurál)", en: "plural-only noun" } },

      w13: { surface: "srovnaly", pos: "verb", lemma: "srovnat", reflexive: "se",
             gloss: { cs: "srovnaly se", en: "aligned" },
             aspect: "perfective", aspect_pair: "srovnávat",
             features: { tense: "past", person: "3", number: "pl", gender: "fem" },
             conjugation: {
               present: null,
               past: { on_m: "srovnal", on_f: "srovnala", on_n: "srovnalo", oni_m: "srovnali", oni_f: "srovnaly" },
               future: "srovnám, srovnáš, srovná, srovnáme, srovnáte, srovnají"
             },
             governs: ["akuzativ"], examples: ["Srovnaly jsme si termíny."] },
      w13p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w13",
              gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w14: { surface: "otáčením", pos: "noun", lemma: "otáčení",
             gloss: { cs: "otáčení", en: "rotation (turning)" },
             features: { case: "instrumentál", number: "sg", gender: "neut" }, vzor: "stavení" },

      w15: { surface: "planety", pos: "noun", lemma: "planeta",
             gloss: { cs: "planeta", en: "planet" },
             features: { case: "genitiv", number: "sg", gender: "fem" }, vzor: "žena" },

      w16: { surface: "nevyzpytatelná", pos: "adj", lemma: "nevyzpytatelný",
             gloss: { cs: "nevyzpytatelný", en: "unpredictable" },
             features: { case: "nominativ", number: "sg", gender: "fem" }, vzor: "mladý" },

      w17: { surface: "zpomaluje", pos: "verb", lemma: "zpomalovat",
             gloss: { cs: "zpomaluje", en: "is slowing down" },
             aspect: "imperfective", aspect_pair: "zpomalit",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "zpomaluji", ty: "zpomaluješ", on: "zpomaluje", my: "zpomalujeme", vy: "zpomalujete", oni: "zpomalují" },
               past: { on_m: "zpomaloval", on_f: "zpomalovala", on_n: "zpomalovalo", oni_m: "zpomalovali", oni_f: "zpomalovaly" },
               future: "budu zpomalovat"
             },
             governs: [], examples: ["Vlak zpomaluje."] },

      w18: { surface: "zrychluje", pos: "verb", lemma: "zrychlovat",
             gloss: { cs: "zrychluje", en: "is speeding up" },
             aspect: "imperfective", aspect_pair: "zrychlit",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "zrychluji", ty: "zrychluješ", on: "zrychluje", my: "zrychlujeme", vy: "zrychlujete", oni: "zrychlují" },
               past: { on_m: "zrychloval", on_f: "zrychlovala", on_n: "zrychlovalo", oni_m: "zrychlovali", oni_f: "zrychlovaly" },
               future: "budu zrychlovat"
             },
             governs: [], examples: ["Auto zrychluje."] },

      w19: { surface: "dojít", pos: "verb", lemma: "dojít",
             gloss: { cs: "dojít", en: "to come (to)" },
             aspect: "perfective", aspect_pair: "docházet",
             features: { tense: "infinitive" },
             conjugation: {
               present: null,
               past: { on_m: "došel", on_f: "došla", on_n: "došlo", oni_m: "došli", oni_f: "došly" },
               future: "dojdu, dojdeš, dojde, dojdeme, dojdete, dojdou"
             },
             governs: ["na + akuzativ"], examples: ["Došlo na slova."] },

      w20: { surface: "zápornou", pos: "adj", lemma: "záporný",
             gloss: { cs: "záporný", en: "negative" },
             features: { case: "akuzativ", number: "sg", gender: "fem" }, vzor: "mladý" },

      w21: { surface: "ubrání", pos: "noun", lemma: "ubrání",
             gloss: { cs: "ubrání", en: "subtracting" },
             features: { case: "nominativ", number: "sg", gender: "neut" }, vzor: "stavení" },

      w22: { surface: "zásah", pos: "noun", lemma: "zásah",
             gloss: { cs: "zásah", en: "intervention" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "hrad" },

      w23: { surface: "počítačových", pos: "adj", lemma: "počítačový",
             gloss: { cs: "počítačový", en: "computer (adj.)" },
             features: { case: "genitiv", number: "pl" }, vzor: "mladý" },

      w24: { surface: "systémů", pos: "noun", lemma: "systém",
             gloss: { cs: "systém", en: "system" },
             features: { case: "genitiv", number: "pl", gender: "masc_inanim" }, vzor: "hrad" },

      w25: { surface: "netestoval", pos: "verb", lemma: "testovat",
             gloss: { cs: "netestoval", en: "has not tested" },
             aspect: "imperfective",
             features: { tense: "past", person: "3", number: "sg", gender: "masc" },
             conjugation: {
               present: { ja: "testuji", ty: "testuješ", on: "testuje", my: "testujeme", vy: "testujete", oni: "testují" },
               past: { on_m: "testoval", on_f: "testovala", on_n: "testovalo", oni_m: "testovali", oni_f: "testovaly" },
               future: "budu testovat"
             },
             governs: ["akuzativ"], examples: ["Nikdo to netestoval."] },

      w26: { surface: "zrušit", pos: "verb", lemma: "zrušit",
             gloss: { cs: "zrušit", en: "to cancel" },
             aspect: "perfective", aspect_pair: "rušit",
             features: { tense: "infinitive" },
             conjugation: {
               present: null,
               past: { on_m: "zrušil", on_f: "zrušila", on_n: "zrušilo", oni_m: "zrušili", oni_f: "zrušily" },
               future: "zruším, zrušíš, zruší, zrušíme, zrušíte, zruší"
             },
             governs: ["akuzativ"], examples: ["Zrušili schůzku."] },

      w27: { surface: "oddělily", pos: "verb", lemma: "oddělit",
             gloss: { cs: "oddělily", en: "separated" },
             aspect: "perfective", aspect_pair: "oddělovat",
             features: { tense: "past", person: "3", number: "pl", gender: "fem" },
             conjugation: {
               present: null,
               past: { on_m: "oddělil", on_f: "oddělila", on_n: "oddělilo", oni_m: "oddělili", oni_f: "oddělily" },
               future: "oddělím, oddělíš, oddělí, oddělíme, oddělíte, oddělí"
             },
             governs: ["akuzativ", "od + genitiv"], examples: ["Oddělily jsme bílek od žloutku."] },

      w28: { surface: "historii", pos: "noun", lemma: "historie",
             gloss: { cs: "historie", en: "history" },
             features: { case: "lokál", number: "sg", gender: "fem" }, vzor: "růže" },

      w29: { surface: "ukotven", pos: "verb", lemma: "ukotvit",
             gloss: { cs: "ukotven", en: "anchored" },
             aspect: "perfective", aspect_pair: "ukotvovat",
             features: { tense: "passive", gender: "masc", number: "sg" },
             conjugation: {
               present: null,
               past: { on_m: "ukotven", on_f: "ukotvena", on_n: "ukotveno", oni_m: "ukotveni", oni_f: "ukotveny" },
               future: null
             },
             governs: ["v + lokál"], examples: ["Loď je ukotvena v přístavu."] },

      w30: { surface: "pohybu", pos: "noun", lemma: "pohyb",
             gloss: { cs: "pohyb", en: "movement" },
             features: { case: "lokál", number: "sg", gender: "masc_inanim" }, vzor: "hrad" },

      w31: { surface: "běžný", pos: "adj", lemma: "běžný",
             gloss: { cs: "běžný", en: "ordinary" },
             features: { case: "akuzativ", number: "sg", gender: "masc_inanim" }, vzor: "mladý" },

      w32: { surface: "život", pos: "noun", lemma: "život",
             gloss: { cs: "život", en: "life" },
             features: { case: "akuzativ", number: "sg", gender: "masc_inanim" }, vzor: "hrad" },

      w33: { surface: "neznamená", pos: "verb", lemma: "znamenat",
             gloss: { cs: "neznamená", en: "does not mean" },
             aspect: "imperfective",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "znamenám", ty: "znamenáš", on: "znamená", my: "znamenáme", vy: "znamenáte", oni: "znamenají" },
               past: { on_m: "znamenal", on_f: "znamenala", on_n: "znamenalo", oni_m: "znamenali", oni_f: "znamenaly" },
               future: "budu znamenat"
             },
             governs: ["akuzativ"], examples: ["To nic neznamená."] },

      w34: { surface: "změnu", pos: "noun", lemma: "změna",
             gloss: { cs: "změna", en: "change" },
             features: { case: "akuzativ", number: "sg", gender: "fem" }, vzor: "žena" },

      w35: { surface: "Minulý", pos: "adj", lemma: "minulý",
             gloss: { cs: "minulý", en: "last (adj.)" },
             features: { case: "akuzativ", number: "sg", gender: "masc_inanim" }, vzor: "mladý",
             note: { cs: "„minulý týden“ = časový údaj, akuzativ", en: "„minulý týden“ = time expression, accusative" } },

      w36: { surface: "týden", pos: "noun", lemma: "týden",
             gloss: { cs: "týden", en: "week" },
             features: { case: "akuzativ", number: "sg", gender: "masc_inanim" }, vzor: "hrad",
             note: { cs: "akuzativ v časovém údaji (kdy?)", en: "accusative in time expression (when?)" } },

      w37: { surface: "celého", pos: "adj", lemma: "celý",
             gloss: { cs: "celý", en: "whole" },
             features: { case: "genitiv", number: "sg", gender: "masc_inanim" }, vzor: "mladý" },

      w38: { surface: "světa", pos: "noun", lemma: "svět",
             gloss: { cs: "svět", en: "world" },
             features: { case: "genitiv", number: "sg", gender: "masc_inanim" }, vzor: "hrad",
             note: { cs: "genitiv po předložce z", en: "genitive after preposition z" } },

      w39: { surface: "Koordinovaný", pos: "adj", lemma: "koordinovaný",
             gloss: { cs: "koordinovaný", en: "coordinated" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "mladý" },

      w40: { surface: "světový", pos: "adj", lemma: "světový",
             gloss: { cs: "světový", en: "world (adj.)" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "mladý" },

      w41: { surface: "čas", pos: "noun", lemma: "čas",
             gloss: { cs: "čas", en: "time" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "hrad",
             note: { cs: "Koordinovaný světový čas = UTC", en: "Coordinated Universal Time = UTC" } },

      w42: { surface: "museli", pos: "verb", lemma: "muset",
             gloss: { cs: "museli", en: "had to" },
             aspect: "imperfective",
             features: { tense: "past", person: "3", number: "pl", gender: "masc_anim" },
             conjugation: {
               present: { ja: "musím", ty: "musíš", on: "musí", my: "musíme", vy: "musíte", oni: "musí" },
               past: { on_m: "musel", on_f: "musela", on_n: "muselo", oni_m: "museli", oni_f: "musely" },
               future: "budu muset"
             },
             governs: ["infinitiv"], examples: ["Museli jsme čekat."] },

      w43: { surface: "vědci", pos: "noun", lemma: "vědec",
             gloss: { cs: "vědec", en: "scientist" },
             features: { case: "nominativ", number: "pl", gender: "masc_anim" }, vzor: "pan",
             note: { cs: "vědec → vědci (vypuštění -e-, k žádné změně kmene)", en: "vědec → vědci (drops -e-, no stem change)" } },

      w44: { surface: "stalo", pos: "verb", lemma: "stát se", reflexive: "se",
             gloss: { cs: "stalo se", en: "happened" },
             aspect: "perfective", aspect_pair: "stávat se",
             features: { tense: "past", person: "3", number: "sg", gender: "neut" },
             conjugation: {
               present: null,
               past: { on_m: "stal", on_f: "stala", on_n: "stalo", oni_m: "stali", oni_f: "staly" },
               future: "stanu, staneš, stane, staneme, stanete, stanou"
             },
             governs: [], examples: ["Co se stalo?"] },
      w44p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w44",
              gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w45: { surface: "roku", pos: "noun", lemma: "rok",
             gloss: { cs: "rok", en: "year" },
             features: { case: "genitiv", number: "sg", gender: "masc_inanim" }, vzor: "hrad",
             note: { cs: "„od roku“ = od + genitiv. Datum: „od roku 1972“.", en: "„od roku“ = od + genitive. Date: „since 1972“." } },

      w46: { surface: "roce", pos: "noun", lemma: "rok",
             gloss: { cs: "rok", en: "year" },
             features: { case: "lokál", number: "sg", gender: "masc_inanim" }, vzor: "hrad",
             note: { cs: "k→c: rok → roce (lok. sg.)", en: "k→c: rok → roce (loc. sg.)" } },

      w47: { surface: "letech", pos: "noun", lemma: "rok",
             gloss: { cs: "roky", en: "years" },
             features: { case: "lokál", number: "pl", gender: "masc_inanim" }, vzor: "město",
             note: { cs: "nepravidelné: plurál od „rok“ = léta (vzor město): letech = lok. pl. (v letech = v obdobích)", en: "irregular: plural of „rok“ = léta (pattern město): letech = loc. pl. (in the years)" } },

      w48: { surface: "posledních", pos: "adj", lemma: "poslední",
             gloss: { cs: "poslední", en: "last / recent" },
             features: { case: "lokál", number: "pl" }, vzor: "jarní" },

      w49: { surface: "stroj", pos: "noun", lemma: "stroj",
             gloss: { cs: "stroj", en: "machine" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "stroj" },

      w50: { surface: "poháněný", pos: "adj", lemma: "poháněný",
             gloss: { cs: "poháněný", en: "powered / driven" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "mladý",
             note: { cs: "pasivní příčestí od „pohánět“ — skloňuje se jako mladý", en: "passive participle of „pohánět“ — declines like mladý" } },

      w51: { surface: "energií", pos: "noun", lemma: "energie",
             gloss: { cs: "energie", en: "energy" },
             features: { case: "instrumentál", number: "sg", gender: "fem" }, vzor: "růže",
             note: { cs: "instrumentál: čím? — energií", en: "instrumental: by what? — by energy" } },

      w52: { surface: "produktem", pos: "noun", lemma: "produkt",
             gloss: { cs: "produkt", en: "product" },
             features: { case: "instrumentál", number: "sg", gender: "masc_inanim" }, vzor: "hrad",
             note: { cs: "„jehož produktem jsou sekundy“ — instrumentál", en: "„whose product is seconds“ — instrumental" } },

      w53: { surface: "minuty", pos: "noun", lemma: "minuta",
             gloss: { cs: "minuta", en: "minute" },
             features: { case: "nominativ", number: "pl", gender: "fem" }, vzor: "žena" },

      w54: { surface: "napsal", pos: "verb", lemma: "napsat",
             gloss: { cs: "napsal", en: "wrote" },
             aspect: "perfective", aspect_pair: "psát",
             features: { tense: "past", person: "3", number: "sg", gender: "masc" },
             conjugation: {
               present: null,
               past: { on_m: "napsal", on_f: "napsala", on_n: "napsalo", oni_m: "napsali", oni_f: "napsaly" },
               future: "napíšu, napíšeš, napíše, napíšeme, napíšete, napíšou"
             },
             governs: ["akuzativ"], examples: ["Napsal dopis."] },

      w55: { surface: "americký", pos: "adj", lemma: "americký",
             gloss: { cs: "americký", en: "American" },
             features: { case: "nominativ", number: "sg", gender: "masc_anim" }, vzor: "mladý" },

      w56: { surface: "historik", pos: "noun", lemma: "historik",
             gloss: { cs: "historik", en: "historian" },
             features: { case: "nominativ", number: "sg", gender: "masc_anim" }, vzor: "pan",
             note: { cs: "k→c: historik → historici (nom. pl.)", en: "k→c: historik → historici (nom. pl.)" } },

      w57: { surface: "svou", pos: "pronoun", lemma: "svůj",
             gloss: { cs: "svou", en: "its own (fem.)" },
             features: { case: "instrumentál", number: "sg", gender: "fem" }, vzor: "můj",
             note: { cs: "přivlastňovací zvratné zájmeno; skloňuje se jako „můj“ (instr. sg. fem. = mou / svou)", en: "reflexive possessive pronoun; declines like „můj“ (instr. sg. fem. = mou / svou)" } },

      w58: { surface: "podstatou", pos: "noun", lemma: "podstata",
             gloss: { cs: "podstata", en: "essence / nature" },
             features: { case: "instrumentál", number: "sg", gender: "fem" }, vzor: "žena" },

      w59: { surface: "lidských", pos: "adj", lemma: "lidský",
             gloss: { cs: "lidský", en: "human" },
             features: { case: "genitiv", number: "pl" }, vzor: "mladý" },

      w60: { surface: "událostí", pos: "noun", lemma: "událost",
             gloss: { cs: "událost", en: "event" },
             features: { case: "genitiv", number: "pl", gender: "fem" }, vzor: "kost",
             note: { cs: "vzor kost: událost → událostí (gen. pl.)", en: "pattern kost: událost → událostí (gen. pl.)" } },

      w61: { surface: "oficiální", pos: "adj", lemma: "oficiální",
             gloss: { cs: "oficiální", en: "official" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" }, vzor: "jarní",
             note: { cs: "měkké přídavné jméno (jako jarní)", en: "soft adjective (like jarní)" } },

      w62: { surface: "naší", pos: "pronoun", lemma: "náš",
             gloss: { cs: "naší", en: "our (fem.)" },
             features: { case: "genitiv", number: "sg", gender: "fem" }, vzor: "náš",
             note: { cs: "genitiv sg. fem. od „náš“ = naší", en: "genitive sg. fem. of „náš“ = naší" } },

      w63: { surface: "sekundy", pos: "noun", lemma: "sekunda",
             gloss: { cs: "sekundy", en: "seconds" },
             features: { case: "nominativ", number: "pl", gender: "fem" }, vzor: "žena" },

      w64: { surface: "1972", pos: "number", lemma: "tisíc devět set sedmdesát dva",
             gloss: { cs: "tisíc devět set sedmdesát dva", en: "nineteen seventy-two" },
             features: { case: "genitiv", number: "sg" },
             spoken: "tisíc devět set sedmdesát dva (hovorově: devatenáct set sedmdesát dva)",
             note: { cs: "letopočet v genitivu po „od roku“ — obvykle nesklonný", en: "year in genitive after „od roku“ — usually indeclinable" } },

      w65: { surface: "1934", pos: "number", lemma: "tisíc devět set třicet čtyři",
             gloss: { cs: "tisíc devět set třicet čtyři", en: "nineteen thirty-four" },
             features: { case: "lokál", number: "sg" },
             spoken: "tisíc devět set třicet čtyři (hovorově: devatenáct set třicet čtyři)",
             note: { cs: "letopočet po „v roce“ — obvykle nesklonný", en: "year after „v roce“ — usually indeclinable" } }
    }
  },

    {
    id: "txt-003",
    title: "Dokonalý svetr, který se hodí ke všemu",
    level: "A2",
    practiceTopic: "text_03_svetr",
    source: {
      publication: "Proženy.cz",
      title: "Dokonalý svetr? Ten, který se hodí ke všemu",
      author: "Jana Zborovská",
      date: "2025-11-07",
      url: "https://www.prozeny.cz/clanek/krasa-a-moda-moda-dokonaly-svetr-ten-ktery-se-hodi-ke-vsemu-20-krasnych-kousku-v-ruznych-odstinech-105557",
      note: { cs: "Upraveno a zkráceno pro výuku.", en: "Adapted and shortened for teaching." }
    },
    text: "Chcete {{w32}} dobře? Pak {{w33}} po {{w2}}. Dobrý svetr vám {{w28}} roky a {{w34}}. Obchody {{w35}} mnoho modelů, ale začátek by měl být co nejjednodušší. {{w49}} nebo mírně {{w22}} {{w24}} {{w36}} i {{w50_1}} {{w50}}. Důležitá je kvalita. {{w51}} {{w37}} módní kus s {{w26}} nebo {{w52}} {{w53}}, dejte si {{w54}} na {{w8}} a {{w38}} {{w38p}}, že máte alespoň dva jednoduché svetry na běžné {{w6}}. Na jednoduchých kusech {{w55}} kvalita vidět okamžitě. {{w9}} {{w9p}} na {{w10}} — {{w56}} nebo {{w25}} potěší — a hlavně {{w39}}, jestli vám svetr {{w11}}. Jednoduchý svetr {{w29}}, takže za pět {{w21}} {{w40}} {{w41}}, jestli {{w42p}} ještě {{w42}}. Navíc je {{w23}}: můžete ho {{w43}} {{w4b}} {{w13}}, {{w4a}} {{w47}} {{w14}}, {{w4b}} {{w15}} i {{w4b}} {{w48}} {{w18b}}. A jednoduchost neznamená nudu. Kvalitní svetr v hezkém {{w16}} {{w44}} každý. Klasické jsou šedá, krémová a béžová; dobře vypadá i hořká {{w27}}, {{w30}} nebo pastelová žlutá. {{w45}} {{w45p}} na výraznější barvy? {{w46}} jasně červenou nebo kobaltovou modrou — obě {{w31}} energicky.",

    words: {
      w2: { surface: "klasice", pos: "noun", lemma: "klasika",
            gloss: { cs: "klasika", en: "classic" },
            features: { case: "lokál", number: "sg", gender: "fem" },
            vzor: "žena",
            note: { cs: "po předložce „po“ (po čem?) — lokál", en: "after preposition „po“ (after what?) — locative" } },

      w3: { surface: "hodí", pos: "verb", lemma: "hodit", reflexive: "se",
            gloss: { cs: "hodí se", en: "suits / goes well" },
            aspect: "imperfective",
            features: { tense: "present", person: "3", number: "sg" },
            conjugation: {
              present: { ja: "hodím se", ty: "hodíš se", on: "hodí se", my: "hodíme se", vy: "hodíte se", oni: "hodí se" },
              past: { on_m: "hodil se", on_f: "hodila se", on_n: "hodilo se", oni_m: "hodili se", oni_f: "hodily se" },
              future: "budu se hodit"
            },
            governs: ["k + dativ"],
            examples: ["Hodí se to ke všemu.", "Ten svetr se k bundě nehodí."] },
      w3p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w3",
             gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w4a: { surface: "ke", pos: "preposition", lemma: "k",
             governs: ["dativ"],
             gloss: { cs: "ke", en: "to / towards (variant)" },
             note: { cs: "Varianta „ke“ před slovy začínajícími na k, g, v- nebo před souhláskovou skupinou: ke všemu, ke koženým, ke mně.", en: "Variant „ke“ before words starting with k, g, v- or a consonant cluster: ke všemu, ke koženým, ke mně." },
             examples: ["Vrací se ke kamarádovi."] },

      w5: { surface: "všemu", pos: "pronoun", lemma: "všechno",
            gloss: { cs: "všemu", en: "everything (dat.)" },
            features: { case: "dativ", number: "sg", gender: "neut" },
            driven_by: "w4a",
            note: { cs: "dativ sg. neut. od „všechno“ — nepravidelné: všechno → všemu", en: "dative sg. neut. of „všechno“ — irregular: všechno → všemu" } },

      w6: { surface: "kombinování", pos: "noun", lemma: "kombinování",
            gloss: { cs: "kombinování", en: "combining" },
            features: { case: "akuzativ", number: "sg", gender: "neut" },
            vzor: "stavení",
            note: { cs: "podstatné jméno slovesné od „kombinovat“; po „na“ (na co?) — akuzativ", en: "verbal noun from „kombinovat“; after „na“ (for what?) — accusative" } },

      w8: { surface: "výběru", pos: "noun", lemma: "výběr",
            gloss: { cs: "výběr", en: "selection" },
            features: { case: "lokál", number: "sg", gender: "masc_inanim" },
            vzor: "hrad",
            note: { cs: "lokál sg.: po „dát si záležet na + lokál“ — na výběru", en: "locative sg.: after „dát si záležet na + locative“ — na výběru" } },

      w9: { surface: "Soustřeďte", pos: "verb", lemma: "soustředit", reflexive: "se",
            gloss: { cs: "soustřeďte se", en: "focus (imperative)" },
            aspect: "perfective", aspect_pair: "soustřeďovat se",
            features: { tense: "imperative", person: "2", number: "pl" },
            conjugation: {
              present: null,
              past: { on_m: "soustředil se", on_f: "soustředila se", on_n: "soustředilo se", oni_m: "soustředili se", oni_f: "soustředily se" },
              future: "soustředím se, soustředíš se, soustředí se, soustředíme se, soustředíte se, soustředí se"
            },
            governs: ["na + akuzativ"],
            examples: ["Soustřeď se na práci.", "Soustředila se na detail."] },
      w9p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w9",
             gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w10: { surface: "složení", pos: "noun", lemma: "složení",
             gloss: { cs: "složení", en: "composition" },
             features: { case: "akuzativ", number: "sg", gender: "neut" },
             vzor: "stavení",
             driven_by: "w9",
             note: { cs: "akuzativ po „soustředit se na“ — složení se nemění", en: "accusative after „soustředit se na“ — složení is unchanged" } },

      w11: { surface: "sedí", pos: "verb", lemma: "sedět",
             gloss: { cs: "sedí", en: "fits (about clothes)" },
             aspect: "imperfective",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "sedím", ty: "sedíš", on: "sedí", my: "sedíme", vy: "sedíte", oni: "sedí" },
               past: { on_m: "seděl", on_f: "seděla", on_n: "sedělo", oni_m: "seděli", oni_f: "seděly" },
               future: "budu sedět"
             },
             governs: ["dativ"],
             examples: ["Šaty mi sedí.", "Sedí mi to v pase."] },

      w4b: { surface: "k", pos: "preposition", lemma: "k",
             governs: ["dativ"],
             gloss: { cs: "k", en: "to / towards" },
             note: { cs: "Základní varianta „k“ — před samohláskou nebo jednoduchou souhláskou: k džínám, k sukni, k oknu.", en: "Basic variant „k“ — before a vowel or single consonant: k džínám, k sukni, k oknu." },
             examples: ["Jdu k oknu."] },

      w13: { surface: "džínám", pos: "noun", lemma: "džíny",
             gloss: { cs: "džíny", en: "jeans" },
             features: { case: "dativ", number: "pl", gender: "masc_inanim" },
             vzor: "hrad",
             driven_by: "w4b",
             note: { cs: "dativ pl. vzor hrad: džíny → džínům", en: "dative pl. pattern hrad: džíny → džínům" } },

      w14: { surface: "kalhotám", pos: "noun", lemma: "kalhoty",
             gloss: { cs: "kalhoty", en: "trousers" },
             features: { case: "dativ", number: "pl", gender: "fem" },
             vzor: "žena",
             driven_by: "w4a",
             note: { cs: "dativ pl. fem. vzor žena: kalhoty → kalhotám. Pomnožné — jen plurál.", en: "dative pl. fem. pattern žena: kalhoty → kalhotám. Plural-only noun." } },

      w15: { surface: "sukni", pos: "noun", lemma: "sukně",
             gloss: { cs: "sukně", en: "skirt" },
             features: { case: "dativ", number: "sg", gender: "fem" },
             vzor: "růže",
             driven_by: "w4b",
             note: { cs: "dativ sg. fem. vzor růže: sukně → sukni", en: "dative sg. fem. pattern růže: sukně → sukni" } },

      w18b: { surface: "kabátu", pos: "noun", lemma: "kabát",
              gloss: { cs: "kabát", en: "coat" },
              features: { case: "dativ", number: "sg", gender: "masc_inanim" },
              vzor: "hrad",
              driven_by: "w4b",
              note: { cs: "dativ sg. masc. inanim.: kabát → kabátu", en: "dative sg. masc. inanim.: kabát → kabátu" } },

      w16: { surface: "odstínu", pos: "noun", lemma: "odstín",
             gloss: { cs: "odstín", en: "shade / tone" },
             features: { case: "lokál", number: "sg", gender: "masc_inanim" },
             vzor: "hrad",
             note: { cs: "lokál sg.: v odstínu (po předložce v)", en: "locative sg.: v odstínu (after v)" } },

      w21: { surface: "let", pos: "noun", lemma: "rok",
             gloss: { cs: "let", en: "years (gen. pl.)" },
             features: { case: "genitiv", number: "pl", gender: "masc_inanim" },
             vzor: "hrad",
             note: { cs: "genitiv plurálu od „rok“ — nepravidelné: roky → let. „za pět let“ = za období pěti let.", en: "genitive plural of „rok“ — irregular: roky → let. „za pět let“ = over a period of five years." } },

      w22: { surface: "véčkový", pos: "adj", lemma: "véčkový",
             gloss: { cs: "véčkový", en: "V-shaped" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" },
             vzor: "mladý",
             note: { cs: "od „véčko“ (V) — tvar výstřihu ve tvaru písmene V", en: "from „véčko“ (V) — a V-shaped neckline" } },

      w23: { surface: "variabilní", pos: "adj", lemma: "variabilní",
             gloss: { cs: "variabilní", en: "versatile" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" },
             vzor: "jarní",
             note: { cs: "měkké přídavné jméno (jako jarní)", en: "soft adjective (like jarní)" } },

      w24: { surface: "výstřih", pos: "noun", lemma: "výstřih",
             gloss: { cs: "výstřih", en: "neckline" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" },
             vzor: "hrad" },

      w25: { surface: "kašmír", pos: "noun", lemma: "kašmír",
             gloss: { cs: "kašmír", en: "cashmere" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" },
             vzor: "hrad",
             note: { cs: "drahý materiál z kašmírské kozy", en: "expensive material from the cashmere goat" } },

      w26: { surface: "půlzipem", pos: "noun", lemma: "půlzip",
             gloss: { cs: "půlzip", en: "half-zip" },
             features: { case: "instrumentál", number: "sg", gender: "masc_inanim" },
             vzor: "hrad",
             note: { cs: "složenina: půl + zip. Instrumentál: s půlzipem (čím?)", en: "compound: půl + zip. Instrumental: s půlzipem (with what?)" } },

      w27: { surface: "čokoláda", pos: "noun", lemma: "čokoláda",
             gloss: { cs: "čokoláda (zde barva)", en: "chocolate (here: color)" },
             features: { case: "nominativ", number: "sg", gender: "fem" },
             vzor: "žena",
             note: { cs: "„hořká čokoláda“ je zde označení pro tmavě hnědý odstín, ne pro chuť.", en: "„hořká čokoláda“ here refers to a dark brown shade, not the bitter taste." } },

      w28: { surface: "vydrží", pos: "verb", lemma: "vydržet",
             gloss: { cs: "vydrží", en: "will last" },
             aspect: "perfective", aspect_pair: "vydržovat",
             features: { tense: "future", person: "3", number: "sg" },
             conjugation: {
               present: null,
               past: { on_m: "vydržel", on_f: "vydržela", on_n: "vydrželo", oni_m: "vydrželi", oni_f: "vydržely" },
               future: "vydržím, vydržíš, vydrží, vydržíme, vydržíte, vydrží"
             },
             governs: [],
             examples: ["Svetr mi vydrží mnoho let."] },

      w29: { surface: "nestárne", pos: "verb", lemma: "stárnout",
             gloss: { cs: "nestárne", en: "does not age" },
             aspect: "imperfective", aspect_pair: "zestárnout",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "stárnu", ty: "stárneš", on: "stárne", my: "stárneme", vy: "stárnete", oni: "stárnou" },
               past: { on_m: "stárl", on_f: "stárla", on_n: "stárlo", oni_m: "stárli", oni_f: "stárly" },
               future: "budu stárnout"
             },
             governs: [],
             examples: ["Elegantní oblečení nestárne."] },

      w30: { surface: "bordó", pos: "adj", lemma: "bordó",
             gloss: { cs: "bordó", en: "burgundy" },
             features: { case: "nominativ", number: "sg" },
             note: { cs: "NESKLONNÉ přídavné jméno — tvar „bordó“ se nemění pro žádný rod, číslo ani pád: bordó svetr, bordó sukně, bordó saka, v bordó bundě. Podobně: khaki, oranž, růžovo.", en: "INDECLINABLE adjective — the form „bordó“ never changes for gender, number or case: bordó svetr, bordó sukně, bordó saka, v bordó bundě. Similarly: khaki, oranž, růžovo." } },

      w31: { surface: "působí", pos: "verb", lemma: "působit",
             gloss: { cs: "působí", en: "they have an effect" },
             aspect: "imperfective",
             features: { tense: "present", person: "3", number: "pl" },
             conjugation: {
               present: { ja: "působím", ty: "působíš", on: "působí", my: "působíme", vy: "působíte", oni: "působí" },
               past: { on_m: "působil", on_f: "působila", on_n: "působilo", oni_m: "působili", oni_f: "působily" },
               future: "budu působit"
             },
             governs: ["na + akuzativ (ve významu ovlivňovat)"],
             examples: ["Působí to na mě divně.", "Ta barva působí energicky."] },

      w32: { surface: "vypadat", pos: "verb", lemma: "vypadat",
             gloss: { cs: "vypadat", en: "to look (appearance)" },
             aspect: "imperfective",
             features: { tense: "infinitive" },
             conjugation: {
               present: { ja: "vypadám", ty: "vypadáš", on: "vypadá", my: "vypadáme", vy: "vypadáte", oni: "vypadají" },
               past: { on_m: "vypadal", on_f: "vypadala", on_n: "vypadalo", oni_m: "vypadali", oni_f: "vypadaly" },
               future: "budu vypadat"
             },
             governs: ["příslovce (vypadat dobře)"],
             examples: ["Dnes vypadáš skvěle."] },

      w33: { surface: "sáhněte", pos: "verb", lemma: "sáhnout",
             gloss: { cs: "sáhněte", en: "reach (imperative)" },
             aspect: "perfective", aspect_pair: "sahat",
             features: { tense: "imperative", person: "2", number: "pl" },
             conjugation: {
               present: null,
               past: { on_m: "sáhl", on_f: "sáhla", on_n: "sáhlo", oni_m: "sáhli", oni_f: "sáhly" },
               future: "sáhnu, sáhneš, sáhne, sáhneme, sáhnete, sáhnou"
             },
             governs: ["po + lokál (ve významu vybrat si)"],
             examples: ["Sáhněte po klasice.", "Sáhl po telefonu."] },

      w34: { surface: "neomrzí", pos: "verb", lemma: "omrzet",
             gloss: { cs: "neomrzí", en: "will not get boring" },
             aspect: "perfective", aspect_pair: "omrzet (nedok.)",
             features: { tense: "future", person: "3", number: "sg" },
             conjugation: {
               present: null,
               past: { on_m: "omrzel", on_f: "omrzela", on_n: "omrzelo", oni_m: "omrzeli", oni_f: "omrzely" },
               future: "omrzím, omrzíš, omrzí, omrzíme, omrzíte, omrzí"
             },
             governs: ["akuzativ"],
             examples: ["Tahle písnička mě neomrzí."] },

      w35: { surface: "nabízejí", pos: "verb", lemma: "nabízet",
             gloss: { cs: "nabízejí", en: "they offer" },
             aspect: "imperfective", aspect_pair: "nabídnout",
             features: { tense: "present", person: "3", number: "pl" },
             conjugation: {
               present: { ja: "nabízím", ty: "nabízíš", on: "nabízí", my: "nabízíme", vy: "nabízíte", oni: "nabízejí" },
               past: { on_m: "nabízel", on_f: "nabízela", on_n: "nabízelo", oni_m: "nabízeli", oni_f: "nabízely" },
               future: "budu nabízet"
             },
             governs: ["akuzativ"],
             examples: ["Obchody nabízejí slevy."] },

      w36: { surface: "funguje", pos: "verb", lemma: "fungovat",
             gloss: { cs: "funguje", en: "works / functions" },
             aspect: "imperfective",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "funguji", ty: "funguješ", on: "funguje", my: "fungujeme", vy: "fungujete", oni: "fungují" },
               past: { on_m: "fungoval", on_f: "fungovala", on_n: "fungovalo", oni_m: "fungovali", oni_f: "fungovaly" },
               future: "budu fungovat"
             },
             governs: [],
             examples: ["To funguje dobře."] },

      w37: { surface: "koupíte", pos: "verb", lemma: "koupit",
             gloss: { cs: "koupíte", en: "you buy" },
             aspect: "perfective", aspect_pair: "kupovat",
             features: { tense: "future", person: "2", number: "pl" },
             conjugation: {
               present: null,
               past: { on_m: "koupil", on_f: "koupila", on_n: "koupilo", oni_m: "koupili", oni_f: "koupily" },
               future: "koupím, koupíš, koupí, koupíme, koupíte, koupí"
             },
             governs: ["akuzativ"],
             examples: ["Koupíte to v obchodě."] },

      w38: { surface: "přesvědčte", pos: "verb", lemma: "přesvědčit", reflexive: "se",
             gloss: { cs: "přesvědčte se", en: "make sure" },
             aspect: "perfective", aspect_pair: "přesvědčovat",
             features: { tense: "imperative", person: "2", number: "pl" },
             conjugation: {
               present: null,
               past: { on_m: "přesvědčil se", on_f: "přesvědčila se", on_n: "přesvědčilo se", oni_m: "přesvědčili se", oni_f: "přesvědčily se" },
               future: "přesvědčím se, přesvědčíš se, přesvědčí se, přesvědčíme se, přesvědčíte se, přesvědčí se"
             },
             governs: ["že + vedlejší věta / o + lokál"],
             examples: ["Přesvědčte se, že je to pravda."] },
      w38p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w38",
              gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w39: { surface: "zkontrolujte", pos: "verb", lemma: "zkontrolovat",
             gloss: { cs: "zkontrolujte", en: "check (imperative)" },
             aspect: "perfective", aspect_pair: "kontrolovat",
             features: { tense: "imperative", person: "2", number: "pl" },
             conjugation: {
               present: null,
               past: { on_m: "zkontroloval", on_f: "zkontrolovala", on_n: "zkontrolovalo", oni_m: "zkontrolovali", oni_f: "zkontrolovaly" },
               future: "zkontroluji, zkontroluješ, zkontroluje, zkontrolujeme, zkontrolujete, zkontrolují"
             },
             governs: ["akuzativ"],
             examples: ["Zkontrolujte prosím email."] },

      w40: { surface: "nebudete", pos: "verb", lemma: "být",
             gloss: { cs: "nebudete", en: "you will not be" },
             aspect: "imperfective",
             features: { tense: "future", person: "2", number: "pl" },
             conjugation: {
               present: { ja: "jsem", ty: "jsi", on: "je", my: "jsme", vy: "jste", oni: "jsou" },
               past: { on_m: "byl", on_f: "byla", on_n: "bylo", oni_m: "byli", oni_f: "byly" },
               future: "nebudu, nebudeš, nebude, nebudeme, nebudete, nebudou"
             },
             governs: [],
             examples: ["Zítra nebudete doma."] },

      w41: { surface: "řešit", pos: "verb", lemma: "řešit",
             gloss: { cs: "řešit", en: "to solve / deal with" },
             aspect: "imperfective", aspect_pair: "vyřešit",
             features: { tense: "infinitive" },
             conjugation: {
               present: { ja: "řeším", ty: "řešíš", on: "řeší", my: "řešíme", vy: "řešíte", oni: "řeší" },
               past: { on_m: "řešil", on_f: "řešila", on_n: "řešilo", oni_m: "řešili", oni_f: "řešily" },
               future: "budu řešit"
             },
             governs: ["akuzativ"],
             examples: ["Musím řešit problém."] },

      w42: { surface: "nosí", pos: "verb", lemma: "nosit", reflexive: "se",
             gloss: { cs: "nosí se", en: "is worn (fashion)" },
             aspect: "imperfective",
             features: { tense: "present", person: "3", number: "sg" },
             conjugation: {
               present: { ja: "nosím", ty: "nosíš", on: "nosí", my: "nosíme", vy: "nosíte", oni: "nosí" },
               past: { on_m: "nosil", on_f: "nosila", on_n: "nosilo", oni_m: "nosili", oni_f: "nosily" },
               future: "budu nosit"
             },
             governs: ["akuzativ"],
             examples: ["To se už nenosí."] },
      w42p: { surface: "se", pos: "particle", lemma: "se", reflexive_of: "w42",
              gloss: { cs: "zvratná částice (akuzativ)", en: "reflexive particle (accusative)" } },

      w43: { surface: "vzít", pos: "verb", lemma: "vzít",
             gloss: { cs: "vzít", en: "to take" },
             aspect: "perfective", aspect_pair: "brát",
             features: { tense: "infinitive" },
             conjugation: {
               present: null,
               past: { on_m: "vzal", on_f: "vzala", on_n: "vzalo", oni_m: "vzali", oni_f: "vzaly" },
               future: "vezmu, vezmeš, vezme, vezmeme, vezmete, vezmou"
             },
             governs: ["akuzativ"],
             examples: ["Vezmu si svetr k džínám."] },

      w44: { surface: "pochválí", pos: "verb", lemma: "pochválit",
             gloss: { cs: "pochválí", en: "will praise" },
             aspect: "perfective", aspect_pair: "chválit",
             features: { tense: "future", person: "3", number: "sg" },
             conjugation: {
               present: null,
               past: { on_m: "pochválil", on_f: "pochválila", on_n: "pochválilo", oni_m: "pochválili", oni_f: "pochválily" },
               future: "pochválím, pochválíš, pochválí, pochválíme, pochválíte, pochválí"
             },
             governs: ["akuzativ"],
             examples: ["Každý tě pochválí."] },

      w45: { surface: "Troufnete", pos: "verb", lemma: "troufnout", reflexive: "si",
             gloss: { cs: "troufnete si", en: "you dare" },
             aspect: "perfective", aspect_pair: "troufat si",
             features: { tense: "future", person: "2", number: "pl" },
             conjugation: {
               present: null,
               past: { on_m: "troufl si", on_f: "troufla si", on_n: "trouflo si", oni_m: "troufli si", oni_f: "troufly si" },
               future: "troufnu si, troufneš si, troufne si, troufneme si, troufnete si, troufnou si"
             },
             governs: ["na + akuzativ"],
             examples: ["Troufneš si na to?"] },
      w45p: { surface: "si", pos: "particle", lemma: "si", reflexive_of: "w45",
              gloss: { cs: "zvratná částice (dativ)", en: "reflexive particle (dative)" } },

      w46: { surface: "Zkuste", pos: "verb", lemma: "zkusit",
             gloss: { cs: "zkuste", en: "try (imperative)" },
             aspect: "perfective", aspect_pair: "zkoušet",
             features: { tense: "imperative", person: "2", number: "pl" },
             conjugation: {
               present: null,
               past: { on_m: "zkusil", on_f: "zkusila", on_n: "zkusilo", oni_m: "zkusili", oni_f: "zkusily" },
               future: "zkusím, zkusíš, zkusí, zkusíme, zkusíte, zkusí"
             },
             governs: ["akuzativ"],
             examples: ["Zkuste to znovu."] },

      w47: { surface: "koženým", pos: "adj", lemma: "kožený",
             gloss: { cs: "kožený", en: "leather (adj.)" },
             features: { case: "dativ", number: "pl" },
             vzor: "mladý",
             driven_by: "w4a",
             note: { cs: "dativ plurálu: ke koženým kalhotám", en: "dative plural: to leather trousers" } },

      w48: { surface: "zimnímu", pos: "adj", lemma: "zimní",
             gloss: { cs: "zimní", en: "winter (adj.)" },
             features: { case: "dativ", number: "sg", gender: "masc_inanim" },
             vzor: "jarní",
             driven_by: "w4b",
             note: { cs: "měkké přídavné jméno, dativ sg.: k zimnímu kabátu", en: "soft adjective, dative sg.: to the winter coat" } },

      w49: { surface: "Kulatý", pos: "adj", lemma: "kulatý",
             gloss: { cs: "kulatý", en: "round" },
             features: { case: "nominativ", number: "sg", gender: "masc_inanim" },
             vzor: "mladý",
             note: { cs: "zde myšleno „kulatý výstřih“", en: "here meaning „round neckline“" } },

      w50_1: { surface: "bez", pos: "preposition", lemma: "bez",
               governs: ["genitiv"],
               gloss: { cs: "bez", en: "without" },
               note: { cs: "Předložka bez + genitiv (bez čeho?).", en: "Preposition bez + genitive (without what?)." },
               examples: ["Káva bez cukru."] },

      w50: { surface: "ozdob", pos: "noun", lemma: "ozdoba",
            gloss: { cs: "ozdoba", en: "decoration" },
            features: { case: "genitiv", number: "pl", gender: "fem" },
            vzor: "žena",
            driven_by: "w50_1",
            note: { cs: "genitiv plurálu: ozdoba → ozdob. Po předložce bez.", en: "genitive plural: ozdoba → ozdob. After preposition bez." } },

      w51: { surface: "Než", pos: "conjunction", lemma: "než",
             gloss: { cs: "než", en: "before / than" },
             note: { cs: "Spojka. Zde znamená časové „než“ (než koupíte = předtím, než koupíte). Jindy znamená srovnání (lepší než).", en: "Conjunction. Here it means temporal „before“ (before you buy). Otherwise it means comparison (better than)." } },

      w52: { surface: "výrazným", pos: "adj", lemma: "výrazný",
             gloss: { cs: "výrazný", en: "bold / expressive" },
             features: { case: "instrumentál", number: "sg", gender: "masc_inanim" },
             vzor: "mladý",
             driven_by: "w53" },

      w53: { surface: "vzorem", pos: "noun", lemma: "vzor",
             gloss: { cs: "vzor", en: "pattern" },
             features: { case: "instrumentál", number: "sg", gender: "masc_inanim" },
             vzor: "hrad",
             driven_by: "w54", 
             note: { cs: "instrumentál sg.: s výrazným vzorem", en: "instrumental sg.: with a bold pattern" } },

      w54: { surface: "záležet", pos: "verb", lemma: "záležet",
             gloss: { cs: "záležet", en: "to depend / matter" },
             aspect: "imperfective",
             features: { tense: "infinitive" },
             conjugation: {
               present: { ja: "záležím", ty: "záležíš", on: "záleží", my: "záležíme", vy: "záležíte", oni: "záleží" },
               past: { on_m: "záležel", on_f: "záležela", on_n: "záleželo", oni_m: "záleželi", oni_f: "záležely" },
               future: "budu záležet"
             },
             governs: ["na + lokál"],
             examples: ["Záleží mi na tom.", "Dejte si záležet na výběru."],
             note: { cs: "Klíčová fráze: „dát si záležet“ = věnovat něčemu úsilí a péči. V textu: dejte si záležet na výběru (věnujte výběru péči).", en: "Key phrase: „dát si záležet“ = to make an effort, to take care. In text: take care with the selection." } },

      w55: { surface: "vidět", pos: "verb", lemma: "vidět",
             gloss: { cs: "vidět", en: "to see" },
             aspect: "imperfective", aspect_pair: "uvidět",
             features: { tense: "infinitive" },
             conjugation: {
               present: { ja: "vidím", ty: "vidíš", on: "vidí", my: "vidíme", vy: "vidíte", oni: "vidí" },
               past: { on_m: "viděl", on_f: "viděla", on_n: "vidělo", oni_m: "viděli", oni_f: "viděly" },
               future: "budu vidět"
             },
             governs: ["akuzativ"],
             examples: ["Je to vidět.", "Vidím tě."],
             note: { cs: "Fráze „je vidět“ = je zřejmé, je patrné.", en: "Phrase „je vidět“ = it is visible, it is obvious." } },

      w56: { surface: "vlna", pos: "noun", lemma: "vlna",
             gloss: { cs: "vlna", en: "wool" },
             features: { case: "nominativ", number: "sg", gender: "fem" },
             vzor: "žena",
             note: { cs: "Materiál (ovčí vlna). Pozor: „vlna“ může znamenat i mořskou vlnu (wave).", en: "Material (sheep wool). Note: „vlna“ can also mean a sea wave." } }
    }
  }
  
];


