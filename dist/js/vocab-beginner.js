/* "Learn new words", Beginner (A1).
   One word per line:  type|Danish word|English meaning|Danish example sentence
   type: n = noun, v = verb, a = adjective, x = other (adverbs, question words, small words).
   Wrong options are taken from words of the same type and level. */
(function (root) {
  "use strict";
  root.VOCAB_DATA = root.VOCAB_DATA || {};
  root.VOCAB_DATA.beginner = `
n|en mor|mother|Min mor hedder Anna.
n|en far|father|Min far arbejder på et hospital.
n|en bror|brother|Min bror bor i Aarhus.
n|en søster|sister|Hans søster er ti år gammel.
n|et barn|child|Vi har et barn på fem år.
n|en søn|son|Deres søn går i første klasse.
n|en datter|daughter|Min datter er seks år.
n|en mand|man|Manden ved bussen er min lærer.
n|en kvinde|woman|Kvinden i butikken er meget sød.
n|en dreng|boy|Drengen spiller fodbold i parken.
n|en pige|girl|Pigen har en rød cykel.
n|en ven|friend|Jeg skal i biografen med en ven.
n|en familie|family|Min familie bor i Polen.
n|en kone|wife|Hans kone er læge.
n|en bedstemor|grandmother|Min bedstemor bager gode boller.
n|en bedstefar|grandfather|Bedstefar læser avisen hver morgen.
n|forældre|parents|Mine forældre kommer på besøg i weekenden.
n|en onkel|uncle|Min onkel kommer fra Tyskland.
n|en tante|aunt|Min tante har tre katte.
n|en kæreste|boyfriend or girlfriend|Hun har en ny kæreste.
n|en nabo|neighbour|Vores nabo har en stor hund.
n|et hoved|head|Jeg har ondt i hovedet.
n|et ben|leg|Han har brækket sit ben.
n|en hånd|hand|Giv mig din hånd.
n|en fod|foot|Min venstre fod gør ondt.
n|et øje|eye|Hun har blå øjne.
n|et øre|ear|Jeg har ondt i øret.
n|en næse|nose|Barnet har en rød næse.
n|en mund|mouth|Man må ikke tale med mad i munden.
n|en tand|tooth|Jeg skal til tandlæge, fordi en tand gør ondt.
n|en mave|stomach|Jeg har ondt i maven.
n|en ryg|back|Han har ondt i ryggen efter arbejdet.
n|et hår|hair|Hun har langt, mørkt hår.
n|en hals|throat|Jeg har ondt i halsen og hoster.
n|et hjerte|heart|Hans hjerte slår hurtigt.
n|et brød|bread|Vi køber brød hos bageren.
n|et æble|apple|Jeg spiser et æble hver dag.
n|en appelsin|orange|Hun presser en appelsin til juice.
n|en ost|cheese|Jeg vil gerne have ost på mit brød.
n|smør|butter|Der er smør i køleskabet.
n|mælk|milk|Barnet drikker mælk til morgenmad.
n|vand|water|Må jeg få et glas vand?
n|kød|meat|Vi spiser ikke kød om mandagen.
n|en fisk|fish|Vi spiser fisk om fredagen.
n|en kylling|chicken|Vi skal have kylling til aftensmad.
n|et æg|egg|Jeg spiser et kogt æg til morgenmad.
n|en kartoffel|potato|Danskere spiser mange kartofler.
n|en gulerod|carrot|Kaninen spiser en gulerod.
n|ris|rice|Vi spiser ris med karry.
n|en kage|cake|Mormor har bagt en kage.
n|sukker|sugar|Vil du have sukker i kaffen?
n|morgenmad|breakfast|Jeg spiser morgenmad klokken syv.
n|frokost|lunch|Vi spiser frokost i kantinen.
n|aftensmad|dinner|Hvad skal vi have til aftensmad?
n|en grøntsag|vegetable|Børn skal spise mange grøntsager.
n|frugt|fruit|Der står en skål med frugt på bordet.
n|en øl|beer|Han drikker en øl efter arbejdet.
n|vin|wine|Vil du have et glas vin?
n|en kop|cup|Jeg drikker en kop kaffe.
n|en tallerken|plate|Læg kagen på en tallerken.
n|en kniv|knife|Jeg skærer brødet med en kniv.
n|en gaffel|fork|Han spiser med kniv og gaffel.
n|en ske|spoon|Jeg spiser suppe med en ske.
n|en flaske|bottle|Han køber en flaske vand.
n|et måltid|meal|Morgenmad er dagens vigtigste måltid.
n|slik|sweets|Børnene får slik om lørdagen.
n|is|ice cream|Om sommeren spiser vi is på stranden.
n|en pølse|sausage|Vi køber en pølse ved pølsevognen.
n|et løg|onion|Hun skærer et løg til suppen.
n|en citron|lemon|Jeg kommer citron i teen.
n|et jordbær|strawberry|Danske jordbær er søde i juni.
n|en bolle|bun|Vi spiser boller med smør om søndagen.
n|syltetøj|jam|Jeg kan lide syltetøj på brødet.
n|et hus|house|Vi bor i et gult hus.
n|en lejlighed|flat|Min lejlighed har tre værelser.
n|et værelse|room|Mit værelse er lille, men hyggeligt.
n|en stue|living room|Vi sidder i stuen og snakker.
n|et køkken|kitchen|Far laver mad i køkkenet.
n|et soveværelse|bedroom|Soveværelset ligger på første sal.
n|et badeværelse|bathroom|Badeværelset er ved siden af køkkenet.
n|en dør|door|Kan du lukke døren?
n|et vindue|window|Åbn vinduet, det er varmt.
n|et bord|table|Bøgerne ligger på bordet.
n|en stol|chair|Der står fire stole ved bordet.
n|en seng|bed|Jeg går i seng klokken elleve.
n|et køleskab|fridge|Mælken står i køleskabet.
n|en have|garden|Vi har en stor have med æbletræer.
n|en nøgle|key|Jeg kan ikke finde min nøgle.
n|en trappe|stairs|Han går op ad trappen.
n|et gulv|floor|Bogen ligger på gulvet.
n|en væg|wall|Der hænger et billede på væggen.
n|et tag|roof|Taget på huset er rødt.
n|et skab|cupboard|Tallerknerne står i skabet.
n|et spejl|mirror|Hun ser sig i spejlet.
n|et billede|picture|Hun tager et billede af huset.
n|et tæppe|blanket|Jeg har et varmt tæppe på sofaen.
n|en pude|pillow|Jeg sover med to puder.
n|et fjernsyn|television|Vi ser fjernsyn om aftenen.
n|en vask|sink|Der står beskidte kopper i vasken.
n|et bad|bath|Jeg tager et bad hver morgen.
n|en by|town|Jeg bor i en lille by.
n|en gade|street|Hvad hedder din gade?
n|en vej|road|Vejen til skolen er lang.
n|en butik|shop|Butikken lukker klokken seks.
n|en skole|school|Børnene går i skole hver dag.
n|en kirke|church|Kirken er meget gammel.
n|et bibliotek|library|Jeg låner bøger på biblioteket.
n|en bager|baker|Bageren står op klokken fire.
n|et apotek|pharmacy|Du kan købe medicin på apoteket.
n|en læge|doctor|Jeg skal til læge i morgen.
n|en tandlæge|dentist|Tandlægen siger, at mine tænder er fine.
n|en strand|beach|Vi bader ved stranden om sommeren.
n|en skov|forest|Vi går tur i skoven.
n|en sø|lake|Der svømmer ænder på søen.
n|et hav|sea|Havet er koldt i maj.
n|et land|country|Hvilket land kommer du fra?
n|en bro|bridge|Vi cykler over broen.
n|en lufthavn|airport|Flyet lander i lufthavnen klokken ti.
n|et kontor|office|Hun arbejder på et kontor.
n|en fabrik|factory|Min far arbejder på en fabrik.
n|en gård|farm|Der er køer og grise på gården.
n|en bil|car|Vi har en ny bil.
n|en cykel|bike|Min cykel er blå.
n|et tog|train|Toget til Odense er forsinket.
n|et fly|plane|Flyet til Rom letter klokken ni.
n|en båd|boat|Vi sejler i en lille båd.
n|en billet|ticket|Har du købt en billet?
n|et stoppested|bus stop|Vi venter på stoppestedet.
n|en kuffert|suitcase|Min kuffert er meget tung.
n|en dag|day|Hvilken dag har du fri?
n|en uge|week|Jeg arbejder fem dage om ugen.
n|en måned|month|Januar er årets første måned.
n|et år|year|Jeg har boet i Danmark i to år.
n|en time|hour|Filmen varer to timer.
n|et øjeblik|moment|Vent et øjeblik, tak.
n|tid|time|Jeg har ikke tid i dag.
n|en morgen|morning|Jeg drikker te hver morgen.
n|en aften|evening|Vi spiser sammen om aftenen.
n|en nat|night|Babyen sover hele natten.
n|en eftermiddag|afternoon|Jeg henter børnene om eftermiddagen.
n|en fødselsdag|birthday|I dag er det min fødselsdag.
n|en ferie|holiday|Vi tager på ferie i juli.
n|et forår|spring|Om foråret bliver det lyst om aftenen.
n|et efterår|autumn|Om efteråret falder bladene af træerne.
n|jul|Christmas|Vi holder jul hos mine forældre.
n|et ur|watch|Mit ur går fem minutter for langt.
n|vejr|weather|Hvordan er vejret i dag?
n|en sol|sun|Solen skinner i dag.
n|regn|rain|Der kommer meget regn i oktober.
n|sne|snow|Børnene leger i sneen.
n|en sky|cloud|Der er ingen skyer i dag.
n|en himmel|sky|Der er mange stjerner på himlen i nat.
n|et træ|tree|Der står et stort træ i haven.
n|en blomst|flower|Hun giver mig en blomst.
n|et blad|leaf|Bladene bliver gule om efteråret.
n|græs|grass|Græsset er vådt efter regnen.
n|en ø|island|Bornholm er en ø i Østersøen.
n|et dyr|animal|Hvilket dyr kan du bedst lide?
n|en hund|dog|Vores hund hedder Bobby.
n|en kat|cat|Katten sover på sofaen.
n|en hest|horse|Pigen rider på en hest.
n|en ko|cow|Koen står på marken.
n|en gris|pig|Grisen ligger i mudderet.
n|en fugl|bird|En fugl synger i træet.
n|en mark|field|Bonden arbejder på marken.
n|en jakke|jacket|Tag en varm jakke på.
n|en kjole|dress|Hun har en ny kjole på.
n|en skjorte|shirt|Han stryger sin hvide skjorte.
n|bukser|trousers|Mine bukser er for lange.
n|en sko|shoe|Jeg har købt nye sko.
n|en strømpe|sock|Jeg mangler en strømpe.
n|en hue|woolly hat|Tag hue på, det er koldt.
n|en frakke|coat|Hun hænger frakken op.
n|en nederdel|skirt|Hun går med en lang nederdel.
n|en trøje|sweater|Jeg tager en trøje på, fordi jeg fryser.
n|tøj|clothes|Jeg vasker tøj i weekenden.
n|en taske|bag|Min telefon er i tasken.
n|en paraply|umbrella|Husk din paraply, det regner.
n|briller|glasses|Jeg kan ikke læse uden mine briller.
n|en handske|glove|Jeg har mistet en handske.
n|et tørklæde|scarf|Hun har et rødt tørklæde om halsen.
n|en pung|wallet|Han har penge i sin pung.
n|et arbejde|job|Han har fået et nyt arbejde.
n|en lærer|teacher|Vores lærer hedder Lone.
n|en elev|pupil|Der er tyve elever i klassen.
n|en bog|book|Jeg læser en spændende bog.
n|en avis|newspaper|Han læser avisen ved morgenbordet.
n|et brev|letter|Jeg har fået et brev fra kommunen.
n|en blyant|pencil|Skriv med en blyant.
n|en kuglepen|pen|Må jeg låne din kuglepen?
n|et sprog|language|Hvor mange sprog taler du?
n|et ord|word|Jeg kender ikke det ord.
n|en sætning|sentence|Skriv en sætning med ordet.
n|et spørgsmål|question|Må jeg stille et spørgsmål?
n|et svar|answer|Jeg ved ikke svaret.
n|lektier|homework|Børnene laver lektier efter skole.
n|en chef|boss|Min chef er på ferie.
n|en kollega|colleague|Min kollega hjælper mig med computeren.
n|penge|money|Jeg har ikke penge nok.
n|en pris|price|Hvad er prisen på jakken?
n|en regning|bill|Må vi bede om regningen?
n|et navn|name|Hvad er dit navn?
n|en ting|thing|Jeg skal huske mange ting.
n|en gave|present|Tak for gaven!
n|en fest|party|Vi holder fest på lørdag.
n|en sang|song|Kan du synge en dansk sang?
n|en bold|ball|Drengene spiller med en bold.
n|et spil|game|Skal vi spille et spil kort?
n|en tur|trip|Vi tager en tur til Skagen.
n|en farve|colour|Hvilken farve er din bil?
n|et sted|place|Det er et dejligt sted.
n|en sygeplejerske|nurse|Hun arbejder som sygeplejerske.
n|en kunde|customer|Butikken har mange kunder i dag.
n|et kort|card|Kan jeg betale med kort?
n|et hjem|home|Velkommen til mit hjem.
n|et menneske|human being|Alle mennesker har brug for venner.
n|en pakke|parcel|Jeg har fået en pakke med posten.
v|at være|to be|Jeg er lærer.
v|at have|to have|Vi har to børn.
v|at gå|to walk|Jeg går i skole hver dag.
v|at komme|to come|Hvornår kommer du hjem?
v|at spise|to eat|Vi spiser klokken seks.
v|at drikke|to drink|Han drikker meget vand.
v|at sove|to sleep|Jeg sover otte timer om natten.
v|at bo|to live|Jeg bor i Odense.
v|at arbejde|to work|Hun arbejder på et hotel.
v|at læse|to read|Jeg læser en bog om aftenen.
v|at skrive|to write|Skriv dit navn her.
v|at tale|to speak|Taler du engelsk?
v|at sige|to say|Hvad siger du?
v|at høre|to hear|Jeg hører musik i bilen.
v|at se|to see|Kan du se huset derovre?
v|at lytte|to listen|Lyt godt efter!
v|at kigge|to look|Kig på tavlen.
v|at købe|to buy|Jeg køber mælk i Netto.
v|at sælge|to sell|Han sælger sin gamle bil.
v|at betale|to pay|Hvem betaler regningen?
v|at koste|to cost|Hvad koster brødet?
v|at give|to give|Jeg giver min mor blomster.
v|at tage|to take|Jeg tager bussen til arbejde.
v|at få|to get|Jeg får løn den sidste dag i måneden.
v|at hedde|to be called|Hvad hedder du?
v|at lave|to make|Han laver en kop kaffe til mig.
v|at køre|to drive|Min mor kører bil til arbejde.
v|at cykle|to cycle|Mange danskere cykler på arbejde.
v|at løbe|to run|Han løber en tur hver morgen.
v|at svømme|to swim|Kan du svømme?
v|at danse|to dance|Vi danser hele natten til festen.
v|at synge|to sing|Børnene synger i koret.
v|at spille|to play (a game or an instrument)|Han spiller guitar.
v|at lege|to play (children)|Børnene leger i sandkassen.
v|at åbne|to open|Butikken åbner klokken ni.
v|at lukke|to close|Luk døren, tak.
v|at begynde|to begin|Skolen begynder i august.
v|at slutte|to end|Filmen slutter klokken ti.
v|at vente|to wait|Vi venter på bussen.
v|at hjælpe|to help|Kan du hjælpe mig?
v|at forstå|to understand|Jeg forstår ikke spørgsmålet.
v|at vide|to know (a fact)|Jeg ved ikke, hvor han bor.
v|at kende|to know (a person)|Kender du min bror?
v|at tænke|to think|Jeg tænker på dig.
v|at tro|to believe|Jeg tror, det bliver regnvejr.
v|at huske|to remember|Husk at købe mælk!
v|at glemme|to forget|Jeg har glemt min nøgle.
v|at lære|to learn|Jeg lærer dansk på sprogskolen.
v|at undervise|to teach|Hun underviser i matematik.
v|at studere|to study|Han studerer på universitetet.
v|at bruge|to use|Jeg bruger computeren hver dag.
v|at finde|to find|Jeg kan ikke finde mine briller.
v|at lede efter|to look for|Jeg leder efter min telefon.
v|at miste|to lose (something)|Han har mistet sin pung.
v|at sidde|to sit|Hun sidder ved vinduet.
v|at stå|to stand|Vi står i kø.
v|at ligge|to lie (be lying down)|Katten ligger på sengen.
v|at sætte|to put|Sæt koppen på bordet.
v|at lægge|to lay|Læg bogen på bordet.
v|at vaske|to wash|Jeg vasker bilen om søndagen.
v|at gøre rent|to clean|Vi gør rent hver fredag.
v|at rydde op|to tidy up|Ryd op på dit værelse!
v|at lave mad|to cook|Hvem laver mad i dag?
v|at bage|to bake|Vi bager boller om søndagen.
v|at handle|to shop|Jeg handler ind efter arbejde.
v|at ringe|to call|Jeg ringer til dig i aften.
v|at sende|to send|Jeg sender dig en sms.
v|at besøge|to visit|Vi besøger mormor på søndag.
v|at rejse|to travel|Vi rejser til Spanien i sommer.
v|at flytte|to move (house)|Vi flytter til en ny lejlighed.
v|at bade|to bathe|Vi bader i havet.
v|at stå op|to get up|Jeg står op klokken seks.
v|at gå i seng|to go to bed|Børnene går i seng klokken otte.
v|at vågne|to wake up|Jeg vågner tidligt.
v|at tage på|to put on|Tag jakken på!
v|at elske|to love|Jeg elsker chokolade.
v|at kunne lide|to like|Jeg kan godt lide kaffe.
v|at ønske sig|to wish for|Jeg ønsker mig en cykel.
v|at kunne|to be able to|Kan du komme i morgen?
v|at ville|to want to|Jeg vil gerne have en kop te.
v|at skulle|to have to|Jeg skal på arbejde i morgen.
v|at måtte|to be allowed to|Må jeg låne din telefon?
v|at blive|to become|Det bliver koldt i aften.
v|at hente|to fetch|Jeg henter børnene i børnehaven.
v|at bringe|to bring|Postbudet bringer breve.
v|at bære|to carry|Kan du bære tasken?
v|at falde|to fall|Pas på, du ikke falder!
v|at græde|to cry|Babyen græder.
v|at grine|to laugh|Vi griner af filmen.
v|at smile|to smile|Hun smiler til mig.
v|at spørge|to ask|Må jeg spørge om noget?
v|at svare|to answer|Han svarer ikke på min sms.
v|at fortælle|to tell|Fortæl mig om din dag.
v|at forklare|to explain|Læreren forklarer grammatikken.
v|at øve sig|to practise|Jeg øver mig på at tale dansk.
v|at gentage|to repeat|Kan du gentage spørgsmålet?
v|at stave|to spell|Hvordan staver man til dit navn?
v|at regne|to rain|Det regner i dag.
v|at sne|to snow|Det sner i december.
v|at skinne|to shine|Solen skinner fra en blå himmel.
v|at fryse|to feel cold|Jeg fryser, kan du lukke vinduet?
v|at betyde|to mean|Hvad betyder det ord?
v|at tælle|to count|Barnet kan tælle til ti.
v|at tegne|to draw|Min datter tegner et hus.
v|at male|to paint|Vi maler køkkenet hvidt.
v|at prøve|to try|Må jeg prøve jakken?
v|at bestille|to order|Vi bestiller pizza.
v|at vælge|to choose|Du kan vælge mellem te og kaffe.
v|at møde|to meet|Jeg møder min ven på caféen.
v|at fejre|to celebrate|Vi fejrer hans fødselsdag.
v|at skynde sig|to hurry|Skynd dig, toget kører nu!
v|at gå tur|to go for a walk|Vi går tur med hunden.
v|at hilse|to greet|Hils din mor fra mig.
v|at have brug for|to need|Jeg har brug for hjælp.
v|at mangle|to lack|Vi mangler mælk.
v|at passe|to look after|Bedstemor passer børnene.
v|at tjene|to earn|Hun tjener godt.
v|at gifte sig|to get married|De gifter sig til sommer.
v|at låne|to borrow|Må jeg låne din cykel?
v|at vinde|to win|Hvem vinder kampen?
v|at stige på|to get on|Vi stiger på bussen ved stationen.
v|at stå af|to get off|Jeg står af ved næste stop.
v|at flyve|to fly|Vi flyver til London i morgen.
v|at tænde|to switch on|Tænd lyset, det er mørkt.
v|at slukke|to switch off|Husk at slukke fjernsynet.
v|at smage|to taste|Suppen smager godt.
v|at lugte|to smell|Det lugter af kaffe i køkkenet.
v|at føle sig|to feel|Jeg føler mig træt i dag.
v|at gøre ondt|to hurt|Min hals gør ondt.
v|at skifte|to change|Jeg skifter tog i Fredericia.
v|at vise|to show|Kan du vise mig vejen?
v|at ligne|to look like|Du ligner din far.
v|at bestemme|to decide|Du bestemmer, hvor vi skal spise.
a|stor|big|Hun bor i et stort hus.
a|lille|small|Han bor i en lille lejlighed.
a|ny|new|Jeg har købt en ny telefon.
a|gammel|old|Huset er meget gammelt.
a|ung|young|Hun er ung, kun tyve år.
a|god|good|Det er en god film.
a|dårlig|bad|Jeg har en dårlig dag.
a|varm|warm|Kaffen er varm.
a|kold|cold|Vandet i søen er koldt.
a|lang|long|Det har været en lang dag.
a|kort|short|Mødet er heldigvis kort.
a|høj|tall|Min bror er meget høj.
a|lav|low|Bordet er for lavt.
a|tung|heavy|Tasken med bøger er meget tung.
a|let|light (not heavy)|Min nye cykel er meget let.
a|nem|easy|Opgaven er nem.
a|svær|difficult|Dansk udtale er svær.
a|glad|happy|Hun er glad i dag.
a|ked af det|sad|Han er ked af det, fordi hans hund er syg.
a|træt|tired|Jeg er træt efter arbejdet.
a|syg|ill|Jeg er syg og bliver hjemme.
a|rask|well (not ill)|Er du rask igen?
a|sulten|hungry|Jeg er sulten, hvornår skal vi spise?
a|tørstig|thirsty|Barnet er tørstigt.
a|smuk|beautiful|Det er en smuk solnedgang.
a|grim|ugly|Den jakke er grim.
a|sød|sweet|Kagen er meget sød.
a|sur|sour|Citronen er sur.
a|billig|cheap|Brødet er billigt i dag.
a|dyr|expensive|Bilen er for dyr.
a|hurtig|fast|Toget er hurtigt.
a|langsom|slow|Bussen er langsom.
a|ren|clean|Køkkenet er rent.
a|beskidt|dirty|Mine sko er beskidte.
a|fuld|full|Bussen er fuld.
a|tom|empty|Køleskabet er tomt.
a|åben|open|Butikken er åben til ti.
a|lukket|closed|Banken er lukket om søndagen.
a|rød|red|Æblet er rødt.
a|blå|blue|Jeg har blå bukser på.
a|grøn|green|Græsset er grønt.
a|gul|yellow|Bananen er gul.
a|hvid|white|Sneen er hvid.
a|sort|black|Katten er sort.
a|brun|brown|Han har brune øjne.
a|grå|grey|Himlen er grå i dag.
a|lyserød|pink|Pigen har en lyserød kjole.
a|venlig|kind|Sygeplejersken er meget venlig.
a|sjov|funny|Filmen er rigtig sjov.
a|kedelig|boring|Programmet er kedeligt.
a|dejlig|lovely|Sikke et dejligt vejr!
a|rigtig|correct|Det er det rigtige svar.
a|forkert|wrong|Det svar er forkert.
a|tynd|thin|Han er høj og tynd.
a|stærk|strong|Han er meget stærk.
a|svag|weak|Hun føler sig svag efter sygdommen.
a|vigtig|important|Det er vigtigt at sove godt.
a|travl|busy|Jeg har travlt i dag.
a|stille|quiet|Det er stille i biblioteket.
a|mørk|dark|Om vinteren er det mørkt klokken fire.
a|lys|bright|Værelset er stort og lyst.
a|våd|wet|Mit tøj er vådt efter regnen.
a|tør|dry|Er tøjet tørt?
a|blød|soft|Puden er blød.
a|hård|hard|Brødet er hårdt.
a|frisk|fresh|Vi køber frisk fisk på havnen.
a|lækker|delicious|Maden er lækker.
a|flink|nice|Han er en flink fyr.
a|sikker|sure|Er du sikker?
a|klar|ready|Maden er klar.
a|fri|off (not working)|Jeg har fri i morgen.
a|gratis|free of charge|Kaffen er gratis.
a|næste|next|Vi ses næste uge.
a|sidste|last|Sidste år var jeg i Paris.
a|første|first|Det er min første dag på arbejdet.
a|mange|many|Der er mange mennesker i byen.
a|hel|whole|Jeg har spist en hel pizza.
a|halv|half|Jeg venter en halv time.
a|anden|other|Har du den i en anden farve?
a|samme|same|Vi går i samme klasse.
a|forskellig|different|Vi er meget forskellige.
a|bange|afraid|Barnet er bange for hunde.
a|vred|angry|Far er vred, fordi jeg kommer for sent.
a|rolig|calm|Tag det roligt.
a|gift|married|Er du gift?
a|alene|alone|Jeg bor alene.
x|i dag|today|I dag skinner solen.
x|i morgen|tomorrow|Vi ses i morgen.
x|i går|yesterday|I går var jeg i biografen.
x|nu|now|Jeg har ikke tid nu.
x|altid|always|Han kommer altid for sent.
x|aldrig|never|Jeg drikker aldrig kaffe om aftenen.
x|ofte|often|Vi spiser ofte fisk.
x|nogle gange|sometimes|Nogle gange cykler jeg på arbejde.
x|her|here|Jeg bor her.
x|der|there|Bogen ligger der.
x|hjemme|at home|Er din mor hjemme?
x|ude|outside|Børnene er ude at lege.
x|også|also|Jeg taler også engelsk.
x|ikke|not|Jeg ryger ikke.
x|meget|very|Det er meget koldt.
x|lidt|a little|Jeg taler lidt dansk.
x|gerne|gladly|Jeg hjælper gerne.
x|måske|maybe|Måske kommer han i morgen.
x|snart|soon|Vi ses snart!
x|stadig|still|Han sover stadig.
x|allerede|already|Jeg har allerede spist.
x|lige nu|right now|Jeg har travlt lige nu.
x|bagefter|afterwards|Vi spiser, og bagefter går vi en tur.
x|sammen|together|Vi laver lektier sammen.
x|langt væk|far away|Bor du langt væk?
x|tæt på|close to|Skolen ligger tæt på vores hus.
x|derfor|therefore|Det regner, derfor tager vi bilen.
x|hvorfor|why|Hvorfor kommer du for sent?
x|hvor|where|Hvor bor du?
x|hvornår|when|Hvornår går toget?
x|hvem|who|Hvem er det?
x|hvad|what|Hvad laver du?
x|hvordan|how|Hvordan har du det?
x|hvilken|which|Hvilken bus skal jeg tage?
x|hvor mange|how many|Hvor mange børn har du?
x|tak|thank you|Tak for maden!
x|undskyld|sorry|Undskyld, jeg kommer for sent.
x|farvel|goodbye|Farvel og tak for i dag.
x|godmorgen|good morning|Godmorgen, har du sovet godt?
x|og|and|Jeg kan lide te og kaffe.
x|men|but|Jeg er træt, men glad.
x|eller|or|Vil du have te eller kaffe?
x|fordi|because|Jeg tager jakke på, fordi det er koldt.
x|med|with|Jeg går i biografen med min søster.
x|uden|without|Jeg drikker kaffe uden sukker.
x|efter|after|Vi ses efter skole.
x|før|before|Vask hænder før maden.
x|ved siden af|next to|Banken ligger ved siden af kirken.
x|mellem|between|Stolen står mellem bordet og døren.
x|bag|behind|Katten gemmer sig bag sofaen.
x|foran|in front of|Vi mødes foran stationen.
x|alle|everybody|Alle kan lide is.
x|ingen|nobody|Der er ingen hjemme.
x|noget|something|Vil du have noget at drikke?
x|nogen|somebody|Er der nogen hjemme?
x|hver|every|Jeg løber hver dag.
x|igen|again|Kan du sige det igen?
x|tidligt|early|Jeg står tidligt op.
x|sent|late|Det er sent, jeg går i seng.
x|kun|only|Jeg har kun ti kroner.
x|næsten|almost|Klokken er næsten otte.
x|desværre|unfortunately|Jeg kan desværre ikke komme.
x|selvfølgelig|of course|Selvfølgelig hjælper jeg dig.
x|godt|well|Hun synger godt.
`;
})(this);
