const TOPICS = {
  verbs: { name: "Verber", blurb: "Nutid, datid og førnutid", icon: "V" },
  adverbs: { name: "Adverbier", blurb: "Placering og retning", icon: "A" },
  pronouns: { name: "Pronominer", blurb: "Personlige og possessive", icon: "P" },
  adjectives: { name: "Adjektiver", blurb: "Bøjning og gradbøjning", icon: "J" },
  conjunctions: { name: "Konjunktioner", blurb: "Ledsætninger og ordstilling", icon: "K" }
};

const QUESTIONS = [
  { topic:"verbs", q:"I går ___ jeg bussen klokken syv.", options:["tager","tog","har taget","tage"], answer:"tog", explain:"‘I går’ peger på afsluttet datid. Datid af ‘at tage’ er ‘tog’." },
  { topic:"verbs", q:"Jeg ___ i Danmark i tre år nu.", options:["boede","har boet","bor i går","havde bo"], answer:"har boet", explain:"En periode, der begyndte før og fortsætter nu, står ofte i førnutid: ‘har boet’." },
  { topic:"verbs", q:"Maja er ikke hjemme. Hun ___ på arbejde.", options:["har gået","er gået","gik nu","er gå"], answer:"er gået", explain:"Ved bevægelse med fokus på ændret sted bruger vi ofte ‘er’: Hun er gået." },
  { topic:"verbs", q:"Har du ___ morgenmad?", options:["spiste","spiser","spist","spise"], answer:"spist", explain:"Efter ‘har’ bruger vi kort tillægsform: ‘spist’." },
  { topic:"verbs", q:"Da jeg var barn, ___ jeg tit hos min mormor.", options:["sover","har sovet","sov","sove"], answer:"sov", explain:"En afsluttet periode i fortiden kræver datid: ‘sov’." },
  { topic:"verbs", q:"Man må ikke ___ her.", options:["parkerer","parkerede","at parkere","parkere"], answer:"parkere", explain:"Efter modalverbet ‘må’ bruges infinitiv uden ‘at’." },
  { topic:"verbs", q:"Vi har lyst til ___ en tur.", options:["gå","at gå","går","gik"], answer:"at gå", explain:"Udtrykket ‘have lyst til’ følges af infinitiv med ‘at’." },
  { topic:"verbs", q:"Hvad ___ du gerne være?", options:["vil","må","kan at","skal at"], answer:"vil", explain:"‘Vil’ bruges om ønske eller intention: Hvad vil du gerne være?" },
  { topic:"verbs", q:"Hun ___ lige flyttet til Aarhus.", options:["er","har","var har","bliver"], answer:"er", explain:"‘At flytte’ tager ofte ‘er’, når vi fokuserer på, at personen nu er et nyt sted." },
  { topic:"verbs", q:"I morges ___ jeg klokken seks.", options:["står op","stod op","har stå","er stået"], answer:"stod op", explain:"‘I morges’ beskriver her et afsluttet tidspunkt, så vi bruger datid: ‘stod op’." },

  { topic:"adverbs", q:"Jeg kan ___ forstå ham.", options:["ikke","forstå ikke","ikke at","ingen"], answer:"ikke", explain:"I en hovedsætning står centraladverbiet normalt efter det finitte verbum: kan ikke forstå." },
  { topic:"adverbs", q:"Jeg ved, at hun ___ kommer i dag.", options:["kommer ikke","ikke kommer","kommer aldrig ikke","ikke at kommer"], answer:"ikke kommer", explain:"I en ledsætning står centraladverbiet før verbet: at hun ikke kommer." },
  { topic:"adverbs", q:"Kommer du med ___ til mig?", options:["hjem","hjemme","ude","henne"], answer:"hjem", explain:"‘Hjem’ viser bevægelse mod et sted. ‘Hjemme’ beskriver, hvor man er." },
  { topic:"adverbs", q:"Mine sko står ___ i gangen.", options:["ud","ude","hen","hjem"], answer:"ude", explain:"‘Ude’ beskriver en fast placering. Formen uden -e bruges typisk om retning." },
  { topic:"adverbs", q:"Har du ___ været på Bornholm?", options:["nogensinde","aldrig ikke","stadigvæk ikke aldrig","henne"], answer:"nogensinde", explain:"‘Nogensinde’ bruges især i spørgsmål og betyder ‘på noget tidspunkt’." },
  { topic:"adverbs", q:"Hun siger, at hun ___ skal hjem.", options:["snart","skal snart hjem at","hjem snart skal","snart hjem skal"], answer:"snart", explain:"I ledsætningen placeres ‘snart’ før det finitte verbum ‘skal’." },
  { topic:"adverbs", q:"Bussen er ___ kørt. Vi kom for sent.", options:["allerede","aldrig","henne","ude"], answer:"allerede", explain:"‘Allerede’ viser, at noget skete tidligere end forventet." },
  { topic:"adverbs", q:"Kast bolden ___ til mig!", options:["hen","henne","inde","hjemme"], answer:"hen", explain:"‘Hen’ udtrykker retning eller bevægelse mod et sted eller en person." },
  { topic:"adverbs", q:"Hun er ___ på kontoret endnu.", options:["stadigvæk","nogensinde","hen","hjem"], answer:"stadigvæk", explain:"‘Stadigvæk’ viser, at en situation fortsætter: Hun er stadigvæk på kontoret." },
  { topic:"adverbs", q:"Jeg går ___ i kiosken.", options:["ned","nede","ude","henne"], answer:"ned", explain:"‘Ned’ beskriver bevægelse i en retning. ‘Nede’ beskriver en placering." },

  { topic:"pronouns", q:"Jeg hjælper hende, og hun hjælper ___.", options:["jeg","mig","min","mit"], answer:"mig", explain:"Efter verbet er pronomenet objekt, så vi bruger objektsformen ‘mig’." },
  { topic:"pronouns", q:"Hvor er mine nøgler? Giv mig ___ lige.", options:["den","det","dem","de"], answer:"dem", explain:"‘Nøgler’ er flertal, og som objekt bruger vi ‘dem’." },
  { topic:"pronouns", q:"Jonas vasker ___ hver morgen.", options:["ham","hans","sig","sin"], answer:"sig", explain:"Når subjekt og objekt er samme person, bruger vi det refleksive pronomen ‘sig’." },
  { topic:"pronouns", q:"Sara har glemt ___ taske.", options:["hendes","sin","deres","sit"], answer:"sin", explain:"Tasken tilhører subjektet Sara. ‘Taske’ er fælleskøn, derfor ‘sin’." },
  { topic:"pronouns", q:"Ali bor sammen med ___ kone.", options:["sit","sine","sin","hendes"], answer:"sin", explain:"Konen tilhører subjektet Ali, og ‘kone’ er fælleskøn: ‘sin kone’." },
  { topic:"pronouns", q:"Naboerne maler ___ hus.", options:["sit","sin","sine","deres"], answer:"deres", explain:"Ved et subjekt i flertal bruger vi ‘deres’, ikke ‘sin/sit/sine’." },
  { topic:"pronouns", q:"Er der ___ hjemme?", options:["nogen","noget","nogle","ingen ikke"], answer:"nogen", explain:"‘Nogen’ bruges om en eller flere personer i spørgsmål." },
  { topic:"pronouns", q:"Jeg har købt ___ æbler.", options:["nogen","noget","nogle","den"], answer:"nogle", explain:"‘Nogle’ bruges om et ubestemt antal tællelige ting i flertal." },
  { topic:"pronouns", q:"___ står en mand ved døren.", options:["Det","Den","Der","De"], answer:"Der", explain:"Når et ubestemt subjekt introduceres, bruger vi ofte ‘der’: Der står en mand." },
  { topic:"pronouns", q:"Vejret bliver godt. ___ siger de i radioen.", options:["Der","Den","Det","Dem"], answer:"Det", explain:"‘Det’ henviser her til hele udsagnet om vejret." },

  { topic:"adjectives", q:"Det er et ___ hus.", options:["stor","stort","store","større"], answer:"stort", explain:"Efter et intetkønsord i ubestemt ental får adjektivet normalt -t: et stort hus." },
  { topic:"adjectives", q:"Hun har to ___ børn.", options:["lille","lilles","småt","små"], answer:"små", explain:"Den uregelmæssige flertalsform af ‘lille’ er ‘små’." },
  { topic:"adjectives", q:"Jeg tog den ___ frakke på.", options:["varm","varmt","varme","varmere"], answer:"varme", explain:"Ved bestemt form bruger vi -e: den varme frakke." },
  { topic:"adjectives", q:"Han taler meget ___.", options:["hurtig","hurtigt","hurtige","hurtigere end"], answer:"hurtigt", explain:"Når ordet beskriver måden, han taler på, fungerer det adverbielt og får -t." },
  { topic:"adjectives", q:"Blod er ___ end vand.", options:["tyk","tykt","tykkere","tykkest"], answer:"tykkere", explain:"Efter ‘end’ bruger vi komparativ: tykkere." },
  { topic:"adjectives", q:"Det er byens ___ hotel.", options:["billig","billigere","billigst","billigste"], answer:"billigste", explain:"Efter bestemt ejerudtryk ‘byens’ bruges superlativens e-form: billigste." },
  { topic:"adjectives", q:"Kaffen smager ___.", options:["god","godt","gode","bedst end"], answer:"godt", explain:"Efter ‘smager’ beskriver adjektivet oplevelsen adverbielt: godt." },
  { topic:"adjectives", q:"Min søster er ___ end mig.", options:["ung","yngre","yngst","unge"], answer:"yngre", explain:"Komparativ af det uregelmæssige adjektiv ‘ung’ er ‘yngre’." },
  { topic:"adjectives", q:"Det var den ___ film, jeg har set.", options:["god","bedre","bedst","bedste"], answer:"bedste", explain:"Bestemt superlativ af ‘god’ er ‘den bedste’." },
  { topic:"adjectives", q:"De er meget ___ efter middagen.", options:["mæt","mætte","mættet","mættere end"], answer:"mætte", explain:"Når adjektivet beskriver et subjekt i flertal, får det -e: De er mætte." },

  { topic:"conjunctions", q:"Jeg bliver hjemme, ___ jeg er syg.", options:["selvom","fordi","om","eller"], answer:"fordi", explain:"‘Fordi’ indleder en årsag: Jeg bliver hjemme, fordi jeg er syg." },
  { topic:"conjunctions", q:"Hun cykler, ___ det regner.", options:["fordi","selvom","at","når at"], answer:"selvom", explain:"‘Selvom’ viser en modsætning: regnen stopper hende ikke." },
  { topic:"conjunctions", q:"Jeg ringer, ___ jeg kommer hjem.", options:["når","da","om","for"], answer:"når", explain:"‘Når’ bruges om fremtid eller noget, der gentager sig." },
  { topic:"conjunctions", q:"Jeg blev glad, ___ jeg så resultatet.", options:["når","da","hvis","at"], answer:"da", explain:"‘Da’ bruges om én bestemt begivenhed i fortiden." },
  { topic:"conjunctions", q:"Ved du, ___ toget er forsinket?", options:["hvis","om","fordi","så"], answer:"om", explain:"I et indirekte ja/nej-spørgsmål bruger vi ‘om’." },
  { topic:"conjunctions", q:"Jeg tager paraplyen med, ___ det regner.", options:["om","hvis","at","da"], answer:"hvis", explain:"‘Hvis’ indleder en betingelse: kun i tilfælde af regn." },
  { topic:"conjunctions", q:"Hun siger, at hun ___ har tid.", options:["ikke","har ikke","ikke hun","tid ikke"], answer:"ikke", explain:"I en ledsætning står ‘ikke’ før det finitte verbum: at hun ikke har tid." },
  { topic:"conjunctions", q:"Jeg kender en kvinde, ___ taler fem sprog.", options:["som hun","der","at","om"], answer:"der", explain:"‘Der’ kan være subjekt i en relativsætning: en kvinde, der taler ..." },
  { topic:"conjunctions", q:"Du skal vaske hænder, ___ du spiser.", options:["før","fordi","selvom","om"], answer:"før", explain:"‘Før’ viser, at håndvasken sker tidligere end måltidet." },
  { topic:"conjunctions", q:"Jeg lavede mad, ___ børnene legede.", options:["mens","hvis","at","for"], answer:"mens", explain:"‘Mens’ forbinder to handlinger, der foregår samtidig." }
];

const MORE_QUESTIONS = [
  // Verber
  {topic:"verbs",q:"Hver morgen ___ jeg kaffe.",options:["drikker","drak","har drukket","drikke"],answer:"drikker",explain:"En vane i nutiden står i nutid: drikker."},
  {topic:"verbs",q:"Sidste weekend ___ vi vores venner.",options:["besøger","besøgte","har besøge","besøgt"],answer:"besøgte",explain:"Et afsluttet tidspunkt i fortiden kræver datid: besøgte."},
  {topic:"verbs",q:"Jeg har aldrig ___ sushi.",options:["spiser","spiste","spist","spise"],answer:"spist",explain:"Efter har bruges kort tillægsform: spist."},
  {topic:"verbs",q:"Kan du ___ vinduet?",options:["åbner","åbnede","at åbne","åbne"],answer:"åbne",explain:"Efter kan bruges infinitiv uden at."},
  {topic:"verbs",q:"Hun ___ en bog lige nu.",options:["læser","læste","har læst","læse"],answer:"læser",explain:"Lige nu beskriver nutid: læser."},
  {topic:"verbs",q:"Vi ___ filmen i går aftes.",options:["ser","så","har set","se"],answer:"så",explain:"I går aftes kræver her datid: så."},
  {topic:"verbs",q:"De er ___ hjem fra ferie.",options:["kommet","kom","kommer","komme"],answer:"kommet",explain:"Efter er bruges kort tillægsform: er kommet."},
  {topic:"verbs",q:"Jeg skal ___ tandlægen i morgen.",options:["ringer til","ringede til","ringe til","at ringe til"],answer:"ringe til",explain:"Efter skal bruges infinitiv uden at."},
  {topic:"verbs",q:"For to år siden ___ hun dansk.",options:["lærer","lærte","har lært","lære"],answer:"lærte",explain:"For to år siden angiver datid: lærte."},
  {topic:"verbs",q:"Han ___ allerede sendt beskeden.",options:["er","har","blev","skal"],answer:"har",explain:"At sende danner førnutid med har."},
  {topic:"verbs",q:"Må jeg ___ din telefon?",options:["låner","lånte","låne","at låne"],answer:"låne",explain:"Efter må bruges infinitiv uden at."},
  {topic:"verbs",q:"Vi har ___ hinanden siden 2019.",options:["kender","kendte","kendt","kende"],answer:"kendt",explain:"Siden 2019 og fortsat nu kræver førnutid."},
  {topic:"verbs",q:"Toget ___ for ti minutter siden.",options:["kører","kørte","har køre","køre"],answer:"kørte",explain:"For ti minutter siden kræver datid."},
  {topic:"verbs",q:"Jeg håber at ___ eksamen.",options:["består","bestod","bestå","bestået"],answer:"bestå",explain:"Efter at bruges infinitiv: bestå."},
  {topic:"verbs",q:"Hun ___ lige vågnet.",options:["er","har","bliver","skal"],answer:"er",explain:"Ved ændring af tilstand bruges er: er vågnet."},
  {topic:"verbs",q:"Du bør ___ mere vand.",options:["drikker","drak","drikke","at drikke"],answer:"drikke",explain:"Efter bør bruges infinitiv uden at."},
  {topic:"verbs",q:"Vi har ___ hele huset.",options:["maler","malede","malet","male"],answer:"malet",explain:"Efter har bruges kort tillægsform: malet."},
  {topic:"verbs",q:"Min søn ___ cykle sidste år.",options:["lærer","lærte","har lært","lære"],answer:"lærte",explain:"Sidste år angiver datid: lærte."},
  {topic:"verbs",q:"De er ___ ud i haven.",options:["løbet","løb","løber","løbe"],answer:"løbet",explain:"Bevægelse med ændret sted kan bruge er."},
  {topic:"verbs",q:"Husk at ___ døren.",options:["låser","låste","låse","låst"],answer:"låse",explain:"Efter at bruges infinitiv: låse."},

  // Adverbier
  {topic:"adverbs",q:"Jeg kommer ___ for sent.",options:["ofte","ofte kommer","kommer ofte","ingen"],answer:"ofte",explain:"I en hovedsætning står ofte efter det finitte verbum."},
  {topic:"adverbs",q:"Hun siger, at hun ___ spiser kød.",options:["spiser aldrig","aldrig","aldrig at","ingen"],answer:"aldrig",explain:"I ledsætningen står aldrig før verbet."},
  {topic:"adverbs",q:"Børnene leger ___ i haven.",options:["ude","ud","op","hjem"],answer:"ude",explain:"Ude beskriver placering."},
  {topic:"adverbs",q:"Gå ___ ad trappen.",options:["op","oppe","inde","henne"],answer:"op",explain:"Op beskriver retning."},
  {topic:"adverbs",q:"Hun er ___ færdig med opgaven.",options:["næsten","aldrig ikke","ud","hen"],answer:"næsten",explain:"Næsten betyder, at der mangler lidt."},
  {topic:"adverbs",q:"Han har ___ ringet.",options:["lige","henne","ud","ikke aldrig"],answer:"lige",explain:"Lige betyder for meget kort tid siden."},
  {topic:"adverbs",q:"Katten sprang ___ gennem vinduet.",options:["ind","inde","hjemme","oppe"],answer:"ind",explain:"Ind beskriver bevægelse."},
  {topic:"adverbs",q:"Katten ligger ___ i stuen.",options:["inde","ind","hen","ned"],answer:"inde",explain:"Inde beskriver placering."},
  {topic:"adverbs",q:"Vi har ___ besøgt museet.",options:["også","besøgt også","ingen","ud"],answer:"også",explain:"Også står naturligt mellem hjælpeverbum og hovedverbum."},
  {topic:"adverbs",q:"Bogen ligger ___ på hylden.",options:["oppe","op","ud","hjem"],answer:"oppe",explain:"Oppe beskriver en placering."},
  {topic:"adverbs",q:"Tag bogen ___ fra hylden.",options:["ned","nede","inde","henne"],answer:"ned",explain:"Ned beskriver bevægelse."},
  {topic:"adverbs",q:"Hun kommer ___ tilbage.",options:["snart","snart kommer","ingen","hjemme"],answer:"snart",explain:"Snart betyder om kort tid."},
  {topic:"adverbs",q:"Tal ___, så alle kan forstå dig.",options:["langsomt","langsom","langsomme","langsommere end"],answer:"langsomt",explain:"Langsomt beskriver måden, man taler på."},
  {topic:"adverbs",q:"Vi spiser ___ aftensmad sammen.",options:["som regel","som regel spiser","ingen","henne"],answer:"som regel",explain:"Som regel står efter det finitte verbum."},
  {topic:"adverbs",q:"Kom ___, så vi kan tale sammen.",options:["hen","henne","ude","hjemme"],answer:"hen",explain:"Hen beskriver bevægelse mod et sted."},
  {topic:"adverbs",q:"Jeg står ___ ved døren.",options:["henne","hen","ind","op"],answer:"henne",explain:"Henne beskriver placering et stykke væk."},
  {topic:"adverbs",q:"Vi skal ___ af sted.",options:["straks","straks skal","ingen","nede"],answer:"straks",explain:"Straks betyder med det samme."},
  {topic:"adverbs",q:"Jeg har ___ sendt ansøgningen.",options:["allerede","hen","ude","ikke aldrig"],answer:"allerede",explain:"Allerede betyder tidligere end forventet."},
  {topic:"adverbs",q:"Hun går ___ til arbejde.",options:["til fods","fod til","på fod","med fod"],answer:"til fods",explain:"Til fods beskriver måden, hun kommer frem på."},
  {topic:"adverbs",q:"Vi mødes ___ foran biografen.",options:["derhenne","derhen","ud","ind"],answer:"derhenne",explain:"Derhenne beskriver et bestemt sted."},

  // Pronominer
  {topic:"pronouns",q:"Lise ringer til ___.",options:["jeg","mig","min","mit"],answer:"mig",explain:"Efter en præposition bruges objektsformen mig."},
  {topic:"pronouns",q:"___ kommer klokken otte.",options:["Ham","Han","Hans","Sin"],answer:"Han",explain:"Som subjekt bruges han."},
  {topic:"pronouns",q:"Vi besøger ___ i weekenden.",options:["de","dem","deres","sig"],answer:"dem",explain:"Som objekt bruges dem."},
  {topic:"pronouns",q:"Er det ___ jakke, Peter?",options:["din","dit","dine","sin"],answer:"din",explain:"Jakke er fælleskøn: din jakke."},
  {topic:"pronouns",q:"Barnet leger med ___ legetøj.",options:["sin","sit","sine","hans"],answer:"sit",explain:"Legetøj er intetkøn: sit legetøj."},
  {topic:"pronouns",q:"Maria vasker ___ hænder.",options:["sin","sit","sine","hendes"],answer:"sine",explain:"Hænder er flertal: sine hænder."},
  {topic:"pronouns",q:"Har du ___ kaffe?",options:["nogen","noget","nogle","ingen ikke"],answer:"noget",explain:"Kaffe er utælleligt: noget kaffe."},
  {topic:"pronouns",q:"___ bog vil du låne?",options:["Hvilken","Hvilket","Hvilke","Hvem"],answer:"Hvilken",explain:"Bog er fælleskøn: hvilken bog."},
  {topic:"pronouns",q:"___ taler du med?",options:["Hvad","Hvem","Hvilken","Hvis"],answer:"Hvem",explain:"Hvem spørger til en person."},
  {topic:"pronouns",q:"Kan du hjælpe ___?",options:["vi","os","vores","sig"],answer:"os",explain:"Efter hjælpe bruges objektsformen os."},
  {topic:"pronouns",q:"Det er ___ nye bil.",options:["vores","vor os","vi","sin"],answer:"vores",explain:"Vores viser, at bilen tilhører os."},
  {topic:"pronouns",q:"Drengen tager ___ sko på.",options:["sin","sit","sine","hans"],answer:"sine",explain:"Sko er flertal og tilhører subjektet."},
  {topic:"pronouns",q:"Emma besøger Anna og ___ mor.",options:["sin","hendes","sit","sine"],answer:"hendes",explain:"Hendes mor henviser her til Anna."},
  {topic:"pronouns",q:"Jeg vil gerne have ___ at drikke.",options:["nogen","noget","nogle","dem"],answer:"noget",explain:"Noget bruges om en ubestemt ting eller mængde."},
  {topic:"pronouns",q:"___ børn leger på gaden.",options:["Nogen","Noget","Nogle","Den"],answer:"Nogle",explain:"Nogle bruges om flere tællelige personer."},
  {topic:"pronouns",q:"Kender du ___?",options:["hun","hende","hendes","sin"],answer:"hende",explain:"Som objekt bruges hende."},
  {topic:"pronouns",q:"Jeg har fundet mobilen. ___ lå under sofaen.",options:["Den","Det","De","Dem"],answer:"Den",explain:"Mobilen er fælleskøn, så vi bruger den."},
  {topic:"pronouns",q:"Vi glæder ___ til ferien.",options:["vi","os","vores","sig"],answer:"os",explain:"Det refleksive udtryk er vi glæder os."},
  {topic:"pronouns",q:"Jeg kan lide skoene. Jeg køber ___.",options:["de","dem","den","det"],answer:"dem",explain:"Som objekt i flertal bruges dem."},
  {topic:"pronouns",q:"___ værelse er dit?",options:["Hvilken","Hvilket","Hvilke","Hvem"],answer:"Hvilket",explain:"Værelse er intetkøn: hvilket."},

  // Adjektiver
  {topic:"adjectives",q:"Det er en ___ dag.",options:["dejlig","dejligt","dejlige","dejligere"],answer:"dejlig",explain:"Dag er fælleskøn: en dejlig dag."},
  {topic:"adjectives",q:"Vi bor i et ___ område.",options:["rolig","roligt","rolige","roligere"],answer:"roligt",explain:"Område er intetkøn, så adjektivet får -t."},
  {topic:"adjectives",q:"Hun købte tre ___ stole.",options:["ny","nyt","nye","nyere"],answer:"nye",explain:"I flertal får adjektivet -e."},
  {topic:"adjectives",q:"Den ___ mand hjælper os.",options:["venlig","venligt","venlige","venligere"],answer:"venlige",explain:"I bestemt form får adjektivet -e."},
  {topic:"adjectives",q:"Vandet er ___.",options:["kold","koldt","kolde","koldere end"],answer:"koldt",explain:"Vand er intetkøn, så adjektivet får -t."},
  {topic:"adjectives",q:"Mine sko er ___.",options:["våd","vådt","våde","vådere end"],answer:"våde",explain:"Et adjektiv til flertal får -e."},
  {topic:"adjectives",q:"Denne bog er ___ end den anden.",options:["interessant","interessante","mere interessant","mest interessant"],answer:"mere interessant",explain:"Lange adjektiver gradbøjes ofte med mere."},
  {topic:"adjectives",q:"Det er den ___ løsning.",options:["nem","nemt","nemmere","nemmeste"],answer:"nemmeste",explain:"Bestemt superlativ ender på -e."},
  {topic:"adjectives",q:"Hun er lige så ___ som sin søster.",options:["høj","højt","højere","højest"],answer:"høj",explain:"Lige så ... som bruger grundformen."},
  {topic:"adjectives",q:"Bilen kører ___.",options:["langsom","langsomt","langsomme","langsommere end"],answer:"langsomt",explain:"Når ordet beskriver kørslen, får det -t."},
  {topic:"adjectives",q:"Det var et ___ svar.",options:["kort","kortt","korte","kortere"],answer:"kort",explain:"Kort ender allerede på t."},
  {topic:"adjectives",q:"Jeg kan lide det ___ køkken.",options:["moderne","modernt","modern","mere moderne"],answer:"moderne",explain:"Moderne ændrer normalt ikke form."},
  {topic:"adjectives",q:"Værelserne er ___.",options:["ren","rent","rene","renere end"],answer:"rene",explain:"Flertal kræver -e: rene."},
  {topic:"adjectives",q:"I dag er det ___ end i går.",options:["kold","koldt","koldere","koldest"],answer:"koldere",explain:"End kræver komparativ: koldere."},
  {topic:"adjectives",q:"Mount Everest er verdens ___ bjerg.",options:["høj","højere","højest","højeste"],answer:"højeste",explain:"Efter verdens bruges bestemt superlativ."},
  {topic:"adjectives",q:"Han har et ___ arbejde.",options:["spændende","spændendt","spændend","mere spændende"],answer:"spændende",explain:"Adjektiver på -ende er uændrede."},
  {topic:"adjectives",q:"Huset ser ___ ud.",options:["gammel","gammelt","gamle","ældre end"],answer:"gammelt",explain:"Huset er intetkøn: gammelt."},
  {topic:"adjectives",q:"Hun er den ___ i familien.",options:["gammel","ældre","ældst","ældste"],answer:"ældste",explain:"Bestemt superlativ af gammel er ældste."},
  {topic:"adjectives",q:"Der er ___ mennesker her end i går.",options:["få","færre","færrest","mindst"],answer:"færre",explain:"Færre bruges om tællelige personer."},
  {topic:"adjectives",q:"Hun arbejder meget ___.",options:["effektiv","effektivt","effektive","mere effektiv end"],answer:"effektivt",explain:"Ordet beskriver, hvordan hun arbejder, og får -t."},

  // Konjunktioner
  {topic:"conjunctions",q:"Jeg går tidligt i seng, ___ jeg er træt.",options:["fordi","selvom","om","eller"],answer:"fordi",explain:"Fordi indleder en årsag."},
  {topic:"conjunctions",q:"Han kom på arbejde, ___ han var syg.",options:["fordi","selvom","hvis","at"],answer:"selvom",explain:"Selvom viser en modsætning."},
  {topic:"conjunctions",q:"Ring til mig, ___ du har tid.",options:["når","da","om","for"],answer:"når",explain:"Når bruges om fremtid eller gentagelse."},
  {topic:"conjunctions",q:"___ jeg var lille, boede vi i Aalborg.",options:["Når","Da","Hvis","Om"],answer:"Da",explain:"Da bruges om en afsluttet periode i fortiden."},
  {topic:"conjunctions",q:"Hun spørger, ___ jeg kan hjælpe.",options:["at","om","fordi","men"],answer:"om",explain:"Om indleder et indirekte ja/nej-spørgsmål."},
  {topic:"conjunctions",q:"Du kan låne bilen, ___ du kører forsigtigt.",options:["hvis","da","selvom","at"],answer:"hvis",explain:"Hvis indleder en betingelse."},
  {topic:"conjunctions",q:"Vi køber brød ___ mælk.",options:["og","men","fordi","at"],answer:"og",explain:"Og forbinder to ligeværdige led."},
  {topic:"conjunctions",q:"Jeg ville komme, ___ jeg havde ikke tid.",options:["og","men","for at","om"],answer:"men",explain:"Men viser modsætning mellem to hovedsætninger."},
  {topic:"conjunctions",q:"Vil du have te ___ kaffe?",options:["eller","fordi","selvom","at"],answer:"eller",explain:"Eller forbinder alternativer."},
  {topic:"conjunctions",q:"Jeg vasker op, ___ du tørrer af.",options:["mens","hvis","om","at"],answer:"mens",explain:"Mens viser samtidighed."},
  {topic:"conjunctions",q:"Vi spiser, ___ filmen begynder.",options:["før","fordi","selvom","om"],answer:"før",explain:"Før viser, hvad der sker først."},
  {topic:"conjunctions",q:"Hun læser hver dag, ___ hun kan blive bedre.",options:["for at","fordi at","om","men"],answer:"for at",explain:"For at udtrykker formål."},
  {topic:"conjunctions",q:"Jeg ved, ___ han bor i København.",options:["at","om","hvis","eller"],answer:"at",explain:"At indleder en udsagnsledsætning."},
  {topic:"conjunctions",q:"Det er manden, ___ hjalp mig.",options:["der","som han","at","om"],answer:"der",explain:"Der er subjekt i relativsætningen."},
  {topic:"conjunctions",q:"Skynd dig, ___ vi kommer for sent.",options:["ellers","fordi","at","mens"],answer:"ellers",explain:"Ellers viser konsekvensen."},
  {topic:"conjunctions",q:"Både Anna ___ Peter kommer.",options:["og","eller","men","for"],answer:"og",explain:"Konstruktionen hedder både ... og."},
  {topic:"conjunctions",q:"Jeg bliver her, ___ du kommer tilbage.",options:["indtil","fordi","selvom","om"],answer:"indtil",explain:"Indtil angiver, hvornår noget ophører."},
  {topic:"conjunctions",q:"___ hun havde spist, gik hun en tur.",options:["Efter at","Før","Hvis","Om"],answer:"Efter at",explain:"Efter at viser rækkefølgen."},
  {topic:"conjunctions",q:"Hverken min bror ___ min søster kan komme.",options:["eller","og","men","for"],answer:"eller",explain:"Konstruktionen hedder hverken ... eller."},
  {topic:"conjunctions",q:"Du kan gå nu, ___ du kan vente på mig.",options:["eller","fordi","selvom","at"],answer:"eller",explain:"Eller forbinder to muligheder."}
];

const QUESTION_BANK = QUESTIONS.concat(MORE_QUESTIONS);

const BUILD_QUESTIONS = [
  { topic:"adverbs", prompt:"Lav en hovedsætning", words:["Jeg","kan","ikke","høre","dig"], answer:"Jeg kan ikke høre dig", explain:"I hovedsætningen står ‘ikke’ efter det finitte verbum ‘kan’." },
  { topic:"conjunctions", prompt:"Lav en ledsætning med ‘at’", words:["at","hun","ikke","kommer","i dag"], answer:"at hun ikke kommer i dag", explain:"I ledsætningen kommer ‘ikke’ før det finitte verbum." },
  { topic:"verbs", prompt:"Lav et spørgsmål i førnutid", words:["Har","du","spist","morgenmad"], answer:"Har du spist morgenmad", explain:"I et spørgsmål står hjælpeverbet først, og hovedverbet står i kort tillægsform." },
  { topic:"pronouns", prompt:"Byg sætningen", words:["Sara","har","glemt","sin","taske"], answer:"Sara har glemt sin taske", explain:"‘Sin’ henviser tilbage til subjektet Sara." },
  { topic:"adjectives", prompt:"Byg sætningen", words:["Det","er","et","stort","hus"], answer:"Det er et stort hus", explain:"‘Hus’ er intetkøn, så adjektivet får -t." },
  { topic:"conjunctions", prompt:"Lav en hvis-ledsætning", words:["Hvis","det","regner","bliver","jeg","hjemme"], answer:"Hvis det regner bliver jeg hjemme", explain:"Når ledsætningen står først, kommer verbet før subjektet i hovedsætningen." },
  { topic:"adverbs", prompt:"Placér ‘altid’ rigtigt", words:["Vi","spiser","altid","sammen","om aftenen"], answer:"Vi spiser altid sammen om aftenen", explain:"Centraladverbiet står normalt efter det finitte verbum i en hovedsætning." },
  { topic:"conjunctions", prompt:"Lav et indirekte spørgsmål", words:["Ved","du","om","bussen","kommer"], answer:"Ved du om bussen kommer", explain:"‘Om’ indleder et indirekte ja/nej-spørgsmål, og subjektet står før verbet." },
  { topic:"adjectives", prompt:"Lav en sammenligning", words:["Min","bror","er","yngre","end","mig"], answer:"Min bror er yngre end mig", explain:"Komparativ af ‘ung’ er ‘yngre’." },
  { topic:"verbs", prompt:"Brug datid", words:["I går","tog","vi","toget","til Aarhus"], answer:"I går tog vi toget til Aarhus", explain:"Når et tidsled står først, står verbet stadig på plads 2." }
];

const WRITING_TASKS = [
  {
    id:"friend-language", kind:"E-mail til en ven", icon:"✉", title:"Gode råd om at lære sprog", time:30, minWords:90,
    situation:"Din ven Sofie skal arbejde i Barcelona og er begyndt at lære spansk. Hun skriver til dig for at få råd.",
    source:"Kære ven. Jeg håber, du nyder sommeren. Jeg er begyndt at lære spansk, fordi jeg skal arbejde i Barcelona fra januar. Det er svært at huske alle de nye ord. Har du et godt råd? Kender du måske en, som vil tale spansk med mig en time om ugen? Jeg glæder mig til at høre fra dig. Mange hilsner Sofie",
    requirements:["Svar på, hvad du synes om sommervejret","Giv mindst to råd om at lære nye ord","Svar på spørgsmålet om en samtalepartner","Indled og afslut e-mailen på en passende måde"],
    phrases:["Kære Sofie","Tak for din e-mail","Jeg synes, du skal ...","Et andet godt råd er ...","Jeg kender faktisk ...","Jeg håber, det hjælper","Mange hilsner"],
    model:"Kære Sofie\n\nTak for din e-mail. Jeg nyder sommeren, men jeg synes også, at det er lidt for varmt. Det er spændende, at du skal til Barcelona! Når jeg lærer nye ord, skriver jeg dem på små kort og øver dem hver dag. Du kan også se korte videoer på spansk og gentage sætningerne højt. Jeg kender en kvinde fra min sprogskole, som taler spansk. Jeg kan spørge hende, om hun har tid til at tale med dig en gang om ugen. Det bliver sikkert sjovt.\n\nJeg håber, det hjælper.\n\nMange hilsner\nAlex"
  },
  {
    id:"friend-party", kind:"E-mail til en ven", icon:"🎉", title:"Fortæl om en fest", time:30, minWords:90,
    situation:"Din ven Mette vil gerne høre om den fest, du var til sidste weekend.",
    source:"Kære ven. Hvordan går det? Sidste gang fortalte du, at du skulle til en stor fest. Hvad var det for en fest? Hvad havde du på? Hyggede du dig, og hvem talte du med? Fik du talt dansk til festen? Jeg glæder mig til at høre om det hele. Kærlig hilsen Mette",
    requirements:["Fortæl, hvilken fest det var","Beskriv dit tøj","Fortæl, hvem du talte med","Fortæl, om du talte dansk","Indled og afslut passende"],
    phrases:["Kære Mette","Det var dejligt at høre fra dig","Festen blev holdt ...","Jeg havde ... på","Jeg talte blandt andet med ...","Vi hyggede os","Kærlig hilsen"],
    model:"Kære Mette\n\nDet var dejligt at høre fra dig. Festen var min kollegas 40-års fødselsdag, og den blev holdt i et stort lokale på Amager. Jeg købte ikke nyt tøj. Jeg havde en blå skjorte, sorte bukser og mine pæne sko på. Der var omkring 50 gæster. Jeg talte mest med mine kolleger og med fødselarens bror. Vi spiste god mad, dansede og hyggede os meget. Musikken var også rigtig god. Jeg talte dansk næsten hele aftenen, så det var også god sprogtræning.\n\nVi må snart ses.\n\nKærlig hilsen\nAlex"
  },
  {
    id:"friend-moving", kind:"E-mail til en ven", icon:"🏠", title:"Svar om din nye bolig", time:30, minWords:90,
    situation:"Din ven Jonas har hørt, at du er flyttet, og vil gerne vide mere om dit nye hjem.",
    source:"Hej! Jeg har hørt, at du er flyttet. Hvor bor du nu, og hvordan er lejligheden? Hvad kan du bedst lide ved området? Har du lært nogen af naboerne at kende? Jeg vil meget gerne komme på besøg. Hvornår passer det dig? Hilsen Jonas",
    requirements:["Fortæl, hvor du bor nu","Beskriv boligen og området","Fortæl om dine naboer","Foreslå en dag, hvor din ven kan komme"],
    phrases:["Hej Jonas","Ja, det er rigtigt ...","Lejligheden består af ...","Det bedste ved området er ...","Du er meget velkommen","Passer det dig ...?","De bedste hilsner"],
    model:"Hej Jonas\n\nJa, det er rigtigt, at vi er flyttet. Nu bor vi i en lejlighed tæt på en park og en metrostation. Lejligheden har tre værelser, et lyst køkken og en lille altan. Det bedste ved området er, at der både er grønne områder og gode butikker. Børnene er glade for parken. Vores naboer virker venlige. Jeg har allerede drukket kaffe med familien ved siden af. Du er meget velkommen på besøg. Hvad med næste lørdag klokken 15? Så kan vi gå en tur og spise middag sammen.\n\nDe bedste hilsner\nAlex"
  },
  {
    id:"job-cafe", kind:"Svar på jobannonce", icon:"☕", title:"Weekendjob på en café", time:30, minWords:90,
    situation:"Café Sol søger en medarbejder til lørdag og søndag. De ønsker en venlig person, som kan lide kundekontakt.",
    source:"CAFÉ SOL SØGER WEEKENDHJÆLP. Du skal tage imod bestillinger, servere mad og holde caféen pæn. Arbejdstid: lørdag og søndag kl. 9-16. Erfaring er en fordel, men ikke et krav. Send en kort ansøgning til job@cafesol.dk.",
    requirements:["Præsenter dig selv","Forklar, hvorfor du søger jobbet","Fortæl om relevant erfaring","Fortæl, hvornår du kan begynde","Afslut formelt"],
    phrases:["Kære Café Sol","Jeg skriver angående jeres annonce","Jeg er interesseret i stillingen, fordi ...","Jeg har erfaring med ...","Jeg er mødestabil og venlig","Jeg kan begynde ...","Med venlig hilsen"],
    model:"Kære Café Sol\n\nJeg skriver angående jeres annonce om weekendhjælp. Jeg er 32 år og bor tæt på caféen. Jeg søger jobbet, fordi jeg godt kan lide at møde nye mennesker og give god service. Tidligere har jeg arbejdet i en kantine, hvor jeg tog imod betaling, lavede kaffe og ryddede op. Jeg er venlig, rolig og mødestabil. Jeg kan arbejde både lørdag og søndag og kan begynde allerede næste måned. Jeg kommer meget gerne til en samtale, hvis I vil høre mere om mig.\n\nMed venlig hilsen\nAlex Jensen"
  },
  {
    id:"job-warehouse", kind:"Svar på jobannonce", icon:"📦", title:"Aftenarbejde på et lager", time:30, minWords:90,
    situation:"Et lokalt firma søger en lagermedarbejder tre aftener om ugen.",
    source:"NORDLAGER SØGER EN DELTIDSMEDARBEJDER. Opgaver: pakke varer, kontrollere bestillinger og holde orden. Arbejdstid: mandag, onsdag og torsdag kl. 17-22. Du skal kunne arbejde selvstændigt og være omhyggelig.",
    requirements:["Skriv, hvilket job du søger","Fortæl kort om dig selv","Beskriv dine relevante egenskaber","Fortæl om din arbejdstid passer","Bed om en samtale"],
    phrases:["Til Nordlager","Jeg vil gerne søge stillingen som ...","Jeg har tidligere ...","Mine kolleger beskriver mig som ...","Arbejdstiden passer mig godt","Jeg ser frem til at høre fra jer"],
    model:"Til Nordlager\n\nJeg vil gerne søge deltidsstillingen på jeres lager. Jeg er en ansvarlig og aktiv person, som arbejder omhyggeligt. I mit tidligere job pakkede jeg varer og kontrollerede leverancer, så jeg kender til denne type arbejde. Jeg er også i god fysisk form og vant til at stå op. Jeg kan arbejde selvstændigt, men jeg samarbejder også godt med andre. Arbejdstiden mandag, onsdag og torsdag passer mig fint, fordi jeg studerer om dagen. Jeg kan begynde om to uger. Jeg håber, at I vil invitere mig til en samtale.\n\nMed venlig hilsen\nAlex Jensen"
  },
  {
    id:"lost-bag", kind:"Efterlysning", icon:"🎒", title:"Du har mistet din taske", time:15, minWords:55,
    situation:"Du har mistet din taske på skolen. Skriv et opslag. Du vil give 100 kr. i dusør.",
    source:"",
    requirements:["Skriv, hvor og hvornår du mistede tasken","Beskriv farve, materiale og særlige kendetegn","Nævn mindst fem ting, der var i tasken","Forklar, hvordan du kan kontaktes","Nævn dusøren"],
    phrases:["Har du set min taske?","Jeg mistede den ...","Den er lavet af ...","I tasken lå der ...","Hvis du har fundet den ...","Dusør: 100 kr.","Kontakt mig på ..."],
    model:"HAR DU SET MIN TASKE?\n\nJeg mistede min rygsæk tirsdag den 12. marts omkring klokken 14 på skolen. Jeg tror, at jeg glemte den i kantinen. Tasken er mørkeblå og lavet af stof. Den har en lille rød nøgleholder på siden. I tasken lå der en danskbog, et hæfte, et penalhus, en drikkedunk, mine høretelefoner og et par sorte handsker. Hvis du har fundet tasken, må du meget gerne ringe til mig på 12 34 56 78.\n\nDusør: 100 kr."
  },
  {
    id:"lost-keys", kind:"Efterlysning", icon:"🔑", title:"Du har mistet dine nøgler", time:15, minWords:45,
    situation:"Du har tabt et nøglebundt på vej hjem. Skriv et opslag til din lokale Facebook-gruppe.",
    source:"",
    requirements:["Fortæl, hvornår og hvor nøglerne blev væk","Beskriv nøglebundet","Nævn mindst to særlige kendetegn","Skriv, hvordan du kan kontaktes"],
    phrases:["HJÆLP - NØGLER MISTET","Jeg tabte sandsynligvis ...","Nøglebundet består af ...","Der hænger også ...","Skriv gerne en privat besked"],
    model:"HJÆLP - NØGLER MISTET\n\nJeg har mistet mine nøgler i går aftes mellem Nørrebro Station og Stefansgade. Nøglebundet består af tre sølvfarvede nøgler og en lille sort elektronisk brik. Der hænger også en gul LEGO-figur og et rundt mærke med mit fornavn på ringen. Jeg har allerede gået ruten igen, men jeg kunne ikke finde dem. Hvis du har set eller fundet nøglerne, må du meget gerne skrive en privat besked til mig. På forhånd mange tak for hjælpen!"
  },
  {
    id:"volunteer-shop", kind:"Frivilligt arbejde", icon:"🤝", title:"Hjælp i en genbrugsbutik", time:20, minWords:75,
    situation:"Folkekirkens Nødhjælp søger frivillige til en lokal genbrugsbutik. Du har tid og vil gerne hjælpe.",
    source:"VI SØGER FRIVILLIGE. Har du tre timer om ugen? I genbrugsbutikken hjælper du kunder, sorterer tøj og stiller varer på plads. Erfaring er ikke nødvendig. Det vigtigste er, at du er venlig og har lyst til at være en del af fællesskabet.",
    requirements:["Fortæl lidt om dig selv","Fortæl, hvad du har lavet før","Forklar, hvorfor du vil hjælpe","Skriv, hvornår du har tid"],
    phrases:["Kære frivilligkoordinator","Jeg har set jeres annonce","Jeg vil gerne være frivillig, fordi ...","Jeg har erfaring med ...","Jeg kan hjælpe ...","Jeg glæder mig til at høre fra jer"],
    model:"Kære frivilligkoordinator\n\nJeg har set jeres annonce om frivillige i genbrugsbutikken, og jeg vil meget gerne hjælpe. Jeg er en rolig og venlig person, som godt kan lide at arbejde sammen med andre. Tidligere har jeg arbejdet i en butik, hvor jeg hjalp kunder og stillede varer på plads. Jeg vil gerne være frivillig, fordi jeg synes, genbrug og socialt arbejde er vigtigt. Jeg kan hjælpe tre timer hver tirsdag eftermiddag og nogle gange om lørdagen. Jeg kommer gerne forbi til en samtale.\n\nMed venlig hilsen\nAlex"
  },
  {
    id:"volunteer-sports", kind:"Frivilligt arbejde", icon:"⚽", title:"Træner i en børneklub", time:20, minWords:75,
    situation:"En lokal sportsklub søger frivillige hjælpetrænere til børn mellem 8 og 10 år.",
    source:"BLIV FRIVILLIG HJÆLPETRÆNER. Vi træner hver onsdag kl. 16.30-18. Du behøver ikke være ekspert, men du skal være glad for sport, tålmodig og god til børn.",
    requirements:["Præsenter dig selv","Fortæl om din erfaring med sport eller børn","Forklar din motivation","Skriv, om tidspunktet passer","Stil mindst ét spørgsmål"],
    phrases:["Kære sportsklub","Jeg er interesseret i at blive ...","Jeg har tidligere ...","Jeg er tålmodig og ...","Onsdag passer mig ...","Jeg vil gerne vide ..."],
    model:"Kære sportsklub\n\nJeg er interesseret i at blive frivillig hjælpetræner for børnene. Jeg er 35 år og har spillet fodbold i mange år. Jeg har også to børn, så jeg er vant til at planlægge aktiviteter og forklare ting på en rolig måde. Jeg vil gerne hjælpe, fordi sport giver børn både motion og gode venner. Træningen onsdag klokken 16.30 passer mig godt, og jeg kan begynde næste måned. Skal hjælpetrænerne også deltage i kampe i weekenden?\n\nJeg glæder mig til at høre fra jer.\n\nMed venlig hilsen\nAlex"
  },
  {
    id:"complaint-restaurant", kind:"Formel klage", icon:"🍽", title:"En dårlig restaurantoplevelse", time:20, minWords:75,
    situation:"Du har spist på restaurant Kabale med en ven og havde en dårlig oplevelse. Skriv en klage.",
    source:"",
    requirements:["Fortæl, hvornår du var der","Fortæl, hvad I bestilte","Forklar præcist, hvad du var utilfreds med","Foreslå, hvordan restauranten kan gøre dig tilfreds igen","Indled og afslut formelt"],
    phrases:["Til restaurant Kabale","Jeg skriver for at klage over ...","Vi bestilte ...","Desværre var ...","Jeg forventer derfor ...","Jeg ser frem til jeres svar","Med venlig hilsen"],
    model:"Til restaurant Kabale\n\nJeg skriver for at klage over vores besøg fredag den 8. marts klokken 19. Min ven og jeg bestilte to burgere med pommes frites. Vi ventede næsten en time på maden, og da den kom, var burgerne kolde. Tjeneren var venlig, men hun glemte også vores drikkevarer. Vi betalte fuld pris, selvom oplevelsen var dårlig. Jeg vil derfor gerne bede om at få halvdelen af beløbet tilbage eller modtage et gavekort til et nyt besøg.\n\nJeg ser frem til jeres svar.\n\nMed venlig hilsen\nAlex Jensen"
  }
];
/* ================================================================
   App logic
   ================================================================ */

const app = document.querySelector("#app");
const live = document.querySelector("#liveRegion");

/* ---------- Safe storage (works in private mode / blocked storage) ---------- */
const store = {
  get(key, fallback){ try { const raw = localStorage.getItem(key); return raw === null ? fallback : JSON.parse(raw); } catch { return fallback; } },
  set(key, value){ try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable: keep going in memory */ } }
};

const saved = store.get("ordvaerk-progress", {}) || {};
const progress = {
  points: saved.points || 0,
  bestStreak: saved.bestStreak || 0,
  daily: saved.daily || 0,
  date: saved.date || "",
  topics: saved.topics || {},            // best % per topic quiz (kept from v1)
  topicStats: saved.topicStats || {},    // { topic: { r: right, t: total } } across all modes
  writingCompleted: saved.writingCompleted || [],
  mistakes: saved.mistakes || [],        // keys of questions answered wrong and not yet fixed
  dailySentence: saved.dailySentence || null
};
const writingDrafts = store.get("ordvaerk-writing-drafts", {}) || {};

const state = {
  mode: null, topic: null, quizSet: null, questions: [], index: 0, results: [],
  answered: false, streak: 0, bestRun: 0, timer: null, nextTimer: null, timeLeft: 60,
  buildAnswer: [], availableWords: [],
  writingTask: null, writingTimer: null, writingSeconds: 0, writingRunning: false
};

const DAILY_GOAL = 10;
const SPRINT_SECONDS = 60;

/* ---------- Helpers ---------- */
function todayKey(){
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function normalizeDaily(){ if (progress.date !== todayKey()) { progress.daily = 0; progress.date = todayKey(); save(); } }
function save(){ store.set("ordvaerk-progress", progress); updateTopStats(); }
function updateTopStats(){
  document.querySelector("#totalPoints").textContent = progress.points;
  document.querySelector("#bestStreak").textContent = progress.bestStreak;
}
function shuffle(list){
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
function escapeHtml(value){ return String(value).replace(/[&<>'"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[c])); }
function announce(text){ live.textContent = ""; setTimeout(() => { live.textContent = text; }, 30); }
function keyOf(q){ return q.words ? `b:${q.answer}` : `c:${q.q}`; }
function isBuild(q){ return Array.isArray(q.words); }
function withShuffledOptions(q){ return isBuild(q) ? q : { ...q, options: shuffle(q.options) }; }

const ITEM_BY_KEY = new Map([...QUESTION_BANK, ...BUILD_QUESTIONS].map(q => [keyOf(q), q]));
function liveMistakes(){ return progress.mistakes.filter(k => ITEM_BY_KEY.has(k)); }

const ICONS = {
  mixed: '<path d="M4 7h3.5c2 0 3 1 4.5 3.5S14.5 17 16.5 17H20M17 14l3 3-3 3M4 17h3.5c1 0 1.7-.3 2.3-.9M14.2 7.9c.6-.6 1.3-.9 2.3-.9H20M17 4l3 3-3 3"/>',
  build: '<rect x="3" y="14" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/><rect x="8.5" y="4" width="7" height="6" rx="1.5"/>',
  sprint: '<circle cx="12" cy="13.5" r="7.5"/><path d="M12 9.5v4l2.5 2M10 2.5h4M12 2.5V6"/>',
  writing: '<path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4"/>',
  review: '<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.6M4 4v4.6h4.6"/><path d="M12 8v4.5l3 2"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>'
};
function icon(name, cls = "icon"){ return `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`; }

/* The signature element: a Danish sentence with a visible gap that fills in. */
function sentenceHtml(q, choice = null){
  const parts = q.q.split("___");
  const before = escapeHtml(parts[0] || "");
  const after = escapeHtml(parts.slice(1).join("___"));
  let slot;
  if (choice === null) slot = `<span class="slot"><span class="sr-only">(tomt felt)</span></span>`;
  else if (choice === q.answer) slot = `<span class="slot is-filled is-correct">${escapeHtml(q.answer)}</span>`;
  else slot = `<span class="slot is-filled is-wrong"><del>${escapeHtml(choice)}</del><ins>${escapeHtml(q.answer)}</ins></span>`;
  return `${before}${slot}${after}`;
}

/* ---------- Recording answers ---------- */
function recordAnswer(q, correct, { countDaily = true, pointsFor = 10 } = {}){
  const key = keyOf(q);
  if (correct) {
    progress.points += pointsFor;
    if (countDaily) progress.daily++;
    progress.mistakes = progress.mistakes.filter(k => k !== key);
  } else if (!progress.mistakes.includes(key)) {
    progress.mistakes.unshift(key);
    progress.mistakes = progress.mistakes.slice(0, 80);
  }
  const s = progress.topicStats[q.topic] || { r: 0, t: 0 };
  s.t++; if (correct) s.r++;
  progress.topicStats[q.topic] = s;
  save();
}

/* ---------- Home ---------- */
function dailyQuestion(){
  const d = new Date();
  const dayNumber = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  return QUESTION_BANK[(dayNumber * 37) % QUESTION_BANK.length];
}

function dailyCardHtml(){
  const q = dailyQuestion();
  const done = progress.dailySentence && progress.dailySentence.date === todayKey() ? progress.dailySentence.choice : null;
  const correct = done === q.answer;
  return `<section class="daily" aria-labelledby="daily-title">
    <div class="daily-head"><strong id="daily-title">Dagens sætning</strong><span>${escapeHtml(TOPICS[q.topic].name)}</span></div>
    <p class="sentence">${sentenceHtml(q, done)}</p>
    <div class="daily-options" role="group" aria-label="Vælg ordet, der mangler">
      ${q.options.map(o => {
        const cls = done === null ? "" : o === q.answer ? " is-correct" : o === done ? " is-wrong" : "";
        return `<button class="daily-option${cls}" data-daily-option="${escapeHtml(o)}"${done !== null ? " disabled" : ""}>${escapeHtml(o)}</button>`;
      }).join("")}
    </div>
    ${done === null ? `<p class="daily-hint">Tryk på det ord, der mangler – eller brug tasterne 1–4.</p>` : ""}
    ${done !== null ? `<div class="daily-feedback">
      <p><strong>${correct ? "Rigtigt." : "Ikke helt."}</strong> ${escapeHtml(q.explain)}</p>
      <button class="btn btn-on-deep" data-mode="mixed">Fortsæt med 10 spørgsmål ${icon("arrow")}</button>
    </div>` : ""}
  </section>`;
}

function topicRowHtml(key, topic){
  const s = progress.topicStats[key];
  const pct = s && s.t ? Math.round(s.r / s.t * 100) : null;
  const stat = pct === null ? "Ikke øvet endnu" : `${pct} % rigtige ud af ${s.t} svar`;
  return `<button class="topic" data-topic="${key}">
    <span><span class="topic-name">${escapeHtml(topic.name)}</span><span class="topic-blurb">${escapeHtml(topic.blurb)}</span></span>
    <span class="topic-meter"><span class="meter" aria-hidden="true"><span style="width:${pct ?? 0}%"></span></span><span class="topic-stat">${stat}</span></span>
    <span class="topic-go">Øv ${icon("arrow")}</span>
  </button>`;
}

function showHome(){
  clearTimers();
  normalizeDaily();
  const done = Math.min(progress.daily, DAILY_GOAL);
  const mistakes = liveMistakes().length;
  const practiced = Object.keys(progress.topicStats).length;
  app.innerHTML = `
    <div class="hero">
      <div class="hero-copy">
        <div>
          <h1>Træn dansk grammatik, én sætning ad gangen.</h1>
          <p class="hero-lead">Korte øvelser på niveau A2–B1 med en forklaring efter hvert svar – og skriveopgaver som til danskprøven.</p>
        </div>
        <div class="goal${done >= DAILY_GOAL ? " done" : ""}">
          <div class="goal-text"><span>Dagens mål</span><span><strong>${done} af ${DAILY_GOAL}</strong> rigtige svar${done >= DAILY_GOAL ? " – nået!" : ""}</span></div>
          <div class="goal-ticks" aria-hidden="true">${Array.from({ length: DAILY_GOAL }, (_, i) => `<span class="${i < done ? "on" : ""}"></span>`).join("")}</div>
        </div>
      </div>
      ${dailyCardHtml()}
    </div>

    <section class="section" aria-labelledby="modes-title">
      <div class="section-head"><h2 id="modes-title">Vælg en træning</h2></div>
      <div class="modes">
        <button class="mode" data-mode="mixed">${icon("mixed", "icon mode-icon")}<span class="mode-name">Blandet quiz</span><span class="mode-desc">10 spørgsmål fra alle fem emner</span></button>
        <button class="mode" data-mode="build">${icon("build", "icon mode-icon")}<span class="mode-name">Byg sætningen</span><span class="mode-desc">Sæt ordene i den rigtige rækkefølge</span></button>
        <button class="mode" data-mode="sprint">${icon("sprint", "icon mode-icon")}<span class="mode-name">60 sekunders sprint</span><span class="mode-desc">Svar på så mange som muligt på ét minut</span></button>
        <button class="mode" data-mode="review"${mistakes ? "" : " disabled"}>${icon("review", "icon mode-icon")}<span class="mode-name">Gentag dine fejl${mistakes ? `<span class="mode-count">${mistakes}</span>` : ""}</span><span class="mode-desc">${mistakes ? "Øv de spørgsmål, du har svaret forkert på" : "Her samles de spørgsmål, du svarer forkert på"}</span></button>
        <button class="mode" data-mode="writing">${icon("writing", "icon mode-icon")}<span class="mode-name">Skrivetræning</span><span class="mode-desc">${WRITING_TASKS.length} opgaver: e-mails, opslag, ansøgninger og klager</span></button>
      </div>
    </section>

    <section class="section" aria-labelledby="topics-title">
      <div class="section-head"><h2 id="topics-title">Øv et bestemt emne</h2><p>${practiced ? `${practiced} af 5 emner øvet` : "Hver emnequiz har 10 spørgsmål"}</p></div>
      <div class="topics">${Object.entries(TOPICS).map(([k, t]) => topicRowHtml(k, t)).join("")}</div>
    </section>

    <footer class="site-foot">Din fremgang gemmes kun i denne browser. <button data-action="reset-progress">Nulstil fremgang</button></footer>`;
  updateTopStats();
  app.focus({ preventScroll: true });
}

function answerDaily(choice){
  const q = dailyQuestion();
  if (progress.dailySentence && progress.dailySentence.date === todayKey()) return;
  const correct = choice === q.answer;
  progress.dailySentence = { date: todayKey(), choice };
  normalizeDaily();
  recordAnswer(q, correct);
  announce(correct ? "Rigtigt svar" : `Forkert. Det rigtige svar er ${q.answer}`);
  const y = window.scrollY;
  showHome();
  window.scrollTo(0, y);
  document.querySelector(".daily-feedback .btn")?.focus({ preventScroll: true });
}

/* ---------- Quiz engine ---------- */
function nextQuizSet(topic){
  const key = `ordvaerk-last-set-${topic}`;
  const next = (Number(store.get(key, 0)) % 5) + 1;
  store.set(key, next);
  return next;
}
function questionsForSet(topic, set){
  const pool = QUESTION_BANK.filter(q => q.topic === topic);
  const start = (set - 1) * 6;
  return Array.from({ length: 10 }, (_, i) => pool[(start + i) % pool.length]);
}

function startQuiz(mode, topic = null){
  clearTimers();
  Object.assign(state, { mode, topic, quizSet: null, index: 0, results: [], answered: false, streak: 0, bestRun: 0, timeLeft: SPRINT_SECONDS, buildAnswer: [], availableWords: [] });
  let list;
  if (mode === "build") list = shuffle(BUILD_QUESTIONS);
  else if (mode === "review") list = shuffle(liveMistakes().map(k => ITEM_BY_KEY.get(k))).slice(0, 10);
  else if (mode === "topic") { state.quizSet = nextQuizSet(topic); list = shuffle(questionsForSet(topic, state.quizSet)); }
  else if (mode === "sprint") list = shuffle(QUESTION_BANK);
  else list = shuffle(QUESTION_BANK).slice(0, 10);
  if (!list.length) return showHome();
  state.questions = list.map(withShuffledOptions);
  renderQuestion();
  if (mode === "sprint") startSprintTimer();
}

function gameTitle(){
  if (state.mode === "build") return "Byg sætningen";
  if (state.mode === "sprint") return "60 sekunders sprint";
  if (state.mode === "review") return "Gentag dine fejl";
  if (state.mode === "topic") return TOPICS[state.topic].name;
  return "Blandet quiz";
}
function gameSub(){
  if (state.mode === "topic") return `Quiz ${state.quizSet} af 5`;
  if (state.mode === "sprint") return "Svar hurtigt – der er ingen pause";
  if (state.mode === "review") return "Svarer du rigtigt, forsvinder spørgsmålet fra listen";
  if (state.mode === "build") return "Tryk på ordene i rækkefølge";
  return "Alle emner";
}

function progressHtml(){
  if (state.mode === "sprint") {
    const pct = state.timeLeft / SPRINT_SECONDS * 100;
    return `<div class="timer${state.timeLeft <= 10 ? " is-low" : ""}" role="progressbar" aria-label="Tid tilbage" aria-valuemin="0" aria-valuemax="${SPRINT_SECONDS}" aria-valuenow="${state.timeLeft}"><span id="timerBar" style="width:${pct}%"></span></div>`;
  }
  return `<div class="segments" aria-hidden="true">${state.questions.map((_, i) => {
    const r = state.results[i];
    const cls = r ? (r.correct ? "is-correct" : "is-wrong") : i === state.index ? "is-current" : "";
    return `<span class="${cls}"></span>`;
  }).join("")}</div>`;
}

function counterText(){
  if (state.mode === "sprint") return `${state.timeLeft} sek.`;
  return `${Math.min(state.index + 1, state.questions.length)} af ${state.questions.length}`;
}

function renderQuestion(){
  const q = state.questions[state.index];
  if (!q) return finishGame();
  const build = isBuild(q);
  app.innerHTML = `<section class="game">
    <div class="game-head">
      <button class="back" data-action="home" aria-label="Afslut og gå til forsiden">${icon("back")}</button>
      <div><h1 class="game-title">${escapeHtml(gameTitle())}</h1><p class="game-sub">${escapeHtml(gameSub())}</p></div>
      <span class="game-count" id="gameCounter">${counterText()}</span>
    </div>
    <div id="progressArea">${progressHtml()}</div>
    <article class="card" id="questionCard">
      <div class="q-meta"><span class="q-topic">${escapeHtml(TOPICS[q.topic].name)}</span><span class="q-streak">${state.streak >= 2 ? `${state.streak} rigtige i træk` : ""}</span></div>
      ${build ? buildHtml(q) : choiceHtml(q)}
    </article>
  </section>`;
  if (build) renderWordBanks();
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function choiceHtml(q){
  return `<h2 class="sentence" id="sentence">${sentenceHtml(q)}</h2>
  <p class="q-instruction">Vælg det ord, der mangler.</p>
  <div class="options" role="group" aria-label="Svarmuligheder">${q.options.map((o, i) => `<button class="option" data-option="${escapeHtml(o)}"><span>${escapeHtml(o)}</span><span class="kbd" aria-hidden="true">${i + 1}</span></button>`).join("")}</div>`;
}

function buildHtml(q){
  state.buildAnswer = [];
  state.availableWords = shuffle(q.words.map((word, id) => ({ word, id })));
  return `<h2 class="sentence">${escapeHtml(q.prompt)}</h2>
  <p class="q-instruction">Tryk på ordene i den rigtige rækkefølge. Tryk på et ord i sætningen for at fjerne det.</p>
  <div class="build-line" id="answerZone" aria-label="Din sætning" data-empty="Din sætning kommer her"></div>
  <div class="word-bank" id="wordBank" aria-label="Ord du kan vælge"></div>
  <div class="build-actions"><button class="btn btn-secondary" data-action="reset-build" disabled>Start forfra</button><button class="btn btn-primary" data-action="check-build" disabled>Tjek svar</button></div>`;
}

function renderWordBanks(){
  const bank = document.querySelector("#wordBank");
  const zone = document.querySelector("#answerZone");
  if (!bank || !zone) return;
  bank.innerHTML = state.availableWords.map(item => `<button class="word" data-word-id="${item.id}">${escapeHtml(item.word)}</button>`).join("");
  zone.innerHTML = state.buildAnswer.map(item => `<button class="word" data-answer-id="${item.id}" aria-label="Fjern ${escapeHtml(item.word)}">${escapeHtml(item.word)}</button>`).join("");
  const any = state.buildAnswer.length > 0;
  document.querySelector('[data-action="reset-build"]').disabled = !any;
  document.querySelector('[data-action="check-build"]').disabled = state.availableWords.length > 0;
}

function registerResult(q, correct, choice){
  state.results[state.index] = { q, correct, choice };
  if (correct) { state.streak++; state.bestRun = Math.max(state.bestRun, state.streak); }
  else state.streak = 0;
  progress.bestStreak = Math.max(progress.bestStreak, state.bestRun);
  normalizeDaily();
  recordAnswer(q, correct, { pointsFor: state.mode === "sprint" ? 5 : 10 });
  const area = document.querySelector("#progressArea");
  if (area && state.mode !== "sprint") area.innerHTML = progressHtml();
}

function answerChoice(selected){
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.index];
  const correct = selected === q.answer;
  document.querySelectorAll(".option").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.option === q.answer) btn.classList.add("is-correct");
    else if (btn.dataset.option === selected) btn.classList.add("is-wrong");
  });
  document.querySelector("#sentence").innerHTML = sentenceHtml(q, selected);
  registerResult(q, correct, selected);
  announce(correct ? "Rigtigt svar" : `Forkert. Det rigtige svar er ${q.answer}`);
  showFeedback(correct, q);
  if (state.mode === "sprint") state.nextTimer = setTimeout(nextQuestion, correct ? 700 : 1600);
}

function checkBuild(){
  if (state.answered) return;
  state.answered = true;
  const q = state.questions[state.index];
  const response = state.buildAnswer.map(x => x.word).join(" ");
  const correct = response === q.answer;
  document.querySelectorAll(".word, .build-actions button").forEach(b => { b.disabled = true; });
  document.querySelector("#answerZone").classList.add(correct ? "is-correct" : "is-wrong");
  registerResult(q, correct, response);
  announce(correct ? "Rigtigt svar" : `Forkert. Det rigtige svar er ${q.answer}`);
  showFeedback(correct, q, correct ? "" : `Rigtig rækkefølge: <strong>${escapeHtml(q.answer)}.</strong>`);
}

function showFeedback(correct, q, extraHtml = ""){
  const last = state.index === state.questions.length - 1;
  const box = document.createElement("div");
  box.className = `feedback${correct ? " is-good" : ""}`;
  box.innerHTML = `<div><p class="feedback-title">${correct ? "Rigtigt." : "Ikke helt."}</p><p class="feedback-body">${extraHtml ? extraHtml + " " : ""}${escapeHtml(q.explain)}</p></div>
    ${state.mode !== "sprint" ? `<button class="btn btn-primary" data-action="next">${last ? "Se resultat" : "Næste"} <span class="kbd" aria-hidden="true">Enter</span></button>` : ""}`;
  document.querySelector("#questionCard").append(box);
  box.querySelector("button")?.focus({ preventScroll: true });
}

function nextQuestion(){
  clearTimeout(state.nextTimer); state.nextTimer = null;
  state.index++; state.answered = false; state.buildAnswer = [];
  renderQuestion();
}

function finishGame(){
  clearTimers();
  const results = state.results.filter(Boolean);
  const attempts = results.length;
  const right = results.filter(r => r.correct).length;
  const pct = attempts ? Math.round(right / attempts * 100) : 0;
  if (state.mode === "topic" && attempts) progress.topics[state.topic] = Math.max(progress.topics[state.topic] || 0, pct);
  save();
  const wrong = results.filter(r => !r.correct);
  const heading = !attempts ? "Tiden løb ud" : pct >= 80 ? "Stærkt arbejde!" : pct >= 50 ? "Godt på vej." : "Øvelse gør mester.";
  const lead = state.mode === "sprint"
    ? `Du nåede ${attempts} spørgsmål på ét minut.`
    : wrong.length ? "Kig på dine fejl herunder – de er også gemt under ‘Gentag dine fejl’." : "Du svarede rigtigt på alle spørgsmål.";
  const points = right * (state.mode === "sprint" ? 5 : 10);
  app.innerHTML = `<section class="game"><div class="card">
    <div class="result-top">
      <p class="result-score">${right}<small> / ${attempts}</small></p>
      <div><h1>${heading}</h1><p>${lead}</p></div>
    </div>
    <div class="result-facts">
      <span><strong>${pct} %</strong>rigtige</span>
      <span><strong>${state.bestRun}</strong>bedste serie</span>
      <span><strong>+${points}</strong>point</span>
    </div>
    ${wrong.length ? `<div class="review-list"><h2>Det skal du øve</h2>${wrong.map(r => `<div class="review-item">
        <p class="sentence">${isBuild(r.q) ? escapeHtml(r.q.answer) + "." : sentenceHtml(r.q, r.choice)}</p>
        <p>${escapeHtml(r.q.explain)}</p></div>`).join("")}</div>` : ""}
    <div class="result-actions">
      <button class="btn btn-primary" data-action="again">Prøv igen</button>
      ${wrong.length && state.mode !== "review" ? `<button class="btn btn-secondary" data-mode="review">Gentag dine fejl</button>` : ""}
      <button class="btn btn-secondary" data-action="home">Til forsiden</button>
    </div>
  </div></section>`;
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function startSprintTimer(){
  clearInterval(state.timer);
  state.timer = setInterval(() => {
    state.timeLeft--;
    const counter = document.querySelector("#gameCounter");
    const bar = document.querySelector("#timerBar");
    if (counter) counter.textContent = `${state.timeLeft} sek.`;
    if (bar) { bar.style.width = `${state.timeLeft / SPRINT_SECONDS * 100}%`; bar.parentElement.classList.toggle("is-low", state.timeLeft <= 10); }
    if (state.timeLeft <= 0) finishGame();
  }, 1000);
}
function clearTimers(){
  if (state.timer) { clearInterval(state.timer); state.timer = null; }
  if (state.nextTimer) { clearTimeout(state.nextTimer); state.nextTimer = null; }
  if (state.writingTimer) { clearInterval(state.writingTimer); state.writingTimer = null; state.writingRunning = false; }
}

/* ---------- Writing ---------- */
function showWritingHub(){
  clearTimers();
  state.mode = "writing";
  const kinds = [...new Set(WRITING_TASKS.map(t => t.kind))];
  const doneCount = progress.writingCompleted.length;
  app.innerHTML = `<section class="writing">
    <div class="game-head">
      <button class="back" data-action="home" aria-label="Gå til forsiden">${icon("back")}</button>
      <div><h1 class="game-title">Skrivetræning</h1><p class="game-sub">Opgavetyper fra Danskuddannelse 3, modul 3 og 4</p></div>
      <span class="game-count">${doneCount} af ${WRITING_TASKS.length} færdige</span>
    </div>
    <p class="writing-intro">Vælg en opgave, skriv dit svar med uret kørende, og gå tjeklisten igennem, før du ser et eksempel på et svar.</p>
    ${kinds.map(kind => `<div class="task-group"><h2>${escapeHtml(kind)}</h2><div class="tasks">
      ${WRITING_TASKS.filter(t => t.kind === kind).map(task => `<button class="task" data-writing-task="${task.id}">
        <span class="task-title"><span>${escapeHtml(task.title)}</span>${progress.writingCompleted.includes(task.id) ? `<span class="task-done">${icon("check")} Færdig</span>` : ""}</span>
        <span class="task-desc">${escapeHtml(task.situation)}</span>
        <span class="task-facts">${task.time} minutter, mindst ${task.minWords} ord${writingDrafts[task.id] ? " – udkast gemt" : ""}</span>
      </button>`).join("")}
    </div></div>`).join("")}
  </section>`;
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function startWritingTask(id){
  clearTimers();
  const task = WRITING_TASKS.find(t => t.id === id);
  if (!task) return showWritingHub();
  Object.assign(state, { mode: "writing", writingTask: task, writingSeconds: task.time * 60, writingRunning: false });
  const draft = writingDrafts[task.id] || "";
  app.innerHTML = `<section class="writing">
    <div class="game-head">
      <button class="back" data-action="writing-home" aria-label="Tilbage til skriveopgaverne">${icon("back")}</button>
      <div><p class="game-title">${escapeHtml(task.kind)}</p><p class="game-sub">${task.time} minutter, mindst ${task.minWords} ord</p></div>
      <span></span>
    </div>
    <div class="workspace">
      <aside class="brief">
        <h1>${escapeHtml(task.title)}</h1>
        <p>${escapeHtml(task.situation)}</p>
        ${task.source ? `<div class="source"><span class="source-label">Teksten, du skal svare på</span>${escapeHtml(task.source)}</div>` : ""}
        <h2>Du skal skrive om</h2>
        <ul class="reqs">${task.requirements.map(r => `<li>${escapeHtml(r)}</li>`).join("")}</ul>
      </aside>
      <section class="editor" aria-label="Skrivefelt">
        <div class="editor-bar">
          <div class="timer-box">${icon("sprint")}<span class="timer-value" id="writerTimer">${formatTime(state.writingSeconds)}</span>
            <button class="chip-btn" data-action="toggle-writing-timer">Start uret</button><button class="chip-btn" data-action="reset-writing-timer">Nulstil</button></div>
          <span class="word-count" id="wordCount">0 / ${task.minWords} ord</span>
        </div>
        <label class="sr-only" for="writingPad">Skriv dit svar på dansk</label>
        <textarea class="pad" id="writingPad" placeholder="Skriv dit svar her …" spellcheck="true" lang="da">${escapeHtml(draft)}</textarea>
        <p class="draft-note" id="draftNote">${draft ? "Dit tidligere udkast er hentet." : "Dit udkast gemmes automatisk i denne browser."}</p>
        <div class="tools">
          <details><summary>Nyttige sætninger</summary><div class="tool-body phrases">${task.phrases.map(p => `<button class="phrase" data-phrase="${escapeHtml(p)}">${escapeHtml(p)}</button>`).join("")}</div></details>
          <details><summary>Tjek din tekst</summary><div class="tool-body checks">
            ${task.requirements.map((r, i) => `<label class="check"><input type="checkbox" data-self-check="req-${i}"><span>${escapeHtml(r)}</span></label>`).join("")}
            <label class="check"><input type="checkbox" data-self-check="opening"><span>Jeg har en passende indledning og afslutning.</span></label>
            <label class="check"><input type="checkbox" data-self-check="grammar"><span>Jeg har kontrolleret verber, ordstilling og tegnsætning.</span></label>
          </div></details>
          <details><summary>Se et eksempel på et svar</summary><div class="tool-body model">${escapeHtml(task.model)}</div></details>
          <div class="tool-actions">
            <button class="btn btn-secondary" data-action="writing-home">Vælg en anden opgave</button>
            <button class="btn btn-primary" data-action="complete-writing">Markér som færdig</button>
          </div>
          <div id="writerResult" aria-live="polite"></div>
        </div>
      </section>
    </div>
  </section>`;
  updateWordCount();
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function countWords(text){ const t = text.trim(); return t ? t.split(/\s+/).length : 0; }
function formatTime(seconds){ return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`; }
function updateWordCount(){
  const pad = document.querySelector("#writingPad");
  const display = document.querySelector("#wordCount");
  if (!pad || !display || !state.writingTask) return;
  const words = countWords(pad.value);
  display.textContent = `${words} / ${state.writingTask.minWords} ord`;
  display.classList.toggle("is-met", words >= state.writingTask.minWords);
}
let draftSaveTimer = null;
function saveWritingDraft(){
  clearTimeout(draftSaveTimer);
  draftSaveTimer = setTimeout(() => {
    const pad = document.querySelector("#writingPad");
    if (!pad || !state.writingTask) return;
    writingDrafts[state.writingTask.id] = pad.value;
    store.set("ordvaerk-writing-drafts", writingDrafts);
    const note = document.querySelector("#draftNote");
    if (note) note.textContent = "Udkast gemt.";
  }, 400);
}
function setTimerButton(text){ const b = document.querySelector('[data-action="toggle-writing-timer"]'); if (b) b.textContent = text; }
function updateWritingTimer(){
  const display = document.querySelector("#writerTimer");
  if (!display) return;
  display.textContent = state.writingSeconds <= 0 ? "Tiden er gået" : formatTime(state.writingSeconds);
  display.classList.toggle("is-over", state.writingSeconds <= 0);
}
function toggleWritingTimer(){
  if (state.writingRunning) {
    clearInterval(state.writingTimer); state.writingTimer = null; state.writingRunning = false;
    setTimerButton("Fortsæt");
    return;
  }
  if (state.writingSeconds <= 0) state.writingSeconds = state.writingTask.time * 60;
  state.writingRunning = true;
  setTimerButton("Pause");
  state.writingTimer = setInterval(() => {
    state.writingSeconds--;
    updateWritingTimer();
    if (state.writingSeconds <= 0) {
      clearInterval(state.writingTimer); state.writingTimer = null; state.writingRunning = false;
      setTimerButton("Start igen");
      announce("Tiden er gået");
    }
  }, 1000);
}
function resetWritingTimer(){
  if (state.writingTimer) clearInterval(state.writingTimer);
  Object.assign(state, { writingTimer: null, writingRunning: false, writingSeconds: state.writingTask.time * 60 });
  updateWritingTimer();
  setTimerButton("Start uret");
}
function completeWritingTask(){
  const task = state.writingTask;
  const pad = document.querySelector("#writingPad");
  const result = document.querySelector("#writerResult");
  if (!task || !pad || !result) return;
  const words = countWords(pad.value);
  const checks = [...document.querySelectorAll("[data-self-check]")];
  const checked = checks.filter(b => b.checked).length;
  const enough = words >= task.minWords;
  const allChecked = checked === checks.length;
  if (enough && allChecked) {
    const first = !progress.writingCompleted.includes(task.id);
    if (first) { progress.writingCompleted.push(task.id); progress.points += 25; save(); }
    result.innerHTML = `<div class="writer-result is-good"><strong>Flot arbejde.</strong> Du har skrevet ${words} ord og gået hele tjeklisten igennem.${first ? " Opgaven er markeret som færdig, og du har fået 25 point." : ""}</div>`;
  } else {
    const missing = [];
    if (!enough) missing.push(`skriv mindst ${task.minWords - words} ord mere`);
    if (!allChecked) {
      const left = checks.length - checked;
      missing.push(`sæt flueben ved ${left} punkt${left === 1 ? "" : "er"} mere under ‘Tjek din tekst’`);
      checks[0].closest("details").open = true;
    }
    result.innerHTML = `<div class="writer-result"><strong>Næsten færdig.</strong> Før du kan markere opgaven som færdig: ${missing.join(" og ")}.</div>`;
  }
}

/* ---------- Events ---------- */
function resetProgress(){
  if (!confirm("Vil du slette alle point, statistik, fejl og skriveudkast i denne browser?")) return;
  Object.assign(progress, { points: 0, bestStreak: 0, daily: 0, date: todayKey(), topics: {}, topicStats: {}, writingCompleted: [], mistakes: [], dailySentence: null });
  Object.keys(writingDrafts).forEach(k => delete writingDrafts[k]);
  store.set("ordvaerk-writing-drafts", writingDrafts);
  save();
  showHome();
}

function startMode(mode){
  if (mode === "writing") return showWritingHub();
  startQuiz(mode);
}

document.addEventListener("click", event => {
  const t = event.target;
  const on = sel => t.closest(sel);
  let el;
  if (on('[data-action="home"]')) return showHome();
  if ((el = on("[data-daily-option]"))) return answerDaily(el.dataset.dailyOption);
  if ((el = on("[data-mode]"))) return startMode(el.dataset.mode);
  if ((el = on("[data-topic]"))) return startQuiz("topic", el.dataset.topic);
  if ((el = on("[data-writing-task]"))) return startWritingTask(el.dataset.writingTask);
  if (on('[data-action="writing-home"]')) return showWritingHub();
  if (on('[data-action="toggle-writing-timer"]')) return toggleWritingTimer();
  if (on('[data-action="reset-writing-timer"]')) return resetWritingTimer();
  if (on('[data-action="complete-writing"]')) return completeWritingTask();
  if (on('[data-action="reset-progress"]')) return resetProgress();
  if ((el = on("[data-phrase]"))) {
    const pad = document.querySelector("#writingPad");
    if (!pad) return;
    const before = pad.value.slice(0, pad.selectionStart);
    const addition = (before && !/\s$/.test(before) ? " " : "") + el.dataset.phrase + " ";
    pad.setRangeText(addition, pad.selectionStart, pad.selectionEnd, "end");
    pad.dispatchEvent(new Event("input", { bubbles: true }));
    pad.focus();
    return;
  }
  if ((el = on("[data-option]"))) return answerChoice(el.dataset.option);
  if (on('[data-action="next"]')) return nextQuestion();
  if (on('[data-action="again"]')) return startQuiz(state.mode, state.topic);
  if ((el = on("[data-word-id]")) && !state.answered) {
    const id = Number(el.dataset.wordId);
    const i = state.availableWords.findIndex(x => x.id === id);
    state.buildAnswer.push(state.availableWords.splice(i, 1)[0]);
    renderWordBanks();
    const nextWord = document.querySelector("#wordBank .word") || document.querySelector('[data-action="check-build"]');
    nextWord?.focus({ preventScroll: true });
    return;
  }
  if ((el = on("[data-answer-id]")) && !state.answered) {
    const id = Number(el.dataset.answerId);
    const i = state.buildAnswer.findIndex(x => x.id === id);
    state.availableWords.push(state.buildAnswer.splice(i, 1)[0]);
    renderWordBanks();
    return;
  }
  if (on('[data-action="reset-build"]')) { state.availableWords.push(...state.buildAnswer); state.buildAnswer = []; renderWordBanks(); return; }
  if (on('[data-action="check-build"]')) return checkBuild();
});

/* Keyboard: 1–4 picks an answer, Enter goes to the next question. */
document.addEventListener("keydown", event => {
  if (event.target.closest("textarea, input")) return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (/^[1-4]$/.test(event.key)) {
    const daily = document.querySelectorAll("[data-daily-option]:not(:disabled)");
    const opts = document.querySelectorAll(".option:not(:disabled)");
    const list = opts.length ? opts : daily;
    const target = list[Number(event.key) - 1];
    if (target) { event.preventDefault(); target.click(); }
    return;
  }
  if (event.key === "Enter" && state.answered) {
    const next = document.querySelector('[data-action="next"]');
    if (next && document.activeElement !== next) { event.preventDefault(); next.click(); }
  }
});

document.addEventListener("input", event => {
  if (event.target.id === "writingPad") { updateWordCount(); saveWritingDraft(); }
});

normalizeDaily();
updateTopStats();
showHome();
