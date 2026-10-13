/* Quiz questions per level and category.
   c(sentence, answer, wrongOptions, explanation, hint)  multiple choice; ___ marks the gap
   o(answer, explanation, alternatives)                    build the sentence from word tiles
   t(prompt, answer, explanation, alternatives)            type the missing form
   Sentences are in Danish; hints and explanations are in English. */
(function (root) {
  "use strict";

  function c(q, a, o, e, hint) { return { type: "choice", q: q, a: a, o: o, e: e, hint: hint }; }
  function o(a, e, alt) { return { type: "order", a: a, e: e, alt: alt }; }
  function t(q, a, e, alt) { return { type: "type", q: q, a: a, e: e, alt: alt }; }

  var PRESENT = "Present tense: add -r to the infinitive (bo → bor, spise → spiser).";
  var MODAL = "After kan, vil, skal and må the next verb is an infinitive without 'at'.";
  var MOVE = "Movement towards a place: ud, ind, op, ned, hen, hjem. Being in a place: ude, inde, oppe, nede, henne, hjemme.";
  var SVA = "Main clause: subject – verb – adverb (ikke, også, altid, kun …).";
  var VSA = "Questions and inverted clauses: verb – subject – adverb.";
  var SAV = "Subordinate clause (after at, fordi, hvis, om …): subject – adverb – verb.";
  var INV = "Danish verbs come second. If the sentence starts with something other than the subject, the verb comes before the subject.";
  var AGR = "Adjectives: no ending with en-words, -t with et-words, -e in the plural and after den/det/de or a possessive.";
  var SIN = "'Sin/sit/sine' refers back to the subject of the same clause when the subject is han, hun, den, det or a name. It can never be part of the subject itself.";
  var DA_NAAR = "'Da' = one event or period in the past. 'Når' = every time, now or in the future.";
  var HVIS_OM = "'Om' = whether (doubt, indirect question). 'Hvis' = if (a condition).";
  var DATID = "Datid (past) is used when the time is finished and stated or understood: i går, sidste år, for to år siden.";
  var FOERNUTID = "Førnutid (har/er + participle) is used for something that continues until now, or when the result matters and not the time.";
  var ER_HAR = "Verbs of movement or change (gå, komme, rejse, flytte, blive) take 'er' in førnutid. Most other verbs take 'har'.";

  var levels = {
    beginner: {
      verbs: [
        c("Jeg ___ i København.", "bor", ["bo", "boede"], PRESENT),
        c("Hun ___ dansk på en sprogskole.", "lærer", ["lære", "lærte"], PRESENT),
        c("Vi ___ kaffe hver morgen.", "drikker", ["drikke", "drak"], PRESENT),
        c("Toget ___ klokken otte.", "kører", ["køre", "kørte"], PRESENT),
        c("Hvad ___ du? – Jeg er lærer.", "laver", ["lave", "lavet"], PRESENT),
        c("Jeg kan ___ tysk.", "tale", ["taler", "at tale"], MODAL),
        c("Han vil gerne ___ en kop te.", "have", ["har", "at have"], MODAL),
        c("Du må ikke ___ her.", "ryge", ["ryger", "at ryge"], MODAL),
        c("Jeg kan godt lide ___ læse.", "at", ["til", "for"], "'Kan lide' is followed by 'at' + infinitive."),
        c("___ du med i biografen? – Ja, det vil jeg gerne.", "Vil", ["Må", "Skal"], "'Vil' asks what someone wants. The answer repeats the same verb: Ja, det vil jeg gerne."),
        c("___ jeg låne din telefon? – Ja, det må du godt.", "Må", ["Vil", "Skal"], "'Må' asks for permission."),
        c("Jeg ___ desværre ikke komme på onsdag.", "kan", ["er", "har"], "'Kan' = be able to, possibility."),
        c("___ døren, tak!", "Luk", ["Lukke", "Lukker"], "Imperative: the infinitive without the final -e (lukke → luk)."),
        t("at spise → present: Jeg ___ morgenmad.", "spiser", PRESENT),
        t("at gå → present: Han ___ hjem nu.", "går", PRESENT),
        t("at være → present: Hun ___ træt.", "er", "'Være' is irregular: present tense is 'er'."),
        t("at have → present: Vi ___ to børn.", "har", "'Have' is irregular: present tense is 'har'."),
        t("at tale → present: De ___ engelsk.", "taler", PRESENT)
      ],
      adverbs: [
        c("Hun går ___ i køkkenet.", "ud", ["ude"], MOVE),
        c("Han er ___ i haven.", "ude", ["ud"], MOVE),
        c("Jeg går ___ nu.", "hjem", ["hjemme"], MOVE),
        c("Børnene er ___.", "hjemme", ["hjem"], MOVE),
        c("Vi går ___ på loftet.", "op", ["oppe"], MOVE),
        c("Min mor er ___ i kælderen.", "nede", ["ned"], MOVE),
        c("Kom ___ i stuen!", "ind", ["inde"], MOVE),
        c("Hun er ___ i kiosken.", "henne", ["hen"], MOVE),
        c("Han kan ___ tale engelsk. (He can't speak English either.)", "heller ikke", ["ikke heller", "også ikke"], "'Not … either' = heller ikke."),
        c("Jeg ___ fisk. (never)", "spiser aldrig", ["aldrig spiser"], SVA),
        o("Han kan ikke tale tysk.", SVA),
        o("Hun kan også tale engelsk.", SVA),
        o("Jeg drikker altid kaffe.", SVA),
        o("Han taler kun dansk.", SVA),
        o("Kan du ikke tale fransk?", VSA)
      ],
      adjectives: [
        c("Jeg bor i et ___ hus. (stor)", "stort", ["stor", "store"], AGR),
        c("Jeg bor i en ___ lejlighed. (stor)", "stor", ["stort", "store"], AGR),
        c("De har to ___ badeværelser. (stor)", "store", ["stor", "stort"], AGR),
        c("Bilen er ___. (rød)", "rød", ["rødt", "røde"], AGR),
        c("Huset er ___. (rød)", "rødt", ["rød", "røde"], AGR),
        c("Æblerne er ___. (grøn)", "grønne", ["grøn", "grønt"], "Plural: -e. Short words with one vowel double the consonant: grøn → grønne."),
        c("Vi har to ___ børn. (lille)", "små", ["lille", "lilles"], "'Lille' is irregular: the plural is 'små'."),
        c("Det er en ___ by. (lille)", "lille", ["små", "lilt"], "'Lille' has no -t form."),
        c("Jeg har mit ___ værelse. (egen)", "eget", ["egen", "egne"], "en-word: egen, et-word: eget, plural: egne."),
        c("Det er ___ vejr i dag. (god)", "godt", ["god", "gode"], AGR),
        c("Jeg har en ___ bil. (ny)", "ny", ["nyt", "nye"], AGR),
        c("Det er et ___ hus. (ny)", "nyt", ["ny", "nye"], AGR),
        c("Han har ___ øjne. (blå)", "blå", ["blåe", "blåt"], "Adjectives ending in a stressed vowel like blå get no -e."),
        c("Det er et ___ sprog. (dansk)", "dansk", ["danskt", "danske"], "Adjectives ending in -sk get no -t."),
        c("Jeg har ikke ___ bil.", "nogen", ["noget", "nogle"], "No/any: nogen with en-words, noget with et-words and uncountables."),
        c("Jeg har ikke ___ arbejde.", "noget", ["nogen", "nogle"], "No/any: nogen with en-words, noget with et-words and uncountables."),
        c("Peter og Louise har ___ dejlige børn.", "nogle", ["nogen", "noget"], "'Nogle' = some, in positive sentences with plural nouns.")
      ],
      pronouns: [
        c("Jeg hjælper dig, men du hjælper aldrig ___.", "mig", ["jeg", "min"], "Object form: jeg → mig."),
        c("Han elsker ___. (her)", "hende", ["hun", "hendes"], "Object form: hun → hende."),
        c("Hun elsker ___. (him)", "ham", ["han", "hans"], "Object form: han → ham."),
        c("Vi hjælper ___. (you, plural)", "jer", ["I", "jeres"], "Object form: I → jer."),
        c("___ hedder Marie. (she)", "Hun", ["Hende", "Hendes"], "Subject form: hun."),
        c("Er I glade for ___ lejlighed? (your, plural)", "jeres", ["jer", "I"], "Possessive, 2nd person plural: jeres."),
        c("Jeg har en bror. ___ bror hedder Johannes.", "Min", ["Mit", "Mine"], "en-word: min, et-word: mit, plural: mine."),
        c("Hvad hedder ___ datter?", "din", ["dit", "dine"], "en-word: din, et-word: dit, plural: dine."),
        c("___ hus er stort. (my)", "Mit", ["Min", "Mine"], "en-word: min, et-word: mit, plural: mine."),
        c("___ børn hedder Kamilla og Kasper. (our)", "Vores", ["Vi", "Os"], "Possessive, 1st person plural: vores."),
        c("Henrik er glad for ___ lejlighed. (his own)", "sin", ["hans", "sit"], SIN),
        c("Henrik er glad for sin lejlighed. ___ lejlighed ligger i Mejlgade.", "Hans", ["Sin", "Sit"], SIN),
        c("Jeg hygger ___.", "mig", ["sig", "min"], "Reflexive: jeg – mig, du – dig, han/hun – sig, vi – os, I – jer, de – sig."),
        c("De hygger ___.", "sig", ["dem", "deres"], "Reflexive: jeg – mig, du – dig, han/hun – sig, vi – os, I – jer, de – sig."),
        c("Vi hygger ___.", "os", ["vores", "sig"], "Reflexive: jeg – mig, du – dig, han/hun – sig, vi – os, I – jer, de – sig."),
        c("Dér står en kop. Giv mig ___ lige!", "den", ["det", "dem"], "Use den for en-words, det for et-words, dem for plurals."),
        c("Nøglerne hænger i skabet. Giv mig ___ lige!", "dem", ["den", "det"], "Use den for en-words, det for et-words, dem for plurals.")
      ],
      prepositions: [
        c("Jeg kommer ___ Italien.", "fra", ["til", "i"], "Origin: komme fra."),
        c("Jeg bor ___ København.", "i", ["på", "til"], "Cities and countries: i."),
        c("Hun arbejder ___ et hospital.", "på", ["i", "til"], "Many workplaces take 'på': på et hospital, på et kontor."),
        c("Vi skal ___ biografen i aften.", "i", ["på", "til"], "Fixed phrase: i biografen."),
        c("Jeg går ___ dansk to gange om ugen.", "til", ["på", "i"], "Activities: gå til dansk, gå til fodbold."),
        c("Karoline er ___ café.", "på", ["i", "til"], "Fixed phrase: på café."),
        c("Jeg spiser morgenmad ___ min familie.", "med", ["af", "til"], "Together with: med."),
        c("Hvordan siger man 'table' ___ dansk?", "på", ["i", "til"], "Languages: på dansk, på engelsk."),
        c("Det er koldt ___ vinteren.", "om", ["i", "på"], "Seasons in general: om vinteren, om sommeren."),
        c("Kristian er ___ arbejde i dag.", "på", ["i", "til"], "Fixed phrase: på arbejde."),
        c("Vi ses ___ mandag.", "på", ["i", "om"], "A coming weekday: på mandag."),
        c("Hun er født ___ 1994.", "i", ["på", "om"], "Years: i 1994."),
        c("Banken ligger ved siden ___ supermarkedet.", "af", ["på", "til"], "Fixed phrase: ved siden af."),
        c("Jeg venter ___ bussen.", "på", ["til", "for"], "Fixed phrase: vente på.")
      ],
      conjunctions: [
        c("Jeg har en søster ___ en bror.", "og", ["men", "eller"], "'Og' = and."),
        c("Han kan tale tysk, ___ han kan ikke tale fransk.", "men", ["og", "for"], "'Men' = but."),
        c("Vil du have kaffe ___ te?", "eller", ["og", "men"], "'Eller' = or."),
        c("Jeg går i seng nu, ___ jeg er træt.", "for", ["så", "men"], "'For' gives the reason and is followed by normal word order."),
        c("Jeg er træt, ___ jeg går i seng nu.", "så", ["for", "eller"], "'Så' = so, a conclusion."),
        c("Jeg lærer dansk, ___ jeg bor i Danmark.", "fordi", ["men", "eller"], "'Fordi' = because."),
        c("___ jeg har tid, læser jeg en bog.", "Når", ["Men", "Og"], "'Når' = when, every time."),
        c("Både min mor ___ min far er lærere.", "og", ["eller", "men"], "både … og = both … and."),
        c("Hverken min mor ___ min far taler dansk.", "eller", ["og", "men"], "hverken … eller = neither … nor."),
        c("Hun siger, ___ hun er træt.", "at", ["og", "for"], "'At' = that."),
        c("Han er glad, ___ han har ferie.", "fordi", ["men", "eller"], "'Fordi' = because."),
        c("Jeg kan ikke komme, ___ jeg er syg.", "for", ["og", "eller"], "'For' = because (main clause order).")
      ],
      wordorder: [
        o("I dag arbejder Marie.", INV),
        o("Nu er Kristian i biografen.", INV),
        o("Hver lørdag spiser Marie og Kristian på restaurant.", INV),
        o("I aften skal vi i biografen.", INV),
        o("I morgen skal jeg til Aarhus.", INV),
        o("Om mandagen spiller han fodbold.", INV),
        o("Hvad hedder du?", "Questions with a question word: question word – verb – subject."),
        o("Hvor bor du?", "Questions with a question word: question word – verb – subject."),
        o("Har du en bil?", "Yes/no questions start with the verb."),
        o("Jeg drikker ikke kaffe.", SVA),
        c("I dag ___ hjemme.", "er jeg", ["jeg er"], INV),
        c("Nu ___ dansk.", "lærer hun", ["hun lærer"], INV),
        c("Har du en bil? – Ja, det ___.", "har jeg", ["jeg har"], "Short answers repeat the verb and use inversion: Ja, det har jeg."),
        c("Er det din taske? – Nej, det ___ ikke.", "er det", ["det er"], "Short answers repeat the verb and use inversion: Nej, det er det ikke.")
      ]
    },

    intermediate: {
      verbs: [
        c("I går ___ jeg bussen. (at tage)", "tog", ["tager", "har taget"], DATID),
        c("Jeg ___ i Danmark i to år nu. (at bo)", "har boet", ["boede", "bor"], FOERNUTID),
        c("Hvornår ___ du til Danmark? (at komme)", "kom", ["er kommet", "kommer"], "A question about when uses datid."),
        c("___ du været i Istanbul?", "Har", ["Er", "Bliver"], "'Være' takes 'har' in førnutid: har været."),
        c("Hun ___ gået hjem.", "er", ["har", "bliver"], ER_HAR),
        c("Bo ___ rejst til USA.", "er", ["har", "bliver"], ER_HAR),
        c("Han ___ boet her siden januar.", "har", ["er", "bliver"], ER_HAR),
        c("Sidste år ___ vi i Berlin. (at bo)", "boede", ["bor", "har boet"], DATID),
        c("Han ___ sine handsker i bussen i går. (at glemme)", "glemte", ["har glemt", "glemmer"], DATID),
        c("Telefonen ___ på bordet.", "ligger", ["lægger", "lagde"], "'Ligge' = to lie (no object). 'Lægge' = to put something down (with an object)."),
        c("Jeg ___ telefonen på bordet hver aften.", "lægger", ["ligger", "lå"], "'Ligge' = to lie (no object). 'Lægge' = to put something down (with an object)."),
        t("at spise → past: I går ___ jeg sushi.", "spiste", "Group 2: -te in the past (spise → spiste)."),
        t("at spise → førnutid: Jeg har ___.", "spist", "Group 2: -t in førnutid (har spist)."),
        t("at arbejde → past: Jeg ___ hele dagen.", "arbejdede", "Group 1: -ede in the past (arbejde → arbejdede)."),
        t("at bo → past: Vi ___ i Rom.", "boede", "Group 1: -ede in the past (bo → boede)."),
        t("at gå → past: Han ___ hjem.", "gik", "Irregular: gå – gik – er/har gået."),
        t("at få → past: Jeg ___ en gave.", "fik", "Irregular: få – fik – har fået."),
        t("at drikke → førnutid: Har du ___ al mælken?", "drukket", "Irregular: drikke – drak – har drukket."),
        t("at se → past: Vi ___ en god film i går.", "så", "Irregular: se – så – har set."),
        t("at sige → past: Hun ___ ingenting.", "sagde", "Irregular: sige – sagde – har sagt.")
      ],
      adverbs: [
        c("Hun siger, at hun ___ mysli om morgenen.", "altid spiser", ["spiser altid"], SAV),
        c("Hun ___ mysli om morgenen.", "spiser altid", ["altid spiser"], SVA),
        c("Til hverdag ___ hjemmefra kl. 7.30.", "tager jeg altid", ["jeg tager altid", "tager altid jeg"], VSA),
        c("Jeg går på sprogskole, fordi jeg ___ lære dansk.", "gerne vil", ["vil gerne"], SAV),
        c("Han siger, at han ___ tysk.", "kun kan tale", ["kan kun tale", "kan tale kun"], SAV),
        c("Jeg kan ikke høre dig, hvis du ___ højere.", "ikke taler", ["taler ikke"], SAV),
        c("Jeg tager toget ___. (out there)", "derud", ["derude"], MOVE),
        c("Skal vi spise ___ i aften? (out here)", "herude", ["herud"], MOVE),
        o("Har du også en cykel?", VSA),
        o("Kan du godt lide fisk?", VSA),
        o("Han siger, at han ikke kan komme.", SAV),
        o("Jeg ved, at hun altid kommer for sent.", SAV),
        o("Til hverdag står han altid op klokken syv.", VSA)
      ],
      adjectives: [
        c("Min bror er ___ end mig. (gammel)", "ældre", ["gamlere", "mere gammel"], "Irregular: gammel – ældre – ældst."),
        c("København er ___ end Aarhus. (stor)", "større", ["storere", "mere stor"], "Irregular: stor – større – størst."),
        c("Det er den ___ kaffe i byen. (god)", "bedste", ["godeste", "bedre"], "Irregular: god – bedre – bedst. After 'den' the superlative gets -e."),
        c("Europa er ___ end Asien. (lille)", "mindre", ["lillere", "mindste"], "Irregular: lille – mindre – mindst."),
        c("Min mand er fem år ___ end mig. (ung)", "yngre", ["ungere", "yngste"], "Irregular: ung – yngre – yngst."),
        c("Det er ___ at bo på landet end i byen. (billig)", "billigere", ["mere billig", "billigste"], "Regular: -ere in the comparative."),
        c("Hun er den ___ i klassen. (høj)", "højeste", ["højere", "mest høj"], "Superlative: -est, plus -e after den/det/de."),
        c("Det er ___ at rejse i udlandet. (spændende)", "mere spændende", ["spændendere", "mest spændende"], "Long adjectives use mere / mest."),
        c("Jeg har ___ kolleger.", "mange", ["meget", "megen"], "'Mange' with things you can count."),
        c("Jeg har ___ ansvar.", "meget", ["mange", "flere"], "'Meget' with things you can't count."),
        c("Han har ___ penge end mig.", "flere", ["mere", "mest"], "'Penge' is plural, so: mange – flere – flest."),
        c("Jeg spiser ___ frugt.", "meget", ["mange"], "'Frugt' is uncountable: meget frugt."),
        t("god → comparative: Kaffen er ___ i dag.", "bedre", "Irregular: god – bedre – bedst."),
        t("stor → superlative: Han er ___. (Han er størst.)", "størst", "Irregular: stor – større – størst.")
      ],
      pronouns: [
        c("Jeg skal til fest hos nogle af ___ venner. (my)", "mine", ["min", "mit"], "Plural: mine."),
        c("Line og Mads har inviteret alle ___ venner.", "deres", ["sine", "hans"], SIN),
        c("Han spurgte, om jeg ville hjælpe ___ med maden. (him)", "ham", ["han", "sig"], "Object form: han → ham."),
        c("Jeg glæder ___ til festen.", "mig", ["sig", "min"], "Reflexive verb: glæde sig. Jeg glæder mig."),
        c("Glæder du ___ til ferien?", "dig", ["sig", "din"], "Reflexive verb: glæde sig. Du glæder dig."),
        c("Jeg er i gang med en biografi. – Er ___ god?", "den", ["det", "han"], "'En biografi' is an en-word, so it is replaced by 'den'."),
        c("Jeg har lige købt et nyt komfur. ___ er rigtig godt.", "Det", ["Den", "Han"], "'Et komfur' is an et-word, so it is replaced by 'det'."),
        c("Kender du ___ vinbar, der hedder Malbeck?", "den", ["det", "de"], "Demonstrative before an en-word: den vinbar, der …"),
        c("Pete og Claire kommer ___ fra USA.", "begge to", ["begge dele"], "'Begge (to)' about people or concrete things of the same kind."),
        c("Kan du bedst lide actionfilm eller komedier? – Jeg kan lide ___.", "begge dele", ["begge to"], "'Begge dele' about two different kinds of thing.")
      ],
      prepositions: [
        c("Jeg blev færdig ___ mit studium for tre år siden.", "med", ["af", "på"], "Fixed phrase: færdig med."),
        c("Jeg har arbejdet som arkitekt ___ ti år.", "i", ["på", "for"], "Duration: i ti år."),
        c("Er du glad ___ dit job?", "for", ["med", "i"], "Fixed phrase: glad for."),
        c("Jeg deler kontor ___ en pige fra Madrid.", "med", ["for", "til"], "Fixed phrase: dele med."),
        c("Han er træt ___ sit arbejde.", "af", ["med", "for"], "Fixed phrase: træt af."),
        c("Hvad er det modsatte ___ 'dag'?", "af", ["for", "til"], "Fixed phrase: det modsatte af."),
        c("Jeg synes, den nye film ___ Tom Cruise er god.", "med", ["af", "fra"], "An actor is in a film: filmen med Tom Cruise."),
        c("Vil du med ___ stranden i morgen?", "på", ["til", "i"], "Fixed phrase: på stranden."),
        c("Jeg er ikke sikker ___, hvornår de åbner.", "på", ["om", "af"], "Fixed phrase: sikker på."),
        c("Min kæreste har inviteret mig ___ skovtur.", "på", ["til", "i"], "Fixed phrase: på skovtur."),
        c("Jeg har altid drømt ___ at rejse til Seychellerne.", "om", ["på", "af"], "Fixed phrase: drømme om."),
        c("Jeg drikker vand ___ maden.", "til", ["med", "på"], "With a meal: til maden."),
        c("Han skal arbejde ___ natten.", "om", ["i", "på"], "During the night: om natten."),
        c("Jeg glæder mig ___ at se dig.", "til", ["på", "for"], "Fixed phrase: glæde sig til.")
      ],
      conjunctions: [
        c("___ jeg var barn, boede jeg i Rom.", "Da", ["Når", "Hvis"], DA_NAAR),
        c("___ jeg har tid, cykler jeg en tur.", "Når", ["Da", "Om"], DA_NAAR),
        c("Jeg løb tit en tur, ___ vejret var godt.", "når", ["da"], "Repeated events in the past also take 'når'."),
        c("Vi lå ved stranden, ___ det blev uvejr.", "da", ["når", "om"], DA_NAAR),
        c("Ved du, ___ Louise kommer i aften?", "om", ["hvis", "at"], HVIS_OM),
        c("Jeg bliver glad, ___ Louise kommer i aften.", "hvis", ["om", "at"], HVIS_OM),
        c("Lene er tit træt, ___ hun arbejder for meget.", "fordi", ["selvom"], "'Fordi' = because. 'Selvom' = even though."),
        c("Jeg købte ordbogen, ___ den var ret dyr.", "selvom", ["fordi"], "'Fordi' = because. 'Selvom' = even though."),
        c("Jeg har en nabo, ___ hedder Peter.", "der", ["hvad", "hvor"], "'Der' or 'som' as subject of the relative clause."),
        c("Jeg fik det gennem en pige, ___ jeg kender.", "som", ["der", "hvad"], "When the relative word is the object, only 'som' works (or nothing)."),
        c("Hun siger, ___ hun gerne vil prøve noget nyt.", "at", ["om", "hvis"], "'At' introduces what someone says or thinks."),
        c("Jeg ved ikke, ___ Legoland ligger.", "hvor", ["hvad", "om"], "Question words work as conjunctions: hvor, hvad, hvornår …"),
        c("Jeg spiser, ___ jeg ser fjernsyn.", "mens", ["før", "fordi"], "'Mens' = while."),
        c("Du skal vaske hænder, ___ du sætter dig til bords.", "før", ["mens", "da"], "'Før' = before.")
      ],
      wordorder: [
        c("Hvis Louise kommer i aften, ___ glad.", "bliver jeg", ["jeg bliver"], "When a subordinate clause comes first, the main clause starts with the verb."),
        c("Når solen skinner, ___ glad.", "bliver han", ["han bliver"], "When a subordinate clause comes first, the main clause starts with the verb."),
        c("Da jeg boede i Berlin, ___ i byen.", "gik jeg tit", ["jeg gik tit", "gik tit jeg"], VSA),
        c("Kender du filmen? – Nej, den ___.", "kender jeg ikke", ["jeg kender ikke", "ikke kender jeg"], "An object at the start causes inversion."),
        c("Er bogen god? – Ja, det ___.", "er den", ["den er"], "A predicate at the start causes inversion."),
        c("Ved du, hvad ___?", "forfatteren hedder", ["hedder forfatteren"], "No inversion in subordinate clauses."),
        c("Jeg er træt, så nu ___ i seng.", "går jeg", ["jeg går"], INV),
        o("Hvis det bliver godt vejr, tager jeg til stranden.", "Subordinate clause first, then verb – subject."),
        o("Da jeg var barn, kunne jeg ikke lide fisk.", "Subordinate clause first, then verb – subject."),
        o("Først går han i bad, og så klæder han sig på.", INV),
        o("Sidste år boede Louisa i USA.", INV),
        o("I går spiste jeg sushi.", INV)
      ]
    },

    advanced: {
      verbs: [
        c("Da jeg ___ spist, vaskede jeg op.", "havde", ["har", "var"], "Førdatid (havde/var + participle) for what happened before another past event."),
        c("Han fortalte, at Mette ___ gået.", "var", ["havde", "er"], "Førdatid with a movement verb: var gået."),
        c("Jeg ___ glemt at tage telefonen op af lommen.", "havde", ["var", "blev"], "Førdatid: havde glemt."),
        c("Jeg ___ telefonen på bordet i går.", "lagde", ["lå", "ligger"], "Lægge – lagde – har lagt (put something). Ligge – lå – har ligget (lie)."),
        c("Telefonen ___ på bordet i går.", "lå", ["lagde", "lægger"], "Lægge – lagde – har lagt (put something). Ligge – lå – har ligget (lie)."),
        c("Hun ___ og læser avisen i lænestolen.", "sidder", ["står", "ligger"], "Danish shows position: sidder og læser, ligger og sover, står og venter."),
        c("Børnene ___ og sover.", "ligger", ["sidder", "står"], "Danish shows position: sidder og læser, ligger og sover, står og venter."),
        c("Mathias og Marie ___ flyttet til Aarhus.", "er", ["bliver", "havde"], ER_HAR),
        c("Jeg har lært mig selv ___ spille guitar.", "at", ["til", "for"], "Infinitive with 'at' after most verbs and prepositions."),
        c("Man må ikke ___ på græsset.", "gå", ["at gå", "går"], MODAL),
        c("Har du lyst til ___ en tur?", "at løbe", ["løbe", "løber"], "After a preposition: at + infinitive."),
        c("Hvad plejer du ___ til frokost?", "at få", ["få", "får"], "'Plejer' is followed by 'at' + infinitive."),
        c("Ole: »Jeg kommer hjem klokken syv.« → Ole siger, at han ___ hjem klokken syv.", "kommer", ["kom", "komme"], "Indirect speech with 'siger' (present): the tense stays the same."),
        t("at hjælpe → førnutid: Har du ___ hende?", "hjulpet", "Irregular: hjælpe – hjalp – har hjulpet."),
        t("at finde → past: Jeg ___ stenen på stranden.", "fandt", "Irregular: finde – fandt – har fundet."),
        t("at give → past: Hun ___ mig en gave.", "gav", "Irregular: give – gav – har givet."),
        t("at tage → førnutid: Hvem har ___ avisen?", "taget", "Irregular: tage – tog – har taget.")
      ],
      adverbs: [
        o("Har du nogensinde været i Sydamerika?", VSA),
        o("Det er den bedste bog, jeg nogensinde har læst.", SAV),
        o("Først skal du se huset, og så skal du se haven.", INV),
        o("Jeg kan ikke høre dig, hvis du ikke taler højere.", SAV),
        c("Ved du, hvorfor Pias mand ___ på efterløn?", "allerede er gået", ["er allerede gået"], SAV),
        c("Ved du, om Hanne ___ tennis?", "stadig kan spille", ["kan stadig spille"], SAV),
        c("Går du med ___ til mig?", "hjem", ["hjemme"], MOVE),
        c("Min bil holder ___ foran Netto.", "henne", ["hen"], MOVE),
        c("Kast lige bolden ___ til mig.", "hen", ["henne"], MOVE),
        c("Luften er friskere ___ i Norge.", "oppe", ["op"], MOVE),
        c("Jeg kunne høre høj musik ___ fra huset.", "inde", ["ind"], MOVE),
        c("Frederik er løbet ___ på toppen af bakken.", "op", ["oppe"], MOVE)
      ],
      adjectives: [
        c("De blev glade, da de hørte den ___ nyhed. (god)", "gode", ["god", "godt"], "After den/det/de the adjective always gets -e."),
        c("Han bar det ___ krus ud i køkkenet. (ren)", "rene", ["ren", "rent"], "After den/det/de the adjective always gets -e."),
        c("Det ___ hotel åbner i næste måned. (ny)", "nye", ["ny", "nyt"], "After den/det/de the adjective always gets -e."),
        c("Han taler så ___, at det er svært at forstå ham. (hurtig)", "hurtigt", ["hurtig", "hurtige"], "Describing how something is done: add -t (adverb form)."),
        c("Franske oste smager ___. (god)", "godt", ["god", "gode"], "Describing a verb (smager): -t form."),
        c("Kagerne er ___. (god)", "gode", ["godt", "god"], "Describing a plural noun: -e."),
        c("Han er ikke døv, men han hører ___. (dårlig)", "dårligt", ["dårlig", "dårlige"], "Describing a verb (hører): -t form."),
        c("Tine passer tit sine ___ søskende. (lille)", "små", ["lille", "lilles"], "'Lille' in the plural: små."),
        c("___ forestillingen varede halvanden time.", "Hele", ["Alle", "Al"], "'Hele' = the whole (one thing). 'Alle' = all (many things)."),
        c("Jeg kan ikke læse ___ de reklamer, der kommer.", "alle", ["hele", "al"], "'Hele' = the whole (one thing). 'Alle' = all (many things)."),
        c("Kan du ringe en ___ dag?", "anden", ["andet", "andre"], "anden (en-word), andet (et-word), andre (plural)."),
        c("Giv mig lige et ___ glas.", "andet", ["anden", "andre"], "anden (en-word), andet (et-word), andre (plural)."),
        c("Hun snakker sjældent med de ___ ansatte.", "andre", ["anden", "andet"], "anden (en-word), andet (et-word), andre (plural)."),
        c("Hun er en af de ___ kvinder, jeg kender. (interessant)", "mest interessante", ["interessanteste", "mere interessante"], "Long adjectives: mest + adjective with -e after de."),
        c("Det er den ___ baby, jeg nogensinde har set. (stor)", "største", ["storeste", "størst"], "After den: superlative with -e.")
      ],
      pronouns: [
        c("Han pakkede ___ kufferter og flyttede.", "sine", ["hans", "deres"], SIN),
        c("Vores naboer og ___ børn er rejst på ferie.", "deres", ["sine", "hans"], SIN),
        c("Camilla og Peter besøger tit ___ farmor.", "deres", ["sin", "sine"], "With de / a plural subject, always 'deres' (never sin)."),
        c("Fuglene bygger ___ reder om foråret.", "deres", ["sine", "sin"], "With a plural subject, always 'deres'."),
        c("Hun fik ikke ret meget for ___ skistøvler.", "sine", ["hendes", "deres"], SIN),
        c("___ ligger nogle ugeblade i gangen. Er det dine?", "Der", ["Det", "Den"], "'Der' introduces something new or indefinite: Der ligger nogle ugeblade …"),
        c("___ er ærgerligt, at du ikke kommer med.", "Det", ["Der", "Den"], "'Det' as a formal subject: Det er ærgerligt, at …"),
        c("Har du set min sutsko? – Ja, ___ ligger under sofaen.", "den", ["det", "der"], "'En sutsko' is an en-word: den."),
        c("___ kommer en god film på TV2 i morgen.", "Der", ["Det", "Den"], "'Der' introduces something new or indefinite."),
        c("Jeg ringede på, men der var ikke ___ hjemme.", "nogen", ["noget", "nogle"], "'Nogen' = anybody."),
        c("Hun sagde ikke ___.", "noget", ["nogen", "nogle"], "'Noget' = anything."),
        c("___ forretninger har åbent om søndagen.", "Nogle", ["Nogen", "Noget"], "'Nogle' = some (plural, positive sentence)."),
        c("Jeg har lige været i Rom. Jeg synes, ___ er en flot by.", "det", ["den", "der"], "In 'det er en …' the pronoun is always 'det'."),
        c("Er bogen god? – Ja, ___ er meget spændende.", "den", ["det", "der"], "'Bogen' is an en-word: den.")
      ],
      prepositions: [
        c("Jeg glæder mig ___ at høre fra dig.", "til", ["på", "for"], "Fixed phrase: glæde sig til."),
        c("Han er vild ___ at rejse.", "med", ["på", "for"], "Fixed phrase: vild med."),
        c("Det kommer an ___, om det regner.", "på", ["til", "af"], "Fixed phrase: komme an på."),
        c("Jeg er træt ___ vejret.", "af", ["med", "for"], "Fixed phrase: træt af."),
        c("Jeg flyttede hertil på grund ___ mit arbejde.", "af", ["for", "til"], "Fixed phrase: på grund af."),
        c("Hun er gift ___ en dansker.", "med", ["til", "af"], "Fixed phrase: gift med."),
        c("Jeg tænker tit ___ dig.", "på", ["om", "af"], "Fixed phrase: tænke på."),
        c("Han er god ___ at lave mad.", "til", ["på", "for"], "Fixed phrase: god til."),
        c("Hun interesserer sig ___ kunst.", "for", ["til", "på"], "Fixed phrase: interessere sig for."),
        c("Vi snakker ___ vores ferie.", "om", ["på", "af"], "Fixed phrase: snakke om."),
        c("Hun er bange ___ hunde.", "for", ["af", "på"], "Fixed phrase: bange for."),
        c("Jeg er enig ___ dig.", "med", ["til", "på"], "Fixed phrase: enig med."),
        c("Han deltager ___ et triatlon.", "i", ["på", "til"], "Fixed phrase: deltage i."),
        c("Jeg har lånt bogen ___ min bror.", "af", ["til", "med"], "Borrow from someone: låne af.")
      ],
      conjunctions: [
        c("Hun spurgte, ___ jeg ville med i svømmehallen.", "om", ["hvis", "at"], HVIS_OM),
        c("Det er lettere at huske, ___ du skriver det ned.", "hvis", ["om"], HVIS_OM),
        c("Det er svært at sige, ___ renten går op eller ned.", "om", ["hvis"], HVIS_OM),
        c("Jeg kontakter dig, ___ der bliver en lejlighed ledig.", "hvis", ["om"], HVIS_OM),
        c("Både min søster ___ min bror ryger.", "og", ["eller", "men"], "både … og = both … and."),
        c("___ min farmor eller min farfar lever mere.", "Hverken", ["Både", "Enten"], "hverken … eller = neither … nor."),
        c("Manden, ___ lige er kommet, er min fætter.", "der", ["hvem", "hvad"], "Relative clause about the subject: der (or som)."),
        c("Alt mit tøj var væk, ___ jeg kom ned i vaskekælderen.", "da", ["når"], DA_NAAR),
        c("Emilie lyder altid glad, ___ jeg snakker med hende.", "når", ["da"], DA_NAAR),
        c("Mange kører uden sikkerhedssele, ___ det er forbudt.", "selvom", ["fordi"], "'Selvom' = even though."),
        c("Mange fisk er døde, ___ vandet er forurenet.", "fordi", ["selvom"], "'Fordi' = because."),
        c("Kig lige efter, ___ du har husket at lukke døren.", "om", ["hvis", "at"], HVIS_OM),
        c("Sig mig lige, ___ du staver dit efternavn.", "hvordan", ["hvad", "om"], "Indirect question with a question word: hvordan, hvor, hvornår …"),
        c("Jeg tror ikke, ___ han har forstået det.", "at", ["om", "hvis"], "'At' introduces what someone thinks.")
      ],
      wordorder: [
        o("Ved du, hvor banken ligger?", "Indirect question: no inversion (subject before verb)."),
        o("Ved du, om der ligger en bank i nærheden?", "Indirect question: no inversion (subject before verb)."),
        o("Jeg har en veninde, der aldrig går i seng før midnat.", SAV),
        o("Manden, der lige er kommet, er min fætter.", "A relative clause can sit inside the main clause, right after the noun it describes."),
        o("Hvis jeg ikke kan falde i søvn, tager jeg en pille.", "Subordinate clause first, then verb – subject."),
        o("Ole siger, at hans kone ikke elsker ham længere.", SAV),
        c("Kan du sige mig, hvorfor ___ i går?", "der ikke kørte nogen busser", ["kørte der ikke nogen busser"], "Indirect question: no inversion."),
        c("Ved du, hvornår ___?", "der er valg", ["er der valg"], "Indirect question: no inversion."),
        c("Eva spørger sin mand, om han ___ træt af at se fjernsyn.", "aldrig bliver", ["bliver aldrig"], SAV),
        c("Hun siger, at hun ___.", "ikke har tid", ["har ikke tid"], SAV),
        o("Om aftenen går vi tit en tur.", VSA),
        o("Desværre kan jeg ikke komme på fredag.", VSA)
      ]
    }
  };

  // Static questions for the time categories (the clock questions are generated in clock.js).
  var time = {
    intermediate: [
      c("Vi har pause ___ et kvarter. (It starts in 15 minutes.)", "om", ["i"], "'Om' = in, from now. 'I' = for, how long."),
      c("Vi har pause ___ et kvarter. (It lasts 15 minutes.)", "i", ["om"], "'Om' = in, from now. 'I' = for, how long."),
      c("Jeg kom til Danmark ___. (two years ago)", "for to år siden", ["om to år", "i to år"], "'For … siden' = ago."),
      c("Jeg stod tidligt op ___. (this morning, already past)", "i morges", ["i morgen", "om morgenen"], "'I morges' = this morning (past). 'I morgen' = tomorrow."),
      c("Jeg så filmen ___. (yesterday evening)", "i går aftes", ["i aften", "i morgen aften"], "'I går aftes' = yesterday evening."),
      c("Han har boet her i ___ år. (1½)", "halvandet", ["halvanden", "en halv"], "1½ = halvanden (en-word) / halvandet (et-word): halvandet år, halvanden måned."),
      c("Jeg har gået til dansk i ___ måned. (1½)", "halvanden", ["halvandet", "en halv"], "1½ = halvanden (en-word) / halvandet (et-word).")
    ],
    advanced: [
      c("___ var jeg i Tivoli. (the day before yesterday)", "I forgårs", ["I overmorgen", "I går"], "i forgårs – i går – i dag – i morgen – i overmorgen"),
      c("___ skal jeg til tandlægen. (the day after tomorrow)", "I overmorgen", ["I forgårs", "I morgen"], "i forgårs – i går – i dag – i morgen – i overmorgen"),
      c("Jeg ringer til dig ___. (tomorrow)", "i morgen", ["i morges", "om morgenen"], "'I morgen' = tomorrow. 'I morges' = this morning."),
      c("Jeg så filmen ___. (yesterday evening)", "i går aftes", ["i aften", "i morgen aften"], "'I går aftes' = yesterday evening. 'I aften' = this evening."),
      c("Jeg stod tidligt op ___. (this morning)", "i morges", ["i morgen", "om morgenen"], "'I morges' = this morning (past)."),
      c("Vi var til fest ___. (last Saturday)", "i lørdags", ["på lørdag", "om lørdagen"], "i lørdags = last Saturday, på lørdag = next Saturday, om lørdagen = every Saturday."),
      c("Vi skal til fest ___. (next Saturday)", "på lørdag", ["i lørdags", "om lørdagen"], "i lørdags = last Saturday, på lørdag = next Saturday, om lørdagen = every Saturday."),
      c("Jeg spiller fodbold ___. (every Saturday)", "om lørdagen", ["i lørdags", "på lørdag"], "i lørdags = last Saturday, på lørdag = next Saturday, om lørdagen = every Saturday."),
      c("Jeg kom til Danmark ___. (two years ago)", "for to år siden", ["om to år", "i to år"], "'For … siden' = ago."),
      c("Jeg har boet her ___. (for two years)", "i to år", ["for to år siden", "om to år"], "'I to år' = for two years (duration)."),
      c("Vi flytter ___. (in two months)", "om to måneder", ["i to måneder", "for to måneder siden"], "'Om' = in, in the future."),
      c("I går ___ jeg sushi.", "spiste", ["spiser", "skal spise"], "A past time word needs the past tense."),
      c("I overmorgen ___ jeg til Aarhus.", "skal", ["var", "tog"], "A future time word: skal or present tense."),
      c("I forgårs ___ jeg syg.", "var", ["er", "bliver"], "A past time word needs the past tense."),
      c("Hvilken dato er det i dag? – Det er ___.", "den tredje maj", ["den tre maj", "tredje den maj"], "Dates use ordinal numbers: den tredje maj (3. maj)."),
      c("Jeg er født ___ 1990.", "i", ["på", "om"], "Years: i 1990."),
      c("Jeg er født ___ 18. april.", "den", ["på", "i"], "Dates: den 18. april."),
      c("Mødet er ___ mandag.", "på", ["i", "om"], "A coming weekday: på mandag."),
      c("Jeg har ferie ___ to uger. (two weeks from now)", "om", ["for", "i"], "'Om' = in, from now."),
      c("Hvad lavede du ___? (last week)", "i sidste uge", ["i næste uge", "om ugen"], "i sidste uge = last week, i næste uge = next week, om ugen = per week.")
    ]
  };

  var data = { levels: levels, time: time };
  if (typeof module !== "undefined" && module.exports) module.exports = data;
  else root.QUIZ_DATA = data;
})(this);
