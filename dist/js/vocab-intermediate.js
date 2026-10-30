/* "Learn new words", Beginner–intermediate (A2).
   One word per line:  type|Danish word|English meaning|Danish example sentence|English translation
   type: n = noun, v = verb, a = adjective, x = other (adverbs, question words, small words).
   Wrong options are taken from words of the same type and level. */
(function (root) {
  "use strict";
  root.VOCAB_DATA = root.VOCAB_DATA || {};
  root.VOCAB_DATA.intermediate = `
n|en pære|pear|Pæren er moden og blød.|The pear is ripe and soft.
n|et rundstykke|bread roll|Jeg køber fire rundstykker hos bageren.|I buy four bread rolls at the baker's.
n|en kiks|biscuit|Vil du have en kiks til teen?|Would you like a biscuit with your tea?
n|honning|honey|Bierne laver honning.|Bees make honey.
n|peber|pepper|Kan du række mig salt og peber?|Can you pass me the salt and pepper?
n|en ovn|oven|Kagen skal være i ovnen i en time.|The cake has to be in the oven for an hour.
n|en gryde|pot|Suppen koger i en stor gryde.|The soup is boiling in a big pot.
n|en pande|frying pan|Hun steger æg på en pande.|She fries eggs in a frying pan.
n|en hylde|shelf|Bøgerne står på hylden.|The books are on the shelf.
n|et håndklæde|towel|Her er et rent håndklæde.|Here is a clean towel.
n|sæbe|soap|Vask hænderne med sæbe.|Wash your hands with soap.
n|en tandbørste|toothbrush|Jeg har glemt min tandbørste.|I've forgotten my toothbrush.
n|et torv|square|Der er marked på torvet om lørdagen.|There is a market in the square on Saturdays.
n|et kvarter|quarter of an hour|Bussen kommer om et kvarter.|The bus comes in a quarter of an hour.
n|en stjerne|star|Kan du se den lille stjerne?|Can you see the little star?
n|en måne|moon|Månen er rund i nat.|The moon is full tonight.
n|en sten|stone|Drengen kaster en sten i vandet.|The boy throws a stone into the water.
n|et bjerg|mountain|Der er ingen høje bjerge i Danmark.|There are no high mountains in Denmark.
n|en flod|river|Floden løber gennem byen.|The river runs through the town.
n|en mus|mouse|Katten fanger en mus.|The cat catches a mouse.
n|en støvle|boot|Jeg tager støvler på, når det sner.|I put on boots when it snows.
n|en lomme|pocket|Nøglen er i min lomme.|The key is in my pocket.
n|en alder|age|Børn i den alder sover meget.|Children of that age sleep a lot.
n|et nummer|number|Hvilket nummer har huset?|What number is the house?
n|en politibetjent|police officer|Politibetjenten hjælper en gammel dame.|The police officer helps an old lady.
n|en kok|cook|Kokken laver mad på restauranten.|The cook makes food at the restaurant.
n|en kø|queue|Der er lang kø i supermarkedet.|There is a long queue in the supermarket.
n|en side|page|Slå op på side ti.|Turn to page ten.
n|en kasse|box|Bøgerne ligger i en kasse.|The books are in a box.
n|en pose|carrier bag|Vil du have en pose?|Would you like a bag?
n|et frimærke|stamp|Jeg skal købe et frimærke til brevet.|I need to buy a stamp for the letter.
n|en seddel|note|Hun skriver en seddel til sin mand.|She writes a note to her husband.
n|en kurv|basket|Æblerne ligger i en kurv.|The apples are in a basket.
n|en tavle|blackboard|Læreren skriver på tavlen.|The teacher writes on the blackboard.
n|en barnevogn|pram|Babyen sover i barnevognen.|The baby is sleeping in the pram.
n|en sygdom|illness|Influenza er en almindelig sygdom om vinteren.|Flu is a common illness in winter.
n|en ulykke|accident|Der skete en ulykke på motorvejen.|There was an accident on the motorway.
n|en skadestue|emergency room|Han kom på skadestuen med et brækket ben.|He came to the emergency room with a broken leg.
n|en recept|prescription|Lægen giver mig en recept på medicin.|The doctor gives me a prescription for medicine.
n|en aftale|appointment|Jeg har en aftale hos lægen klokken ti.|I have an appointment with the doctor at ten.
n|feber|fever|Barnet har høj feber.|The child has a high fever.
n|hovedpine|headache|Jeg har hovedpine efter en lang dag.|I have a headache after a long day.
n|en forkølelse|cold (illness)|Jeg har en slem forkølelse.|I have a bad cold.
n|en pille|pill|Tag en pille tre gange om dagen.|Take a pill three times a day.
n|et sår|wound|Såret bløder lidt.|The wound is bleeding a little.
n|sundhed|health|Motion er godt for sundheden.|Exercise is good for your health.
n|motion|exercise|Jeg får motion, når jeg cykler.|I get exercise when I cycle.
n|en vægt|weight|Hun holder øje med sin vægt.|She keeps an eye on her weight.
n|søvn|sleep|Børn har brug for meget søvn.|Children need a lot of sleep.
n|en ansøgning|application|Jeg har sendt en ansøgning til firmaet.|I have sent an application to the company.
n|en jobsamtale|job interview|I morgen skal jeg til jobsamtale.|Tomorrow I have a job interview.
n|en løn|salary|Lønnen kommer den sidste dag i måneden.|The salary comes on the last day of the month.
n|en arbejdsgiver|employer|Min arbejdsgiver er meget fleksibel.|My employer is very flexible.
n|en medarbejder|employee|Firmaet har 50 medarbejdere.|The company has 50 employees.
n|et firma|company|Han arbejder i et stort firma.|He works in a big company.
n|en uddannelse|education|Hun har en uddannelse som sygeplejerske.|She is trained as a nurse.
n|et kursus|course|Jeg tager et kursus i dansk.|I'm taking a course in Danish.
n|en eksamen|exam|Jeg skal til eksamen i juni.|I have an exam in June.
n|en karakter|grade|Hun fik en god karakter i matematik.|She got a good grade in maths.
n|en praktik|work placement|Jeg er i praktik i en børnehave.|I'm on a work placement in a kindergarten.
n|en erfaring|experience|Har du erfaring med salg?|Do you have experience in sales?
n|en vagt|shift|Hun har en lang vagt på hospitalet.|She has a long shift at the hospital.
n|et møde|meeting|Vi har møde hver mandag.|We have a meeting every Monday.
n|en opgave|task|Læreren giver os en svær opgave.|The teacher gives us a difficult task.
n|en fridag|day off|Mandag er min fridag.|Monday is my day off.
n|en kommune|municipality|Kommunen hjælper med at finde en bolig.|The municipality helps with finding housing.
n|en borger|citizen|Alle borgere har ret til at stemme.|All citizens have the right to vote.
n|et sundhedskort|health card|Husk dit sundhedskort hos lægen.|Remember your health card at the doctor's.
n|skat|tax|Vi betaler meget i skat i Danmark.|We pay a lot of tax in Denmark.
n|en husleje|rent|Huslejen er 7.000 kroner om måneden.|The rent is 7,000 kroner a month.
n|en bolig|housing|Det er svært at finde en bolig i København.|It's hard to find housing in Copenhagen.
n|en udlejer|landlord|Udlejeren skal reparere vinduet.|The landlord has to repair the window.
n|et depositum|deposit|Vi betaler tre måneders depositum.|We pay three months' deposit.
n|en altan|balcony|Vi drikker kaffe på altanen.|We drink coffee on the balcony.
n|en kælder|basement|Cyklerne står i kælderen.|The bikes are in the basement.
n|et loft|attic|Julepynten ligger på loftet.|The Christmas decorations are in the attic.
n|en opvaskemaskine|dishwasher|Sæt tallerknerne i opvaskemaskinen.|Put the plates in the dishwasher.
n|en vaskemaskine|washing machine|Vaskemaskinen er gået i stykker.|The washing machine has broken down.
n|en støvsuger|vacuum cleaner|Hvor står støvsugeren?|Where is the vacuum cleaner?
n|et møbel|piece of furniture|Vi har købt nye møbler til stuen.|We have bought new furniture for the living room.
n|et gardin|curtain|Træk gardinerne for.|Draw the curtains.
n|en skuffe|drawer|Skeerne ligger i den øverste skuffe.|The spoons are in the top drawer.
n|en stikkontakt|socket|Der er ingen stikkontakt ved sengen.|There is no socket by the bed.
n|affald|rubbish|Husk at sortere affaldet.|Remember to sort the rubbish.
n|en skraldespand|bin|Smid papiret i skraldespanden.|Throw the paper in the bin.
n|et nabolag|neighbourhood|Vi bor i et roligt nabolag.|We live in a quiet neighbourhood.
n|en forstad|suburb|De bor i en forstad til Aarhus.|They live in a suburb of Aarhus.
n|et indkøbscenter|shopping centre|Indkøbscentret har åbent til klokken otte.|The shopping centre is open until eight o'clock.
n|et tilbud|special offer|Kaffen er på tilbud i dag.|Coffee is on special offer today.
n|en kvittering|receipt|Gem kvitteringen, hvis du vil bytte.|Keep the receipt if you want to exchange it.
n|en størrelse|size|Hvilken størrelse bruger du?|What size do you take?
n|et prøverum|fitting room|Prøverummet er derovre.|The fitting room is over there.
n|en rabat|discount|Studerende får ti procent rabat.|Students get a ten per cent discount.
n|en vare|item (product)|Varen er desværre udsolgt.|Unfortunately the item is sold out.
n|en indkøbsvogn|shopping trolley|Hun skubber indkøbsvognen hen til kassen.|She pushes the shopping trolley to the checkout.
n|en køreplan|timetable|Se på køreplanen, hvornår bussen kører.|Look at the timetable to see when the bus runs.
n|en forsinkelse|delay|Der er forsinkelser på grund af sne.|There are delays because of snow.
n|et kryds|crossroads|Drej til venstre ved krydset.|Turn left at the crossroads.
n|et lyskryds|traffic lights|Stop for rødt i lyskrydset.|Stop for red at the traffic lights.
n|et fortov|pavement|Man må ikke cykle på fortovet.|You mustn't cycle on the pavement.
n|en cykelsti|cycle path|Der er cykelstier i hele byen.|There are cycle paths all over the city.
n|en motorvej|motorway|Vi kører på motorvejen til Aalborg.|We drive on the motorway to Aalborg.
n|en parkeringsplads|parking space|Det er svært at finde en parkeringsplads.|It's hard to find a parking space.
n|et kørekort|driving licence|Jeg har lige fået kørekort.|I have just got my driving licence.
n|en rejse|journey|Rejsen til Thailand tager tolv timer.|The journey to Thailand takes twelve hours.
n|et pas|passport|Husk dit pas i lufthavnen.|Remember your passport at the airport.
n|en udsigt|view|Der er en smuk udsigt fra hotellet.|There is a beautiful view from the hotel.
n|en seværdighed|tourist attraction|Den Lille Havfrue er en kendt seværdighed.|The Little Mermaid is a famous tourist attraction.
n|et telt|tent|Vi sover i telt på campingpladsen.|We sleep in a tent at the campsite.
n|bagage|luggage|Hvor meget bagage har du?|How much luggage do you have?
n|en grænse|border|Vi kører over grænsen til Tyskland.|We drive across the border into Germany.
n|en havn|harbour|Færgen sejler fra havnen.|The ferry sails from the harbour.
n|en færge|ferry|Vi tager færgen til Sverige.|We take the ferry to Sweden.
n|et landkort|map|Kan du vise det på landkortet?|Can you show it on the map?
n|fritid|free time|Hvad laver du i din fritid?|What do you do in your free time?
n|en forening|club (association)|Hun er formand for en forening.|She is the chair of an association.
n|en kamp|match|Vi så kampen i fjernsynet.|We watched the match on TV.
n|et hold|team|Hvilket hold holder du med?|Which team do you support?
n|en forestilling|performance|Forestillingen begynder klokken otte.|The performance starts at eight o'clock.
n|en biograf|cinema|Skal vi i biografen i aften?|Shall we go to the cinema tonight?
n|en udstilling|exhibition|Vi ser en udstilling om vikinger.|We are seeing an exhibition about the Vikings.
n|nyheder|news|Jeg ser nyheder klokken halv syv.|I watch the news at half past six.
n|en annonce|advertisement|Jeg fandt lejligheden gennem en annonce.|I found the flat through an advertisement.
n|en hjemmeside|website|Du kan læse mere på vores hjemmeside.|You can read more on our website.
n|en adgangskode|password|Jeg har glemt min adgangskode.|I have forgotten my password.
n|en oplysning|piece of information|Tak for oplysningerne.|Thank you for the information.
n|en besked|message|Jeg lægger en besked på din telefonsvarer.|I'll leave a message on your answering machine.
n|en mening|opinion|Hvad er din mening om det?|What is your opinion on that?
n|en grund|reason|Hvad er grunden til, at du kommer for sent?|What is the reason you are late?
n|en fejl|mistake|Jeg laver mange fejl, når jeg skriver.|I make a lot of mistakes when I write.
n|en løsning|solution|Vi skal finde en løsning.|We have to find a solution.
n|en mulighed|possibility|Der er mange muligheder for arbejde.|There are many possibilities for work.
n|en beslutning|decision|Det var en svær beslutning.|It was a difficult decision.
n|et valg|choice|Du har intet valg.|You have no choice.
n|en drøm|dream|Det er min drøm at rejse til Japan.|It's my dream to travel to Japan.
n|en følelse|feeling|Det er en dejlig følelse.|It's a lovely feeling.
n|glæde|joy|Børnene skriger af glæde.|The children are screaming with joy.
n|sorg|grief|Familien er i dyb sorg.|The family is in deep grief.
n|angst|anxiety|Hun lider af angst.|She suffers from anxiety.
n|kærlighed|love|Kærlighed er vigtigere end penge.|Love is more important than money.
n|et venskab|friendship|Deres venskab varer hele livet.|Their friendship lasts a lifetime.
n|et forhold|relationship|De har et godt forhold til hinanden.|They have a good relationship with each other.
n|et bryllup|wedding|Vi skal til bryllup i august.|We are going to a wedding in August.
n|en begravelse|funeral|Begravelsen er på fredag.|The funeral is on Friday.
n|et liv|life|Han har haft et godt liv.|He has had a good life.
n|en ungdom|youth|I min ungdom spillede jeg fodbold.|In my youth I played football.
n|en barndom|childhood|Jeg havde en lykkelig barndom.|I had a happy childhood.
n|en pensionist|pensioner|Min far er pensionist.|My father is a pensioner.
n|en voksen|adult|Billetten koster 100 kroner for voksne.|The ticket costs 100 kroner for adults.
n|en tvilling|twin|De to drenge er tvillinger.|The two boys are twins.
n|en svigermor|mother-in-law|Min svigermor kommer på besøg.|My mother-in-law is coming to visit.
n|en fætter|cousin (male)|Min fætter bor i Norge.|My cousin lives in Norway.
n|en kusine|cousin (female)|Min kusine studerer medicin.|My cousin is studying medicine.
n|et barnebarn|grandchild|Hun har fem børnebørn.|She has five grandchildren.
n|en gæst|guest|Vi får gæster i aften.|We are having guests tonight.
n|en vært|host|Værten byder gæsterne velkommen.|The host welcomes the guests.
n|en opskrift|recipe|Kan jeg få opskriften på kagen?|Can I have the recipe for the cake?
n|mel|flour|Kom mel og sukker i skålen.|Put flour and sugar in the bowl.
n|en skål|bowl|Hæld suppen i en skål.|Pour the soup into a bowl.
n|en dåse|tin (can)|Jeg åbner en dåse tomater.|I open a tin of tomatoes.
n|en ret|dish|Frikadeller er en klassisk dansk ret.|Meatballs are a classic Danish dish.
n|en forret|starter|Til forret får vi rejer.|For starters we're having prawns.
n|et smørrebrød|open sandwich|Vi spiser smørrebrød til frokost.|We eat open sandwiches for lunch.
n|en svamp|mushroom|Hun plukker svampe i skoven.|She picks mushrooms in the forest.
n|et bær|berry|Vi plukker bær i haven.|We pick berries in the garden.
n|et krydderi|spice|Hvilke krydderier bruger du?|Which spices do you use?
n|en grad|degree|Det er fem grader i dag.|It's five degrees today.
n|torden|thunder|Hunden er bange for torden.|The dog is afraid of thunder.
n|et lyn|lightning|Lynet slog ned i træet.|The lightning struck the tree.
n|tåge|fog|Der lå tåge over marken i morges.|There was fog over the field this morning.
n|en årstid|season|Hvilken årstid kan du bedst lide?|Which season do you like best?
n|en vejrudsigt|weather forecast|Vejrudsigten lover sol i morgen.|The weather forecast promises sun tomorrow.
n|en kyst|coast|Vi bor tæt på kysten.|We live close to the coast.
n|en bølge|wave|Bølgerne er høje i dag.|The waves are high today.
n|en bakke|hill|Vi cykler op ad bakken.|We cycle up the hill.
n|en bi|bee|Bien flyver fra blomst til blomst.|The bee flies from flower to flower.
n|en myg|mosquito|Der er mange myg ved søen.|There are lots of mosquitoes by the lake.
n|en edderkop|spider|Hun er bange for edderkopper.|She is afraid of spiders.
n|en and|duck|Børnene fodrer ænderne.|The children are feeding the ducks.
n|en kanin|rabbit|Vi har en kanin i haven.|We have a rabbit in the garden.
n|et får|sheep|Fårene græsser på bakken.|The sheep are grazing on the hill.
n|en ræv|fox|En ræv løb over vejen.|A fox ran across the road.
n|et egern|squirrel|Et egern samler nødder.|A squirrel is collecting nuts.
n|et samfund|society|Danmark er et rigt samfund.|Denmark is a rich society.
n|en regering|government|Regeringen har lavet en ny lov.|The government has made a new law.
n|en lov|law|Det er imod loven.|It's against the law.
n|en tyv|thief|Politiet fangede tyven.|The police caught the thief.
n|politi|police|Ring til politiet!|Call the police!
n|en brand|fire|Der var brand i en lejlighed i nat.|There was a fire in a flat last night.
n|en brandmand|firefighter|Brandmændene slukkede branden.|The firefighters put out the fire.
n|et sygehus|hospital|Hun ligger på sygehuset.|She is in hospital.
n|en præst|priest|Præsten holder en tale i kirken.|The priest gives a speech in the church.
n|en helligdag|public holiday|Juledag er en helligdag.|Christmas Day is a public holiday.
n|påske|Easter|Til påske spiser vi lam.|At Easter we eat lamb.
n|nytår|New Year|Godt nytår!|Happy New Year!
n|en indvandrer|immigrant|Mange indvandrere lærer dansk på sprogskolen.|Many immigrants learn Danish at the language school.
n|en udlænding|foreigner|Som udlænding skal man lære dansk.|As a foreigner you have to learn Danish.
n|en dansker|Dane|Danskere drikker meget kaffe.|Danes drink a lot of coffee.
n|en saks|scissors|Må jeg låne din saks?|May I borrow your scissors?
n|et lys|candle|Vi tænder lys til middagen.|We light candles for dinner.
n|en oplader|charger|Jeg har glemt min oplader.|I have forgotten my charger.
n|en kuvert|envelope|Læg brevet i en kuvert.|Put the letter in an envelope.
n|en postkasse|letterbox|Brevet ligger i postkassen.|The letter is in the letterbox.
n|værktøj|tools|Han har meget værktøj i garagen.|He has a lot of tools in the garage.
n|et søm|nail|Han slår et søm i væggen.|He hammers a nail into the wall.
n|legetøj|toys|Børnenes legetøj ligger overalt.|The children's toys are everywhere.
n|en dukke|doll|Pigen leger med sin dukke.|The girl is playing with her doll.
n|en dyne|duvet|Jeg sover under en varm dyne.|I sleep under a warm duvet.
n|en fremtid|future|Hvad vil du lave i fremtiden?|What do you want to do in the future?
n|en fortid|past|Han taler aldrig om sin fortid.|He never talks about his past.
n|et århundrede|century|Kirken er fra det 12. århundrede.|The church is from the 12th century.
n|et døgn|24 hours|Butikken har åbent hele døgnet.|The shop is open 24 hours a day.
n|en hverdag|weekday|På hverdage står jeg op klokken seks.|On weekdays I get up at six o'clock.
n|en begyndelse|beginning|I begyndelsen var det svært.|In the beginning it was hard.
n|en slutning|ending|Filmen har en lykkelig slutning.|The film has a happy ending.
n|en ordbog|dictionary|Jeg har en dansk-engelsk ordbog.|I have a Danish-English dictionary.
n|en frisør|hairdresser|Jeg skal til frisør på fredag.|I'm going to the hairdresser on Friday.
n|en mekaniker|mechanic|Mekanikeren siger, at bilen er i orden.|The mechanic says the car is fine.
n|et postbud|postman|Postbuddet kommer klokken elleve.|The postman comes at eleven o'clock.
n|en hjelm|helmet|Børn skal bruge hjelm, når de cykler.|Children must wear a helmet when they cycle.
n|en krog|hook|Hæng jakken på krogen.|Hang the jacket on the hook.
n|en nød|nut|Egernet spiser en nød.|The squirrel is eating a nut.
n|et skema|form|Skemaet skal sendes til kommunen.|The form has to be sent to the municipality.
n|en konkurrence|competition|Hun vandt en konkurrence i skolen.|She won a competition at school.
n|støj|noise|Der er meget støj fra vejen.|There is a lot of noise from the road.
n|en børnehave|kindergarten|Min søn går i børnehave.|My son goes to kindergarten.
n|en vuggestue|nursery|Babyen starter i vuggestue i august.|The baby starts at nursery in August.
n|hoste|cough|Han har haft hoste i en uge.|He has had a cough for a week.
n|tandpine|toothache|Jeg har tandpine.|I have toothache.
n|mavepine|stomach ache|Barnet har mavepine.|The child has a stomach ache.
n|et plaster|plaster|Sæt et plaster på såret.|Put a plaster on the wound.
n|en forbinding|bandage|Sygeplejersken lægger en forbinding.|The nurse puts on a bandage.
n|en sprøjte|injection|Barnet er bange for sprøjter.|The child is afraid of injections.
n|en lægeerklæring|medical certificate|Du skal have en lægeerklæring.|You need a medical certificate.
n|et venteværelse|waiting room|Vi sidder i venteværelset.|We sit in the waiting room.
n|en kørestol|wheelchair|Hun sidder i kørestol.|She uses a wheelchair.
n|en krykke|crutch|Han går med krykker.|He walks on crutches.
n|en blodprøve|blood test|Lægen tager en blodprøve.|The doctor takes a blood test.
n|et blodtryk|blood pressure|Mit blodtryk er for højt.|My blood pressure is too high.
n|en jordemoder|midwife|Jordemoderen hjælper ved fødslen.|The midwife helps at the birth.
n|en fødsel|birth|Fødslen gik godt.|The birth went well.
n|en graviditet|pregnancy|Hun har det godt under graviditeten.|She feels well during the pregnancy.
n|en arbejdstid|working hours|Min arbejdstid er fra otte til fire.|My working hours are from eight to four.
n|overarbejde|overtime|Jeg har haft meget overarbejde.|I've done a lot of overtime.
n|en kantine|canteen|Kantinen serverer varm mad.|The canteen serves hot food.
n|et skrivebord|desk|Computeren står på skrivebordet.|The computer is on the desk.
n|en mappe|folder|Papirerne ligger i en mappe.|The papers are in a folder.
n|et visitkort|business card|Her er mit visitkort.|Here is my business card.
n|en lønseddel|payslip|Tjek din lønseddel hver måned.|Check your payslip every month.
n|en lærling|apprentice|Lærlingen lærer af mesteren.|The apprentice learns from the master.
n|en rengøringsassistent|cleaner|Rengøringsassistenten kommer om aftenen.|The cleaner comes in the evening.
n|en pædagog|childcare worker|Pædagogen leger med børnene.|The childcare worker plays with the children.
n|en elektriker|electrician|Elektrikeren reparerer lampen.|The electrician repairs the lamp.
n|en maler|painter (decorator)|Maleren maler stuen.|The painter is painting the living room.
n|en chauffør|driver|Han arbejder som chauffør.|He works as a driver.
n|en revisor|accountant|Revisoren hjælper med regnskabet.|The accountant helps with the accounts.
n|en direktør|managing director|Direktøren holder en tale.|The managing director gives a speech.
n|en sygedag|sick day|Jeg havde to sygedage i sidste måned.|I had two sick days last month.
n|et jobcenter|job centre|Jeg har et møde på jobcentret.|I have a meeting at the job centre.
n|en skolegård|school playground|Børnene leger i skolegården.|The children play in the school playground.
n|et frikvarter|break (at school)|I frikvarteret spiser vi madpakker.|At break we eat our packed lunches.
n|en madpakke|packed lunch|Mor smører madpakker hver morgen.|Mum makes packed lunches every morning.
n|et klasselokale|classroom|Klasselokalet er på første sal.|The classroom is on the first floor.
n|et forældremøde|parents' evening|Der er forældremøde på torsdag.|There is a parents' evening on Thursday.
n|en rektor|headteacher|Rektor taler til eleverne.|The headteacher speaks to the pupils.
n|et skoleskema|school timetable|Hvad står der på skoleskemaet i dag?|What's on the school timetable today?
n|en sprogskole|language school|Jeg går på sprogskole tre dage om ugen.|I go to language school three days a week.
n|en prøve|test|I morgen har vi en prøve i dansk.|Tomorrow we have a Danish test.
n|et bevis|certificate|Jeg fik et bevis efter kurset.|I got a certificate after the course.
n|en lektion|lesson|Lektionen varer 45 minutter.|The lesson lasts 45 minutes.
n|et ordforråd|vocabulary|Jeg vil gerne udvide mit ordforråd.|I'd like to expand my vocabulary.
n|en stil|essay|Vi skriver en stil om vores familie.|We are writing an essay about our family.
n|en ejerlejlighed|owner-occupied flat|De har købt en ejerlejlighed.|They have bought their own flat.
n|en lejer|tenant|Lejeren betaler husleje hver måned.|The tenant pays rent every month.
n|en vicevært|caretaker|Viceværten skifter pæren på trappen.|The caretaker changes the bulb on the stairs.
n|en opgang|stairwell|Der er seks lejligheder i opgangen.|There are six flats in the stairwell.
n|en dørklokke|doorbell|Dørklokken virker ikke.|The doorbell isn't working.
n|en elregning|electricity bill|Elregningen er høj om vinteren.|The electricity bill is high in winter.
n|en flyttekasse|moving box|Vi pakker bøgerne i flyttekasser.|We pack the books in moving boxes.
n|en boremaskine|drill|Kan jeg låne din boremaskine?|Can I borrow your drill?
n|en skruetrækker|screwdriver|Jeg skal bruge en skruetrækker.|I need a screwdriver.
n|en stige|ladder|Han står på en stige og maler.|He's standing on a ladder painting.
n|en spand|bucket|Fyld spanden med vand.|Fill the bucket with water.
n|en klud|cloth|Tør bordet af med en klud.|Wipe the table with a cloth.
n|et strygejern|iron|Strygejernet er varmt.|The iron is hot.
n|et tørrestativ|clothes airer|Tøjet hænger på tørrestativet.|The clothes are hanging on the airer.
n|en tørretumbler|tumble dryer|Vi har ikke plads til en tørretumbler.|We don't have room for a tumble dryer.
n|en fryser|freezer|Isen ligger i fryseren.|The ice cream is in the freezer.
n|en emhætte|cooker hood|Tænd for emhætten, når du steger.|Turn on the cooker hood when you fry.
n|et skærebræt|chopping board|Skær løget på skærebrættet.|Chop the onion on the chopping board.
n|et låg|lid|Læg låg på gryden.|Put a lid on the pot.
n|en dåseåbner|tin opener|Hvor er dåseåbneren?|Where's the tin opener?
n|en proptrækker|corkscrew|Har du en proptrækker til vinen?|Do you have a corkscrew for the wine?
n|en kasserer|cashier|Kassereren giver mig byttepenge.|The cashier gives me change.
n|byttepenge|change (money)|Her er dine byttepenge.|Here's your change.
n|en mønt|coin|Jeg har kun mønter i lommen.|I only have coins in my pocket.
n|en pengeseddel|banknote|Kan du veksle en pengeseddel?|Can you change a banknote?
n|en hæveautomat|cash machine|Der er en hæveautomat ved banken.|There is a cash machine by the bank.
n|en bankkonto|bank account|Jeg har åbnet en bankkonto.|I have opened a bank account.
n|en pinkode|PIN code|Tast din pinkode.|Enter your PIN code.
n|en indkøbsliste|shopping list|Har du skrevet en indkøbsliste?|Have you written a shopping list?
n|pant|bottle deposit|Du får pant tilbage for flaskerne.|You get the bottle deposit back.
n|et udsalg|sale|Der er udsalg i januar.|There is a sale in January.
n|en ankomst|arrival|Ankomsten er klokken 15.|Arrival is at 3 pm.
n|en afgang|departure|Næste afgang er om ti minutter.|The next departure is in ten minutes.
n|et spor|track (platform)|Toget kører fra spor 3.|The train leaves from track 3.
n|en perron|platform|Vi venter på perronen.|We wait on the platform.
n|en konduktør|ticket inspector|Konduktøren tjekker billetterne.|The ticket inspector checks the tickets.
n|en pladsbillet|seat reservation|Jeg har købt en pladsbillet.|I've bought a seat reservation.
n|en udflugt|excursion|Klassen tager på udflugt til skoven.|The class is going on an excursion to the forest.
n|en campingplads|campsite|Vi bor på en campingplads ved stranden.|We stay at a campsite by the beach.
n|en sovepose|sleeping bag|Jeg sover i en varm sovepose.|I sleep in a warm sleeping bag.
n|en rygsæk|rucksack|Han har en stor rygsæk på.|He's carrying a big rucksack.
n|solcreme|sun cream|Husk solcreme på stranden.|Remember sun cream on the beach.
n|solbriller|sunglasses|Jeg har glemt mine solbriller.|I've forgotten my sunglasses.
n|et postkort|postcard|Vi sender et postkort til bedstemor.|We send a postcard to grandma.
n|et enkeltværelse|single room|Jeg har bestilt et enkeltværelse.|I've booked a single room.
n|et klaver|piano|Hun spiller klaver.|She plays the piano.
n|en tromme|drum|Drengen spiller tromme.|The boy plays the drums.
n|et kor|choir|Hun synger i et kor.|She sings in a choir.
n|en løbetur|run|Jeg tager en løbetur i parken.|I go for a run in the park.
n|en gåtur|walk|Efter maden tager vi en gåtur.|After the meal we go for a walk.
n|en cykeltur|bike ride|Vi tager på cykeltur langs kysten.|We go for a bike ride along the coast.
n|et fitnesscenter|gym|Jeg træner i et fitnesscenter.|I work out at a gym.
n|et brætspil|board game|Vi spiller brætspil om aftenen.|We play board games in the evening.
n|håndbold|handball|Danmark er gode til håndbold.|Denmark is good at handball.
n|en tegneserie|comic|Drengen læser en tegneserie.|The boy is reading a comic.
n|et ugeblad|magazine|Hun læser et ugeblad hos frisøren.|She reads a magazine at the hairdresser's.
n|en serie|TV series|Vi ser en dansk serie.|We're watching a Danish series.
n|en stemning|atmosphere|Der var en god stemning til festen.|There was a good atmosphere at the party.
n|en frygt|fear|Hun har en stor frygt for hunde.|She has a great fear of dogs.
n|et smil|smile|Hun har et smukt smil.|She has a beautiful smile.
n|et grin|laugh|Vi fik et godt grin.|We had a good laugh.
n|et kys|kiss|Han giver hende et kys.|He gives her a kiss.
n|et kram|hug|Giv mig et kram!|Give me a hug!
n|en tåre|tear|Hun har tårer i øjnene.|She has tears in her eyes.
n|lykke|happiness|Penge giver ikke lykke.|Money doesn't buy happiness.
n|hjemve|homesickness|Jeg har hjemve til mit land.|I'm homesick for my country.
n|hjælp|help|Tak for hjælpen.|Thanks for the help.
n|et råd|piece of advice|Kan du give mig et godt råd?|Can you give me some good advice?
n|en forskel|difference|Hvad er forskellen på de to ord?|What's the difference between the two words?
n|en del|part|En del af huset er nyt.|Part of the house is new.
n|et eksempel|example|Kan du give et eksempel?|Can you give an example?
n|en måde|way (manner)|Der er mange måder at lære dansk på.|There are many ways to learn Danish.
n|en rækkefølge|order (sequence)|Sæt ordene i den rigtige rækkefølge.|Put the words in the right order.
n|en ende|end|Han bor for enden af gaden.|He lives at the end of the street.
n|en midte|middle|Bordet står i midten af stuen.|The table is in the middle of the room.
n|en kant|edge|Glasset står på kanten af bordet.|The glass is on the edge of the table.
n|et hjørne|corner|Butikken ligger på hjørnet.|The shop is on the corner.
n|en retning|direction|Hvilken retning skal vi gå?|Which direction should we go?
n|en afstand|distance|Afstanden til skolen er to kilometer.|The distance to the school is two kilometres.
n|en højde|height|Hvad er din højde?|What is your height?
n|en længde|length|Bordet har en længde på to meter.|The table is two metres long.
n|en mængde|amount|Der er en stor mængde sne.|There's a large amount of snow.
n|et antal|number (quantity)|Antallet af elever stiger.|The number of pupils is rising.
n|en halvdel|half|Halvdelen af klassen er syge.|Half the class is ill.
n|en fjerdedel|quarter|En fjerdedel af kagen er spist.|A quarter of the cake has been eaten.
n|en plads|room (space)|Der er ikke plads i bilen.|There's no room in the car.
n|en indgang|entrance|Indgangen er på bagsiden.|The entrance is at the back.
n|en udgang|exit|Hvor er udgangen?|Where is the exit?
n|en nødudgang|emergency exit|Nødudgangen er ved trappen.|The emergency exit is by the stairs.
n|et skilt|sign|Læs skiltet ved døren.|Read the sign by the door.
n|en rulletrappe|escalator|Tag rulletrappen op til første sal.|Take the escalator up to the first floor.
n|en rundkørsel|roundabout|Kør til højre i rundkørslen.|Go right at the roundabout.
n|en fodgængerovergang|pedestrian crossing|Gå over ved fodgængerovergangen.|Cross at the pedestrian crossing.
n|trafik|traffic|Der er meget trafik i dag.|There's a lot of traffic today.
n|en politistation|police station|Han anmelder tyveriet på politistationen.|He reports the theft at the police station.
n|en ambassade|embassy|Jeg skal forny mit pas på ambassaden.|I need to renew my passport at the embassy.
n|borgerservice|citizen service centre|Du kan få et nyt sundhedskort på borgerservice.|You can get a new health card at the citizen service centre.
n|et CPR-nummer|civil registration number|Skriv dit CPR-nummer på skemaet.|Write your CPR number on the form.
n|en underskrift|signature|Din underskrift skal stå her.|Your signature goes here.
n|en mose|bog|Der er mange fugle i mosen.|There are many birds in the bog.
n|en å|stream|Vi fisker i åen.|We fish in the stream.
n|en klit|sand dune|Vi går op ad klitten.|We walk up the sand dune.
n|en eng|meadow|Køerne græsser på engen.|The cows graze in the meadow.
n|en gren|branch|Fuglen sidder på en gren.|The bird sits on a branch.
n|en rod|root|Træet har lange rødder.|The tree has long roots.
n|et frø|seed|Fuglene spiser frø fra foderbrættet.|The birds eat seeds from the bird table.
n|et drivhus|greenhouse|Tomaterne vokser i drivhuset.|The tomatoes grow in the greenhouse.
n|hagl|hail|Der faldt hagl i går.|Hail fell yesterday.
n|en hedebølge|heatwave|Der er hedebølge i hele landet.|There is a heatwave across the country.
n|en solnedgang|sunset|Vi ser solnedgangen fra stranden.|We watch the sunset from the beach.
n|en solopgang|sunrise|Solopgangen er smuk om sommeren.|The sunrise is beautiful in summer.
n|en orm|worm|Fuglen spiser en orm.|The bird eats a worm.
n|en hjort|deer|Vi så en hjort i skoven.|We saw a deer in the forest.
n|et pindsvin|hedgehog|Et pindsvin bor i vores have.|A hedgehog lives in our garden.
n|en svane|swan|Svanen svømmer på søen.|The swan swims on the lake.
n|en krage|crow|En krage sidder på taget.|A crow is sitting on the roof.
n|en laks|salmon|Vi spiser laks til aftensmad.|We eat salmon for dinner.
n|en sild|herring|Til jul spiser vi sild.|At Christmas we eat herring.
n|en torsk|cod|Torsken er frisk fra havnen.|The cod is fresh from the harbour.
n|en reje|prawn|Vi spiser rejer på franskbrød.|We eat prawns on white bread.
n|franskbrød|white bread|Børnene kan lide franskbrød.|The children like white bread.
n|gær|yeast|Der skal gær i dejen.|The dough needs yeast.
n|en dej|dough|Dejen skal hvile en time.|The dough must rest for an hour.
n|eddike|vinegar|Kom lidt eddike i salaten.|Put a little vinegar in the salad.
n|sennep|mustard|Vil du have sennep på pølsen?|Would you like mustard on your sausage?
n|flødeskum|whipped cream|Vi spiser jordbær med flødeskum.|We eat strawberries with whipped cream.
n|kanel|cinnamon|Der er kanel i kagen.|There's cinnamon in the cake.
n|en mandel|almond|Til jul gemmer vi en mandel i risengrøden.|At Christmas we hide an almond in the rice pudding.
n|risengrød|rice pudding|Vi spiser risengrød juleaften.|We eat rice pudding on Christmas Eve.
n|flæskesteg|roast pork|Til jul spiser mange danskere flæskesteg.|At Christmas many Danes eat roast pork.
n|en kotelet|chop|Vi steger koteletter på panden.|We fry chops in the pan.
n|hakket oksekød|minced beef|Jeg køber hakket oksekød til frikadeller.|I buy minced beef for meatballs.
n|pålæg|sandwich toppings|Hvad vil du have som pålæg?|What would you like on your bread?
n|et menukort|menu|Må jeg se menukortet?|May I see the menu?
n|en hovedret|main course|Til hovedret får vi fisk.|For the main course we're having fish.
n|drikkepenge|tip|I Danmark giver man sjældent drikkepenge.|In Denmark people rarely tip.
n|et tastatur|keyboard|Tastaturet har æ, ø og å.|The keyboard has æ, ø and å.
n|en internetforbindelse|internet connection|Internetforbindelsen er langsom.|The internet connection is slow.
n|en vedhæftet fil|attachment|Jeg sender billedet som vedhæftet fil.|I'm sending the picture as an attachment.
n|et brugernavn|username|Skriv dit brugernavn og din adgangskode.|Type your username and password.
n|en opdatering|update|Telefonen skal have en opdatering.|The phone needs an update.
n|et opkald|phone call|Jeg venter på et vigtigt opkald.|I'm waiting for an important phone call.
n|en telefonsvarer|answering machine|Ring igen, telefonsvareren er fuld.|Call again, the answering machine is full.
n|en bydel|district|Vi bor i en ny bydel.|We live in a new district.
n|en baggård|backyard|Cyklerne står i baggården.|The bikes are in the backyard.
n|et hotelværelse|hotel room|Hotelværelset har udsigt over havet.|The hotel room has a sea view.
n|en reception|reception|Nøglen ligger i receptionen.|The key is at reception.
n|en flybillet|plane ticket|Flybilletten var billig.|The plane ticket was cheap.
n|en sikkerhedskontrol|security check|Der er lang kø i sikkerhedskontrollen.|There is a long queue at the security check.
n|et sæde|seat|Mit sæde er ved vinduet.|My seat is by the window.
n|en sikkerhedssele|seat belt|Spænd sikkerhedsselen.|Fasten your seat belt.
n|en motor|engine|Motoren vil ikke starte.|The engine won't start.
n|et dæk|tyre|Vi skifter dæk på bilen.|We change the tyres on the car.
n|en bremse|brake|Bremserne på cyklen virker ikke.|The brakes on the bike don't work.
n|en lygte|bike light|Husk lygter på cyklen.|Remember lights on your bike.
n|benzin|petrol|Benzin er dyrt i Danmark.|Petrol is expensive in Denmark.
n|vejarbejde|roadworks|Der er vejarbejde på motorvejen.|There are roadworks on the motorway.
n|en omvej|detour|Vi må tage en omvej.|We have to take a detour.
n|en genvej|shortcut|Jeg kender en genvej.|I know a shortcut.
n|en sti|path|Vi følger en smal sti gennem skoven.|We follow a narrow path through the forest.
n|en kikkert|binoculars|Vi ser på fugle med kikkert.|We watch birds through binoculars.
n|en lommelygte|torch|Tag en lommelygte med i teltet.|Take a torch into the tent.
n|en tændstik|match (for fire)|Han tænder lyset med en tændstik.|He lights the candle with a match.
n|et bål|bonfire|Vi sidder ved bålet og synger.|We sit by the bonfire and sing.
n|sankthansaften|Midsummer Eve|På sankthansaften tænder vi bål på stranden.|On Midsummer Eve we light bonfires on the beach.
n|fastelavn|Shrovetide (carnival)|Til fastelavn slår børnene katten af tønden.|At Shrovetide the children hit the barrel.
n|juleaften|Christmas Eve|Juleaften danser vi om juletræet.|On Christmas Eve we dance round the Christmas tree.
n|nytårsaften|New Year's Eve|Nytårsaften ser vi fyrværkeri.|On New Year's Eve we watch the fireworks.
n|fyrværkeri|fireworks|Hunden er bange for fyrværkeri.|The dog is afraid of fireworks.
n|en konfirmation|confirmation|Vi holder konfirmation for vores søn.|We are holding a confirmation for our son.
n|en barnedåb|christening|Barnedåben er i kirken på søndag.|The christening is in the church on Sunday.
n|en tale|speech|Han holder en tale ved brylluppet.|He gives a speech at the wedding.
n|pynt|decorations|Vi hænger pynt op til festen.|We hang up decorations for the party.
n|en buket|bouquet|Han giver hende en buket roser.|He gives her a bouquet of roses.
n|en potteplante|pot plant|Vi har mange potteplanter i vindueskarmen.|We have many pot plants on the windowsill.
n|en vindueskarm|windowsill|Katten ligger i vindueskarmen.|The cat is lying on the windowsill.
n|en skorsten|chimney|Der kommer røg ud af skorstenen.|Smoke is coming out of the chimney.
n|røg|smoke|Der er røg i køkkenet!|There's smoke in the kitchen!
n|en brandalarm|smoke alarm|Brandalarmen bipper.|The smoke alarm is beeping.
n|en brandslukker|fire extinguisher|Der hænger en brandslukker i gangen.|There is a fire extinguisher in the hallway.
n|en lås|lock|Låsen på døren er gået i stykker.|The lock on the door is broken.
n|en tyverialarm|burglar alarm|Huset har en tyverialarm.|The house has a burglar alarm.
n|en terrasse|patio|Vi spiser på terrassen om sommeren.|We eat on the patio in summer.
n|en græsplæne|lawn|Børnene spiller bold på græsplænen.|The children play ball on the lawn.
n|en hæk|hedge|Naboen klipper hækken.|The neighbour is cutting the hedge.
n|en plæneklipper|lawnmower|Plæneklipperen larmer.|The lawnmower is noisy.
n|en genbrugsstation|recycling centre|Vi kører de gamle møbler på genbrugsstationen.|We take the old furniture to the recycling centre.
n|en reklame|advert (flyer)|Postkassen er fuld af reklamer.|The letterbox is full of adverts.
n|et abonnement|subscription|Jeg har opsagt mit abonnement.|I have cancelled my subscription.
n|en sejltur|boat trip|Vi tager på sejltur i havnen.|We go on a boat trip in the harbour.
n|en køkkenhave|vegetable garden|Vi dyrker kartofler i køkkenhaven.|We grow potatoes in the vegetable garden.
n|en dyrlæge|vet|Vi tager katten til dyrlægen.|We take the cat to the vet.
n|en snor|string|Bind en snor om pakken.|Tie a string round the parcel.
n|lim|glue|Jeg har brug for lim til papiret.|I need glue for the paper.
n|gavepapir|wrapping paper|Har du noget gavepapir?|Do you have any wrapping paper?
n|en sløjfe|bow|Der er en rød sløjfe på pakken.|There's a red bow on the parcel.
n|en regnfrakke|raincoat|Tag regnfrakken på, det regner.|Put on your raincoat, it's raining.
n|gummistøvler|wellies|Børnene har gummistøvler på.|The children are wearing wellies.
n|en hættetrøje|hoodie|Han har en grå hættetrøje på.|He is wearing a grey hoodie.
n|et smykke|piece of jewellery|Hun har arvet et smykke fra sin mormor.|She inherited a piece of jewellery from her grandmother.
n|en halskæde|necklace|Hun har en halskæde af guld.|She has a gold necklace.
n|en ørering|earring|Jeg har tabt en ørering.|I've lost an earring.
n|en barbermaskine|razor|Han har købt en ny barbermaskine.|He has bought a new razor.
n|en hårtørrer|hairdryer|Hårtørreren er i badeværelset.|The hairdryer is in the bathroom.
n|en nøglering|key ring|Nøglerne hænger på en nøglering.|The keys are on a key ring.
n|et snørebånd|shoelace|Mit snørebånd er gået op.|My shoelace has come undone.
v|at kysse|to kiss|Hun kysser sin mand farvel.|She kisses her husband goodbye.
v|at kramme|to hug|Han krammer sin datter.|He hugs his daughter.
v|at ryge|to smoke|Han ryger ikke mere.|He doesn't smoke any more.
v|at bygge|to build|De bygger et nyt hus.|They are building a new house.
v|at hade|to hate|Jeg hader at stå tidligt op.|I hate getting up early.
v|at tabe|to drop|Pas på, du ikke taber glasset.|Be careful not to drop the glass.
v|at klippe|to cut (with scissors)|Frisøren klipper mit hår.|The hairdresser cuts my hair.
v|at skære|to slice|Skær tomaten i små stykker.|Cut the tomato into small pieces.
v|at sejle|to sail|Vi sejler til Bornholm.|We are sailing to Bornholm.
v|at koge|to boil|Vandet koger.|The water is boiling.
v|at stege|to fry|Far steger frikadeller.|Dad is frying meatballs.
v|at hoste|to cough|Barnet hoster om natten.|The child coughs at night.
v|at gemme sig|to hide|Katten gemmer sig under sengen.|The cat is hiding under the bed.
v|at banke|to knock|Nogen banker på døren.|Somebody is knocking on the door.
v|at drømme|to dream|Jeg drømmer om en lang ferie.|I dream of a long holiday.
v|at følge|to follow|Følg mig, jeg kender vejen.|Follow me, I know the way.
v|at trække|to pull|Træk i håndtaget.|Pull the handle.
v|at skubbe|to push|Skub døren op.|Push the door open.
v|at kaste|to throw|Kast bolden til mig!|Throw the ball to me!
v|at gribe|to catch|Hunden griber bolden.|The dog catches the ball.
v|at hoppe|to jump|Børnene hopper i vandet.|The children jump into the water.
v|at klatre|to climb|Drengen klatrer i træet.|The boy climbs the tree.
v|at ansøge om|to apply for|Han ansøger om et nyt job.|He is applying for a new job.
v|at ansætte|to hire|Firmaet ansætter ti nye medarbejdere.|The company is hiring ten new employees.
v|at fyre|to fire (dismiss)|Han blev fyret i sidste måned.|He was fired last month.
v|at sige op|to resign|Hun har sagt sit job op.|She has resigned from her job.
v|at spare|to save (money)|Vi sparer op til en ny bil.|We are saving up for a new car.
v|at låne ud|to lend|Biblioteket låner bøger ud.|The library lends out books.
v|at leje|to rent|Vi lejer et sommerhus i juli.|We are renting a summer house in July.
v|at eje|to own|De ejer to huse.|They own two houses.
v|at reparere|to repair|Mekanikeren reparerer min bil.|The mechanic is repairing my car.
v|at ordne|to fix|Kan du ordne min cykel?|Can you fix my bike?
v|at gå i stykker|to break down|Computeren er gået i stykker.|The computer has broken down.
v|at ødelægge|to ruin|Regnen ødelagde vores tur.|The rain ruined our trip.
v|at brække|to break (a bone)|Han har brækket armen.|He has broken his arm.
v|at bløde|to bleed|Hans næse bløder.|His nose is bleeding.
v|at hvile sig|to rest|Du skal hvile dig, når du er syg.|You should rest when you are ill.
v|at blive rask|to get well|Jeg håber, du bliver rask snart.|I hope you get well soon.
v|at undersøge|to examine|Lægen undersøger patienten.|The doctor examines the patient.
v|at tabe sig|to lose weight|Han vil gerne tabe sig.|He would like to lose weight.
v|at smide ud|to throw away|Smid de gamle aviser ud.|Throw away the old newspapers.
v|at gøre|to do|Hvad gør du i weekenden?|What are you doing at the weekend?
v|at forsøge|to attempt|Han forsøger at lære at svømme.|He is trying to learn to swim.
v|at lykkes|to succeed|Det lykkedes mig at finde en lejlighed.|I managed to find a flat.
v|at håbe|to hope|Jeg håber, det bliver godt vejr.|I hope the weather will be good.
v|at glæde sig til|to look forward to|Jeg glæder mig til ferien.|I'm looking forward to the holiday.
v|at savne|to miss (someone)|Jeg savner min familie.|I miss my family.
v|at nå|to make it in time|Jeg nåede ikke bussen.|I didn't make it to the bus in time.
v|at vende sig om|to turn around|Vend dig om!|Turn around!
v|at dreje|to turn (left or right)|Drej til højre ved kirken.|Turn right at the church.
v|at krydse|to cross|Kryds vejen ved lyskrydset.|Cross the road at the traffic lights.
v|at ankomme|to arrive|Toget ankommer klokken 14.|The train arrives at 2 pm.
v|at afgå|to depart|Flyet afgår fra gate 12.|The plane departs from gate 12.
v|at aflyse|to cancel|Koncerten er aflyst.|The concert has been cancelled.
v|at udsætte|to postpone|Mødet er udsat til i morgen.|The meeting has been postponed until tomorrow.
v|at pakke|to pack|Jeg pakker kufferten i aften.|I'm packing my suitcase tonight.
v|at aflevere|to hand in|Husk at aflevere opgaven på fredag.|Remember to hand in the assignment on Friday.
v|at bestå|to pass (an exam)|Hun bestod eksamen.|She passed the exam.
v|at dumpe|to fail (an exam)|Han dumpede til køreprøven.|He failed his driving test.
v|at tilmelde sig|to sign up|Jeg har tilmeldt mig et kursus.|I have signed up for a course.
v|at deltage|to take part|Alle må deltage i konkurrencen.|Everyone may take part in the competition.
v|at slå|to hit|Man må ikke slå.|You mustn't hit.
v|at sparke|to kick|Drengen sparker til bolden.|The boy kicks the ball.
v|at skyde|to shoot|Han skyder på mål.|He shoots at goal.
v|at stjæle|to steal|Nogen har stjålet min cykel.|Someone has stolen my bike.
v|at fange|to capture|Politiet fanger tyven.|The police capture the thief.
v|at redde|to rescue|Brandmanden redder en kat.|The firefighter rescues a cat.
v|at brænde|to burn|Huset brænder.|The house is on fire.
v|at advare|to warn|Vejrudsigten advarer mod storm.|The weather forecast warns of a storm.
v|at beskytte|to protect|Hjelmen beskytter dit hoved.|The helmet protects your head.
v|at love|to promise|Jeg lover at komme.|I promise to come.
v|at undskylde|to apologise|Han undskylder for sin fejl.|He apologises for his mistake.
v|at tilgive|to forgive|Kan du tilgive mig?|Can you forgive me?
v|at klage|to complain|Naboen klager over støjen.|The neighbour complains about the noise.
v|at skændes|to argue|De skændes om penge.|They argue about money.
v|at være enig|to agree|Jeg er enig med dig.|I agree with you.
v|at foreslå|to suggest|Jeg foreslår, at vi tager toget.|I suggest we take the train.
v|at anbefale|to recommend|Kan du anbefale en god restaurant?|Can you recommend a good restaurant?
v|at bede om|to ask for|Hun beder om hjælp.|She asks for help.
v|at takke|to thank|Jeg vil gerne takke dig for hjælpen.|I'd like to thank you for your help.
v|at byde på|to offer|Må jeg byde på en kop kaffe?|May I offer you a cup of coffee?
v|at gå ud|to go out|Vi går ud og spiser i aften.|We are going out to eat tonight.
v|at slappe af|to relax|I weekenden slapper jeg af.|At the weekend I relax.
v|at kede sig|to be bored|Børnene keder sig.|The children are bored.
v|at more sig|to have fun|Vi morede os til festen.|We had fun at the party.
v|at opleve|to experience|Vi oplevede meget på ferien.|We experienced a lot on holiday.
v|at samle på|to collect|Han samler på frimærker.|He collects stamps.
v|at plukke|to pick|Vi plukker æbler i haven.|We pick apples in the garden.
v|at vande|to water|Husk at vande blomsterne.|Remember to water the flowers.
v|at fodre|to feed|Hun fodrer katten to gange om dagen.|She feeds the cat twice a day.
v|at gø|to bark|Hunden gør ad postbudet.|The dog barks at the postman.
v|at bide|to bite|Hunden bider ikke.|The dog doesn't bite.
v|at stikke|to sting|Bien stak mig i armen.|The bee stung me on the arm.
v|at blæse|to blow|Det blæser meget i dag.|It's very windy today.
v|at tø|to thaw|Sneen tør i solen.|The snow is thawing in the sun.
v|at hælde|to pour|Hæld mælken i glasset.|Pour the milk into the glass.
v|at røre|to touch|Rør ikke ved kagen!|Don't touch the cake!
v|at blande|to mix|Bland mel og sukker.|Mix the flour and sugar.
v|at skrælle|to peel|Skræl kartoflerne.|Peel the potatoes.
v|at varme op|to heat up|Jeg varmer suppen op.|I'm heating up the soup.
v|at dække bord|to lay the table|Kan du dække bord?|Can you lay the table?
v|at vaske op|to do the dishes|Jeg vasker op efter maden.|I do the dishes after the meal.
v|at støvsuge|to vacuum|Jeg støvsuger hver lørdag.|I vacuum every Saturday.
v|at stryge|to iron|Jeg hader at stryge.|I hate ironing.
v|at sy|to sew|Min mormor syr sine egne kjoler.|My grandmother sews her own dresses.
v|at strikke|to knit|Hun strikker en hue til sit barnebarn.|She is knitting a hat for her grandchild.
v|at låse|to lock|Husk at låse døren.|Remember to lock the door.
v|at ringe på|to ring the doorbell|Postbudet ringer på.|The postman rings the doorbell.
v|at bytte|to exchange|Kan jeg bytte bukserne?|Can I exchange the trousers?
v|at have på|to wear|Hun har en blå kjole på.|She is wearing a blue dress.
v|at klæde sig på|to get dressed|Børnene klæder sig på.|The children are getting dressed.
v|at tage af|to take off|Tag skoene af.|Take off your shoes.
v|at børste tænder|to brush your teeth|Husk at børste tænder.|Remember to brush your teeth.
v|at barbere sig|to shave|Han barberer sig hver morgen.|He shaves every morning.
v|at gå i bad|to have a shower|Jeg går i bad efter træning.|I have a shower after training.
v|at sove over sig|to oversleep|Jeg sov over mig i morges.|I overslept this morning.
v|at lægge sig|to lie down|Jeg lægger mig på sofaen.|I lie down on the sofa.
v|at sætte sig|to sit down|Sæt dig ned.|Sit down.
v|at rejse sig|to stand up|Eleverne rejser sig, når læreren kommer ind.|The pupils stand up when the teacher comes in.
v|at forsvinde|to disappear|Min nøgle er forsvundet.|My key has disappeared.
v|at dukke op|to turn up|Han dukkede op klokken ti.|He turned up at ten o'clock.
v|at ske|to happen|Hvad er der sket?|What has happened?
v|at ændre|to alter|Vi har ændret planen.|We have changed the plan.
v|at stige|to rise|Priserne stiger hele tiden.|Prices keep rising.
v|at vokse|to grow|Børn vokser hurtigt.|Children grow fast.
v|at dø|to die|Hans hund døde i sidste uge.|His dog died last week.
v|at føde|to give birth|Hun fødte en datter i går.|She gave birth to a daughter yesterday.
v|at blive skilt|to get divorced|De blev skilt efter ti år.|They got divorced after ten years.
v|at opdrage|to bring up|Det er svært at opdrage børn.|It's hard to bring up children.
v|at skælde ud|to scold|Mor skælder ud, fordi jeg kommer sent hjem.|Mum scolds me because I come home late.
v|at rose|to praise|Læreren roser eleven.|The teacher praises the pupil.
v|at stole på|to trust|Jeg stoler på dig.|I trust you.
v|at tvivle|to doubt|Jeg tvivler på, at han kommer.|I doubt that he will come.
v|at gætte|to guess|Gæt, hvem jeg mødte i dag!|Guess who I met today!
v|at regne med|to expect|Jeg regner med at komme klokken fem.|I expect to arrive at five o'clock.
v|at foretrække|to prefer|Jeg foretrækker te frem for kaffe.|I prefer tea to coffee.
v|at sammenligne|to compare|Sammenlign de to priser.|Compare the two prices.
v|at oversætte|to translate|Kan du oversætte brevet?|Can you translate the letter?
v|at udtale|to pronounce|Hvordan udtaler man dette ord?|How do you pronounce this word?
v|at slå op|to look up|Slå ordet op i ordbogen.|Look the word up in the dictionary.
v|at tilbringe|to spend (time)|Vi tilbringer sommeren i Sverige.|We spend the summer in Sweden.
v|at give op|to give up|Giv ikke op!|Don't give up!
v|at fortsætte|to continue|Vi fortsætter i morgen.|We'll continue tomorrow.
v|at holde op|to stop|Det er holdt op med at regne.|It has stopped raining.
v|at holde|to hold|Hold godt fast!|Hold on tight!
v|at holde af|to be fond of|Jeg holder meget af min bedstemor.|I'm very fond of my grandmother.
v|at hænge|to hang|Jakken hænger på krogen.|The jacket is hanging on the hook.
v|at mødes|to meet up|Vi mødes på caféen klokken tre.|We are meeting at the café at three o'clock.
v|at skrive under|to sign|Skriv under her.|Sign here.
v|at udfylde|to fill in|Udfyld skemaet, tak.|Fill in the form, please.
v|at forkøle sig|to catch a cold|Jeg har forkølet mig.|I've caught a cold.
v|at kaste op|to be sick (vomit)|Barnet har kastet op i nat.|The child was sick last night.
v|at besvime|to faint|Hun besvimede i varmen.|She fainted in the heat.
v|at hæve penge|to withdraw money|Jeg hæver penge i automaten.|I withdraw money from the machine.
v|at ringe efter|to call for|Ring efter en ambulance!|Call an ambulance!
v|at bestille tid|to make an appointment|Jeg skal bestille tid hos lægen.|I need to make an appointment with the doctor.
v|at måle|to measure|Sygeplejersken måler mit blodtryk.|The nurse measures my blood pressure.
v|at arbejde over|to work late|Jeg skal arbejde over i aften.|I have to work late tonight.
v|at holde pause|to take a break|Vi holder pause klokken tolv.|We take a break at twelve.
v|at overføre|to transfer|Jeg overfører pengene i morgen.|I'll transfer the money tomorrow.
v|at veksle|to change (money)|Jeg skal veksle kroner til euro.|I need to change kroner into euros.
v|at taste|to type in|Tast koden og tryk OK.|Type in the code and press OK.
v|at trykke|to press|Tryk på knappen.|Press the button.
v|at logge ind|to log in|Log ind på hjemmesiden.|Log in to the website.
v|at slette|to delete|Jeg har slettet beskeden.|I have deleted the message.
v|at oplade|to charge (a battery)|Jeg skal oplade min telefon.|I need to charge my phone.
v|at opdatere|to update|Husk at opdatere appen.|Remember to update the app.
v|at lægge på|to hang up (the phone)|Hun lagde på uden at sige farvel.|She hung up without saying goodbye.
v|at tage telefonen|to answer the phone|Kan du tage telefonen?|Can you answer the phone?
v|at skrive sammen|to text each other|Vi skriver sammen hver aften.|We text each other every evening.
v|at undre sig|to wonder|Jeg undrer mig over, hvorfor han ikke ringer.|I wonder why he doesn't call.
v|at hygge sig|to have a cosy time|Vi hygger os med kaffe og kage.|We have a cosy time with coffee and cake.
v|at feste|to party|De fester hele natten.|They party all night.
v|at træne|to work out|Jeg træner tre gange om ugen.|I work out three times a week.
v|at vandre|to hike|Vi vandrer i bjergene i Norge.|We hike in the mountains in Norway.
v|at dykke|to dive|Han dykker efter muslinger.|He dives for mussels.
v|at sole sig|to sunbathe|Vi soler os på stranden.|We sunbathe on the beach.
v|at reservere|to reserve|Jeg har reserveret et bord til fire.|I've reserved a table for four.
v|at tjekke ind|to check in|Vi tjekker ind på hotellet klokken tre.|We check in at the hotel at three.
v|at pakke ud|to unpack|Jeg pakker kufferten ud.|I unpack the suitcase.
v|at nå frem|to get there|Vi nåede frem sent om aftenen.|We got there late in the evening.
v|at fare vild|to get lost|Vi for vild i skoven.|We got lost in the forest.
v|at spørge om vej|to ask for directions|Jeg spørger en politibetjent om vej.|I ask a police officer for directions.
v|at gå glip af|to miss out on|Jeg gik glip af festen.|I missed the party.
v|at komme i tanke om|to suddenly remember|Jeg kom i tanke om, at jeg havde glemt nøglen.|I suddenly remembered I'd forgotten the key.
v|at ombestemme sig|to change one's mind|Hun har ombestemt sig.|She has changed her mind.
v|at flytte ind|to move in|Vi flytter ind i den nye lejlighed i maj.|We move into the new flat in May.
v|at flytte ud|to move out|De flytter ud af huset i næste måned.|They move out of the house next month.
v|at bore|to drill|Han borer et hul i væggen.|He drills a hole in the wall.
v|at skrue|to screw|Skru skruen fast.|Screw the screw in tight.
v|at samle|to put together|Vi samler den nye reol.|We put together the new bookcase.
v|at tørre støv af|to dust|Jeg tørrer støv af i stuen.|I dust the living room.
v|at rede seng|to make the bed|Husk at rede seng.|Remember to make the bed.
v|at slå græs|to mow the lawn|Far slår græs om lørdagen.|Dad mows the lawn on Saturdays.
v|at luge|to weed|Hun luger i blomsterbedet.|She weeds the flower bed.
v|at så|to sow|Vi sår gulerødder i haven.|We sow carrots in the garden.
v|at høste|to harvest|Vi høster æblerne i september.|We harvest the apples in September.
v|at lufte|to walk (a dog)|Jeg lufter hunden hver morgen.|I walk the dog every morning.
v|at riste|to toast|Jeg rister brødet.|I toast the bread.
v|at grille|to barbecue|Vi griller i haven om sommeren.|We barbecue in the garden in summer.
v|at hakke|to chop|Hak løget fint.|Chop the onion finely.
v|at piske|to whisk|Pisk æggene sammen.|Whisk the eggs together.
v|at krydre|to season|Krydr kødet med salt og peber.|Season the meat with salt and pepper.
v|at rive|to grate|Riv osten.|Grate the cheese.
v|at fryse ned|to freeze (food)|Jeg fryser resten af suppen ned.|I'm freezing the rest of the soup.
v|at tø op|to defrost|Kødet skal tø op.|The meat needs to defrost.
v|at servere|to serve|Maden serveres klokken seks.|The food is served at six.
v|at passe til|to go with|Tasken passer til skoene.|The bag goes with the shoes.
v|at klæde|to suit|Farven klæder dig.|The colour suits you.
v|at melde|to report|Han melder tyveriet til politiet.|He reports the theft to the police.
v|at bryde ind|to break in|Nogen har brudt ind i bilen.|Someone has broken into the car.
v|at kalde|to call (name)|Vi kalder ham Bobby.|We call him Bobby.
v|at skrige|to scream|Barnet skriger af skræk.|The child screams in fear.
v|at drille|to tease|Storebror driller sin søster.|Big brother teases his sister.
v|at slås|to fight|Drengene slås i skolegården.|The boys are fighting in the playground.
v|at blive uvenner|to fall out|Vi blev uvenner, men nu er vi gode venner igen.|We fell out, but now we're good friends again.
v|at lære at kende|to get to know|Jeg vil gerne lære dig bedre at kende.|I'd like to get to know you better.
v|at præsentere|to introduce|Må jeg præsentere min kone?|May I introduce my wife?
v|at hilse på|to say hello to|Kom og hils på min mor.|Come and say hello to my mother.
v|at forelske sig|to fall in love|Han har forelsket sig i en pige fra klassen.|He has fallen in love with a girl in his class.
v|at være kærester|to be a couple|De har været kærester i to år.|They have been together for two years.
v|at gå fra hinanden|to split up|De gik fra hinanden sidste år.|They split up last year.
v|at opføre sig|to behave|Opfør dig ordentligt!|Behave yourself!
v|at passe på|to take care of|Pas godt på dig selv.|Take good care of yourself.
v|at klare|to cope with|Jeg kan godt klare det selv.|I can cope with it myself.
v|at orke|to have the energy for|Jeg orker ikke at lave mad i dag.|I don't have the energy to cook today.
v|at gide|to bother|Gider du hjælpe mig?|Would you mind helping me?
v|at blive færdig|to finish|Jeg bliver færdig klokken fem.|I'll finish at five.
v|at komme i gang|to get started|Lad os komme i gang!|Let's get started!
v|at rette|to correct|Læreren retter vores stile.|The teacher corrects our essays.
v|at skrive af|to copy (in writing)|Skriv ordene af fra tavlen.|Copy the words from the board.
v|at strege under|to underline|Streg de vigtige ord under.|Underline the important words.
v|at krydse af|to tick off|Kryds det rigtige svar af.|Tick the right answer.
v|at række hånden op|to put up your hand|Ræk hånden op, hvis du ved svaret.|Put up your hand if you know the answer.
v|at pjække|to skip school|Han pjækkede fra skolen i går.|He skipped school yesterday.
v|at bremse|to brake|Bilen bremser hårdt.|The car brakes hard.
v|at overhale|to overtake|Lastbilen overhaler bussen.|The lorry overtakes the bus.
v|at klæde sig ud|to dress up|Børnene klæder sig ud til festen.|The children dress up for the party.
v|at pynte|to decorate|Vi pynter huset til jul.|We decorate the house for Christmas.
v|at skåle|to toast (with a drink)|Vi skåler for brudeparret.|We toast the bride and groom.
v|at gratulere|to congratulate|Vi gratulerer dig med den nye bolig.|We congratulate you on your new home.
v|at holde fest|to throw a party|Vi holder fest for hele klassen.|We are throwing a party for the whole class.
v|at låse op|to unlock|Lås døren op.|Unlock the door.
v|at rydde|to clear|Vi rydder sneen fra fortovet.|We clear the snow from the pavement.
v|at slæbe|to drag|Han slæber den tunge kuffert.|He drags the heavy suitcase.
v|at bøje|to bend|Bøj knæene, når du løfter.|Bend your knees when you lift.
v|at strække ud|to stretch|Jeg strækker ud efter løbeturen.|I stretch after my run.
v|at gabe|to yawn|Han gaber, fordi han er træt.|He yawns because he's tired.
v|at snorke|to snore|Min mand snorker om natten.|My husband snores at night.
v|at hikke|to have hiccups|Barnet hikker.|The child has hiccups.
v|at klø|to itch|Myggestikket klør.|The mosquito bite itches.
v|at kradse|to scratch|Katten kradser i døren.|The cat scratches at the door.
v|at fløjte|to whistle|Han fløjter en sang.|He whistles a song.
v|at nynne|to hum|Hun nynner, mens hun laver mad.|She hums while she cooks.
v|at ringe tilbage|to call back|Jeg ringer tilbage om lidt.|I'll call back in a moment.
v|at sende videre|to forward|Kan du sende mailen videre?|Can you forward the email?
v|at skrive ned|to write down|Skriv nummeret ned.|Write down the number.
v|at afmelde sig|to unsubscribe|Jeg har afmeldt mig nyhedsbrevet.|I've unsubscribed from the newsletter.
v|at gange|to multiply|Gang tre med fire.|Multiply three by four.
v|at lægge sammen|to add up|Læg tallene sammen.|Add up the numbers.
v|at trække fra|to subtract|Træk fem fra ti.|Subtract five from ten.
v|at skille|to separate|Skil æggeblommen fra hviden.|Separate the yolk from the white.
v|at knuse|to crush|Knus hvidløget.|Crush the garlic.
v|at smelte|to melt|Smørret smelter i panden.|The butter melts in the pan.
v|at brænde på|to burn (food)|Maden er brændt på.|The food has burnt.
v|at koge over|to boil over|Mælken koger over.|The milk is boiling over.
v|at tørre op|to wipe up|Tør mælken op fra gulvet.|Wipe the milk up from the floor.
v|at dyrke|to grow (cultivate)|Vi dyrker tomater i haven.|We grow tomatoes in the garden.
v|at pakke ind|to wrap|Hun pakker gaven ind.|She wraps the present.
v|at binde|to tie|Bind dine snørebånd.|Tie your shoelaces.
v|at lime|to glue|Lim de to stykker sammen.|Glue the two pieces together.
v|at klippe ud|to cut out|Klip billedet ud af avisen.|Cut the picture out of the newspaper.
a|tyk|thick|Bogen er meget tyk.|The book is very thick.
a|rig|rich|Han er rig og har tre biler.|He is rich and has three cars.
a|fattig|poor|Familien er fattig.|The family is poor.
a|skilt|divorced|Mine forældre er skilt.|My parents are divorced.
a|smal|narrow|Gaden er meget smal.|The street is very narrow.
a|bred|wide|Floden er bred.|The river is wide.
a|dyb|deep|Søen er dyb.|The lake is deep.
a|arbejdsløs|unemployed|Han har været arbejdsløs i et år.|He has been unemployed for a year.
a|ledig|vacant|Er denne plads ledig?|Is this seat vacant?
a|optaget|occupied|Toilettet er optaget.|The toilet is occupied.
a|stolt|proud|Jeg er stolt af min datter.|I'm proud of my daughter.
a|misundelig|envious|Han er misundelig på sin bror.|He is envious of his brother.
a|skuffet|disappointed|Jeg er skuffet over resultatet.|I'm disappointed with the result.
a|overrasket|surprised|Hun blev overrasket over gaven.|She was surprised by the present.
a|bekymret|worried|Mor er bekymret for sin søn.|Mum is worried about her son.
a|taknemmelig|grateful|Jeg er taknemmelig for jeres hjælp.|I'm grateful for your help.
a|høflig|polite|Han er altid høflig.|He is always polite.
a|uhøflig|rude|Det er uhøfligt at afbryde.|It's rude to interrupt.
a|ærlig|honest|Vær ærlig over for mig.|Be honest with me.
a|doven|lazy|Katten er doven.|The cat is lazy.
a|flittig|hard-working|Hun er en flittig elev.|She is a hard-working pupil.
a|genert|shy|Han er lidt genert.|He is a little shy.
a|modig|brave|Brandmanden er modig.|The firefighter is brave.
a|klog|clever|Hun er meget klog.|She is very clever.
a|dum|stupid|Det var et dumt spørgsmål.|That was a stupid question.
a|tålmodig|patient|Man skal være tålmodig med børn.|You have to be patient with children.
a|hjælpsom|helpful|Personalet er meget hjælpsomt.|The staff are very helpful.
a|ensom|lonely|Han føler sig ensom.|He feels lonely.
a|lykkelig|happy (in life)|De er lykkelige sammen.|They are happy together.
a|heldig|lucky|Du er heldig, at du har fri.|You are lucky to have the day off.
a|uheldig|unlucky|Jeg var uheldig og nåede ikke bussen.|I was unlucky and missed the bus.
a|farlig|dangerous|Det er farligt at cykle uden lys.|It's dangerous to cycle without lights.
a|tryg|safe (feeling safe)|Børnene føler sig trygge.|The children feel safe.
a|sund|healthy|Det er sundt at spise grøntsager.|It's healthy to eat vegetables.
a|usund|unhealthy|Slik er usundt.|Sweets are unhealthy.
a|fed|fatty|Maden er for fed.|The food is too fatty.
a|krydret|spicy|Maden er meget krydret.|The food is very spicy.
a|mæt|full (after eating)|Nej tak, jeg er mæt.|No thanks, I'm full.
a|moden|ripe|Bananerne er modne.|The bananas are ripe.
a|rådden|rotten|Æblet er råddent.|The apple is rotten.
a|ødelagt|broken|Min telefon er ødelagt.|My phone is broken.
a|færdig|finished|Er du færdig med dine lektier?|Have you finished your homework?
a|almindelig|ordinary|Det er en helt almindelig dag.|It's a completely ordinary day.
a|mærkelig|strange|Der er en mærkelig lugt her.|There is a strange smell in here.
a|nødvendig|necessary|Er det nødvendigt at tage bilen?|Is it necessary to take the car?
a|mulig|possible|Er det muligt at betale med kort?|Is it possible to pay by card?
a|umulig|impossible|Det er umuligt at finde en parkeringsplads.|It's impossible to find a parking space.
a|behagelig|comfortable|Sofaen er meget behagelig.|The sofa is very comfortable.
a|hyggelig|cosy|Vi havde en hyggelig aften.|We had a cosy evening.
a|pæn|nice-looking|Du ser pæn ud i dag.|You look nice today.
a|gammeldags|old-fashioned|Hans tøj er gammeldags.|His clothes are old-fashioned.
a|offentlig|public|Der er et offentligt toilet på stationen.|There is a public toilet at the station.
a|kendt|famous|Han er en kendt skuespiller.|He is a famous actor.
a|fremmed|unfamiliar|Børn skal ikke gå med fremmede mennesker.|Children shouldn't go with strangers.
a|udenlandsk|foreign|Hun læser en udenlandsk avis.|She reads a foreign newspaper.
a|præcis|exact|Hvad er den præcise pris?|What is the exact price?
a|punktlig|punctual|Toget er punktligt.|The train is punctual.
a|forsinket|delayed|Flyet er forsinket.|The plane is delayed.
a|indviklet|complicated|Reglerne er meget indviklede.|The rules are very complicated.
a|enkel|simple|Opskriften er enkel.|The recipe is simple.
a|tydelig|clear|Hun taler tydeligt.|She speaks clearly.
a|larmende|noisy|Gaden er meget larmende.|The street is very noisy.
a|fredelig|peaceful|Det er en fredelig landsby.|It's a peaceful village.
a|fugtig|damp|Kælderen er fugtig.|The basement is damp.
a|kølig|cool|Det er en kølig sommeraften.|It's a cool summer evening.
a|blæsende|windy|Det er meget blæsende ved kysten.|It's very windy on the coast.
a|skyet|cloudy|I morgen bliver det skyet.|Tomorrow it will be cloudy.
a|solrig|sunny|Vi fik en solrig dag på stranden.|We had a sunny day on the beach.
a|glat|slippery|Vejen er glat i dag.|The road is slippery today.
a|lun|mild|Det er en lun aften.|It's a mild evening.
a|spændende|exciting|Kampen var meget spændende.|The match was very exciting.
a|skøn|wonderful|Hvor er det skønt at være hjemme.|How wonderful it is to be home.
a|frygtelig|terrible|Vejret er frygteligt.|The weather is terrible.
a|svimmel|dizzy|Jeg bliver svimmel, når jeg rejser mig.|I feel dizzy when I stand up.
a|forkølet|having a cold|Jeg er forkølet og snotter.|I have a cold and a runny nose.
a|hæs|hoarse|Han er hæs efter koncerten.|He is hoarse after the concert.
a|hævet|swollen|Hans kind er hævet.|His cheek is swollen.
a|øm|sore|Mine ben er ømme efter turen.|My legs are sore after the trip.
a|døv|deaf|Min bedstefar er næsten døv.|My grandfather is almost deaf.
a|forelsket|in love|Han er forelsket i sin nabo.|He is in love with his neighbour.
a|urolig|restless|Barnet er uroligt om natten.|The child is restless at night.
a|ansat|employed|Hun er ansat på et hospital.|She is employed at a hospital.
a|sygemeldt|on sick leave|Han er sygemeldt i to uger.|He is on sick leave for two weeks.
a|udsolgt|sold out|Billetterne er udsolgt.|The tickets are sold out.
a|nedsat|reduced (price)|Jakken er nedsat til halv pris.|The jacket is reduced to half price.
a|tæt|dense|Skoven er meget tæt.|The forest is very dense.
a|fjern|distant|Han bor i et fjernt land.|He lives in a distant country.
a|nærmeste|nearest|Hvor er det nærmeste apotek?|Where is the nearest pharmacy?
a|stejl|steep|Bakken er meget stejl.|The hill is very steep.
a|mudret|muddy|Stien er mudret efter regnen.|The path is muddy after the rain.
a|tåget|foggy|Det er tåget over søen i dag.|It's foggy over the lake today.
a|regnfuld|rainy|Det har været en regnfuld sommer.|It has been a rainy summer.
a|frossen|frozen|Søen er frossen.|The lake is frozen.
a|hed|very hot|Det er en hed sommerdag.|It's a hot summer day.
a|skarp|sharp|Kniven er skarp.|The knife is sharp.
a|sløv|blunt|Saksen er sløv.|The scissors are blunt.
a|ru|rough|Væggen er ru.|The wall is rough.
a|blank|shiny|Bilen er helt blank.|The car is completely shiny.
a|stram|tight|Bukserne er for stramme.|The trousers are too tight.
a|løs|loose|Skjorten er for løs.|The shirt is too loose.
a|fyldt|filled|Kufferten er fyldt med tøj.|The suitcase is filled with clothes.
a|saftig|juicy|Appelsinen er saftig.|The orange is juicy.
a|sprød|crispy|Kiksene er sprøde.|The biscuits are crispy.
a|mør|tender|Kødet er mørt.|The meat is tender.
a|sej|tough (chewy)|Kødet er sejt.|The meat is tough.
a|hjemmelavet|home-made|Kagen er hjemmelavet.|The cake is home-made.
a|ordentlig|tidy (proper)|Han har altid et ordentligt værelse.|He always keeps a tidy room.
a|rodet|messy|Mit værelse er rodet.|My room is messy.
a|sjusket|sloppy|Hans håndskrift er sjusket.|His handwriting is sloppy.
a|morsom|amusing|Det var en morsom historie.|It was an amusing story.
a|underlig|odd|Han er en underlig fyr.|He's an odd guy.
a|sjælden|rare|Det er en sjælden fugl.|It's a rare bird.
a|forrige|previous|Forrige uge var jeg syg.|The week before last I was ill.
a|kommende|coming|I den kommende uge har jeg fri.|In the coming week I'm off.
a|hemmelig|secret|Det er en hemmelig plan.|It's a secret plan.
a|berømt|celebrated|Han er en berømt forfatter.|He is a celebrated author.
a|usikker|unsure|Jeg er usikker på svaret.|I'm unsure about the answer.
a|tilladt|allowed|Det er ikke tilladt at ryge her.|Smoking is not allowed here.
a|forbudt|forbidden|Det er forbudt at parkere her.|Parking is forbidden here.
a|gyldig|valid|Dit pas er ikke gyldigt længere.|Your passport is no longer valid.
a|parat|prepared|Er alle parate?|Is everyone prepared?
a|ligegyldig|unimportant|Det er ligegyldigt for mig.|It doesn't matter to me.
a|ens|identical|De to jakker er helt ens.|The two jackets are identical.
a|lignende|similar|Jeg har en lignende cykel.|I have a similar bike.
a|modsat|opposite (contrary)|Han går i den modsatte retning.|He walks in the opposite direction.
a|brændt|burnt|Brødet er brændt.|The bread is burnt.
a|rå|raw|Man skal ikke spise rå kylling.|You shouldn't eat raw chicken.
a|kogt|boiled|Jeg kan lide kogte kartofler.|I like boiled potatoes.
a|stegt|fried|Vi spiser stegt fisk.|We eat fried fish.
a|festlig|festive|Det var en festlig aften.|It was a festive evening.
a|højtidelig|solemn|Det var en højtidelig dag i kirken.|It was a solemn day in the church.
a|pyntet|decorated|Stuen er pyntet til jul.|The living room is decorated for Christmas.
a|låst|locked|Bilen er låst.|The car is locked.
a|ulåst|unlocked|Døren var ulåst.|The door was unlocked.
a|udhvilet|rested|Jeg er udhvilet efter ferien.|I'm rested after the holiday.
a|kvalm|nauseous|Jeg er kvalm efter turen med båden.|I feel sick after the boat trip.
a|bleg|pale|Du ser bleg ud.|You look pale.
a|solbrændt|sunburnt|Han er solbrændt efter en dag på stranden.|He is sunburnt after a day on the beach.
a|mørkhåret|dark-haired|Hans kone er mørkhåret.|His wife is dark-haired.
a|kraftig|heavy (of rain)|Det regner kraftigt.|It's raining heavily.
a|tilfældig|by chance|Vi mødtes helt tilfældigt.|We met completely by chance.
a|lettet|relieved|Jeg er lettet over, at alt gik godt.|I'm relieved that everything went well.
a|spændt|eager (excited)|Jeg er spændt på resultatet.|I'm eager to hear the result.
a|rystet|shaken|Hun var rystet efter ulykken.|She was shaken after the accident.
x|sjældent|rarely|Han ringer sjældent hjem.|He rarely calls home.
x|hos|at someone's place|Jeg bor hos mine forældre.|I live at my parents' place.
x|over for|opposite|Apoteket ligger over for banken.|The pharmacy is opposite the bank.
x|ingenting|nothing|Jeg har ingenting at lave.|I have nothing to do.
x|væk|away|Hunden løb væk.|The dog ran away.
x|i overmorgen|the day after tomorrow|Vi rejser i overmorgen.|We are leaving the day after tomorrow.
x|i forgårs|the day before yesterday|I forgårs var jeg syg.|The day before yesterday I was ill.
x|for nylig|recently|Jeg har for nylig købt en bil.|I recently bought a car.
x|hele tiden|all the time|Han snakker hele tiden.|He talks all the time.
x|indtil|until|Jeg arbejder indtil fem.|I work until five.
x|siden|since|Jeg har boet her siden 2020.|I have lived here since 2020.
x|mens|while|Jeg lytter til radio, mens jeg laver mad.|I listen to the radio while I cook.
x|når|when (every time)|Når det regner, tager jeg bussen.|When it rains, I take the bus.
x|da|when (once, in the past)|Da jeg var barn, boede jeg i Iran.|When I was a child, I lived in Iran.
x|hvis|if|Hvis det regner, bliver vi hjemme.|If it rains, we'll stay at home.
x|selvom|although|Selvom han er syg, går han på arbejde.|Although he is ill, he goes to work.
x|så|so|Jeg var træt, så jeg gik i seng.|I was tired, so I went to bed.
x|både … og|both … and|Hun taler både engelsk og fransk.|She speaks both English and French.
x|enten … eller|either … or|Vi tager enten toget eller bussen.|We'll take either the train or the bus.
x|hverken … eller|neither … nor|Han drikker hverken kaffe eller te.|He drinks neither coffee nor tea.
x|omkring|around|Vi går en tur omkring søen.|We go for a walk around the lake.
x|gennem|through|Vi kører gennem byen.|We drive through the town.
x|langs|along|Vi går langs stranden.|We walk along the beach.
x|uden for|outside of|Jeg venter uden for butikken.|I'll wait outside the shop.
x|indenfor|indoors|Det er koldt, så vi bliver indenfor.|It's cold, so we're staying indoors.
x|udenfor|outdoors|Børnene leger udenfor.|The children are playing outdoors.
x|ovenpå|upstairs|Soveværelset ligger ovenpå.|The bedroom is upstairs.
x|nedenunder|downstairs|Køkkenet er nedenunder.|The kitchen is downstairs.
x|overalt|everywhere|Der er sne overalt.|There is snow everywhere.
x|ingen steder|nowhere|Jeg kan ingen steder finde min pung.|I can't find my wallet anywhere.
x|nogensinde|ever|Har du nogensinde været i Grønland?|Have you ever been to Greenland?
x|endnu|yet|Jeg har ikke spist endnu.|I haven't eaten yet.
x|endelig|finally|Endelig er det weekend!|Finally it's the weekend!
x|pludselig|suddenly|Pludselig begyndte det at regne.|Suddenly it started to rain.
x|heldigvis|luckily|Heldigvis kom ingen til skade.|Luckily nobody was hurt.
x|faktisk|actually|Jeg kan faktisk godt lide fisk.|Actually I quite like fish.
x|især|especially|Jeg kan lide frugt, især jordbær.|I like fruit, especially strawberries.
x|ellers|otherwise|Skynd dig, ellers kommer vi for sent.|Hurry up, otherwise we'll be late.
x|i stedet for|instead of|Jeg drikker te i stedet for kaffe.|I drink tea instead of coffee.
x|ifølge|according to|Ifølge vejrudsigten bliver det regnvejr.|According to the forecast it's going to rain.
x|på grund af|because of|Toget er forsinket på grund af sne.|The train is delayed because of snow.
x|cirka|approximately|Turen tager cirka en time.|The trip takes about an hour.
x|ret|quite|Det er ret koldt i dag.|It's quite cold today.
x|for|too|Kaffen er for varm.|The coffee is too hot.
x|temmelig|rather|Filmen var temmelig lang.|The film was rather long.
x|lige så|just as|Hun er lige så høj som sin mor.|She is just as tall as her mother.
x|mindst|at least|Du skal sove mindst otte timer.|You should sleep at least eight hours.
x|højst|at most|Turen tager højst ti minutter.|The trip takes ten minutes at most.
x|hinanden|each other|De elsker hinanden.|They love each other.
x|selv|oneself|Jeg har bygget huset selv.|I built the house myself.
x|bagved|behind (it)|Haven ligger bagved huset.|The garden is behind the house.
x|forrest|at the front|Jeg sidder forrest i bussen.|I sit at the front of the bus.
x|bagerst|at the back|Vi sidder bagerst i klassen.|We sit at the back of the class.
x|midt i|in the middle of|Han står midt i stuen.|He's standing in the middle of the room.
x|rundt om|round|Vi sidder rundt om bordet.|We sit round the table.
x|forbi|past (going by)|Bussen kører forbi skolen.|The bus drives past the school.
x|tværs over|across|Han svømmer tværs over søen.|He swims across the lake.
x|ad|by way of|Vi går ad stien.|We walk along the path.
x|mod|towards|Vi kører mod nord.|We drive towards the north.
x|blandt|among|Han sidder blandt vennerne.|He sits among his friends.
x|udover|apart from|Udover dansk taler han tysk.|Apart from Danish he speaks German.
x|inden|before (by)|Jeg skal være hjemme inden ti.|I have to be home by ten.
x|for … siden|… ago|Jeg kom til Danmark for tre år siden.|I came to Denmark three years ago.
x|i løbet af|during|Jeg ringer i løbet af dagen.|I'll call during the day.
x|hver gang|every time|Hver gang jeg ringer, er han optaget.|Every time I call, he's busy.
x|nogle|some|Jeg har købt nogle æbler.|I have bought some apples.
x|flere|several|Jeg har flere spørgsmål.|I have several questions.
x|de fleste|most (people)|De fleste danskere cykler.|Most Danes cycle.
x|begge|both|Begge mine brødre bor i Odense.|Both my brothers live in Odense.
x|ingen af dem|neither of them|Ingen af dem kunne komme.|Neither of them could come.
x|hvorfor ikke|why not|Hvorfor ikke tage toget?|Why not take the train?
x|hvor længe|how long|Hvor længe har du boet her?|How long have you lived here?
x|hvor tit|how often|Hvor tit træner du?|How often do you work out?
x|hvad for en|which one|Hvad for en jakke vil du have?|Which jacket do you want?
x|sådan|like that|Sådan gør man.|That's how you do it.
x|sådan en|such a|Jeg vil også have sådan en cykel.|I want a bike like that too.
x|ligesom|like (just as)|Hun synger ligesom sin mor.|She sings like her mother.
x|end|than|Han er højere end mig.|He is taller than me.
x|som|as|Jeg bruger kassen som bord.|I use the box as a table.
x|vel|I suppose|Du kommer vel i morgen?|You're coming tomorrow, I suppose?
x|nemlig|you see|Jeg kan ikke komme, jeg er nemlig syg.|I can't come; you see, I'm ill.
x|egentlig|really (in fact)|Hvad laver du egentlig?|What do you really do?
x|vist|I believe|Han er vist syg i dag.|I believe he's ill today.
x|med det samme|right away|Jeg kommer med det samme.|I'm coming right away.
x|af og til|now and then|Af og til spiser vi ude.|Now and then we eat out.
x|i lang tid|for ages|Jeg har ikke set ham i lang tid.|I haven't seen him for ages.
x|lige før|just before|Toget kørte, lige før vi kom.|The train left just before we arrived.
x|lige efter|just after|Han ringede lige efter frokost.|He called just after lunch.
x|i forvejen|already (beforehand)|Jeg kender ham i forvejen.|I already know him.
x|fra starten|from the start|Fra starten var det svært.|It was hard from the start.
x|i går aftes|yesterday evening|I går aftes så vi en film.|Yesterday evening we watched a film.
x|i morgen tidlig|early tomorrow|Vi kører i morgen tidlig.|We're leaving early tomorrow.
x|om eftermiddagen|in the afternoon|Om eftermiddagen drikker vi kaffe.|In the afternoon we drink coffee.
x|om natten|at night|Om natten er det koldt.|It's cold at night.
x|en gang om ugen|once a week|Jeg træner en gang om ugen.|I work out once a week.
x|hver anden dag|every other day|Vi handler hver anden dag.|We shop every other day.
x|om året|a year|Vi tager på ferie to gange om året.|We go on holiday twice a year.
x|i alt|in total|Det koster 200 kroner i alt.|It costs 200 kroner in total.
x|for eksempel|for example|Jeg kan lide frugt, for eksempel æbler.|I like fruit, for example apples.
x|og så videre|and so on|Vi købte mælk, brød, ost og så videre.|We bought milk, bread, cheese and so on.
x|derudover|in addition|Derudover har vi en have.|In addition, we have a garden.
x|imens|meanwhile|Jeg laver mad, og imens dækker du bord.|I'll cook, and meanwhile you lay the table.
x|derefter|after that|Derefter gik vi hjem.|After that we went home.
x|nærmest|more or less|Det er nærmest umuligt.|It's more or less impossible.
x|hvorhenne|whereabouts|Hvorhenne bor du?|Whereabouts do you live?
x|på vej|on the way|Jeg er på vej hjem.|I'm on my way home.
`;
})(this);
