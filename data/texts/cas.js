const TEXT_CAS = {
    id: "cas",
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
  };
