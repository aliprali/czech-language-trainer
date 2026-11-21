const TEXT_SVETR = {
    id: "svetr",
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
  



