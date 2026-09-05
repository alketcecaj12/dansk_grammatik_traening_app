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

const app = document.querySelector("#app");
const state = { mode:null, topic:null, questions:[], index:0, correct:0, answered:false, streak:0, bestRun:0, timer:null, nextTimer:null, timeLeft:60, buildAnswer:[] };
const saved = JSON.parse(localStorage.getItem("ordvaerk-progress") || "{}");
const progress = { points:saved.points || 0, bestStreak:saved.bestStreak || 0, daily:saved.daily || 0, date:saved.date || "", topics:saved.topics || {} };

function todayKey(){ return new Date().toISOString().slice(0,10); }
function normalizeDaily(){ if(progress.date !== todayKey()){ progress.daily=0; progress.date=todayKey(); save(); } }
function save(){ localStorage.setItem("ordvaerk-progress", JSON.stringify(progress)); updateTopStats(); }
function updateTopStats(){
  document.querySelector("#totalPoints").textContent = progress.points;
  document.querySelector("#bestStreak").textContent = progress.bestStreak;
}
function shuffle(list){ return [...list].sort(() => Math.random() - .5); }
function escapeHtml(value){ return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c])); }

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

function startQuiz(mode, topic=null){
  Object.assign(state,{mode,topic,index:0,correct:0,answered:false,streak:0,bestRun:0,timeLeft:60,buildAnswer:[]});
  if(mode === "build") state.questions = shuffle(BUILD_QUESTIONS);
  else {
    let pool = topic ? QUESTIONS.filter(q => q.topic === topic) : QUESTIONS;
    state.questions = mode === "sprint" ? shuffle(pool) : shuffle(pool).slice(0,10);
  }
  renderQuestion();
  if(mode === "sprint") startTimer();
}

function gameTitle(){
  if(state.mode === "build") return "Byg sætningen";
  if(state.mode === "sprint") return "60 sekunders sprint";
  if(state.topic) return TOPICS[state.topic].name;
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
}

document.addEventListener("click", event => {
  const home=event.target.closest('[data-action="home"]'); if(home){ showHome(); return; }
  const mode=event.target.closest("[data-mode]"); if(mode){ startQuiz(mode.dataset.mode); if(mode.dataset.mode === "build") renderWordBanks(); return; }
  const topic=event.target.closest("[data-topic]"); if(topic){ startQuiz("topic",topic.dataset.topic); return; }
  const option=event.target.closest("[data-option]"); if(option){ answerChoice(option.dataset.option,option); return; }
  const next=event.target.closest('[data-action="next"]'); if(next){ nextQuestion(); return; }
  const again=event.target.closest('[data-action="again"]'); if(again){ const {mode,topic}=state; startQuiz(mode,topic); if(mode==="build") renderWordBanks(); return; }
  const word=event.target.closest("[data-word-id]"); if(word && !state.answered){ const id=Number(word.dataset.wordId); const idx=state.availableWords.findIndex(x=>x.id===id); state.buildAnswer.push(state.availableWords.splice(idx,1)[0]); renderWordBanks(); return; }
  const answerWord=event.target.closest("[data-answer-id]"); if(answerWord && !state.answered){ const id=Number(answerWord.dataset.answerId); const idx=state.buildAnswer.findIndex(x=>x.id===id); state.availableWords.push(state.buildAnswer.splice(idx,1)[0]); renderWordBanks(); return; }
  if(event.target.closest('[data-action="reset-build"]')){ state.availableWords.push(...state.buildAnswer); state.buildAnswer=[]; renderWordBanks(); return; }
  if(event.target.closest('[data-action="check-build"]')){ checkBuild(); }
});

normalizeDaily(); updateTopStats(); showHome();
