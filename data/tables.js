const DECLENSION_TABLES = {

  "mladý": {
    label: { cs: "Tvrdé přídavné jméno (vzor mladý)", en: "Hard adjective (mladý)" },
    example: "mladý",
    alternations: {
      cs: "V nom. pl. muž. živ. často: k→c (velký → velcí), h→z (drahý → drazí), ch→š (tichý → tiší), r→ř (dobrý → dobří).",
      en: "In nom. pl. masc. anim., stems often change: k→c (velký → velcí), h→z (drahý → drazí), ch→š (tichý → tiší), r→ř (dobrý → dobří).",
    },
    columns: ["", "M sg", "F sg", "N sg", "M anim pl", "M inan/F/N pl"],
    rows: [
      ["Nom",   "mladý",       "mladá",  "mladé",   "mladí",   "mladé"],
      ["Gen",   "mladého",     "mladé",  "mladého", "mladých", "mladých"],
      ["Dat",   "mladému",     "mladé",  "mladému", "mladým",  "mladým"],
      ["Akuz",  "mladého/-ý",  "mladou", "mladé",   "mladé",   "mladé"],
      ["Vok",   "mladý",       "mladá",  "mladé",   "mladí",   "mladé"],
      ["Lok",   "mladém",      "mladé",  "mladém",  "mladých", "mladých"],
      ["Instr", "mladým",      "mladou", "mladým",  "mladými", "mladými"],
    ],
  },

  "jarní": {
    label: { cs: "Měkké přídavné jméno (vzor jarní)", en: "Soft adjective (jarní)" },
    example: "jarní",
    columns: ["", "M sg", "F sg", "N sg", "M anim pl", "M inan/F/N pl"],
    rows: [
      ["Nom",   "jarní",            "jarní", "jarní", "jarní",     "jarní"],
      ["Gen",   "jarního",          "jarní", "jarního", "jarních", "jarních"],
      ["Dat",   "jarnímu",          "jarní", "jarnímu", "jarním",  "jarním"],
      ["Akuz",  "jarního/-í",       "jarní", "jarní", "jarní",     "jarní"],
      ["Vok",   "jarní",            "jarní", "jarní", "jarní",     "jarní"],
      ["Lok",   "jarním",           "jarní", "jarním", "jarních", "jarních"],
      ["Instr", "jarním",           "jarní", "jarním", "jarními", "jarními"],
    ],
  },

  "pan": {
    label: { cs: "Mužský rod životný, tvrdý (vzor pan)", en: "Masc. animate, hard (pan)" },
    example: "pan / student / kamarád",
    alternations: {
      cs: "V nom. pl. často: k→c (kluk → kluci, žák → žáci), h→z (vrah → vrazi), ch→š (hoch → hoši), r→ř (profesor → profesoři, bratr → bratři).",
      en: "In nom. pl., stems often change: k→c (kluk → kluci, žák → žáci), h→z (vrah → vrazi), ch→š (hoch → hoši), r→ř (profesor → profesoři, bratr → bratři).",
    },
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "pan",             "páni"],
      ["Gen",   "pana",            "panů"],
      ["Dat",   "panovi / panu",   "panům"],
      ["Akuz",  "pana",            "pány"],
      ["Vok",   "pane",            "páni"],
      ["Lok",   "panovi / panu",   "panech"],
      ["Instr", "panem",           "pány"],
    ],
  },

  "muž": {
    label: { cs: "Mužský rod životný, měkký (vzor muž)", en: "Masc. animate, soft (muž)" },
    example: "muž / učitel / ředitel",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "muž",           "muži"],
      ["Gen",   "muže",          "mužů"],
      ["Dat",   "muži / mužovi", "mužům"],
      ["Akuz",  "muže",          "muže"],
      ["Vok",   "muži",          "muži"],
      ["Lok",   "muži / mužovi", "mužích"],
      ["Instr", "mužem",         "muži"],
    ],
  },

  "předseda": {
    label: { cs: "Mužský rod životný, -a (vzor předseda)", en: "Masc. animate, -a (předseda)" },
    example: "předseda / kolega / táta",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "předseda",    "předsedové"],
      ["Gen",   "předsedy",    "předsedů"],
      ["Dat",   "předsedovi",  "předsedům"],
      ["Akuz",  "předsedu",    "předsedy"],
      ["Vok",   "předsedo",    "předsedové"],
      ["Lok",   "předsedovi",  "předsedech"],
      ["Instr", "předsedou",   "předsedy"],
    ],
  },

  "soudce": {
    label: { cs: "Mužský rod životný, -e (vzor soudce)", en: "Masc. animate, -e (soudce)" },
    example: "soudce / správce / průvodce",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "soudce",           "soudci"],
      ["Gen",   "soudce",           "soudců"],
      ["Dat",   "soudci / soudcovi","soudcům"],
      ["Akuz",  "soudce",           "soudce"],
      ["Vok",   "soudce",           "soudci"],
      ["Lok",   "soudci / soudcovi","soudcích"],
      ["Instr", "soudcem",          "soudci"],
    ],
  },

  "hrad": {
    label: { cs: "Mužský rod neživotný, tvrdý (vzor hrad)", en: "Masc. inanimate, hard (hrad)" },
    example: "hrad / vlak / stůl / projekt",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "hrad",            "hrady"],
      ["Gen",   "hradu",           "hradů"],
      ["Dat",   "hradu",           "hradům"],
      ["Akuz",  "hrad",            "hrady"],
      ["Vok",   "hrade",           "hrady"],
      ["Lok",   "hradu / hradě",   "hradech"],
      ["Instr", "hradem",          "hrady"],
    ],
  },

  "stroj": {
    label: { cs: "Mužský rod neživotný, měkký (vzor stroj)", en: "Masc. inanimate, soft (stroj)" },
    example: "stroj / klíč / gauč",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "stroj",   "stroje"],
      ["Gen",   "stroje",  "strojů"],
      ["Dat",   "stroji",  "strojům"],
      ["Akuz",  "stroj",   "stroje"],
      ["Vok",   "stroji",  "stroje"],
      ["Lok",   "stroji",  "strojích"],
      ["Instr", "strojem", "stroji"],
    ],
  },

  "žena": {
    label: { cs: "Ženský rod, -a (vzor žena)", en: "Feminine, -a (žena)" },
    example: "žena / škola / budova",
    alternations: {
      cs: "V dat./lok. sg. a nom. pl. často: k→c (ruka → ruce, sekačka → sekačce), h→z (noha → noze, Praha → Praze), ch→š (moucha → mouše), r→ř (sestra → sestře).",
      en: "In dat./lok. sg. and nom. pl., stems often change: k→c (ruka → ruce, sekačka → sekačce), h→z (noha → noze, Praha → Praze), ch→š (moucha → mouše), r→ř (sestra → sestře).",
    },
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "žena",  "ženy"],
      ["Gen",   "ženy",  "žen"],
      ["Dat",   "ženě",  "ženám"],
      ["Akuz",  "ženu",  "ženy"],
      ["Vok",   "ženo",  "ženy"],
      ["Lok",   "ženě",  "ženách"],
      ["Instr", "ženou", "ženami"],
    ],
  },

  "růže": {
    label: { cs: "Ženský rod, -e (vzor růže)", en: "Feminine, -e (růže)" },
    example: "růže / restaurace / ulice",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "růže",   "růže"],
      ["Gen",   "růže",   "růží"],
      ["Dat",   "růži",   "růžím"],
      ["Akuz",  "růži",   "růže"],
      ["Vok",   "růže",   "růže"],
      ["Lok",   "růži",   "růžích"],
      ["Instr", "růží",   "růžemi"],
    ],
  },

  "kost": {
    label: { cs: "Ženský rod, souhláska -ost/-c (vzor kost)", en: "Feminine, cons-final (kost)" },
    example: "kost / věc / radost / pomoc",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "kost",  "kosti"],
      ["Gen",   "kosti", "kostí"],
      ["Dat",   "kosti", "kostem"],
      ["Akuz",  "kost",  "kosti"],
      ["Vok",   "kosti", "kosti"],
      ["Lok",   "kosti", "kostech"],
      ["Instr", "kostí", "kostmi"],
    ],
  },

  "píseň": {
    label: { cs: "Ženský rod, souhláska -eň/-el (vzor píseň)", en: "Feminine, cons-final (píseň)" },
    example: "píseň / postel / dlaň / zem",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "píseň",   "písně"],
      ["Gen",   "písně",   "písní"],
      ["Dat",   "písni",   "písním"],
      ["Akuz",  "píseň",   "písně"],
      ["Vok",   "písni",   "písně"],
      ["Lok",   "písni",   "písních"],
      ["Instr", "písní",   "písněmi"],
    ],
  },

  "město": {
    label: { cs: "Střední rod, -o (vzor město)", en: "Neuter, -o (město)" },
    example: "město / auto / máslo / pero",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "město",  "města"],
      ["Gen",   "města",  "měst"],
      ["Dat",   "městu",  "městům"],
      ["Akuz",  "město",  "města"],
      ["Vok",   "město",  "města"],
      ["Lok",   "městě",  "městech"],
      ["Instr", "městem", "městy"],
    ],
  },

  "moře": {
    label: { cs: "Střední rod, -e (vzor moře)", en: "Neuter, -e (moře)" },
    example: "moře / hřiště / letiště",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "moře",  "moře"],
      ["Gen",   "moře",  "moří"],
      ["Dat",   "moři",  "mořím"],
      ["Akuz",  "moře",  "moře"],
      ["Vok",   "moře",  "moře"],
      ["Lok",   "moři",  "mořích"],
      ["Instr", "mořem", "moři"],
    ],
  },

  "kuře": {
    label: { cs: "Střední rod, -e/-at- (vzor kuře)", en: "Neuter, -e/-at- (kuře)" },
    example: "kuře / dítě / zvíře / kůzle",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "kuře",    "kuřata"],
      ["Gen",   "kuřete",  "kuřat"],
      ["Dat",   "kuřeti",  "kuřatům"],
      ["Akuz",  "kuře",    "kuřata"],
      ["Vok",   "kuře",    "kuřata"],
      ["Lok",   "kuřeti",  "kuřatech"],
      ["Instr", "kuřetem", "kuřaty"],
    ],
  },

  "stavení": {
    label: { cs: "Střední rod, -í (vzor stavení)", en: "Neuter, -í (stavení)" },
    example: "stavení / nádraží / náměstí / umění",
    columns: ["", "Sg", "Pl"],
    rows: [
      ["Nom",   "stavení",  "stavení"],
      ["Gen",   "stavení",  "stavení"],
      ["Dat",   "stavení",  "stavením"],
      ["Akuz",  "stavení",  "stavení"],
      ["Vok",   "stavení",  "stavení"],
      ["Lok",   "stavení",  "staveních"],
      ["Instr", "stavením", "staveními"],
    ],
  },

  "můj": {
    label: { cs: "Přivlastňovací zájmeno (vzor můj)", en: "Possessive pronoun (můj)" },
    example: "můj",
    note: { cs: "Stejně: tvůj (tvá/tvoje, tvé), svůj (svá/svoje, své). Pozor: nominativ fem. též moje, tvoje, svoje (hovorově).", en: "Same pattern: tvůj (tvá/tvoje, tvé), svůj (svá/svoje, své). Note: nom. fem. also moje, tvoje, svoje (colloquial)." },
    columns: ["", "M sg", "F sg", "N sg", "M anim pl", "M inan/F/N pl"],
    rows: [
      ["Nom",   "můj",         "má",   "mé",   "moji / mí", "mé"],
      ["Gen",   "mého",        "mé",   "mého", "mých",      "mých"],
      ["Dat",   "mému",        "mé",   "mému", "mým",       "mým"],
      ["Akuz",  "mého / můj",  "mou",  "mé",   "mé",        "mé"],
      ["Vok",   "můj",         "má",   "mé",   "moji / mí", "mé"],
      ["Lok",   "mém",         "mé",   "mém",  "mých",      "mých"],
      ["Instr", "mým",         "mou",  "mým",  "mými",      "mými"],
    ],
  },

  "ten": {
    label: { cs: "Ukazovací zájmeno (vzor ten)", en: "Demonstrative (ten)" },
    example: "ten / ta / to",
    columns: ["", "M sg", "F sg", "N sg", "M anim pl", "M inan/F/N pl"],
    rows: [
      ["Nom",   "ten",         "ta",   "to",   "ti",  "ty / ta"],
      ["Gen",   "toho",        "té",   "toho", "těch", "těch"],
      ["Dat",   "tomu",        "té",   "tomu", "těm",  "těm"],
      ["Akuz",  "toho / ten",  "tu",   "to",   "ty",   "ty / ta"],
      ["Vok",   "ten",         "ta",   "to",   "ti",   "ty / ta"],
      ["Lok",   "tom",         "té",   "tom",  "těch", "těch"],
      ["Instr", "tím",         "tou",  "tím",  "těmi", "těmi"],
    ],
  },

  "náš": {
    label: { cs: "Přivlastňovací zájmeno (vzor náš)", en: "Possessive (náš)" },
    example: "náš / váš",
    columns: ["", "M sg", "F sg", "N sg", "M anim pl", "M inan/F/N pl"],
    rows: [
      ["Nom",   "náš",           "naše", "naše", "naši",  "naše"],
      ["Gen",   "našeho",        "naší", "našeho", "našich", "našich"],
      ["Dat",   "našemu",        "naší", "našemu", "našim",  "našim"],
      ["Akuz",  "našeho / náš",  "naši", "naše", "naše",   "naše"],
      ["Vok",   "náš",           "naše", "naše", "naši",   "naše"],
      ["Lok",   "našem",         "naší", "našem", "našich", "našich"],
      ["Instr", "naším",         "naší", "naším", "našimi", "našimi"],
    ],
  },

};
