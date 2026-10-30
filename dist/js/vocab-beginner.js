/* "Learn new words", Beginner (A1).
   One word per line:  type|Danish word|English meaning|Danish example sentence|English translation
   type: n = noun, v = verb, a = adjective, x = other (adverbs, question words, small words).
   Wrong options are taken from words of the same type and level. */
(function (root) {
  "use strict";
  root.VOCAB_DATA = root.VOCAB_DATA || {};
  root.VOCAB_DATA.beginner = `
n|en mor|mother|Min mor hedder Anna.|My mother is called Anna.
n|en far|father|Min far arbejder på et hospital.|My father works at a hospital.
n|en bror|brother|Min bror bor i Aarhus.|My brother lives in Aarhus.
n|en søster|sister|Hans søster er ti år gammel.|His sister is ten years old.
n|et barn|child|Vi har et barn på fem år.|We have a five-year-old child.
n|en søn|son|Deres søn går i første klasse.|Their son is in first grade.
n|en datter|daughter|Min datter er seks år.|My daughter is six years old.
n|en mand|man|Manden ved bussen er min lærer.|The man by the bus is my teacher.
n|en kvinde|woman|Kvinden i butikken er meget sød.|The woman in the shop is very nice.
n|en dreng|boy|Drengen spiller fodbold i parken.|The boy is playing football in the park.
n|en pige|girl|Pigen har en rød cykel.|The girl has a red bike.
n|en ven|friend|Jeg skal i biografen med en ven.|I'm going to the cinema with a friend.
n|en familie|family|Min familie bor i Polen.|My family lives in Poland.
n|en kone|wife|Hans kone er læge.|His wife is a doctor.
n|en bedstemor|grandmother|Min bedstemor bager gode boller.|My grandmother bakes good buns.
n|en bedstefar|grandfather|Bedstefar læser avisen hver morgen.|Grandfather reads the newspaper every morning.
n|forældre|parents|Mine forældre kommer på besøg i weekenden.|My parents are visiting at the weekend.
n|en onkel|uncle|Min onkel kommer fra Tyskland.|My uncle comes from Germany.
n|en tante|aunt|Min tante har tre katte.|My aunt has three cats.
n|en kæreste|boyfriend or girlfriend|Hun har en ny kæreste.|She has a new boyfriend.
n|en nabo|neighbour|Vores nabo har en stor hund.|Our neighbour has a big dog.
n|et hoved|head|Jeg har ondt i hovedet.|I have a headache.
n|et ben|leg|Han har brækket sit ben.|He has broken his leg.
n|en hånd|hand|Giv mig din hånd.|Give me your hand.
n|en fod|foot|Min venstre fod gør ondt.|My left foot hurts.
n|et øje|eye|Hun har blå øjne.|She has blue eyes.
n|et øre|ear|Jeg har ondt i øret.|I have earache.
n|en næse|nose|Barnet har en rød næse.|The child has a red nose.
n|en mund|mouth|Man må ikke tale med mad i munden.|You mustn't talk with food in your mouth.
n|en tand|tooth|Jeg skal til tandlæge, fordi en tand gør ondt.|I'm going to the dentist because a tooth hurts.
n|en mave|stomach|Jeg har ondt i maven.|I have a stomach ache.
n|en ryg|back|Han har ondt i ryggen efter arbejdet.|His back hurts after work.
n|et hår|hair|Hun har langt, mørkt hår.|She has long, dark hair.
n|en hals|throat|Jeg har ondt i halsen og hoster.|I have a sore throat and I'm coughing.
n|et hjerte|heart|Hans hjerte slår hurtigt.|His heart is beating fast.
n|et brød|bread|Vi køber brød hos bageren.|We buy bread at the baker's.
n|et æble|apple|Jeg spiser et æble hver dag.|I eat an apple every day.
n|en appelsin|orange|Hun presser en appelsin til juice.|She squeezes an orange for juice.
n|en ost|cheese|Jeg vil gerne have ost på mit brød.|I'd like cheese on my bread.
n|smør|butter|Der er smør i køleskabet.|There is butter in the fridge.
n|mælk|milk|Barnet drikker mælk til morgenmad.|The child drinks milk for breakfast.
n|vand|water|Må jeg få et glas vand?|Can I have a glass of water?
n|kød|meat|Vi spiser ikke kød om mandagen.|We don't eat meat on Mondays.
n|en fisk|fish|Vi spiser fisk om fredagen.|We eat fish on Fridays.
n|en kylling|chicken|Vi skal have kylling til aftensmad.|We're having chicken for dinner.
n|et æg|egg|Jeg spiser et kogt æg til morgenmad.|I eat a boiled egg for breakfast.
n|en kartoffel|potato|Danskere spiser mange kartofler.|Danes eat a lot of potatoes.
n|en gulerod|carrot|Kaninen spiser en gulerod.|The rabbit is eating a carrot.
n|ris|rice|Vi spiser ris med karry.|We eat rice with curry.
n|en kage|cake|Mormor har bagt en kage.|Grandma has baked a cake.
n|sukker|sugar|Vil du have sukker i kaffen?|Do you want sugar in your coffee?
n|morgenmad|breakfast|Jeg spiser morgenmad klokken syv.|I have breakfast at seven o'clock.
n|frokost|lunch|Vi spiser frokost i kantinen.|We have lunch in the canteen.
n|aftensmad|dinner|Hvad skal vi have til aftensmad?|What are we having for dinner?
n|en grøntsag|vegetable|Børn skal spise mange grøntsager.|Children should eat a lot of vegetables.
n|frugt|fruit|Der står en skål med frugt på bordet.|There is a bowl of fruit on the table.
n|en øl|beer|Han drikker en øl efter arbejdet.|He drinks a beer after work.
n|vin|wine|Vil du have et glas vin?|Would you like a glass of wine?
n|en kop|cup|Jeg drikker en kop kaffe.|I drink a cup of coffee.
n|en tallerken|plate|Læg kagen på en tallerken.|Put the cake on a plate.
n|en kniv|knife|Jeg skærer brødet med en kniv.|I cut the bread with a knife.
n|en gaffel|fork|Han spiser med kniv og gaffel.|He eats with a knife and fork.
n|en ske|spoon|Jeg spiser suppe med en ske.|I eat soup with a spoon.
n|en flaske|bottle|Han køber en flaske vand.|He buys a bottle of water.
n|et måltid|meal|Morgenmad er dagens vigtigste måltid.|Breakfast is the most important meal of the day.
n|slik|sweets|Børnene får slik om lørdagen.|The children get sweets on Saturdays.
n|is|ice cream|Om sommeren spiser vi is på stranden.|In summer we eat ice cream on the beach.
n|en pølse|sausage|Vi køber en pølse ved pølsevognen.|We buy a sausage at the hot dog stand.
n|et løg|onion|Hun skærer et løg til suppen.|She chops an onion for the soup.
n|en citron|lemon|Jeg kommer citron i teen.|I put lemon in my tea.
n|et jordbær|strawberry|Danske jordbær er søde i juni.|Danish strawberries are sweet in June.
n|en bolle|bun|Vi spiser boller med smør om søndagen.|We eat buns with butter on Sundays.
n|syltetøj|jam|Jeg kan lide syltetøj på brødet.|I like jam on my bread.
n|et hus|house|Vi bor i et gult hus.|We live in a yellow house.
n|en lejlighed|flat|Min lejlighed har tre værelser.|My flat has three rooms.
n|et værelse|room|Mit værelse er lille, men hyggeligt.|My room is small but cosy.
n|en stue|living room|Vi sidder i stuen og snakker.|We sit in the living room and talk.
n|et køkken|kitchen|Far laver mad i køkkenet.|Dad is cooking in the kitchen.
n|et soveværelse|bedroom|Soveværelset ligger på første sal.|The bedroom is on the first floor.
n|et badeværelse|bathroom|Badeværelset er ved siden af køkkenet.|The bathroom is next to the kitchen.
n|en dør|door|Kan du lukke døren?|Can you close the door?
n|et vindue|window|Åbn vinduet, det er varmt.|Open the window, it's warm.
n|et bord|table|Bøgerne ligger på bordet.|The books are on the table.
n|en stol|chair|Der står fire stole ved bordet.|There are four chairs at the table.
n|en seng|bed|Jeg går i seng klokken elleve.|I go to bed at eleven o'clock.
n|et køleskab|fridge|Mælken står i køleskabet.|The milk is in the fridge.
n|en have|garden|Vi har en stor have med æbletræer.|We have a big garden with apple trees.
n|en nøgle|key|Jeg kan ikke finde min nøgle.|I can't find my key.
n|en trappe|stairs|Han går op ad trappen.|He walks up the stairs.
n|et gulv|floor|Bogen ligger på gulvet.|The book is on the floor.
n|en væg|wall|Der hænger et billede på væggen.|There is a picture on the wall.
n|et tag|roof|Taget på huset er rødt.|The roof of the house is red.
n|et skab|cupboard|Tallerknerne står i skabet.|The plates are in the cupboard.
n|et spejl|mirror|Hun ser sig i spejlet.|She looks at herself in the mirror.
n|et billede|picture|Hun tager et billede af huset.|She takes a picture of the house.
n|et tæppe|blanket|Jeg har et varmt tæppe på sofaen.|I have a warm blanket on the sofa.
n|en pude|pillow|Jeg sover med to puder.|I sleep with two pillows.
n|et fjernsyn|television|Vi ser fjernsyn om aftenen.|We watch television in the evening.
n|en vask|sink|Der står beskidte kopper i vasken.|There are dirty cups in the sink.
n|et bad|bath|Jeg tager et bad hver morgen.|I have a bath every morning.
n|en by|town|Jeg bor i en lille by.|I live in a small town.
n|en gade|street|Hvad hedder din gade?|What is your street called?
n|en vej|road|Vejen til skolen er lang.|The road to school is long.
n|en butik|shop|Butikken lukker klokken seks.|The shop closes at six o'clock.
n|en skole|school|Børnene går i skole hver dag.|The children go to school every day.
n|en kirke|church|Kirken er meget gammel.|The church is very old.
n|et bibliotek|library|Jeg låner bøger på biblioteket.|I borrow books at the library.
n|en bager|baker|Bageren står op klokken fire.|The baker gets up at four o'clock.
n|et apotek|pharmacy|Du kan købe medicin på apoteket.|You can buy medicine at the pharmacy.
n|en læge|doctor|Jeg skal til læge i morgen.|I'm going to the doctor tomorrow.
n|en tandlæge|dentist|Tandlægen siger, at mine tænder er fine.|The dentist says my teeth are fine.
n|en strand|beach|Vi bader ved stranden om sommeren.|We swim at the beach in summer.
n|en skov|forest|Vi går tur i skoven.|We go for a walk in the forest.
n|en sø|lake|Der svømmer ænder på søen.|There are ducks swimming on the lake.
n|et hav|sea|Havet er koldt i maj.|The sea is cold in May.
n|et land|country|Hvilket land kommer du fra?|Which country do you come from?
n|en bro|bridge|Vi cykler over broen.|We cycle over the bridge.
n|en lufthavn|airport|Flyet lander i lufthavnen klokken ti.|The plane lands at the airport at ten o'clock.
n|et kontor|office|Hun arbejder på et kontor.|She works in an office.
n|en fabrik|factory|Min far arbejder på en fabrik.|My father works in a factory.
n|en gård|farm|Der er køer og grise på gården.|There are cows and pigs on the farm.
n|en bil|car|Vi har en ny bil.|We have a new car.
n|en cykel|bike|Min cykel er blå.|My bike is blue.
n|et tog|train|Toget til Odense er forsinket.|The train to Odense is delayed.
n|et fly|plane|Flyet til Rom letter klokken ni.|The plane to Rome takes off at nine.
n|en båd|boat|Vi sejler i en lille båd.|We are sailing in a small boat.
n|en billet|ticket|Har du købt en billet?|Have you bought a ticket?
n|et stoppested|bus stop|Vi venter på stoppestedet.|We are waiting at the bus stop.
n|en kuffert|suitcase|Min kuffert er meget tung.|My suitcase is very heavy.
n|en dag|day|Hvilken dag har du fri?|Which day are you off?
n|en uge|week|Jeg arbejder fem dage om ugen.|I work five days a week.
n|en måned|month|Januar er årets første måned.|January is the first month of the year.
n|et år|year|Jeg har boet i Danmark i to år.|I have lived in Denmark for two years.
n|en time|hour|Filmen varer to timer.|The film lasts two hours.
n|et øjeblik|moment|Vent et øjeblik, tak.|Wait a moment, please.
n|tid|time|Jeg har ikke tid i dag.|I don't have time today.
n|en morgen|morning|Jeg drikker te hver morgen.|I drink tea every morning.
n|en aften|evening|Vi spiser sammen om aftenen.|We eat together in the evening.
n|en nat|night|Babyen sover hele natten.|The baby sleeps all night.
n|en eftermiddag|afternoon|Jeg henter børnene om eftermiddagen.|I pick up the children in the afternoon.
n|en fødselsdag|birthday|I dag er det min fødselsdag.|Today is my birthday.
n|en ferie|holiday|Vi tager på ferie i juli.|We are going on holiday in July.
n|et forår|spring|Om foråret bliver det lyst om aftenen.|In spring it stays light in the evening.
n|et efterår|autumn|Om efteråret falder bladene af træerne.|In autumn the leaves fall from the trees.
n|jul|Christmas|Vi holder jul hos mine forældre.|We celebrate Christmas at my parents' house.
n|et ur|watch|Mit ur går fem minutter for langt.|My watch is five minutes fast.
n|vejr|weather|Hvordan er vejret i dag?|What's the weather like today?
n|en sol|sun|Solen skinner i dag.|The sun is shining today.
n|regn|rain|Der kommer meget regn i oktober.|There is a lot of rain in October.
n|sne|snow|Børnene leger i sneen.|The children are playing in the snow.
n|en sky|cloud|Der er ingen skyer i dag.|There are no clouds today.
n|en himmel|sky|Der er mange stjerner på himlen i nat.|There are many stars in the sky tonight.
n|et træ|tree|Der står et stort træ i haven.|There is a big tree in the garden.
n|en blomst|flower|Hun giver mig en blomst.|She gives me a flower.
n|et blad|leaf|Bladene bliver gule om efteråret.|The leaves turn yellow in autumn.
n|græs|grass|Græsset er vådt efter regnen.|The grass is wet after the rain.
n|en ø|island|Bornholm er en ø i Østersøen.|Bornholm is an island in the Baltic Sea.
n|et dyr|animal|Hvilket dyr kan du bedst lide?|Which animal do you like best?
n|en hund|dog|Vores hund hedder Bobby.|Our dog is called Bobby.
n|en kat|cat|Katten sover på sofaen.|The cat is sleeping on the sofa.
n|en hest|horse|Pigen rider på en hest.|The girl is riding a horse.
n|en ko|cow|Koen står på marken.|The cow is standing in the field.
n|en gris|pig|Grisen ligger i mudderet.|The pig is lying in the mud.
n|en fugl|bird|En fugl synger i træet.|A bird is singing in the tree.
n|en mark|field|Bonden arbejder på marken.|The farmer is working in the field.
n|en jakke|jacket|Tag en varm jakke på.|Put on a warm jacket.
n|en kjole|dress|Hun har en ny kjole på.|She is wearing a new dress.
n|en skjorte|shirt|Han stryger sin hvide skjorte.|He is ironing his white shirt.
n|bukser|trousers|Mine bukser er for lange.|My trousers are too long.
n|en sko|shoe|Jeg har købt nye sko.|I have bought new shoes.
n|en strømpe|sock|Jeg mangler en strømpe.|I'm missing a sock.
n|en hue|woolly hat|Tag hue på, det er koldt.|Put on a hat, it's cold.
n|en frakke|coat|Hun hænger frakken op.|She hangs up her coat.
n|en nederdel|skirt|Hun går med en lang nederdel.|She is wearing a long skirt.
n|en trøje|sweater|Jeg tager en trøje på, fordi jeg fryser.|I'm putting on a sweater because I'm cold.
n|tøj|clothes|Jeg vasker tøj i weekenden.|I do the washing at the weekend.
n|en taske|bag|Min telefon er i tasken.|My phone is in the bag.
n|en paraply|umbrella|Husk din paraply, det regner.|Remember your umbrella, it's raining.
n|briller|glasses|Jeg kan ikke læse uden mine briller.|I can't read without my glasses.
n|en handske|glove|Jeg har mistet en handske.|I have lost a glove.
n|et tørklæde|scarf|Hun har et rødt tørklæde om halsen.|She has a red scarf around her neck.
n|en pung|wallet|Han har penge i sin pung.|He has money in his wallet.
n|et arbejde|job|Han har fået et nyt arbejde.|He has got a new job.
n|en lærer|teacher|Vores lærer hedder Lone.|Our teacher is called Lone.
n|en elev|pupil|Der er tyve elever i klassen.|There are twenty pupils in the class.
n|en bog|book|Jeg læser en spændende bog.|I'm reading an exciting book.
n|en avis|newspaper|Han læser avisen ved morgenbordet.|He reads the newspaper at the breakfast table.
n|et brev|letter|Jeg har fået et brev fra kommunen.|I have received a letter from the council.
n|en blyant|pencil|Skriv med en blyant.|Write with a pencil.
n|en kuglepen|pen|Må jeg låne din kuglepen?|Can I borrow your pen?
n|et sprog|language|Hvor mange sprog taler du?|How many languages do you speak?
n|et ord|word|Jeg kender ikke det ord.|I don't know that word.
n|en sætning|sentence|Skriv en sætning med ordet.|Write a sentence with the word.
n|et spørgsmål|question|Må jeg stille et spørgsmål?|May I ask a question?
n|et svar|answer|Jeg ved ikke svaret.|I don't know the answer.
n|lektier|homework|Børnene laver lektier efter skole.|The children do their homework after school.
n|en chef|boss|Min chef er på ferie.|My boss is on holiday.
n|en kollega|colleague|Min kollega hjælper mig med computeren.|My colleague helps me with the computer.
n|penge|money|Jeg har ikke penge nok.|I don't have enough money.
n|en pris|price|Hvad er prisen på jakken?|What is the price of the jacket?
n|en regning|bill|Må vi bede om regningen?|Could we have the bill, please?
n|et navn|name|Hvad er dit navn?|What is your name?
n|en ting|thing|Jeg skal huske mange ting.|I have to remember many things.
n|en gave|present|Tak for gaven!|Thank you for the present!
n|en fest|party|Vi holder fest på lørdag.|We are having a party on Saturday.
n|en sang|song|Kan du synge en dansk sang?|Can you sing a Danish song?
n|en bold|ball|Drengene spiller med en bold.|The boys are playing with a ball.
n|et spil|game|Skal vi spille et spil kort?|Shall we play a game of cards?
n|en tur|trip|Vi tager en tur til Skagen.|We are taking a trip to Skagen.
n|en farve|colour|Hvilken farve er din bil?|What colour is your car?
n|et sted|place|Det er et dejligt sted.|It's a lovely place.
n|en sygeplejerske|nurse|Hun arbejder som sygeplejerske.|She works as a nurse.
n|en kunde|customer|Butikken har mange kunder i dag.|The shop has many customers today.
n|et kort|card|Kan jeg betale med kort?|Can I pay by card?
n|et hjem|home|Velkommen til mit hjem.|Welcome to my home.
n|et menneske|human being|Alle mennesker har brug for venner.|All human beings need friends.
n|en pakke|parcel|Jeg har fået en pakke med posten.|I have received a parcel in the post.
n|en mandag|Monday|Jeg har dansk om mandagen.|I have Danish on Mondays.
n|en tirsdag|Tuesday|På tirsdag skal jeg til tandlæge.|On Tuesday I'm going to the dentist.
n|en onsdag|Wednesday|Butikken har lukket på onsdag.|The shop is closed on Wednesday.
n|en torsdag|Thursday|Vi spiller fodbold hver torsdag.|We play football every Thursday.
n|en fredag|Friday|Fredag aften ser vi film.|On Friday evening we watch a film.
n|en lørdag|Saturday|Om lørdagen sover jeg længe.|On Saturdays I sleep late.
n|en søndag|Sunday|På søndag besøger vi bedstemor.|On Sunday we're visiting grandma.
n|en sommer|summer|Om sommeren er det lyst til klokken elleve.|In summer it's light until eleven o'clock.
n|en vinter|winter|Vinteren i Danmark er mørk.|Winter in Denmark is dark.
n|et minut|minute|Bussen kommer om fem minutter.|The bus comes in five minutes.
n|saft|squash (fruit drink)|Børnene drikker saft til frokost.|The children drink squash with lunch.
n|en sodavand|fizzy drink|Vil du have en sodavand?|Would you like a fizzy drink?
n|en agurk|cucumber|Jeg skærer en agurk til salaten.|I slice a cucumber for the salad.
n|et hvidløg|garlic|Der er meget hvidløg i maden.|There's a lot of garlic in the food.
n|en peberfrugt|bell pepper|Hun køber en rød peberfrugt.|She buys a red pepper.
n|en ært|pea|Barnet spiser ikke ærter.|The child doesn't eat peas.
n|en bønne|bean|Vi laver suppe med bønner.|We make soup with beans.
n|en blomkål|cauliflower|Blomkål er godt i suppe.|Cauliflower is good in soup.
n|kål|cabbage|Kål er sundt og billigt.|Cabbage is healthy and cheap.
n|en bøf|steak|Han steger en bøf til aftensmad.|He fries a steak for dinner.
n|en frikadelle|meatball|Mor laver frikadeller i dag.|Mum is making meatballs today.
n|skinke|ham|Jeg vil have skinke på mit brød.|I'd like ham on my bread.
n|leverpostej|liver pâté|Danske børn spiser leverpostej på rugbrød.|Danish children eat liver pâté on rye bread.
n|rugbrød|rye bread|Rugbrød er sundt.|Rye bread is healthy.
n|havregryn|oats|Jeg spiser havregryn med mælk.|I eat oats with milk.
n|fløde|cream|Vil du have fløde i kaffen?|Do you want cream in your coffee?
n|en småkage|cookie|Vi bager småkager til jul.|We bake cookies for Christmas.
n|en kande|jug|Der står en kande vand på bordet.|There is a jug of water on the table.
n|et krus|mug|Jeg drikker te af et stort krus.|I drink tea from a big mug.
n|en serviet|napkin|Læg en serviet ved hver tallerken.|Put a napkin by each plate.
n|en elkedel|kettle|Tænd for elkedlen.|Switch on the kettle.
n|et komfur|cooker|Gryden står på komfuret.|The pot is on the cooker.
n|en mikroovn|microwave|Varm maden i mikroovnen.|Heat the food in the microwave.
n|en lænestol|armchair|Bedstefar sidder i sin lænestol.|Grandad sits in his armchair.
n|en reol|bookcase|Reolen er fuld af bøger.|The bookcase is full of books.
n|en bruser|shower|Bruseren virker ikke.|The shower isn't working.
n|tandpasta|toothpaste|Vi mangler tandpasta.|We're out of toothpaste.
n|en kommode|chest of drawers|Tøjet ligger i kommoden.|The clothes are in the chest of drawers.
n|en etage|floor (storey)|Vi bor på tredje etage.|We live on the third floor.
n|en gang|hallway|Skoene står ude i gangen.|The shoes are out in the hallway.
n|en hoveddør|front door|Hoveddøren er låst.|The front door is locked.
n|et hegn|fence|Hunden springer over hegnet.|The dog jumps over the fence.
n|en tå|toe|Jeg har slået min tå.|I've stubbed my toe.
n|et knæ|knee|Han har slået sit knæ.|He has hurt his knee.
n|en skulder|shoulder|Min skulder gør ondt.|My shoulder hurts.
n|en albue|elbow|Han slog albuen mod døren.|He hit his elbow on the door.
n|en læbe|lip|Hun har tørre læber.|She has dry lips.
n|en tunge|tongue|Hunden rækker tunge.|The dog sticks out its tongue.
n|et ansigt|face|Vask dit ansigt.|Wash your face.
n|en hud|skin|Solen er hård ved huden.|The sun is hard on the skin.
n|en krop|body|Motion er godt for kroppen.|Exercise is good for the body.
n|et skæg|beard|Min far har skæg.|My father has a beard.
n|en lillebror|little brother|Min lillebror er tre år.|My little brother is three.
n|en storesøster|big sister|Min storesøster bor i København.|My big sister lives in Copenhagen.
n|en mormor|mother's mother|Min mormor bor i Jylland.|My mother's mother lives in Jutland.
n|en farfar|father's father|Min farfar er 90 år.|My father's father is 90.
n|en dame|lady|En gammel dame venter ved stoppestedet.|An old lady is waiting at the bus stop.
n|en herre|gentleman|Herren i jakkesættet er min chef.|The gentleman in the suit is my boss.
n|en fyr|guy|Hvem er den fyr?|Who is that guy?
n|et par|couple|De er et sødt par.|They are a sweet couple.
n|en klassekammerat|classmate|Min klassekammerat hedder Sara.|My classmate is called Sara.
n|en buschauffør|bus driver|Buschaufføren siger godmorgen.|The bus driver says good morning.
n|en ekspedient|shop assistant|Ekspedienten hjælper mig med at finde en størrelse.|The shop assistant helps me find a size.
n|en tjener|waiter|Tjeneren bringer maden.|The waiter brings the food.
n|en bonde|farmer|Bonden har mange køer.|The farmer has many cows.
n|en håndværker|tradesman|Der kommer en håndværker i morgen.|A tradesman is coming tomorrow.
n|en tømrer|carpenter|Tømreren bygger et nyt tag.|The carpenter is building a new roof.
n|en sælger|salesperson|Sælgeren viser os en ny bil.|The salesperson shows us a new car.
n|en købmand|grocer's|Vi køber mælk hos købmanden.|We buy milk at the grocer's.
n|en slagter|butcher|Jeg køber kød hos slagteren.|I buy meat at the butcher's.
n|et marked|market|Vi køber grøntsager på markedet.|We buy vegetables at the market.
n|et vandrerhjem|hostel|Vi sover på et vandrerhjem.|We sleep at a hostel.
n|et værtshus|pub|De drikker øl på værtshuset.|They drink beer at the pub.
n|en svømmehal|swimming pool|Vi går i svømmehallen om søndagen.|We go to the swimming pool on Sundays.
n|en legeplads|playground|Børnene leger på legepladsen.|The children play at the playground.
n|et rådhus|town hall|Rådhuset ligger ved torvet.|The town hall is by the square.
n|et posthus|post office|Jeg sender pakken fra posthuset.|I send the parcel from the post office.
n|en tankstation|petrol station|Vi tanker benzin på tankstationen.|We fill up with petrol at the petrol station.
n|en banegård|railway station|Toget kører fra banegården.|The train leaves from the railway station.
n|et centrum|town centre|Vi bor midt i centrum.|We live right in the town centre.
n|en verden|world|Han vil rejse rundt i verden.|He wants to travel around the world.
n|et sommerhus|summer house|Vi har et sommerhus ved vandet.|We have a summer house by the water.
n|en mobil|mobile phone|Jeg har glemt min mobil.|I've forgotten my mobile.
n|en fjernbetjening|remote control|Hvor er fjernbetjeningen?|Where is the remote control?
n|en æske|small box|Ringen ligger i en lille æske.|The ring is in a small box.
n|en kam|comb|Hun reder håret med en kam.|She combs her hair with a comb.
n|en børste|brush|Rens skoene med en børste.|Clean the shoes with a brush.
n|et viskelæder|rubber (eraser)|Må jeg låne dit viskelæder?|Can I borrow your rubber?
n|en lineal|ruler|Tegn en streg med en lineal.|Draw a line with a ruler.
n|et hæfte|exercise book|Skriv ordene i dit hæfte.|Write the words in your exercise book.
n|en skoletaske|school bag|Min skoletaske er tung.|My school bag is heavy.
n|et penalhus|pencil case|Blyanterne ligger i penalhuset.|The pencils are in the pencil case.
n|en drage|kite|Vi flyver med drage på stranden.|We fly a kite on the beach.
n|en gynge|swing|Pigen sidder på gyngen.|The girl is sitting on the swing.
n|en rutsjebane|slide|Børnene leger på rutsjebanen.|The children play on the slide.
n|en lastbil|lorry|En stor lastbil holder foran huset.|A big lorry is parked in front of the house.
n|en knallert|moped|Han kører på knallert til skole.|He rides a moped to school.
n|et skib|ship|Skibet sejler til Norge.|The ship sails to Norway.
n|et hjul|wheel|Bilen har fire hjul.|The car has four wheels.
n|en regnbue|rainbow|Se, der er en regnbue!|Look, there's a rainbow!
n|en vandpyt|puddle|Børnene hopper i vandpytterne.|The children jump in the puddles.
n|en busk|bush|Fuglen sidder i en busk.|The bird sits in a bush.
n|en hval|whale|Hvalen svømmer i havet.|The whale swims in the sea.
n|en løve|lion|Løven sover i zoologisk have.|The lion is sleeping at the zoo.
n|en abe|monkey|Aben spiser en banan.|The monkey eats a banana.
n|en bjørn|bear|Bjørnen bor i skoven.|The bear lives in the forest.
n|en slange|snake|Hun er bange for slanger.|She is afraid of snakes.
n|en frø|frog|En frø hopper i søen.|A frog jumps into the lake.
n|en høne|hen|Hønen lægger et æg hver dag.|The hen lays an egg every day.
n|en ged|goat|Geden spiser græs.|The goat eats grass.
n|en sommerfugl|butterfly|En sommerfugl sidder på blomsten.|A butterfly sits on the flower.
n|et jakkesæt|suit|Han har jakkesæt på til brylluppet.|He's wearing a suit for the wedding.
n|et bælte|belt|Bukserne er for store uden bælte.|The trousers are too big without a belt.
n|en lynlås|zip|Lynlåsen i min jakke er gået i stykker.|The zip in my jacket is broken.
n|en knap|button|Der mangler en knap i skjorten.|A button is missing from the shirt.
n|undertøj|underwear|Jeg pakker rent undertøj.|I'm packing clean underwear.
n|en kasket|cap|Han har en kasket på.|He is wearing a cap.
n|en lyd|sound|Hvad var det for en lyd?|What was that sound?
n|en tegning|drawing|Hun giver mig en tegning.|She gives me a drawing.
n|et eventyr|fairy tale|Far læser et eventyr for børnene.|Dad reads a fairy tale to the children.
n|en leg|children's game|Gemmeleg er en sjov leg.|Hide-and-seek is a fun game.
n|et puslespil|jigsaw puzzle|Vi lægger et puslespil.|We are doing a jigsaw puzzle.
n|et stykke|piece|Må jeg få et stykke kage?|Can I have a piece of cake?
n|en skive|slice|Jeg spiser to skiver brød.|I eat two slices of bread.
n|en vindrue|grape|Vi spiser vindruer til dessert.|We eat grapes for dessert.
n|en blomme|plum|Jeg plukker blommer i haven.|I pick plums in the garden.
n|et kirsebær|cherry|Kirsebærrene er røde og søde.|The cherries are red and sweet.
n|en gryderet|stew|Vi spiser gryderet med ris.|We eat stew with rice.
n|en pandekage|pancake|Børnene elsker pandekager.|The children love pancakes.
n|en tøffel|slipper|Jeg går i tøfler derhjemme.|I wear slippers at home.
n|en vante|mitten|Barnet har røde vanter.|The child has red mittens.
n|en badedragt|swimsuit|Husk din badedragt.|Remember your swimsuit.
n|et vækkeur|alarm clock|Vækkeuret ringer klokken seks.|The alarm clock rings at six.
n|en sommerferie|summer holiday|Sommerferien varer seks uger.|The summer holidays last six weeks.
n|et juletræ|Christmas tree|Vi pynter juletræet.|We decorate the Christmas tree.
n|en julegave|Christmas present|Jeg har købt en julegave til min mor.|I've bought a Christmas present for my mother.
n|en lagkage|layer cake|Til fødselsdagen får vi lagkage.|For the birthday we have layer cake.
n|en lygtepæl|lamppost|Cyklen står ved lygtepælen.|The bike is by the lamppost.
n|en bænk|bench|Vi sidder på en bænk i parken.|We sit on a bench in the park.
n|et springvand|fountain|Der er et springvand på torvet.|There is a fountain in the square.
n|en zoologisk have|zoo|Vi tager i zoologisk have på lørdag.|We're going to the zoo on Saturday.
n|en hvalp|puppy|Vores hund har fået hvalpe.|Our dog has had puppies.
n|en killing|kitten|Killingen leger med en bold.|The kitten plays with a ball.
n|et lam|lamb|Lammet står ved sin mor.|The lamb stands by its mother.
n|en due|pigeon|Duerne spiser brød på torvet.|The pigeons eat bread in the square.
n|en måge|seagull|Mågerne skriger ved havnen.|The seagulls are screaming at the harbour.
n|en snegl|snail|Der er snegle i salaten.|There are snails in the lettuce.
n|en myre|ant|Der er myrer i køkkenet.|There are ants in the kitchen.
n|en flue|fly|En flue sidder på kagen.|A fly is sitting on the cake.
n|en ugle|owl|Uglen jager om natten.|The owl hunts at night.
v|at være|to be|Jeg er lærer.|I am a teacher.
v|at have|to have|Vi har to børn.|We have two children.
v|at gå|to walk|Jeg går i skole hver dag.|I walk to school every day.
v|at komme|to come|Hvornår kommer du hjem?|When are you coming home?
v|at spise|to eat|Vi spiser klokken seks.|We eat at six o'clock.
v|at drikke|to drink|Han drikker meget vand.|He drinks a lot of water.
v|at sove|to sleep|Jeg sover otte timer om natten.|I sleep eight hours a night.
v|at bo|to live|Jeg bor i Odense.|I live in Odense.
v|at arbejde|to work|Hun arbejder på et hotel.|She works at a hotel.
v|at læse|to read|Jeg læser en bog om aftenen.|I read a book in the evening.
v|at skrive|to write|Skriv dit navn her.|Write your name here.
v|at tale|to speak|Taler du engelsk?|Do you speak English?
v|at sige|to say|Hvad siger du?|What are you saying?
v|at høre|to hear|Jeg hører musik i bilen.|I listen to music in the car.
v|at se|to see|Kan du se huset derovre?|Can you see the house over there?
v|at lytte|to listen|Lyt godt efter!|Listen carefully!
v|at kigge|to look|Kig på tavlen.|Look at the board.
v|at købe|to buy|Jeg køber mælk i Netto.|I buy milk at Netto.
v|at sælge|to sell|Han sælger sin gamle bil.|He is selling his old car.
v|at betale|to pay|Hvem betaler regningen?|Who is paying the bill?
v|at koste|to cost|Hvad koster brødet?|How much does the bread cost?
v|at give|to give|Jeg giver min mor blomster.|I give my mother flowers.
v|at tage|to take|Jeg tager bussen til arbejde.|I take the bus to work.
v|at få|to get|Jeg får løn den sidste dag i måneden.|I get paid on the last day of the month.
v|at hedde|to be called|Hvad hedder du?|What's your name?
v|at lave|to make|Han laver en kop kaffe til mig.|He makes a cup of coffee for me.
v|at køre|to drive|Min mor kører bil til arbejde.|My mother drives to work.
v|at cykle|to cycle|Mange danskere cykler på arbejde.|Many Danes cycle to work.
v|at løbe|to run|Han løber en tur hver morgen.|He goes for a run every morning.
v|at svømme|to swim|Kan du svømme?|Can you swim?
v|at danse|to dance|Vi danser hele natten til festen.|We dance all night at the party.
v|at synge|to sing|Børnene synger i koret.|The children sing in the choir.
v|at spille|to play (a game or an instrument)|Han spiller guitar.|He plays the guitar.
v|at lege|to play (children)|Børnene leger i sandkassen.|The children are playing in the sandpit.
v|at åbne|to open|Butikken åbner klokken ni.|The shop opens at nine o'clock.
v|at lukke|to close|Luk døren, tak.|Close the door, please.
v|at begynde|to begin|Skolen begynder i august.|School starts in August.
v|at slutte|to end|Filmen slutter klokken ti.|The film ends at ten o'clock.
v|at vente|to wait|Vi venter på bussen.|We are waiting for the bus.
v|at hjælpe|to help|Kan du hjælpe mig?|Can you help me?
v|at forstå|to understand|Jeg forstår ikke spørgsmålet.|I don't understand the question.
v|at vide|to know (a fact)|Jeg ved ikke, hvor han bor.|I don't know where he lives.
v|at kende|to know (a person)|Kender du min bror?|Do you know my brother?
v|at tænke|to think|Jeg tænker på dig.|I'm thinking of you.
v|at tro|to believe|Jeg tror, det bliver regnvejr.|I think it's going to rain.
v|at huske|to remember|Husk at købe mælk!|Remember to buy milk!
v|at glemme|to forget|Jeg har glemt min nøgle.|I have forgotten my key.
v|at lære|to learn|Jeg lærer dansk på sprogskolen.|I'm learning Danish at the language school.
v|at undervise|to teach|Hun underviser i matematik.|She teaches maths.
v|at studere|to study|Han studerer på universitetet.|He studies at the university.
v|at bruge|to use|Jeg bruger computeren hver dag.|I use the computer every day.
v|at finde|to find|Jeg kan ikke finde mine briller.|I can't find my glasses.
v|at lede efter|to look for|Jeg leder efter min telefon.|I'm looking for my phone.
v|at miste|to lose (something)|Han har mistet sin pung.|He has lost his wallet.
v|at sidde|to sit|Hun sidder ved vinduet.|She is sitting by the window.
v|at stå|to stand|Vi står i kø.|We are standing in the queue.
v|at ligge|to lie (be lying down)|Katten ligger på sengen.|The cat is lying on the bed.
v|at sætte|to put|Sæt koppen på bordet.|Put the cup on the table.
v|at lægge|to lay|Læg bogen på bordet.|Put the book on the table.
v|at vaske|to wash|Jeg vasker bilen om søndagen.|I wash the car on Sundays.
v|at gøre rent|to clean|Vi gør rent hver fredag.|We clean every Friday.
v|at rydde op|to tidy up|Ryd op på dit værelse!|Tidy up your room!
v|at lave mad|to cook|Hvem laver mad i dag?|Who is cooking today?
v|at bage|to bake|Vi bager boller om søndagen.|We bake buns on Sundays.
v|at handle|to shop|Jeg handler ind efter arbejde.|I do the shopping after work.
v|at ringe|to call|Jeg ringer til dig i aften.|I'll call you tonight.
v|at sende|to send|Jeg sender dig en sms.|I'll send you a text.
v|at besøge|to visit|Vi besøger mormor på søndag.|We are visiting grandma on Sunday.
v|at rejse|to travel|Vi rejser til Spanien i sommer.|We are travelling to Spain this summer.
v|at flytte|to move (house)|Vi flytter til en ny lejlighed.|We are moving to a new flat.
v|at bade|to bathe|Vi bader i havet.|We swim in the sea.
v|at stå op|to get up|Jeg står op klokken seks.|I get up at six o'clock.
v|at gå i seng|to go to bed|Børnene går i seng klokken otte.|The children go to bed at eight o'clock.
v|at vågne|to wake up|Jeg vågner tidligt.|I wake up early.
v|at tage på|to put on|Tag jakken på!|Put your jacket on!
v|at elske|to love|Jeg elsker chokolade.|I love chocolate.
v|at kunne lide|to like|Jeg kan godt lide kaffe.|I like coffee.
v|at ønske sig|to wish for|Jeg ønsker mig en cykel.|I'd like a bike as a present.
v|at kunne|to be able to|Kan du komme i morgen?|Can you come tomorrow?
v|at ville|to want to|Jeg vil gerne have en kop te.|I would like a cup of tea.
v|at skulle|to have to|Jeg skal på arbejde i morgen.|I have to go to work tomorrow.
v|at måtte|to be allowed to|Må jeg låne din telefon?|May I borrow your phone?
v|at blive|to become|Det bliver koldt i aften.|It's going to be cold tonight.
v|at hente|to fetch|Jeg henter børnene i børnehaven.|I pick up the children from kindergarten.
v|at bringe|to bring|Postbudet bringer breve.|The postman delivers letters.
v|at bære|to carry|Kan du bære tasken?|Can you carry the bag?
v|at falde|to fall|Pas på, du ikke falder!|Be careful not to fall!
v|at græde|to cry|Babyen græder.|The baby is crying.
v|at grine|to laugh|Vi griner af filmen.|We laugh at the film.
v|at smile|to smile|Hun smiler til mig.|She smiles at me.
v|at spørge|to ask|Må jeg spørge om noget?|May I ask you something?
v|at svare|to answer|Han svarer ikke på min sms.|He doesn't answer my text.
v|at fortælle|to tell|Fortæl mig om din dag.|Tell me about your day.
v|at forklare|to explain|Læreren forklarer grammatikken.|The teacher explains the grammar.
v|at øve sig|to practise|Jeg øver mig på at tale dansk.|I practise speaking Danish.
v|at gentage|to repeat|Kan du gentage spørgsmålet?|Can you repeat the question?
v|at stave|to spell|Hvordan staver man til dit navn?|How do you spell your name?
v|at regne|to rain|Det regner i dag.|It's raining today.
v|at sne|to snow|Det sner i december.|It snows in December.
v|at skinne|to shine|Solen skinner fra en blå himmel.|The sun is shining from a blue sky.
v|at fryse|to feel cold|Jeg fryser, kan du lukke vinduet?|I'm cold, can you close the window?
v|at betyde|to mean|Hvad betyder det ord?|What does that word mean?
v|at tælle|to count|Barnet kan tælle til ti.|The child can count to ten.
v|at tegne|to draw|Min datter tegner et hus.|My daughter is drawing a house.
v|at male|to paint|Vi maler køkkenet hvidt.|We are painting the kitchen white.
v|at prøve|to try|Må jeg prøve jakken?|May I try on the jacket?
v|at bestille|to order|Vi bestiller pizza.|We order pizza.
v|at vælge|to choose|Du kan vælge mellem te og kaffe.|You can choose between tea and coffee.
v|at møde|to meet|Jeg møder min ven på caféen.|I meet my friend at the café.
v|at fejre|to celebrate|Vi fejrer hans fødselsdag.|We celebrate his birthday.
v|at skynde sig|to hurry|Skynd dig, toget kører nu!|Hurry up, the train is leaving now!
v|at gå tur|to go for a walk|Vi går tur med hunden.|We take the dog for a walk.
v|at hilse|to greet|Hils din mor fra mig.|Say hello to your mother from me.
v|at have brug for|to need|Jeg har brug for hjælp.|I need help.
v|at mangle|to lack|Vi mangler mælk.|We are out of milk.
v|at passe|to look after|Bedstemor passer børnene.|Grandma looks after the children.
v|at tjene|to earn|Hun tjener godt.|She earns a good salary.
v|at gifte sig|to get married|De gifter sig til sommer.|They are getting married this summer.
v|at låne|to borrow|Må jeg låne din cykel?|May I borrow your bike?
v|at vinde|to win|Hvem vinder kampen?|Who is winning the match?
v|at stige på|to get on|Vi stiger på bussen ved stationen.|We get on the bus at the station.
v|at stå af|to get off|Jeg står af ved næste stop.|I get off at the next stop.
v|at flyve|to fly|Vi flyver til London i morgen.|We are flying to London tomorrow.
v|at tænde|to switch on|Tænd lyset, det er mørkt.|Switch on the light, it's dark.
v|at slukke|to switch off|Husk at slukke fjernsynet.|Remember to switch off the TV.
v|at smage|to taste|Suppen smager godt.|The soup tastes good.
v|at lugte|to smell|Det lugter af kaffe i køkkenet.|It smells of coffee in the kitchen.
v|at føle sig|to feel|Jeg føler mig træt i dag.|I feel tired today.
v|at gøre ondt|to hurt|Min hals gør ondt.|My throat hurts.
v|at skifte|to change|Jeg skifter tog i Fredericia.|I change trains in Fredericia.
v|at vise|to show|Kan du vise mig vejen?|Can you show me the way?
v|at ligne|to look like|Du ligner din far.|You look like your father.
v|at bestemme|to decide|Du bestemmer, hvor vi skal spise.|You decide where we eat.
v|at snakke|to chat|Vi snakker i telefon hver dag.|We chat on the phone every day.
v|at gå ind|to go in|Vi går ind i butikken.|We go into the shop.
v|at komme ind|to come in|Kom ind, døren er åben.|Come in, the door is open.
v|at tørre|to dry|Tør hænderne i håndklædet.|Dry your hands on the towel.
v|at læse højt|to read aloud|Læs teksten højt.|Read the text aloud.
v|at regne ud|to work out|Kan du regne opgaven ud?|Can you work out the problem?
v|at veje|to weigh|Jeg vejer frugten i butikken.|I weigh the fruit in the shop.
v|at løfte|to lift|Kan du løfte kassen?|Can you lift the box?
v|at stille|to put (standing)|Stil flasken i køleskabet.|Put the bottle in the fridge.
v|at tanke|to fill up (with fuel)|Vi skal tanke bilen.|We need to fill up the car.
v|at lande|to land|Flyet lander klokken tre.|The plane lands at three o'clock.
v|at lette|to take off|Flyet letter om ti minutter.|The plane takes off in ten minutes.
v|at overnatte|to stay the night|Vi overnatter hos min søster.|We're staying the night at my sister's.
v|at vinke|to wave|Barnet vinker farvel.|The child waves goodbye.
v|at råbe|to shout|Råb ikke så højt!|Don't shout so loudly!
v|at hviske|to whisper|Hun hvisker til sin veninde.|She whispers to her friend.
v|at nyse|to sneeze|Jeg nyser, fordi jeg er forkølet.|I'm sneezing because I have a cold.
v|at blive syg|to get ill|Jeg blev syg i weekenden.|I got ill at the weekend.
v|at tage medicin|to take medicine|Husk at tage din medicin.|Remember to take your medicine.
v|at ryste|to shake|Hun ryster af kulde.|She is shaking with cold.
v|at svede|to sweat|Jeg sveder, når jeg løber.|I sweat when I run.
v|at trække vejret|to breathe|Træk vejret dybt.|Take a deep breath.
v|at fiske|to fish|Vi fisker i søen.|We fish in the lake.
v|at ride|to ride (a horse)|Hun rider hver lørdag.|She rides every Saturday.
v|at løbe på skøjter|to skate|Om vinteren løber vi på skøjter.|In winter we go skating.
v|at stå på ski|to ski|Vi står på ski i Norge.|We ski in Norway.
v|at se fjernsyn|to watch TV|Vi ser fjernsyn efter aftensmaden.|We watch TV after dinner.
v|at tage af bordet|to clear the table|Kan du tage af bordet?|Can you clear the table?
v|at smøre|to spread (butter)|Jeg smører smør på brødet.|I spread butter on the bread.
v|at skænke|to pour (a drink)|Må jeg skænke dig en kop kaffe?|May I pour you a cup of coffee?
v|at fylde|to fill|Fyld glasset med vand.|Fill the glass with water.
v|at tømme|to empty|Kan du tømme skraldespanden?|Can you empty the bin?
v|at vække|to wake (someone)|Vækker du mig klokken seks?|Will you wake me at six?
v|at mene|to be of the opinion|Hvad mener du om filmen?|What's your opinion of the film?
v|at synes|to think (find)|Jeg synes, filmen er god.|I think the film is good.
v|at holde fri|to take time off|Jeg holder fri på fredag.|I'm taking Friday off.
v|at holde ferie|to be on holiday|Vi holder ferie i Italien.|We're on holiday in Italy.
v|at gemme|to keep (save)|Jeg gemmer kagen til i morgen.|I'm saving the cake for tomorrow.
v|at pege|to point|Barnet peger på hunden.|The child points at the dog.
v|at fylde år|to have a birthday|Min søn fylder fem år i dag.|My son turns five today.
v|at klappe|to clap|Alle klapper efter sangen.|Everyone claps after the song.
v|at spise op|to eat up|Spis din mad op!|Eat up your food!
v|at gå hen|to walk over (to)|Gå hen til døren.|Walk over to the door.
v|at komme tilbage|to come back|Hvornår kommer du tilbage?|When are you coming back?
v|at tage billeder|to take pictures|Vi tager mange billeder på ferien.|We take a lot of pictures on holiday.
v|at lukke op|to open the door|Kan du lukke op? Det ringer på.|Can you open the door? Someone's ringing.
v|at feje|to sweep|Jeg fejer gulvet i køkkenet.|I sweep the kitchen floor.
v|at vaske tøj|to do the laundry|Jeg vasker tøj om lørdagen.|I do the laundry on Saturdays.
v|at hænge op|to hang up|Hæng jakken op.|Hang up your jacket.
v|at gå i skole|to go to school|Min søn går i skole i Aarhus.|My son goes to school in Aarhus.
v|at komme for sent|to be late|Undskyld, at jeg kommer for sent til timen.|Sorry I'm late for the lesson.
v|at have travlt|to be busy|Jeg har travlt på arbejdet.|I'm busy at work.
v|at have ret|to be right|Du har ret.|You are right.
v|at have det godt|to be well|Jeg har det godt, tak.|I'm well, thank you.
v|at sige farvel|to say goodbye|Vi siger farvel ved toget.|We say goodbye at the train.
v|at hjælpe til|to help out|Børnene hjælper til i køkkenet.|The children help out in the kitchen.
v|at stå i kø|to queue|Vi står i kø ved kassen.|We queue at the checkout.
v|at gå på arbejde|to go to work|Jeg går på arbejde klokken otte.|I go to work at eight.
v|at tage hjem|to go home|Vi tager hjem nu.|We're going home now.
v|at slikke|to lick|Hunden slikker min hånd.|The dog licks my hand.
a|stor|big|Hun bor i et stort hus.|She lives in a big house.
a|lille|small|Han bor i en lille lejlighed.|He lives in a small flat.
a|ny|new|Jeg har købt en ny telefon.|I have bought a new phone.
a|gammel|old|Huset er meget gammelt.|The house is very old.
a|ung|young|Hun er ung, kun tyve år.|She is young, only twenty.
a|god|good|Det er en god film.|It's a good film.
a|dårlig|bad|Jeg har en dårlig dag.|I'm having a bad day.
a|varm|warm|Kaffen er varm.|The coffee is hot.
a|kold|cold|Vandet i søen er koldt.|The water in the lake is cold.
a|lang|long|Det har været en lang dag.|It has been a long day.
a|kort|short|Mødet er heldigvis kort.|Luckily the meeting is short.
a|høj|tall|Min bror er meget høj.|My brother is very tall.
a|lav|low|Bordet er for lavt.|The table is too low.
a|tung|heavy|Tasken med bøger er meget tung.|The bag of books is very heavy.
a|let|light (not heavy)|Min nye cykel er meget let.|My new bike is very light.
a|nem|easy|Opgaven er nem.|The task is easy.
a|svær|difficult|Dansk udtale er svær.|Danish pronunciation is difficult.
a|glad|happy|Hun er glad i dag.|She is happy today.
a|ked af det|sad|Han er ked af det, fordi hans hund er syg.|He is sad because his dog is ill.
a|træt|tired|Jeg er træt efter arbejdet.|I'm tired after work.
a|syg|ill|Jeg er syg og bliver hjemme.|I'm ill and staying at home.
a|rask|well (not ill)|Er du rask igen?|Are you well again?
a|sulten|hungry|Jeg er sulten, hvornår skal vi spise?|I'm hungry, when are we eating?
a|tørstig|thirsty|Barnet er tørstigt.|The child is thirsty.
a|smuk|beautiful|Det er en smuk solnedgang.|It's a beautiful sunset.
a|grim|ugly|Den jakke er grim.|That jacket is ugly.
a|sød|sweet|Kagen er meget sød.|The cake is very sweet.
a|sur|sour|Citronen er sur.|The lemon is sour.
a|billig|cheap|Brødet er billigt i dag.|The bread is cheap today.
a|dyr|expensive|Bilen er for dyr.|The car is too expensive.
a|hurtig|fast|Toget er hurtigt.|The train is fast.
a|langsom|slow|Bussen er langsom.|The bus is slow.
a|ren|clean|Køkkenet er rent.|The kitchen is clean.
a|beskidt|dirty|Mine sko er beskidte.|My shoes are dirty.
a|fuld|full|Bussen er fuld.|The bus is full.
a|tom|empty|Køleskabet er tomt.|The fridge is empty.
a|åben|open|Butikken er åben til ti.|The shop is open until ten.
a|lukket|closed|Banken er lukket om søndagen.|The bank is closed on Sundays.
a|rød|red|Æblet er rødt.|The apple is red.
a|blå|blue|Jeg har blå bukser på.|I'm wearing blue trousers.
a|grøn|green|Græsset er grønt.|The grass is green.
a|gul|yellow|Bananen er gul.|The banana is yellow.
a|hvid|white|Sneen er hvid.|The snow is white.
a|sort|black|Katten er sort.|The cat is black.
a|brun|brown|Han har brune øjne.|He has brown eyes.
a|grå|grey|Himlen er grå i dag.|The sky is grey today.
a|lyserød|pink|Pigen har en lyserød kjole.|The girl has a pink dress.
a|venlig|kind|Sygeplejersken er meget venlig.|The nurse is very kind.
a|sjov|funny|Filmen er rigtig sjov.|The film is really funny.
a|kedelig|boring|Programmet er kedeligt.|The programme is boring.
a|dejlig|lovely|Sikke et dejligt vejr!|What lovely weather!
a|rigtig|correct|Det er det rigtige svar.|That's the correct answer.
a|forkert|wrong|Det svar er forkert.|That answer is wrong.
a|tynd|thin|Han er høj og tynd.|He is tall and thin.
a|stærk|strong|Han er meget stærk.|He is very strong.
a|svag|weak|Hun føler sig svag efter sygdommen.|She feels weak after the illness.
a|vigtig|important|Det er vigtigt at sove godt.|It's important to sleep well.
a|travl|busy|Jeg har travlt i dag.|I'm busy today.
a|stille|quiet|Det er stille i biblioteket.|It's quiet in the library.
a|mørk|dark|Om vinteren er det mørkt klokken fire.|In winter it's dark at four o'clock.
a|lys|bright|Værelset er stort og lyst.|The room is big and bright.
a|våd|wet|Mit tøj er vådt efter regnen.|My clothes are wet after the rain.
a|tør|dry|Er tøjet tørt?|Are the clothes dry?
a|blød|soft|Puden er blød.|The pillow is soft.
a|hård|hard|Brødet er hårdt.|The bread is hard.
a|frisk|fresh|Vi køber frisk fisk på havnen.|We buy fresh fish at the harbour.
a|lækker|delicious|Maden er lækker.|The food is delicious.
a|flink|nice|Han er en flink fyr.|He is a nice guy.
a|sikker|sure|Er du sikker?|Are you sure?
a|klar|ready|Maden er klar.|The food is ready.
a|fri|off (not working)|Jeg har fri i morgen.|I'm off tomorrow.
a|gratis|free of charge|Kaffen er gratis.|The coffee is free.
a|næste|next|Vi ses næste uge.|See you next week.
a|sidste|last|Sidste år var jeg i Paris.|Last year I was in Paris.
a|første|first|Det er min første dag på arbejdet.|It's my first day at work.
a|mange|many|Der er mange mennesker i byen.|There are many people in town.
a|hel|whole|Jeg har spist en hel pizza.|I have eaten a whole pizza.
a|halv|half|Jeg venter en halv time.|I'll wait half an hour.
a|anden|other|Har du den i en anden farve?|Do you have it in another colour?
a|samme|same|Vi går i samme klasse.|We are in the same class.
a|forskellig|different|Vi er meget forskellige.|We are very different.
a|bange|afraid|Barnet er bange for hunde.|The child is afraid of dogs.
a|vred|angry|Far er vred, fordi jeg kommer for sent.|Dad is angry because I'm late.
a|rolig|calm|Tag det roligt.|Take it easy.
a|gift|married|Er du gift?|Are you married?
a|alene|alone|Jeg bor alene.|I live alone.
a|søvnig|sleepy|Barnet er søvnigt efter turen.|The child is sleepy after the trip.
a|vågen|awake|Er du vågen?|Are you awake?
a|salt|salty|Suppen er for salt.|The soup is too salty.
a|lilla|purple|Blommen er lilla.|The plum is purple.
a|rund|round|Bordet er rundt.|The table is round.
a|firkantet|square|Kassen er firkantet.|The box is square.
a|flad|flat (level)|Cyklen har et fladt dæk.|The bike has a flat tyre.
a|kær|dear|Kære Anna, tak for brevet.|Dear Anna, thank you for the letter.
a|fin|fine (nice)|Det er en fin kjole.|It's a nice dress.
a|levende|alive|Fisken er stadig levende.|The fish is still alive.
a|død|dead|Blomsten er død.|The flower is dead.
a|brugt|second-hand|Jeg har købt en brugt cykel.|I have bought a second-hand bike.
a|ægte|real (genuine)|Er ringen af ægte guld?|Is the ring real gold?
a|falsk|fake|Pengesedlen er falsk.|The banknote is fake.
a|sand|true|Er det sandt?|Is it true?
a|få|few|Der er få mennesker på stranden i dag.|There are few people on the beach today.
a|dobbelt|double|Vi vil gerne have et dobbeltværelse.|We'd like a double room.
a|vild|wild|Der er vilde heste på øen.|There are wild horses on the island.
a|tam|tame|Fuglen er helt tam.|The bird is completely tame.
a|ærgerlig|a pity|Det er ærgerligt, at du ikke kan komme.|It's a pity you can't come.
a|krøllet|curly|Hun har krøllet hår.|She has curly hair.
a|lyshåret|fair-haired|Drengen er lyshåret.|The boy is fair-haired.
a|skaldet|bald|Min onkel er skaldet.|My uncle is bald.
a|slank|slim|Hun er høj og slank.|She is tall and slim.
a|uartig|naughty|Hunden er uartig.|The dog is naughty.
a|artig|well-behaved|Børnene har været artige i dag.|The children have been well-behaved today.
a|kæmpestor|huge|Elefanten er kæmpestor.|The elephant is huge.
a|bitte lille|tiny|Musen er bitte lille.|The mouse is tiny.
a|lunken|lukewarm|Teen er blevet lunken.|The tea has gone lukewarm.
a|iskold|ice-cold|Vandet er iskoldt.|The water is ice-cold.
a|mørkeblå|dark blue|Han har en mørkeblå jakke.|He has a dark blue jacket.
a|lyseblå|light blue|Himlen er lyseblå.|The sky is light blue.
a|stribet|striped|Han har en stribet skjorte på.|He's wearing a striped shirt.
a|prikket|spotted|Hun har en prikket kjole.|She has a spotted dress.
a|munter|cheerful|Hun er altid munter om morgenen.|She is always cheerful in the morning.
x|i dag|today|I dag skinner solen.|The sun is shining today.
x|i morgen|tomorrow|Vi ses i morgen.|See you tomorrow.
x|i går|yesterday|I går var jeg i biografen.|Yesterday I was at the cinema.
x|nu|now|Jeg har ikke tid nu.|I don't have time now.
x|altid|always|Han kommer altid for sent.|He is always late.
x|aldrig|never|Jeg drikker aldrig kaffe om aftenen.|I never drink coffee in the evening.
x|ofte|often|Vi spiser ofte fisk.|We often eat fish.
x|nogle gange|sometimes|Nogle gange cykler jeg på arbejde.|Sometimes I cycle to work.
x|her|here|Jeg bor her.|I live here.
x|der|there|Bogen ligger der.|The book is there.
x|hjemme|at home|Er din mor hjemme?|Is your mother at home?
x|ude|outside|Børnene er ude at lege.|The children are outside playing.
x|også|also|Jeg taler også engelsk.|I also speak English.
x|ikke|not|Jeg ryger ikke.|I don't smoke.
x|meget|very|Det er meget koldt.|It's very cold.
x|lidt|a little|Jeg taler lidt dansk.|I speak a little Danish.
x|gerne|gladly|Jeg hjælper gerne.|I'm happy to help.
x|måske|maybe|Måske kommer han i morgen.|Maybe he'll come tomorrow.
x|snart|soon|Vi ses snart!|See you soon!
x|stadig|still|Han sover stadig.|He is still sleeping.
x|allerede|already|Jeg har allerede spist.|I have already eaten.
x|lige nu|right now|Jeg har travlt lige nu.|I'm busy right now.
x|bagefter|afterwards|Vi spiser, og bagefter går vi en tur.|We'll eat, and afterwards we'll go for a walk.
x|sammen|together|Vi laver lektier sammen.|We do our homework together.
x|langt væk|far away|Bor du langt væk?|Do you live far away?
x|tæt på|close to|Skolen ligger tæt på vores hus.|The school is close to our house.
x|derfor|therefore|Det regner, derfor tager vi bilen.|It's raining, so we'll take the car.
x|hvorfor|why|Hvorfor kommer du for sent?|Why are you late?
x|hvor|where|Hvor bor du?|Where do you live?
x|hvornår|when|Hvornår går toget?|When does the train leave?
x|hvem|who|Hvem er det?|Who is that?
x|hvad|what|Hvad laver du?|What are you doing?
x|hvordan|how|Hvordan har du det?|How are you?
x|hvilken|which|Hvilken bus skal jeg tage?|Which bus should I take?
x|hvor mange|how many|Hvor mange børn har du?|How many children do you have?
x|tak|thank you|Tak for maden!|Thank you for the meal!
x|undskyld|sorry|Undskyld, jeg kommer for sent.|Sorry I'm late.
x|farvel|goodbye|Farvel og tak for i dag.|Goodbye and thank you for today.
x|godmorgen|good morning|Godmorgen, har du sovet godt?|Good morning, did you sleep well?
x|og|and|Jeg kan lide te og kaffe.|I like tea and coffee.
x|men|but|Jeg er træt, men glad.|I'm tired but happy.
x|eller|or|Vil du have te eller kaffe?|Would you like tea or coffee?
x|fordi|because|Jeg tager jakke på, fordi det er koldt.|I'm putting on a jacket because it's cold.
x|med|with|Jeg går i biografen med min søster.|I'm going to the cinema with my sister.
x|uden|without|Jeg drikker kaffe uden sukker.|I drink coffee without sugar.
x|efter|after|Vi ses efter skole.|See you after school.
x|før|before|Vask hænder før maden.|Wash your hands before the meal.
x|ved siden af|next to|Banken ligger ved siden af kirken.|The bank is next to the church.
x|mellem|between|Stolen står mellem bordet og døren.|The chair is between the table and the door.
x|bag|behind|Katten gemmer sig bag sofaen.|The cat is hiding behind the sofa.
x|foran|in front of|Vi mødes foran stationen.|We'll meet in front of the station.
x|alle|everybody|Alle kan lide is.|Everybody likes ice cream.
x|ingen|nobody|Der er ingen hjemme.|There is nobody at home.
x|noget|something|Vil du have noget at drikke?|Would you like something to drink?
x|nogen|somebody|Er der nogen hjemme?|Is anybody at home?
x|hver|every|Jeg løber hver dag.|I run every day.
x|igen|again|Kan du sige det igen?|Can you say that again?
x|tidligt|early|Jeg står tidligt op.|I get up early.
x|sent|late|Det er sent, jeg går i seng.|It's late, I'm going to bed.
x|kun|only|Jeg har kun ti kroner.|I only have ten kroner.
x|næsten|almost|Klokken er næsten otte.|It's almost eight o'clock.
x|desværre|unfortunately|Jeg kan desværre ikke komme.|Unfortunately I can't come.
x|selvfølgelig|of course|Selvfølgelig hjælper jeg dig.|Of course I'll help you.
x|godt|well|Hun synger godt.|She sings well.
x|i aften|this evening|Hvad skal du lave i aften?|What are you doing this evening?
x|i morges|this morning|I morges drak jeg te.|This morning I drank tea.
x|i nat|last night|Det blæste meget i nat.|It was very windy last night.
x|om lidt|in a moment|Jeg kommer om lidt.|I'll be there in a moment.
x|senere|later|Vi ses senere.|See you later.
x|først|first (at first)|Først spiser vi, så går vi.|First we eat, then we go.
x|til sidst|in the end|Til sidst fandt vi vejen.|In the end we found the way.
x|nede|down (there)|Han er nede i kælderen.|He is down in the basement.
x|oppe|up (there)|Hun er oppe på loftet.|She's up in the attic.
x|inde|inside|Katten er inde.|The cat is inside.
x|hjem|home (towards)|Jeg går hjem nu.|I'm going home now.
x|ud|out (towards)|Gå ud og leg!|Go out and play!
x|ind|in (towards)|Gå ind i stuen.|Go into the living room.
x|op|up (towards)|Kig op!|Look up!
x|ned|down (towards)|Hun går ned til stranden.|She walks down to the beach.
x|over|over|Fuglen flyver over huset.|The bird flies over the house.
x|under|under|Katten ligger under bordet.|The cat is lying under the table.
x|på|on|Koppen står på bordet.|The cup is on the table.
x|i|in|Jeg bor i en lejlighed.|I live in a flat.
x|til|to|Jeg kører til Aarhus.|I'm driving to Aarhus.
x|fra|from|Jeg kommer fra Syrien.|I come from Syria.
x|af|of (made of)|Bordet er lavet af træ.|The table is made of wood.
x|om|about|Hun fortæller om sin ferie.|She talks about her holiday.
x|ved|by|Vi bor ved havet.|We live by the sea.
x|hvor meget|how much|Hvor meget koster det?|How much does it cost?
x|hvor gammel|how old|Hvor gammel er du?|How old are you?
x|hvad tid|what time|Hvad tid kommer du?|What time are you coming?
x|ja tak|yes please|Ja tak, jeg vil gerne have kaffe.|Yes please, I'd like coffee.
x|nej tak|no thank you|Nej tak, jeg drikker ikke kaffe.|No thank you, I don't drink coffee.
x|velbekomme|you're welcome (after a meal)|Velbekomme, jeg er glad for, at du kunne lide maden.|You're welcome, I'm glad you liked the food.
x|godnat|good night|Godnat, sov godt!|Good night, sleep well!
x|goddag|hello (good day)|Goddag, jeg hedder Peter.|Hello, my name is Peter.
x|hej hej|bye|Hej hej, vi ses i morgen!|Bye, see you tomorrow!
x|vi ses|see you|Vi ses på mandag!|See you on Monday!
x|pas på|watch out|Pas på bilen!|Watch out for the car!
x|velkommen|welcome|Velkommen til Danmark!|Welcome to Denmark!
x|tillykke|congratulations|Tillykke med fødselsdagen!|Happy birthday!
x|skål|cheers|Skål og velkommen!|Cheers and welcome!
x|hellere|rather|Jeg vil hellere have te.|I'd rather have tea.
x|helst|preferably|Jeg vil helst sidde ved vinduet.|I'd prefer to sit by the window.
x|alt|everything|Alt er klar.|Everything is ready.
x|nok|enough|Har du spist nok?|Have you eaten enough?
x|mere|more|Vil du have mere kaffe?|Would you like more coffee?
x|mindre|less|Jeg vil gerne have mindre sukker.|I'd like less sugar.
x|mest|most|Jeg kan mest lide sommeren.|I like summer most.
x|bare|just (only)|Jeg vil bare have et glas vand.|I just want a glass of water.
x|heller ikke|not … either|Jeg kan heller ikke lide fisk.|I don't like fish either.
x|jo|yes (after a negative question)|Er du ikke sulten? Jo, meget!|Aren't you hungry? Yes, very!
x|derovre|over there|Bussen holder derovre.|The bus is over there.
x|herovre|over here|Kom herovre!|Come over here!
x|hvorhen|where to|Hvorhen skal du?|Where are you going?
x|hvorfra|where from|Hvorfra kommer du?|Where do you come from?
x|i weekenden|at the weekend|Hvad laver du i weekenden?|What are you doing at the weekend?
x|om morgenen|in the morning|Om morgenen drikker jeg kaffe.|In the morning I drink coffee.
x|længe|for a long time|Vi har ventet længe.|We have waited a long time.
`;
})(this);
