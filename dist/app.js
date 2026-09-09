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

const app = document.querySelector("#app");
const state = { mode:null, topic:null, quizSet:null, questions:[], index:0, correct:0, answered:false, streak:0, bestRun:0, timer:null, nextTimer:null, timeLeft:60, buildAnswer:[], writingTask:null, writingTimer:null, writingSeconds:0, writingRunning:false };
const saved = JSON.parse(localStorage.getItem("ordvaerk-progress") || "{}");
const progress = { points:saved.points || 0, bestStreak:saved.bestStreak || 0, daily:saved.daily || 0, date:saved.date || "", topics:saved.topics || {}, writingCompleted:saved.writingCompleted || [] };
const writingDrafts = JSON.parse(localStorage.getItem("ordvaerk-writing-drafts") || "{}");

function todayKey(){ return new Date().toISOString().slice(0,10); }
function normalizeDaily(){ if(progress.date !== todayKey()){ progress.daily=0; progress.date=todayKey(); save(); } }
function save(){ localStorage.setItem("ordvaerk-progress", JSON.stringify(progress)); updateTopStats(); }
function updateTopStats(){
  document.querySelector("#totalPoints").textContent = progress.points;
  document.querySelector("#bestStreak").textContent = progress.bestStreak;
}
function shuffle(list){ return [...list].sort(() => Math.random() - .5); }
function escapeHtml(value){ return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }
function nextQuizSet(topic){
  const key=`ordvaerk-last-set-${topic}`;
  const previous=Number(localStorage.getItem(key) || 0);
  const next=(previous % 5) + 1;
  localStorage.setItem(key,String(next));
  return next;
}
function questionsForSet(topic,set){
  const pool=QUESTION_BANK.filter(question=>question.topic===topic);
  const start=(set-1)*6;
  return Array.from({length:10},(_,index)=>pool[(start+index)%pool.length]);
}

function showHome(){
  clearTimer();
  const template = document.querySelector("#homeTemplate");
  app.replaceChildren(template.content.cloneNode(true));
  normalizeDaily(); updateTopStats();
  document.querySelector("#dailyDone").textContent = Math.min(progress.daily,10);
  const ring = document.querySelector("#dailyRing");
  const pct = Math.min(progress.daily,10) / 10 * 360;
  ring.style.background = `conic-gradient(var(--yellow) ${pct}deg, #334a65 ${pct}deg)`;
  ring.style.borderColor = "transparent";
  const practiced = Object.keys(progress.topics).length;
  document.querySelector("#progressNote").textContent = `${practiced} af 5 emner øvet`;
  const grid = document.querySelector("#topicGrid");
  Object.entries(TOPICS).forEach(([key, topic], i) => {
    const button = document.createElement("button");
    button.className = "topic-card";
    button.dataset.topic = key;
    const score = progress.topics[key];
    button.innerHTML = `${score !== undefined ? `<span class="topic-score">Bedst ${score}%</span>` : ""}<span class="topic-number">0${i+1}</span><h3>${topic.name}</h3><p>${topic.blurb}</p>`;
    grid.append(button);
  });
  app.focus();
}

function showWritingHub(){
  clearTimer();
  state.mode="writing";
  const completeCount=progress.writingCompleted.length;
  app.innerHTML=`<section class="writing-hub">
    <div class="game-header">
      <button class="icon-button" data-action="home" aria-label="Gå tilbage til forsiden">←</button>
      <div class="game-heading"><p>Danskuddannelse 3 · Modul 3-4</p><h2>Skrivetræning</h2></div>
      <span class="game-counter">${completeCount} / ${WRITING_TASKS.length} færdige</span>
    </div>
    <h1 class="prompt">Skriv dansk i virkelige situationer.</h1>
    <p class="writing-lead">Vælg en opgave, skriv dit svar under tid, og brug tjeklisten, før du ser et eksempel.</p>
    <div class="writing-task-grid">
      ${WRITING_TASKS.map(task=>`<button class="writing-task-card" data-writing-task="${task.id}">
        <span class="writing-task-top"><span class="writing-kind">${task.icon} ${escapeHtml(task.kind)}</span>${progress.writingCompleted.includes(task.id) ? '<span class="writing-done">✓ Færdig</span>' : ""}</span>
        <h3>${escapeHtml(task.title)}</h3>
        <p>${escapeHtml(task.situation)}</p>
        <span class="task-facts"><span>◷ ${task.time} min.</span><span>✎ mindst ${task.minWords} ord</span></span>
      </button>`).join("")}
    </div>
  </section>`;
  app.focus();
}

function startWritingTask(id){
  clearTimer();
  const task=WRITING_TASKS.find(item=>item.id===id);
  if(!task) return showWritingHub();
  Object.assign(state,{mode:"writing",writingTask:task,writingSeconds:task.time*60,writingRunning:false});
  const draft=writingDrafts[task.id] || "";
  app.innerHTML=`<section class="writing-workspace">
    <div class="task-nav">
      <button class="icon-button" data-action="writing-home" aria-label="Tilbage til skriveopgaver">←</button>
      <div class="game-heading"><p>${escapeHtml(task.kind)}</p><h2>${escapeHtml(task.title)}</h2></div>
    </div>
    <div class="writing-columns">
      <aside class="brief-panel">
        <span class="writing-kind">${task.icon} Opgave</span>
        <h1>${escapeHtml(task.title)}</h1>
        <p class="brief-copy">${escapeHtml(task.situation)}</p>
        ${task.source ? `<div class="source-message"><strong>Teksten, du skal svare på:</strong>${escapeHtml(task.source)}</div>` : ""}
        <p class="kicker">Du skal fortælle:</p>
        <ul class="requirement-list">${task.requirements.map(item=>`<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </aside>
      <section class="editor-panel" aria-label="Skrivefelt">
        <div class="editor-toolbar">
          <div class="timer-box"><span aria-hidden="true">◷</span><span class="timer-value" id="writerTimer">${formatTime(state.writingSeconds)}</span><button class="tiny-button" data-action="toggle-writing-timer">Start</button><button class="tiny-button" data-action="reset-writing-timer">Nulstil</button></div>
          <span class="word-count" id="wordCount">0 / ${task.minWords} ord</span>
        </div>
        <label class="sr-live" for="writingPad">Skriv dit svar på dansk</label>
        <textarea class="writing-pad" id="writingPad" placeholder="Skriv dit svar her ...">${escapeHtml(draft)}</textarea>
        <p class="draft-note" id="draftNote">${draft ? "Dit tidligere udkast er hentet." : "Dit udkast gemmes automatisk på denne enhed."}</p>
        <div class="writer-tools">
          <details>
            <summary>💡 Nyttige sætninger</summary>
            <div class="detail-content phrase-chips">${task.phrases.map(phrase=>`<button class="phrase-chip" data-phrase="${escapeHtml(phrase)}">${escapeHtml(phrase)}</button>`).join("")}</div>
          </details>
          <details>
            <summary>✓ Tjek din tekst</summary>
            <div class="detail-content check-grid">
              ${task.requirements.map((item,i)=>`<label class="check-label"><input type="checkbox" data-self-check="requirement-${i}"><span>${escapeHtml(item)}</span></label>`).join("")}
              <label class="check-label"><input type="checkbox" data-self-check="opening"><span>Jeg har en passende indledning og afslutning.</span></label>
              <label class="check-label"><input type="checkbox" data-self-check="grammar"><span>Jeg har kontrolleret verber, ordstilling og punktummer.</span></label>
            </div>
          </details>
          <details id="modelDetails">
            <summary>👀 Se et eksempel på et svar</summary>
            <div class="detail-content model-answer">${escapeHtml(task.model)}</div>
          </details>
          <div class="writer-actions">
            <button class="secondary-button" data-action="new-writing-task">Vælg en anden opgave</button>
            <button class="primary-button" data-action="complete-writing">Vurder min tekst</button>
          </div>
          <div id="writerResult" aria-live="polite"></div>
        </div>
      </section>
    </div>
  </section>`;
  updateWordCount();
  app.focus();
}

function countWords(text){
  const cleaned=text.trim();
  return cleaned ? cleaned.split(/\s+/).length : 0;
}
function formatTime(seconds){
  const minutes=Math.floor(seconds/60);
  return `${String(minutes).padStart(2,"0")}:${String(seconds%60).padStart(2,"0")}`;
}
function updateWordCount(){
  const pad=document.querySelector("#writingPad");
  const display=document.querySelector("#wordCount");
  if(!pad || !display || !state.writingTask) return;
  const words=countWords(pad.value);
  display.textContent=`${words} / ${state.writingTask.minWords} ord`;
  display.classList.toggle("met",words>=state.writingTask.minWords);
}
function saveWritingDraft(){
  const pad=document.querySelector("#writingPad");
  if(!pad || !state.writingTask) return;
  writingDrafts[state.writingTask.id]=pad.value;
  localStorage.setItem("ordvaerk-writing-drafts",JSON.stringify(writingDrafts));
  const note=document.querySelector("#draftNote");
  if(note) note.textContent="Udkast gemt.";
}
function updateWritingTimer(){
  const display=document.querySelector("#writerTimer");
  if(display) display.textContent=state.writingSeconds<=0 ? "Tiden er gået" : formatTime(state.writingSeconds);
}
function toggleWritingTimer(){
  if(state.writingRunning){
    clearInterval(state.writingTimer); state.writingTimer=null; state.writingRunning=false;
  } else {
    if(state.writingSeconds<=0) state.writingSeconds=state.writingTask.time*60;
    state.writingRunning=true;
    state.writingTimer=setInterval(()=>{
      state.writingSeconds--;
      updateWritingTimer();
      if(state.writingSeconds<=0){
        clearInterval(state.writingTimer); state.writingTimer=null; state.writingRunning=false;
        const button=document.querySelector('[data-action="toggle-writing-timer"]');
        if(button) button.textContent="Start igen";
      }
    },1000);
  }
  const button=document.querySelector('[data-action="toggle-writing-timer"]');
  if(button) button.textContent=state.writingRunning ? "Pause" : "Start";
}
function resetWritingTimer(){
  if(state.writingTimer) clearInterval(state.writingTimer);
  state.writingTimer=null; state.writingRunning=false; state.writingSeconds=state.writingTask.time*60;
  updateWritingTimer();
  const button=document.querySelector('[data-action="toggle-writing-timer"]');
  if(button) button.textContent="Start";
}
function completeWritingTask(){
  const task=state.writingTask;
  const pad=document.querySelector("#writingPad");
  const result=document.querySelector("#writerResult");
  if(!task || !pad || !result) return;
  const words=countWords(pad.value);
  const checks=[...document.querySelectorAll("[data-self-check]")];
  const checked=checks.filter(box=>box.checked).length;
  const enoughWords=words>=task.minWords;
  const allChecked=checked===checks.length;
  if(enoughWords && allChecked){
    if(!progress.writingCompleted.includes(task.id)){
      progress.writingCompleted.push(task.id); progress.points+=25; save();
    }
    result.innerHTML=`<div class="writer-result"><strong>Flot arbejde!</strong><div>Du har skrevet ${words} ord og gennemgået hele tjeklisten. Opgaven er markeret som færdig, og du har fået 25 point.</div></div>`;
  } else {
    const missing=[];
    if(!enoughWords) missing.push(`skriv mindst ${task.minWords-words} ord mere`);
    if(!allChecked) missing.push(`gennemgå ${checks.length-checked} punkt${checks.length-checked===1 ? "" : "er"} på tjeklisten`);
    result.innerHTML=`<div class="feedback"><strong>Næsten færdig</strong><div>Før du afslutter: ${missing.join(" og ")}.</div></div>`;
  }
}

function startQuiz(mode, topic=null){
  Object.assign(state,{mode,topic,quizSet:null,index:0,correct:0,answered:false,streak:0,bestRun:0,timeLeft:60,buildAnswer:[]});
  if(mode === "build") state.questions = shuffle(BUILD_QUESTIONS);
  else {
    if(topic && mode !== "sprint"){
      state.quizSet=nextQuizSet(topic);
      state.questions=shuffle(questionsForSet(topic,state.quizSet));
    } else {
      const pool=topic ? QUESTION_BANK.filter(q=>q.topic===topic) : QUESTION_BANK;
      state.questions=mode === "sprint" ? shuffle(pool) : shuffle(pool).slice(0,10);
    }
  }
  renderQuestion();
  if(mode === "sprint") startTimer();
}

function gameTitle(){
  if(state.mode === "build") return "Byg sætningen";
  if(state.mode === "sprint") return "60 sekunders sprint";
  if(state.topic) return `${TOPICS[state.topic].name}${state.quizSet ? ` · Quiz ${state.quizSet} af 5` : ""}`;
  return "Blandet quiz";
}

function renderQuestion(){
  const q = state.questions[state.index];
  if(!q) return finishGame();
  const isSprint = state.mode === "sprint";
  const total = state.mode === "sprint" ? "∞" : state.questions.length;
  const progressWidth = isSprint ? (state.timeLeft/60*100) : ((state.index)/state.questions.length*100);
  app.innerHTML = `<section class="game-view">
    <div class="game-header">
      <button class="icon-button" data-action="home" aria-label="Afslut og gå tilbage">←</button>
      <div class="game-heading"><p>${isSprint ? "Tid tilbage" : "Træning"}</p><h2>${gameTitle()}</h2></div>
      <span class="game-counter" id="gameCounter">${isSprint ? state.timeLeft + " sek." : `${state.index+1} / ${total}`}</span>
    </div>
    <div class="progress-track ${isSprint ? "timer-track" : ""}"><div class="progress-bar" id="progressBar" style="width:${progressWidth}%"></div></div>
    <article class="question-card">
      <div class="question-meta"><span class="tag">${TOPICS[q.topic].name}</span><span class="streak">${state.streak ? `⚡ ${state.streak} i træk` : ""}</span></div>
      ${state.mode === "build" ? buildMarkup(q) : choiceMarkup(q)}
      <div class="sr-live" aria-live="polite" id="liveRegion"></div>
    </article>
  </section>`;
  app.focus();
}

function choiceMarkup(q){
  return `<h1 class="prompt">${escapeHtml(q.q)}<span class="hint">Vælg det rigtige svar.</span></h1>
  <div class="options">${q.options.map((o,i)=>`<button class="option" data-option="${escapeHtml(o)}"><span>${String.fromCharCode(65+i)}.</span> ${escapeHtml(o)}</button>`).join("")}</div>`;
}

function buildMarkup(q){
  state.buildAnswer = [];
  state.availableWords = shuffle(q.words.map((word,i)=>({word,id:i})));
  return `<h1 class="prompt">${escapeHtml(q.prompt)}<span class="hint">Tryk på ordene i den rigtige rækkefølge.</span></h1>
  <div class="answer-zone" id="answerZone" aria-label="Din sætning"></div>
  <div class="word-bank" id="wordBank" aria-label="Ord du kan vælge"></div>
  <div class="build-actions"><button class="secondary-button" data-action="reset-build" disabled>Start forfra</button><button class="primary-button" data-action="check-build" disabled>Tjek svar</button></div>`;
}

function renderWordBanks(){
  const bank = document.querySelector("#wordBank");
  const zone = document.querySelector("#answerZone");
  if(!bank || !zone) return;
  bank.innerHTML = state.availableWords.map(item=>`<button class="word-token" data-word-id="${item.id}">${escapeHtml(item.word)}</button>`).join("");
  zone.innerHTML = state.buildAnswer.map(item=>`<button class="word-token" data-answer-id="${item.id}">${escapeHtml(item.word)}</button>`).join("");
  document.querySelector('[data-action="reset-build"]').disabled = !state.buildAnswer.length;
  document.querySelector('[data-action="check-build"]').disabled = !state.buildAnswer.length;
}

function answerChoice(selected, button){
  if(state.answered) return;
  state.answered = true;
  const q = state.questions[state.index];
  const correct = selected === q.answer;
  document.querySelectorAll(".option").forEach(btn => {
    btn.disabled = true;
    if(btn.dataset.option === q.answer) btn.classList.add("correct");
  });
  if(!correct) button.classList.add("wrong");
  recordAnswer(correct, q.topic);
  showFeedback(correct,q);
  if(state.mode === "sprint") state.nextTimer=setTimeout(nextQuestion, correct ? 650 : 1050);
}

function checkBuild(){
  if(state.answered) return;
  state.answered = true;
  const q = state.questions[state.index];
  const response = state.buildAnswer.map(x=>x.word).join(" ");
  const correct = response === q.answer;
  document.querySelectorAll(".word-token").forEach(b=>b.disabled=true);
  document.querySelectorAll(".build-actions button").forEach(b=>b.disabled=true);
  recordAnswer(correct,q.topic);
  showFeedback(correct,q, correct ? null : `Rigtigt svar: ${q.answer}.`);
}

function recordAnswer(correct, topic){
  if(correct){ state.correct++; state.streak++; state.bestRun=Math.max(state.bestRun,state.streak); progress.points += state.mode === "sprint" ? 5 : 10; progress.daily++; }
  else state.streak=0;
  progress.bestStreak=Math.max(progress.bestStreak,state.bestRun);
  save();
  document.querySelector("#liveRegion").textContent = correct ? "Rigtigt svar" : "Forkert svar";
}

function showFeedback(correct,q,extra=""){
  const box=document.createElement("div");
  box.className=`feedback ${correct ? "good" : ""}`;
  box.innerHTML=`<strong>${correct ? "Rigtigt!" : "Ikke helt."}</strong>${extra ? `<div>${escapeHtml(extra)}</div>` : ""}<div>${escapeHtml(q.explain)}</div>${state.mode !== "sprint" ? `<button class="next-button" data-action="next">${state.index === state.questions.length-1 ? "Se resultat" : "Næste spørgsmål"} →</button>` : ""}`;
  document.querySelector(".question-card").append(box);
  box.querySelector("button")?.focus();
}

function nextQuestion(){ state.index++; state.answered=false; state.buildAnswer=[]; renderQuestion(); if(state.mode === "build") renderWordBanks(); }

function finishGame(){
  clearTimer();
  const attempts = state.mode === "sprint" ? state.index : state.questions.length;
  const percentage = attempts ? Math.round(state.correct/attempts*100) : 0;
  if(state.topic) progress.topics[state.topic]=Math.max(progress.topics[state.topic] || 0,percentage);
  save();
  const heading = percentage >= 80 ? "Stærkt arbejde!" : percentage >= 50 ? "Godt på vej!" : "Øvelse gør mester";
  app.innerHTML=`<section class="game-view"><div class="result-card">
    <div class="result-badge">${percentage}%</div>
    <p class="kicker">Træningen er færdig</p><h2>${heading}</h2>
    <p>${state.mode === "sprint" ? `Du nåede ${attempts} spørgsmål på ét minut.` : "Du har trænet reglerne og fået en forklaring efter hvert svar."}</p>
    <div class="result-stats">
      <div class="result-stat"><strong>${state.correct}/${attempts}</strong><span>rigtige svar</span></div>
      <div class="result-stat"><strong>${state.bestRun}</strong><span>bedste serie</span></div>
      <div class="result-stat"><strong>+${state.correct*(state.mode === "sprint" ? 5 : 10)}</strong><span>point</span></div>
    </div>
    <div class="result-actions"><button class="secondary-button" data-action="home">Til forsiden</button><button class="primary-button" data-action="again">Prøv igen</button></div>
  </div></section>`;
  app.focus();
}

function startTimer(){
  clearTimer();
  state.timer=setInterval(()=>{
    state.timeLeft--;
    const counter=document.querySelector("#gameCounter");
    const bar=document.querySelector("#progressBar");
    if(counter) counter.textContent=`${state.timeLeft} sek.`;
    if(bar) bar.style.width=`${state.timeLeft/60*100}%`;
    if(state.timeLeft<=0) finishGame();
  },1000);
}
function clearTimer(){
  if(state.timer){ clearInterval(state.timer); state.timer=null; }
  if(state.nextTimer){ clearTimeout(state.nextTimer); state.nextTimer=null; }
  if(state.writingTimer){ clearInterval(state.writingTimer); state.writingTimer=null; state.writingRunning=false; }
}

document.addEventListener("click", event => {
  const home=event.target.closest('[data-action="home"]'); if(home){ showHome(); return; }
  const mode=event.target.closest("[data-mode]"); if(mode){ if(mode.dataset.mode==="writing") showWritingHub(); else { startQuiz(mode.dataset.mode); if(mode.dataset.mode === "build") renderWordBanks(); } return; }
  const writingTask=event.target.closest("[data-writing-task]"); if(writingTask){ startWritingTask(writingTask.dataset.writingTask); return; }
  if(event.target.closest('[data-action="writing-home"]') || event.target.closest('[data-action="new-writing-task"]')){ showWritingHub(); return; }
  if(event.target.closest('[data-action="toggle-writing-timer"]')){ toggleWritingTimer(); return; }
  if(event.target.closest('[data-action="reset-writing-timer"]')){ resetWritingTimer(); return; }
  if(event.target.closest('[data-action="complete-writing"]')){ completeWritingTask(); return; }
  const phrase=event.target.closest("[data-phrase]"); if(phrase){
    const pad=document.querySelector("#writingPad");
    if(pad){
      const addition=(pad.value && !/\s$/.test(pad.value) ? " " : "")+phrase.dataset.phrase+" ";
      pad.setRangeText(addition,pad.selectionStart,pad.selectionEnd,"end");
      pad.dispatchEvent(new Event("input",{bubbles:true}));
      pad.focus();
    }
    return;
  }
  const topic=event.target.closest("[data-topic]"); if(topic){ startQuiz("topic",topic.dataset.topic); return; }
  const option=event.target.closest("[data-option]"); if(option){ answerChoice(option.dataset.option,option); return; }
  const next=event.target.closest('[data-action="next"]'); if(next){ nextQuestion(); return; }
  const again=event.target.closest('[data-action="again"]'); if(again){ const {mode,topic}=state; startQuiz(mode,topic); if(mode==="build") renderWordBanks(); return; }
  const word=event.target.closest("[data-word-id]"); if(word && !state.answered){ const id=Number(word.dataset.wordId); const idx=state.availableWords.findIndex(x=>x.id===id); state.buildAnswer.push(state.availableWords.splice(idx,1)[0]); renderWordBanks(); return; }
  const answerWord=event.target.closest("[data-answer-id]"); if(answerWord && !state.answered){ const id=Number(answerWord.dataset.answerId); const idx=state.buildAnswer.findIndex(x=>x.id===id); state.availableWords.push(state.buildAnswer.splice(idx,1)[0]); renderWordBanks(); return; }
  if(event.target.closest('[data-action="reset-build"]')){ state.availableWords.push(...state.buildAnswer); state.buildAnswer=[]; renderWordBanks(); return; }
  if(event.target.closest('[data-action="check-build"]')){ checkBuild(); }
});

document.addEventListener("input",event=>{
  if(event.target.id==="writingPad"){ updateWordCount(); saveWritingDraft(); }
});

normalizeDaily(); updateTopStats(); showHome();
