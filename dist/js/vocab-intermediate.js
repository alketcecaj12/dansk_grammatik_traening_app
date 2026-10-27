/* "Learn new words", Beginner–intermediate (A2).
   One word per line:  type|Danish word|English meaning|Danish example sentence
   type: n = noun, v = verb, a = adjective, x = other (adverbs, conjunctions, small words). */
(function (root) {
  "use strict";
  root.VOCAB_DATA = root.VOCAB_DATA || {};
  root.VOCAB_DATA.intermediate = `
n|en pære|pear|Pæren er moden og blød.
n|et rundstykke|bread roll|Jeg køber fire rundstykker hos bageren.
n|en kiks|biscuit|Vil du have en kiks til teen?
n|honning|honey|Bierne laver honning.
n|peber|pepper|Kan du række mig salt og peber?
n|en ovn|oven|Kagen skal være i ovnen i en time.
n|en gryde|pot|Suppen koger i en stor gryde.
n|en pande|frying pan|Hun steger æg på en pande.
n|en hylde|shelf|Bøgerne står på hylden.
n|et håndklæde|towel|Her er et rent håndklæde.
n|sæbe|soap|Vask hænderne med sæbe.
n|en tandbørste|toothbrush|Jeg har glemt min tandbørste.
n|et torv|square|Der er marked på torvet om lørdagen.
n|et kvarter|quarter of an hour|Bussen kommer om et kvarter.
n|en stjerne|star|Kan du se den lille stjerne?
n|en måne|moon|Månen er rund i nat.
n|en sten|stone|Drengen kaster en sten i vandet.
n|et bjerg|mountain|Der er ingen høje bjerge i Danmark.
n|en flod|river|Floden løber gennem byen.
n|en mus|mouse|Katten fanger en mus.
n|en støvle|boot|Jeg tager støvler på, når det sner.
n|en lomme|pocket|Nøglen er i min lomme.
n|en alder|age|Børn i den alder sover meget.
n|et nummer|number|Hvilket nummer har huset?
n|en politibetjent|police officer|Politibetjenten hjælper en gammel dame.
n|en kok|cook|Kokken laver mad på restauranten.
n|en kø|queue|Der er lang kø i supermarkedet.
n|en side|page|Slå op på side ti.
n|en kasse|box|Bøgerne ligger i en kasse.
n|en pose|carrier bag|Vil du have en pose?
n|et frimærke|stamp|Jeg skal købe et frimærke til brevet.
n|en seddel|note|Hun skriver en seddel til sin mand.
n|en kurv|basket|Æblerne ligger i en kurv.
n|en tavle|blackboard|Læreren skriver på tavlen.
n|en barnevogn|pram|Babyen sover i barnevognen.
n|en sygdom|illness|Influenza er en almindelig sygdom om vinteren.
n|en ulykke|accident|Der skete en ulykke på motorvejen.
n|en skadestue|emergency room|Han kom på skadestuen med et brækket ben.
n|en recept|prescription|Lægen giver mig en recept på medicin.
n|en aftale|appointment|Jeg har en aftale hos lægen klokken ti.
n|feber|fever|Barnet har høj feber.
n|hovedpine|headache|Jeg har hovedpine efter en lang dag.
n|en forkølelse|cold (illness)|Jeg har en slem forkølelse.
n|en pille|pill|Tag en pille tre gange om dagen.
n|et sår|wound|Såret bløder lidt.
n|sundhed|health|Motion er godt for sundheden.
n|motion|exercise|Jeg får motion, når jeg cykler.
n|en vægt|weight|Hun holder øje med sin vægt.
n|søvn|sleep|Børn har brug for meget søvn.
n|en ansøgning|application|Jeg har sendt en ansøgning til firmaet.
n|en jobsamtale|job interview|I morgen skal jeg til jobsamtale.
n|en løn|salary|Lønnen kommer den sidste dag i måneden.
n|en arbejdsgiver|employer|Min arbejdsgiver er meget fleksibel.
n|en medarbejder|employee|Firmaet har 50 medarbejdere.
n|et firma|company|Han arbejder i et stort firma.
n|en uddannelse|education|Hun har en uddannelse som sygeplejerske.
n|et kursus|course|Jeg tager et kursus i dansk.
n|en eksamen|exam|Jeg skal til eksamen i juni.
n|en karakter|grade|Hun fik en god karakter i matematik.
n|en praktik|work placement|Jeg er i praktik i en børnehave.
n|en erfaring|experience|Har du erfaring med salg?
n|en vagt|shift|Hun har en lang vagt på hospitalet.
n|et møde|meeting|Vi har møde hver mandag.
n|en opgave|task|Læreren giver os en svær opgave.
n|en fridag|day off|Mandag er min fridag.
n|en kommune|municipality|Kommunen hjælper med at finde en bolig.
n|en borger|citizen|Alle borgere har ret til at stemme.
n|et sundhedskort|health card|Husk dit sundhedskort hos lægen.
n|skat|tax|Vi betaler meget i skat i Danmark.
n|en husleje|rent|Huslejen er 7.000 kroner om måneden.
n|en bolig|housing|Det er svært at finde en bolig i København.
n|en udlejer|landlord|Udlejeren skal reparere vinduet.
n|et depositum|deposit|Vi betaler tre måneders depositum.
n|en altan|balcony|Vi drikker kaffe på altanen.
n|en kælder|basement|Cyklerne står i kælderen.
n|et loft|attic|Julepynten ligger på loftet.
n|en opvaskemaskine|dishwasher|Sæt tallerknerne i opvaskemaskinen.
n|en vaskemaskine|washing machine|Vaskemaskinen er gået i stykker.
n|en støvsuger|vacuum cleaner|Hvor står støvsugeren?
n|et møbel|piece of furniture|Vi har købt nye møbler til stuen.
n|et gardin|curtain|Træk gardinerne for.
n|en skuffe|drawer|Skeerne ligger i den øverste skuffe.
n|en stikkontakt|socket|Der er ingen stikkontakt ved sengen.
n|affald|rubbish|Husk at sortere affaldet.
n|en skraldespand|bin|Smid papiret i skraldespanden.
n|et nabolag|neighbourhood|Vi bor i et roligt nabolag.
n|en forstad|suburb|De bor i en forstad til Aarhus.
n|et indkøbscenter|shopping centre|Indkøbscentret har åbent til klokken otte.
n|et tilbud|special offer|Kaffen er på tilbud i dag.
n|en kvittering|receipt|Gem kvitteringen, hvis du vil bytte.
n|en størrelse|size|Hvilken størrelse bruger du?
n|et prøverum|fitting room|Prøverummet er derovre.
n|en rabat|discount|Studerende får ti procent rabat.
n|en vare|item (product)|Varen er desværre udsolgt.
n|en indkøbsvogn|shopping trolley|Hun skubber indkøbsvognen hen til kassen.
n|en køreplan|timetable|Se på køreplanen, hvornår bussen kører.
n|en forsinkelse|delay|Der er forsinkelser på grund af sne.
n|et kryds|crossroads|Drej til venstre ved krydset.
n|et lyskryds|traffic lights|Stop for rødt i lyskrydset.
n|et fortov|pavement|Man må ikke cykle på fortovet.
n|en cykelsti|cycle path|Der er cykelstier i hele byen.
n|en motorvej|motorway|Vi kører på motorvejen til Aalborg.
n|en parkeringsplads|parking space|Det er svært at finde en parkeringsplads.
n|et kørekort|driving licence|Jeg har lige fået kørekort.
n|en rejse|journey|Rejsen til Thailand tager tolv timer.
n|et pas|passport|Husk dit pas i lufthavnen.
n|en udsigt|view|Der er en smuk udsigt fra hotellet.
n|en seværdighed|tourist attraction|Den Lille Havfrue er en kendt seværdighed.
n|et telt|tent|Vi sover i telt på campingpladsen.
n|bagage|luggage|Hvor meget bagage har du?
n|en grænse|border|Vi kører over grænsen til Tyskland.
n|en havn|harbour|Færgen sejler fra havnen.
n|en færge|ferry|Vi tager færgen til Sverige.
n|et landkort|map|Kan du vise det på landkortet?
n|fritid|free time|Hvad laver du i din fritid?
n|en forening|club (association)|Hun er formand for en forening.
n|en kamp|match|Vi så kampen i fjernsynet.
n|et hold|team|Hvilket hold holder du med?
n|en forestilling|performance|Forestillingen begynder klokken otte.
n|en biograf|cinema|Skal vi i biografen i aften?
n|en udstilling|exhibition|Vi ser en udstilling om vikinger.
n|nyheder|news|Jeg ser nyheder klokken halv syv.
n|en annonce|advertisement|Jeg fandt lejligheden gennem en annonce.
n|en hjemmeside|website|Du kan læse mere på vores hjemmeside.
n|en adgangskode|password|Jeg har glemt min adgangskode.
n|en oplysning|piece of information|Tak for oplysningerne.
n|en besked|message|Jeg lægger en besked på din telefonsvarer.
n|en mening|opinion|Hvad er din mening om det?
n|en grund|reason|Hvad er grunden til, at du kommer for sent?
n|en fejl|mistake|Jeg laver mange fejl, når jeg skriver.
n|en løsning|solution|Vi skal finde en løsning.
n|en mulighed|possibility|Der er mange muligheder for arbejde.
n|en beslutning|decision|Det var en svær beslutning.
n|et valg|choice|Du har intet valg.
n|en drøm|dream|Det er min drøm at rejse til Japan.
n|en følelse|feeling|Det er en dejlig følelse.
n|glæde|joy|Børnene skriger af glæde.
n|sorg|grief|Familien er i dyb sorg.
n|angst|anxiety|Hun lider af angst.
n|kærlighed|love|Kærlighed er vigtigere end penge.
n|et venskab|friendship|Deres venskab varer hele livet.
n|et forhold|relationship|De har et godt forhold til hinanden.
n|et bryllup|wedding|Vi skal til bryllup i august.
n|en begravelse|funeral|Begravelsen er på fredag.
n|et liv|life|Han har haft et godt liv.
n|en ungdom|youth|I min ungdom spillede jeg fodbold.
n|en barndom|childhood|Jeg havde en lykkelig barndom.
n|en pensionist|pensioner|Min far er pensionist.
n|en voksen|adult|Billetten koster 100 kroner for voksne.
n|en tvilling|twin|De to drenge er tvillinger.
n|en svigermor|mother-in-law|Min svigermor kommer på besøg.
n|en fætter|cousin (male)|Min fætter bor i Norge.
n|en kusine|cousin (female)|Min kusine studerer medicin.
n|et barnebarn|grandchild|Hun har fem børnebørn.
n|en gæst|guest|Vi får gæster i aften.
n|en vært|host|Værten byder gæsterne velkommen.
n|en opskrift|recipe|Kan jeg få opskriften på kagen?
n|mel|flour|Kom mel og sukker i skålen.
n|en skål|bowl|Hæld suppen i en skål.
n|en dåse|tin (can)|Jeg åbner en dåse tomater.
n|en ret|dish|Frikadeller er en klassisk dansk ret.
n|en forret|starter|Til forret får vi rejer.
n|et smørrebrød|open sandwich|Vi spiser smørrebrød til frokost.
n|en svamp|mushroom|Hun plukker svampe i skoven.
n|et bær|berry|Vi plukker bær i haven.
n|et krydderi|spice|Hvilke krydderier bruger du?
n|en grad|degree|Det er fem grader i dag.
n|torden|thunder|Hunden er bange for torden.
n|et lyn|lightning|Lynet slog ned i træet.
n|tåge|fog|Der lå tåge over marken i morges.
n|en årstid|season|Hvilken årstid kan du bedst lide?
n|en vejrudsigt|weather forecast|Vejrudsigten lover sol i morgen.
n|en kyst|coast|Vi bor tæt på kysten.
n|en bølge|wave|Bølgerne er høje i dag.
n|en bakke|hill|Vi cykler op ad bakken.
n|en bi|bee|Bien flyver fra blomst til blomst.
n|en myg|mosquito|Der er mange myg ved søen.
n|en edderkop|spider|Hun er bange for edderkopper.
n|en and|duck|Børnene fodrer ænderne.
n|en kanin|rabbit|Vi har en kanin i haven.
n|et får|sheep|Fårene græsser på bakken.
n|en ræv|fox|En ræv løb over vejen.
n|et egern|squirrel|Et egern samler nødder.
n|et samfund|society|Danmark er et rigt samfund.
n|en regering|government|Regeringen har lavet en ny lov.
n|en lov|law|Det er imod loven.
n|en tyv|thief|Politiet fangede tyven.
n|politi|police|Ring til politiet!
n|en brand|fire|Der var brand i en lejlighed i nat.
n|en brandmand|firefighter|Brandmændene slukkede branden.
n|et sygehus|hospital|Hun ligger på sygehuset.
n|en præst|priest|Præsten holder en tale i kirken.
n|en helligdag|public holiday|Juledag er en helligdag.
n|påske|Easter|Til påske spiser vi lam.
n|nytår|New Year|Godt nytår!
n|en indvandrer|immigrant|Mange indvandrere lærer dansk på sprogskolen.
n|en udlænding|foreigner|Som udlænding skal man lære dansk.
n|en dansker|Dane|Danskere drikker meget kaffe.
n|en saks|scissors|Må jeg låne din saks?
n|et lys|candle|Vi tænder lys til middagen.
n|en oplader|charger|Jeg har glemt min oplader.
n|en kuvert|envelope|Læg brevet i en kuvert.
n|en postkasse|letterbox|Brevet ligger i postkassen.
n|værktøj|tools|Han har meget værktøj i garagen.
n|et søm|nail|Han slår et søm i væggen.
n|legetøj|toys|Børnenes legetøj ligger overalt.
n|en dukke|doll|Pigen leger med sin dukke.
n|en dyne|duvet|Jeg sover under en varm dyne.
n|en fremtid|future|Hvad vil du lave i fremtiden?
n|en fortid|past|Han taler aldrig om sin fortid.
n|et århundrede|century|Kirken er fra det 12. århundrede.
n|et døgn|24 hours|Butikken har åbent hele døgnet.
n|en hverdag|weekday|På hverdage står jeg op klokken seks.
n|en begyndelse|beginning|I begyndelsen var det svært.
n|en slutning|ending|Filmen har en lykkelig slutning.
n|en ordbog|dictionary|Jeg har en dansk-engelsk ordbog.
n|en frisør|hairdresser|Jeg skal til frisør på fredag.
n|en mekaniker|mechanic|Mekanikeren siger, at bilen er i orden.
n|et postbud|postman|Postbuddet kommer klokken elleve.
n|en hjelm|helmet|Børn skal bruge hjelm, når de cykler.
n|en krog|hook|Hæng jakken på krogen.
n|en nød|nut|Egernet spiser en nød.
n|et skema|form|Skemaet skal sendes til kommunen.
n|en konkurrence|competition|Hun vandt en konkurrence i skolen.
n|støj|noise|Der er meget støj fra vejen.
n|en børnehave|kindergarten|Min søn går i børnehave.
n|en vuggestue|nursery|Babyen starter i vuggestue i august.
v|at kysse|to kiss|Hun kysser sin mand farvel.
v|at kramme|to hug|Han krammer sin datter.
v|at ryge|to smoke|Han ryger ikke mere.
v|at bygge|to build|De bygger et nyt hus.
v|at hade|to hate|Jeg hader at stå tidligt op.
v|at tabe|to drop|Pas på, du ikke taber glasset.
v|at klippe|to cut (with scissors)|Frisøren klipper mit hår.
v|at skære|to slice|Skær tomaten i små stykker.
v|at sejle|to sail|Vi sejler til Bornholm.
v|at koge|to boil|Vandet koger.
v|at stege|to fry|Far steger frikadeller.
v|at hoste|to cough|Barnet hoster om natten.
v|at gemme sig|to hide|Katten gemmer sig under sengen.
v|at banke|to knock|Nogen banker på døren.
v|at drømme|to dream|Jeg drømmer om en lang ferie.
v|at følge|to follow|Følg mig, jeg kender vejen.
v|at trække|to pull|Træk i håndtaget.
v|at skubbe|to push|Skub døren op.
v|at kaste|to throw|Kast bolden til mig!
v|at gribe|to catch|Hunden griber bolden.
v|at hoppe|to jump|Børnene hopper i vandet.
v|at klatre|to climb|Drengen klatrer i træet.
v|at ansøge om|to apply for|Han ansøger om et nyt job.
v|at ansætte|to hire|Firmaet ansætter ti nye medarbejdere.
v|at fyre|to fire (dismiss)|Han blev fyret i sidste måned.
v|at sige op|to resign|Hun har sagt sit job op.
v|at spare|to save (money)|Vi sparer op til en ny bil.
v|at låne ud|to lend|Biblioteket låner bøger ud.
v|at leje|to rent|Vi lejer et sommerhus i juli.
v|at eje|to own|De ejer to huse.
v|at reparere|to repair|Mekanikeren reparerer min bil.
v|at ordne|to fix|Kan du ordne min cykel?
v|at gå i stykker|to break down|Computeren er gået i stykker.
v|at ødelægge|to ruin|Regnen ødelagde vores tur.
v|at brække|to break (a bone)|Han har brækket armen.
v|at bløde|to bleed|Hans næse bløder.
v|at hvile sig|to rest|Du skal hvile dig, når du er syg.
v|at blive rask|to get well|Jeg håber, du bliver rask snart.
v|at undersøge|to examine|Lægen undersøger patienten.
v|at tabe sig|to lose weight|Han vil gerne tabe sig.
v|at smide ud|to throw away|Smid de gamle aviser ud.
v|at gøre|to do|Hvad gør du i weekenden?
v|at forsøge|to attempt|Han forsøger at lære at svømme.
v|at lykkes|to succeed|Det lykkedes mig at finde en lejlighed.
v|at håbe|to hope|Jeg håber, det bliver godt vejr.
v|at glæde sig til|to look forward to|Jeg glæder mig til ferien.
v|at savne|to miss (someone)|Jeg savner min familie.
v|at nå|to make it in time|Jeg nåede ikke bussen.
v|at vende sig om|to turn around|Vend dig om!
v|at dreje|to turn (left or right)|Drej til højre ved kirken.
v|at krydse|to cross|Kryds vejen ved lyskrydset.
v|at ankomme|to arrive|Toget ankommer klokken 14.
v|at afgå|to depart|Flyet afgår fra gate 12.
v|at aflyse|to cancel|Koncerten er aflyst.
v|at udsætte|to postpone|Mødet er udsat til i morgen.
v|at pakke|to pack|Jeg pakker kufferten i aften.
v|at aflevere|to hand in|Husk at aflevere opgaven på fredag.
v|at bestå|to pass (an exam)|Hun bestod eksamen.
v|at dumpe|to fail (an exam)|Han dumpede til køreprøven.
v|at tilmelde sig|to sign up|Jeg har tilmeldt mig et kursus.
v|at deltage|to take part|Alle må deltage i konkurrencen.
v|at slå|to hit|Man må ikke slå.
v|at sparke|to kick|Drengen sparker til bolden.
v|at skyde|to shoot|Han skyder på mål.
v|at stjæle|to steal|Nogen har stjålet min cykel.
v|at fange|to capture|Politiet fanger tyven.
v|at redde|to rescue|Brandmanden redder en kat.
v|at brænde|to burn|Huset brænder.
v|at advare|to warn|Vejrudsigten advarer mod storm.
v|at beskytte|to protect|Hjelmen beskytter dit hoved.
v|at love|to promise|Jeg lover at komme.
v|at undskylde|to apologise|Han undskylder for sin fejl.
v|at tilgive|to forgive|Kan du tilgive mig?
v|at klage|to complain|Naboen klager over støjen.
v|at skændes|to argue|De skændes om penge.
v|at være enig|to agree|Jeg er enig med dig.
v|at foreslå|to suggest|Jeg foreslår, at vi tager toget.
v|at anbefale|to recommend|Kan du anbefale en god restaurant?
v|at bede om|to ask for|Hun beder om hjælp.
v|at takke|to thank|Jeg vil gerne takke dig for hjælpen.
v|at byde på|to offer|Må jeg byde på en kop kaffe?
v|at gå ud|to go out|Vi går ud og spiser i aften.
v|at slappe af|to relax|I weekenden slapper jeg af.
v|at kede sig|to be bored|Børnene keder sig.
v|at more sig|to have fun|Vi morede os til festen.
v|at opleve|to experience|Vi oplevede meget på ferien.
v|at samle på|to collect|Han samler på frimærker.
v|at plukke|to pick|Vi plukker æbler i haven.
v|at vande|to water|Husk at vande blomsterne.
v|at fodre|to feed|Hun fodrer katten to gange om dagen.
v|at gø|to bark|Hunden gør ad postbudet.
v|at bide|to bite|Hunden bider ikke.
v|at stikke|to sting|Bien stak mig i armen.
v|at blæse|to blow|Det blæser meget i dag.
v|at tø|to thaw|Sneen tør i solen.
v|at hælde|to pour|Hæld mælken i glasset.
v|at røre|to touch|Rør ikke ved kagen!
v|at blande|to mix|Bland mel og sukker.
v|at skrælle|to peel|Skræl kartoflerne.
v|at varme op|to heat up|Jeg varmer suppen op.
v|at dække bord|to lay the table|Kan du dække bord?
v|at vaske op|to do the dishes|Jeg vasker op efter maden.
v|at støvsuge|to vacuum|Jeg støvsuger hver lørdag.
v|at stryge|to iron|Jeg hader at stryge.
v|at sy|to sew|Min mormor syr sine egne kjoler.
v|at strikke|to knit|Hun strikker en hue til sit barnebarn.
v|at låse|to lock|Husk at låse døren.
v|at ringe på|to ring the doorbell|Postbudet ringer på.
v|at bytte|to exchange|Kan jeg bytte bukserne?
v|at have på|to wear|Hun har en blå kjole på.
v|at klæde sig på|to get dressed|Børnene klæder sig på.
v|at tage af|to take off|Tag skoene af.
v|at børste tænder|to brush your teeth|Husk at børste tænder.
v|at barbere sig|to shave|Han barberer sig hver morgen.
v|at gå i bad|to have a shower|Jeg går i bad efter træning.
v|at sove over sig|to oversleep|Jeg sov over mig i morges.
v|at lægge sig|to lie down|Jeg lægger mig på sofaen.
v|at sætte sig|to sit down|Sæt dig ned.
v|at rejse sig|to stand up|Eleverne rejser sig, når læreren kommer ind.
v|at forsvinde|to disappear|Min nøgle er forsvundet.
v|at dukke op|to turn up|Han dukkede op klokken ti.
v|at ske|to happen|Hvad er der sket?
v|at ændre|to alter|Vi har ændret planen.
v|at stige|to rise|Priserne stiger hele tiden.
v|at vokse|to grow|Børn vokser hurtigt.
v|at dø|to die|Hans hund døde i sidste uge.
v|at føde|to give birth|Hun fødte en datter i går.
v|at blive skilt|to get divorced|De blev skilt efter ti år.
v|at opdrage|to bring up|Det er svært at opdrage børn.
v|at skælde ud|to scold|Mor skælder ud, fordi jeg kommer sent hjem.
v|at rose|to praise|Læreren roser eleven.
v|at stole på|to trust|Jeg stoler på dig.
v|at tvivle|to doubt|Jeg tvivler på, at han kommer.
v|at gætte|to guess|Gæt, hvem jeg mødte i dag!
v|at regne med|to expect|Jeg regner med at komme klokken fem.
v|at foretrække|to prefer|Jeg foretrækker te frem for kaffe.
v|at sammenligne|to compare|Sammenlign de to priser.
v|at oversætte|to translate|Kan du oversætte brevet?
v|at udtale|to pronounce|Hvordan udtaler man dette ord?
v|at slå op|to look up|Slå ordet op i ordbogen.
v|at tilbringe|to spend (time)|Vi tilbringer sommeren i Sverige.
v|at give op|to give up|Giv ikke op!
v|at fortsætte|to continue|Vi fortsætter i morgen.
v|at holde op|to stop|Det er holdt op med at regne.
v|at holde|to hold|Hold godt fast!
v|at holde af|to be fond of|Jeg holder meget af min bedstemor.
v|at hænge|to hang|Jakken hænger på krogen.
v|at mødes|to meet up|Vi mødes på caféen klokken tre.
v|at skrive under|to sign|Skriv under her.
v|at udfylde|to fill in|Udfyld skemaet, tak.
a|tyk|thick|Bogen er meget tyk.
a|rig|rich|Han er rig og har tre biler.
a|fattig|poor|Familien er fattig.
a|skilt|divorced|Mine forældre er skilt.
a|smal|narrow|Gaden er meget smal.
a|bred|wide|Floden er bred.
a|dyb|deep|Søen er dyb.
a|arbejdsløs|unemployed|Han har været arbejdsløs i et år.
a|ledig|vacant|Er denne plads ledig?
a|optaget|occupied|Toilettet er optaget.
a|stolt|proud|Jeg er stolt af min datter.
a|misundelig|envious|Han er misundelig på sin bror.
a|skuffet|disappointed|Jeg er skuffet over resultatet.
a|overrasket|surprised|Hun blev overrasket over gaven.
a|bekymret|worried|Mor er bekymret for sin søn.
a|taknemmelig|grateful|Jeg er taknemmelig for jeres hjælp.
a|høflig|polite|Han er altid høflig.
a|uhøflig|rude|Det er uhøfligt at afbryde.
a|ærlig|honest|Vær ærlig over for mig.
a|doven|lazy|Katten er doven.
a|flittig|hard-working|Hun er en flittig elev.
a|genert|shy|Han er lidt genert.
a|modig|brave|Brandmanden er modig.
a|klog|clever|Hun er meget klog.
a|dum|stupid|Det var et dumt spørgsmål.
a|tålmodig|patient|Man skal være tålmodig med børn.
a|hjælpsom|helpful|Personalet er meget hjælpsomt.
a|ensom|lonely|Han føler sig ensom.
a|lykkelig|happy (in life)|De er lykkelige sammen.
a|heldig|lucky|Du er heldig, at du har fri.
a|uheldig|unlucky|Jeg var uheldig og nåede ikke bussen.
a|farlig|dangerous|Det er farligt at cykle uden lys.
a|tryg|safe (feeling safe)|Børnene føler sig trygge.
a|sund|healthy|Det er sundt at spise grøntsager.
a|usund|unhealthy|Slik er usundt.
a|fed|fatty|Maden er for fed.
a|krydret|spicy|Maden er meget krydret.
a|mæt|full (after eating)|Nej tak, jeg er mæt.
a|moden|ripe|Bananerne er modne.
a|rådden|rotten|Æblet er råddent.
a|ødelagt|broken|Min telefon er ødelagt.
a|færdig|finished|Er du færdig med dine lektier?
a|almindelig|ordinary|Det er en helt almindelig dag.
a|mærkelig|strange|Der er en mærkelig lugt her.
a|nødvendig|necessary|Er det nødvendigt at tage bilen?
a|mulig|possible|Er det muligt at betale med kort?
a|umulig|impossible|Det er umuligt at finde en parkeringsplads.
a|behagelig|comfortable|Sofaen er meget behagelig.
a|hyggelig|cosy|Vi havde en hyggelig aften.
a|pæn|nice-looking|Du ser pæn ud i dag.
a|gammeldags|old-fashioned|Hans tøj er gammeldags.
a|offentlig|public|Der er et offentligt toilet på stationen.
a|kendt|famous|Han er en kendt skuespiller.
a|fremmed|unfamiliar|Børn skal ikke gå med fremmede mennesker.
a|udenlandsk|foreign|Hun læser en udenlandsk avis.
a|præcis|exact|Hvad er den præcise pris?
a|punktlig|punctual|Toget er punktligt.
a|forsinket|delayed|Flyet er forsinket.
a|indviklet|complicated|Reglerne er meget indviklede.
a|enkel|simple|Opskriften er enkel.
a|tydelig|clear|Hun taler tydeligt.
a|larmende|noisy|Gaden er meget larmende.
a|fredelig|peaceful|Det er en fredelig landsby.
a|fugtig|damp|Kælderen er fugtig.
a|kølig|cool|Det er en kølig sommeraften.
a|blæsende|windy|Det er meget blæsende ved kysten.
a|skyet|cloudy|I morgen bliver det skyet.
a|solrig|sunny|Vi fik en solrig dag på stranden.
a|glat|slippery|Vejen er glat i dag.
a|lun|mild|Det er en lun aften.
a|spændende|exciting|Kampen var meget spændende.
a|skøn|wonderful|Hvor er det skønt at være hjemme.
a|frygtelig|terrible|Vejret er frygteligt.
x|sjældent|rarely|Han ringer sjældent hjem.
x|hos|at someone's place|Jeg bor hos mine forældre.
x|over for|opposite|Apoteket ligger over for banken.
x|ingenting|nothing|Jeg har ingenting at lave.
x|væk|away|Hunden løb væk.
x|i overmorgen|the day after tomorrow|Vi rejser i overmorgen.
x|i forgårs|the day before yesterday|I forgårs var jeg syg.
x|for nylig|recently|Jeg har for nylig købt en bil.
x|hele tiden|all the time|Han snakker hele tiden.
x|indtil|until|Jeg arbejder indtil fem.
x|siden|since|Jeg har boet her siden 2020.
x|mens|while|Jeg lytter til radio, mens jeg laver mad.
x|når|when (every time)|Når det regner, tager jeg bussen.
x|da|when (once, in the past)|Da jeg var barn, boede jeg i Iran.
x|hvis|if|Hvis det regner, bliver vi hjemme.
x|selvom|although|Selvom han er syg, går han på arbejde.
x|så|so|Jeg var træt, så jeg gik i seng.
x|både … og|both … and|Hun taler både engelsk og fransk.
x|enten … eller|either … or|Vi tager enten toget eller bussen.
x|hverken … eller|neither … nor|Han drikker hverken kaffe eller te.
x|omkring|around|Vi går en tur omkring søen.
x|gennem|through|Vi kører gennem byen.
x|langs|along|Vi går langs stranden.
x|uden for|outside of|Jeg venter uden for butikken.
x|indenfor|indoors|Det er koldt, så vi bliver indenfor.
x|udenfor|outdoors|Børnene leger udenfor.
x|ovenpå|upstairs|Soveværelset ligger ovenpå.
x|nedenunder|downstairs|Køkkenet er nedenunder.
x|overalt|everywhere|Der er sne overalt.
x|ingen steder|nowhere|Jeg kan ingen steder finde min pung.
x|nogensinde|ever|Har du nogensinde været i Grønland?
x|endnu|yet|Jeg har ikke spist endnu.
x|endelig|finally|Endelig er det weekend!
x|pludselig|suddenly|Pludselig begyndte det at regne.
x|heldigvis|luckily|Heldigvis kom ingen til skade.
x|faktisk|actually|Jeg kan faktisk godt lide fisk.
x|især|especially|Jeg kan lide frugt, især jordbær.
x|ellers|otherwise|Skynd dig, ellers kommer vi for sent.
x|i stedet for|instead of|Jeg drikker te i stedet for kaffe.
x|ifølge|according to|Ifølge vejrudsigten bliver det regnvejr.
x|på grund af|because of|Toget er forsinket på grund af sne.
x|cirka|approximately|Turen tager cirka en time.
x|ret|quite|Det er ret koldt i dag.
x|for|too|Kaffen er for varm.
x|temmelig|rather|Filmen var temmelig lang.
x|lige så|just as|Hun er lige så høj som sin mor.
x|mindst|at least|Du skal sove mindst otte timer.
x|højst|at most|Turen tager højst ti minutter.
x|hinanden|each other|De elsker hinanden.
x|selv|oneself|Jeg har bygget huset selv.
`;
})(this);
