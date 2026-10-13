/* Danish Grammar Trainer — screens and quiz logic.
   Routes (in the URL hash):  #/            levels
                              #/level/ID    topics in a level
                              #/play/ID/CAT a quiz round */
(function () {
  "use strict";

  var UI = window.UI, DATA = window.QUIZ_DATA, PHRASES = window.WRITING_PHRASES;
  var app = document.getElementById("app");
  var live = document.getElementById("liveRegion");
  var ROUND = 10;
  var STORE_KEY = "dgt-progress";
  var LEVEL_IDS = ["beginner", "intermediate", "advanced"];
  var GRAMMAR = ["verbs", "adverbs", "adjectives", "pronouns", "prepositions", "conjunctions", "wordorder"];
  var NAMES = ["Ole", "Marie", "Kristian", "Louise", "Louisa", "Mette", "Peter", "Eva", "Hanne", "Pia", "Netto", "Danmark", "København", "Aarhus", "USA"];
  var ICONS = {
    verbs: "V", adverbs: "Av", adjectives: "Aj", pronouns: "Pr", prepositions: "På", conjunctions: "Og", wordorder: "VS",
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    time: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></svg>',
    writing: '<svg viewBox="0 0 24 24"><path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M14 8l3 3"/></svg>'
  };
  var ARROW_LEFT = '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>';
  var ARROW_RIGHT = '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';

  /* ---------- Helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]; }); }
  function fmt(s, vars) { return s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k]; }); }
  function shuffle(list) { var a = list.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) { return WritingScore.normalize(s).join(" "); }
  function announce(text) { live.textContent = ""; setTimeout(function () { live.textContent = text; }, 30); }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { return {}; }
  }
  var progress = loadProgress();
  progress.best = progress.best || {};
  progress.points = progress.points || 0;
  progress.bestStreak = progress.bestStreak || 0;
  function saveProgress() { try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch (e) { /* private mode: keep going without saving */ } updateTop(); }
  function updateTop() {
    document.getElementById("totalPoints").textContent = progress.points;
    document.getElementById("bestStreak").textContent = progress.bestStreak;
  }

  function categoriesFor(level) {
    return GRAMMAR.concat([level === "advanced" ? "time" : "clock", "writing"]);
  }

  /* ---------- Building a round ---------- */
  function buildRound(level, cat) {
    if (cat === "writing") {
      return shuffle(PHRASES[level]).slice(0, ROUND).map(function (p) { return { type: "writing", item: p }; });
    }
    if (cat === "clock") {
      var generated = [];
      var count = level === "intermediate" ? ROUND - 3 : ROUND;
      for (var i = 0; i < count; i++) generated.push(Clock.makeQuestion(level));
      if (level === "intermediate") generated = shuffle(generated.concat(shuffle(DATA.time.intermediate).slice(0, 3)));
      return generated;
    }
    if (cat === "time") return shuffle(DATA.time.advanced).slice(0, ROUND);
    return shuffle(DATA.levels[level][cat]).slice(0, ROUND);
  }

  /* ---------- Screens ---------- */
  function renderHome() {
    var cards = LEVEL_IDS.map(function (id, idx) {
      var L = UI.levels[id];
      var steps = [0, 1, 2].map(function (s) { return '<span class="' + (s <= idx ? "on" : "") + '"></span>'; }).join("");
      var tried = categoriesFor(id).filter(function (c) { return progress.best[id + "/" + c] !== undefined; }).length;
      return '<button class="level" data-go="#/level/' + id + '">' +
        '<span class="level-tag">' + esc(L.tag) + '</span>' +
        '<span class="level-steps" aria-hidden="true">' + steps + '</span>' +
        '<span class="level-name">' + esc(L.name) + '</span>' +
        '<span class="level-blurb">' + esc(L.blurb) + '</span>' +
        '<span class="level-progress">' + esc(fmt(UI.topicsTried, { n: tried, total: categoriesFor(id).length })) + "</span>" +
        '<span class="level-go">' + esc(UI.chooseTopic) + " " + ARROW_RIGHT + "</span></button>";
    }).join("");
    app.innerHTML =
      '<section class="hero"><p class="eyebrow">' + esc(UI.tagline) + '</p><h1>' + esc(UI.homeTitle) + '</h1><p>' + esc(UI.homeLead) + '</p></section>' +
      '<section class="levels">' + cards + "</section>" + footer();
  }

  function renderLevel(level) {
    var L = UI.levels[level];
    var items = categoriesFor(level).map(function (cat) {
      var C = UI.categories[cat], best = progress.best[level + "/" + cat];
      var special = cat === "clock" || cat === "time" || cat === "writing";
      return '<button class="topic' + (special ? " is-special" : "") + '" data-go="#/play/' + level + "/" + cat + '">' +
        '<span class="topic-icon" aria-hidden="true">' + ICONS[cat] + "</span>" +
        '<span class="topic-name">' + esc(C.name) + "</span>" +
        '<span class="topic-blurb">' + esc(C.blurb) + "</span>" +
        '<span class="topic-meter"><span class="meter"><span style="width:' + (best || 0) + '%"></span></span>' +
        (best === undefined ? esc(UI.notTried) : esc(UI.bestScore) + " " + best + "%") + "</span></button>";
    }).join("");
    app.innerHTML =
      '<div class="page-head"><button class="back" data-go="#/" aria-label="' + esc(UI.backToLevels) + '">' + ARROW_LEFT + "</button>" +
      "<div><h1>" + esc(L.name) + " · " + esc(L.tag) + "</h1><p>" + esc(UI.chooseTopic) + "</p></div></div>" +
      '<section class="topics">' + items + "</section>" + footer();
  }

  function footer() {
    return '<footer class="site-foot"><span>' + esc(UI.footer) + '</span><button data-action="reset">' + esc(UI.resetProgress) + "</button></footer>";
  }

  /* ---------- A round ---------- */
  var round = null;

  function startRound(level, cat) {
    round = { level: level, cat: cat, items: buildRound(level, cat), index: 0, results: [], streak: 0 };
    renderQuestion();
  }

  function gameHead() {
    var C = UI.categories[round.cat], L = UI.levels[round.level];
    var segs = round.items.map(function (_, i) {
      var r = round.results[i];
      var cls = r ? (r.score === 100 ? "is-correct" : r.score >= 50 && round.cat === "writing" ? "is-close" : "is-wrong") : i === round.index ? "is-current" : "";
      return '<span class="' + cls + '"></span>';
    }).join("");
    return '<div class="game-head"><button class="back" data-go="#/level/' + round.level + '" aria-label="' + esc(UI.backToTopics) + '">' + ARROW_LEFT + "</button>" +
      '<div><div class="game-title">' + esc(C.name) + '</div><div class="game-sub">' + esc(L.name) + "</div></div>" +
      '<div class="game-count">' + (round.index + 1) + " / " + round.items.length + "</div></div>" +
      '<div class="segments" aria-hidden="true">' + segs + "</div>";
  }

  function sentenceHTML(q, filled) {
    if (q.indexOf("___") === -1) return esc(q);
    var parts = q.split("___");
    return esc(parts[0]) + '<span class="slot' + (filled ? " is-filled" : "") + '">' + (filled || "") + "</span>" + esc(parts.slice(1).join("___"));
  }

  function renderQuestion() {
    var item = round.items[round.index];
    if (item.type === "writing") return renderWriting(item.item);
    var body = "";
    if (item.type === "choice") {
      var options = shuffle([item.a].concat(item.o));
      item._options = options;
      body = '<p class="q-instruction">' + esc(item.prompt || UI.pickAnswer) + "</p>" +
        (item.visual ? '<div class="visual">' + item.visual + "</div>" : "") +
        (item.q ? '<p class="sentence" id="sentence">' + sentenceHTML(item.q) + "</p>" : "") +
        '<div class="options">' + options.map(function (opt, i) {
          return '<button class="option" data-option="' + i + '">' + esc(opt) + '<span class="kbd">' + (i + 1) + "</span></button>";
        }).join("") + "</div>";
    } else if (item.type === "type") {
      body = '<p class="q-instruction">' + esc(UI.typeForm) + "</p>" +
        '<p class="sentence" id="sentence">' + sentenceHTML(item.q) + "</p>" +
        '<form class="answer-row" id="typeForm" autocomplete="off"><input class="text-input" id="typeInput" aria-label="' + esc(UI.typeHere) + '" placeholder="' + esc(UI.typeHere) + '" autocapitalize="off" spellcheck="false">' +
        '<button class="btn btn-primary" type="submit">' + esc(UI.check) + "</button></form>" + letterButtons();
    } else if (item.type === "order") {
      var words = tilesFor(item.a);
      item._end = (item.a.trim().match(/[.?!]$/) || [""])[0];
      var lead = leadLength(words, item._end);
      item._lead = lead ? { id: -1, word: capFirst(words.slice(0, lead).join(" ")), locked: true } : null;
      item._tiles = shuffleTiles(words.slice(lead));
      item._placed = item._lead ? [item._lead] : [];
      body = '<p class="q-instruction">' + esc(item._end === "?" ? UI.buildQuestion : UI.buildSentence) +
        (item._lead ? " " + esc(UI.buildLead) : "") + "</p>" +
        '<div class="build-line" id="buildLine" data-empty="…"></div><div class="word-bank" id="wordBank"></div>' +
        '<div class="build-actions"><button class="btn btn-secondary" data-action="clear-tiles">' + esc(UI.clearTiles) + "</button>" +
        '<button class="btn btn-primary" data-action="check-order" disabled>' + esc(UI.check) + "</button></div>";
    }
    app.innerHTML = '<div class="game">' + gameHead() + '<div class="card" id="card">' + body + '<div id="feedbackSlot"></div></div></div>';
    if (item.type === "type") document.getElementById("typeInput").focus();
    if (item.type === "order") drawTiles();
  }

  function letterButtons() {
    return '<div class="letters">' + ["æ", "ø", "å"].map(function (l) { return '<button type="button" data-letter="' + l + '">' + l + "</button>"; }).join("") + "</div>";
  }

  /* Order questions: word tiles */
  function tilesFor(answer) {
    return answer.split(/\s+/).map(function (w, i) {
      var clean = w.replace(/[.,?!»«]/g, "");
      if (i === 0 && NAMES.indexOf(clean) === -1) clean = clean.charAt(0).toLowerCase() + clean.slice(1);
      return clean;
    }).filter(Boolean);
  }
  /* The opening element (time, place, object, manner, question word or subject) is
     placed for the learner as a clue. Yes/no questions start with the verb, so
     they get no clue tile: the question mark is the clue. */
  var LEAD_PREPS = ["i", "om", "til", "hver", "sidste", "næste", "på", "efter", "for"];
  function leadLength(words, end) {
    if (words.length < 3) return 0;
    var first = words[0].toLowerCase();
    if (end === "?" && first.indexOf("hv") !== 0) return 0;
    return LEAD_PREPS.indexOf(first) !== -1 ? 2 : 1;
  }
  function capFirst(w) { return w.charAt(0).toUpperCase() + w.slice(1); }
  function shuffleTiles(words) {
    var tiles = words.map(function (w, i) { return { id: i, word: w }; });
    var mixed = shuffle(tiles), tries = 0;
    while (words.length > 2 && mixed.map(function (t) { return t.word; }).join(" ") === words.join(" ") && tries++ < 10) mixed = shuffle(tiles);
    return mixed;
  }
  function drawTiles() {
    var item = round.items[round.index];
    var line = document.getElementById("buildLine"), bank = document.getElementById("wordBank");
    line.innerHTML = item._placed.map(function (t) {
      return t.locked ? '<span class="word is-lead">' + esc(t.word) + "</span>" : '<button class="word" data-unplace="' + t.id + '">' + esc(t.word) + "</button>";
    }).join("") +
      (item._end ? '<span class="end-mark" aria-hidden="true">' + item._end + "</span>" : "");
    bank.innerHTML = item._tiles.map(function (t) {
      var used = item._placed.some(function (p) { return p.id === t.id; });
      return '<button class="word" data-place="' + t.id + '"' + (used ? ' disabled style="visibility:hidden"' : "") + ">" + esc(t.word) + "</button>";
    }).join("");
    var check = app.querySelector('[data-action="check-order"]');
    if (check) check.disabled = item._placed.length !== item._tiles.length + (item._lead ? 1 : 0);
  }

  /* Answer handling for choice / type / order */
  function finishQuestion(correct, pickedText, extra) {
    var item = round.items[round.index];
    round.results[round.index] = { item: item, score: correct ? 100 : 0, picked: pickedText };
    if (correct) {
      round.streak++;
      progress.points += 10;
      if (round.streak > progress.bestStreak) progress.bestStreak = round.streak;
    } else {
      round.streak = 0;
    }
    saveProgress();
    var answerText = item.answerText || item.a;
    var last = round.index === round.items.length - 1;
    var html = '<div class="feedback ' + (correct ? "is-good" : "") + '"><div>' +
      '<p class="feedback-title">' + esc(correct ? UI.correct : UI.wrong) + "</p>" +
      '<p class="feedback-body">' + (correct ? "" : esc(UI.theAnswerIs) + " <strong>" + esc(answerText) + "</strong>. ") + esc(item.e || "") + (extra || "") + "</p></div>" +
      '<button class="btn btn-primary" data-action="next" id="nextBtn">' + esc(last ? UI.seeResults : UI.next) + "</button></div>";
    document.getElementById("feedbackSlot").innerHTML = html;
    document.getElementById("nextBtn").focus();
    announce((correct ? UI.correct : UI.wrong) + " " + (correct ? "" : UI.theAnswerIs + " " + answerText));
    // refresh progress segments
    var segs = app.querySelectorAll(".segments span");
    if (segs[round.index]) segs[round.index].className = correct ? "is-correct" : "is-wrong";
  }

  function answerChoice(i) {
    var item = round.items[round.index];
    if (round.results[round.index]) return;
    var picked = item._options[i], correct = picked === item.a;
    app.querySelectorAll(".option").forEach(function (b, idx) {
      b.disabled = true;
      if (item._options[idx] === item.a) b.classList.add("is-correct");
      else if (idx === i) b.classList.add("is-wrong");
    });
    var slot = app.querySelector("#sentence .slot");
    if (slot) {
      slot.classList.add("is-filled", "is-correct");
      slot.innerHTML = correct ? esc(item.a) : "<del>" + esc(picked) + "</del><ins>" + esc(item.a) + "</ins>";
    }
    finishQuestion(correct, picked);
  }

  function answerType() {
    var item = round.items[round.index];
    if (round.results[round.index]) return;
    var input = document.getElementById("typeInput");
    var typed = input.value.trim();
    if (!typed) return;
    var accepted = [item.a].concat(item.alt || []).map(norm);
    var correct = accepted.indexOf(norm(typed)) !== -1;
    input.disabled = true;
    input.classList.add(correct ? "is-correct" : "is-wrong");
    app.querySelector("#typeForm button").disabled = true;
    var slot = app.querySelector("#sentence .slot");
    if (slot) {
      slot.classList.add("is-filled", "is-correct");
      slot.innerHTML = correct ? esc(item.a) : "<del>" + esc(typed) + "</del><ins>" + esc(item.a) + "</ins>";
    }
    finishQuestion(correct, typed);
  }

  function answerOrder() {
    var item = round.items[round.index];
    if (round.results[round.index]) return;
    var built = item._placed.map(function (t) { return t.word; }).join(" ");
    built = capFirst(built) + (item._end || "");
    var accepted = [item.a].concat(item.alt || []).map(norm);
    var correct = accepted.indexOf(norm(built)) !== -1;
    var line = document.getElementById("buildLine");
    line.classList.add(correct ? "is-correct" : "is-wrong");
    var first = line.querySelector(".word");
    if (first) first.textContent = capFirst(first.textContent);
    app.querySelectorAll("button.word").forEach(function (b) { b.disabled = true; });
    app.querySelectorAll(".build-actions .btn").forEach(function (b) { b.disabled = true; });
    finishQuestion(correct, built);
  }

  /* ---------- Writing ---------- */
  function renderWriting(p) {
    app.innerHTML = '<div class="game">' + gameHead() + '<div class="card" id="card">' +
      '<p class="q-instruction">' + esc(UI.writingPrompt) + "</p>" +
      '<p class="prompt-en">' + esc(p.en) + "</p>" +
      '<textarea class="writing-input" id="writingInput" rows="2" placeholder="' + esc(UI.writingPlaceholder) + '" aria-label="' + esc(UI.writingPrompt) + '" autocapitalize="sentences" spellcheck="false"></textarea>' +
      letterButtons() +
      '<div class="writing-actions"><span>' + esc(UI.writingHint) + '</span><button class="btn btn-primary" data-action="check-writing">' + esc(UI.check) + "</button></div>" +
      '<div id="feedbackSlot"></div></div></div>';
    document.getElementById("writingInput").focus();
  }

  function answerWriting() {
    var item = round.items[round.index];
    if (round.results[round.index]) return;
    var input = document.getElementById("writingInput");
    var typed = input.value.trim();
    if (!typed) return;
    var res = WritingScore.scoreWriting(item.item, typed);
    input.disabled = true;
    app.querySelector('[data-action="check-writing"]').disabled = true;
    round.results[round.index] = { item: item, score: res.score, picked: typed, res: res };
    progress.points += Math.round(res.score / 10);
    saveProgress();

    var level = res.score === 100 ? "is-good" : res.score >= 50 ? "is-close" : "";
    var message = UI.writingFeedback.filter(function (f) { return res.score >= f[0]; })[0][1];
    var diff = res.words.map(function (w) { return '<span class="w-' + w.state + '">' + esc(w.word) + "</span>"; }).join("") +
      res.extra.map(function (w) { return '<span class="w-extra" title="' + esc(UI.extraWords) + '">' + esc(w) + "</span>"; }).join("");
    var last = round.index === round.items.length - 1;
    document.getElementById("feedbackSlot").innerHTML =
      '<div class="score-panel">' +
      '<div class="ring ' + level + '" style="--p:' + res.score + '" role="img" aria-label="' + esc(UI.yourScore) + " " + res.score + '%"><span>' + res.score + "%</span></div>" +
      '<div class="score-text"><strong>' + esc(message) + "</strong><p>" + esc(UI.youWrote) + ": " + esc(typed) + "</p></div>" +
      '<div class="diff-block"><span class="diff-label">' + esc(UI.rightPhrase) + '</span><p class="answer-line">' + esc(res.answer) + "</p>" +
      (item.item.note ? '<p class="note">' + esc(item.item.note) + "</p>" : "") + "</div>" +
      '<div class="diff-block"><div class="diff">' + diff + "</div>" +
      '<div class="legend"><span><i class="w-correct"></i>' + esc(UI.legendCorrect) + '</span><span><i class="w-close"></i>' + esc(UI.legendClose) + '</span><span><i class="w-missing"></i>' + esc(UI.legendMissing) + "</span></div></div>" +
      '<button class="btn btn-primary" data-action="next" id="nextBtn">' + esc(last ? UI.seeResults : UI.next) + "</button></div>";
    var segs = app.querySelectorAll(".segments span");
    if (segs[round.index]) segs[round.index].className = res.score === 100 ? "is-correct" : res.score >= 50 ? "is-close" : "is-wrong";
    document.getElementById("nextBtn").focus();
    announce(UI.yourScore + " " + res.score + "%. " + UI.rightPhrase + ": " + res.answer);
  }

  /* ---------- Results ---------- */
  function renderResults() {
    var total = round.results.length;
    var avg = Math.round(round.results.reduce(function (s, r) { return s + r.score; }, 0) / total);
    var correctCount = round.results.filter(function (r) { return r.score === 100; }).length;
    var key = round.level + "/" + round.cat;
    if (progress.best[key] === undefined || avg > progress.best[key]) progress.best[key] = avg;
    saveProgress();

    var mistakes = round.results.filter(function (r) { return r.score < 100; });
    var list = mistakes.map(function (r) {
      if (round.cat === "writing") {
        return '<li class="review-item"><p class="sentence">' + esc(r.res.answer) + "</p><p>" + esc(r.item.item.en) + " · " + esc(UI.youWrote) + ": " + esc(r.picked) + " · " + r.score + "%</p></li>";
      }
      var it = r.item, shown;
      if (it.type === "order") shown = esc(it.a);
      else if (it.q && it.q.indexOf("___") !== -1) shown = sentenceHTML(it.q, "<del>" + esc(r.picked) + "</del><ins>" + esc(it.a) + "</ins>");
      else shown = esc(it.answerText || it.a);
      return '<li class="review-item"><p class="sentence">' + shown + "</p><p>" + (it.type === "order" ? esc(UI.youWrote) + ": " + esc(r.picked) + " · " : "") + esc(it.e || "") + "</p></li>";
    }).join("");

    var headline = round.cat === "writing" ? fmt(UI.resultsAverage, { score: avg }) : fmt(UI.resultsScore, { score: correctCount, total: total });
    app.innerHTML = '<div class="game">' +
      '<div class="card"><div class="result-top"><p class="result-score">' + avg + "<small>%</small></p>" +
      "<div><h1>" + esc(UI.resultsTitle) + "</h1><p>" + esc(headline) + " · " + esc(UI.categories[round.cat].name) + " · " + esc(UI.levels[round.level].name) + "</p></div></div>" +
      (mistakes.length ? '<h2 class="review-head">' + esc(UI.resultsMistakes) + '</h2><ul class="review-list">' + list + "</ul>" : '<p class="result-empty">' + esc(UI.resultsNoMistakes) + "</p>") +
      '<div class="result-actions"><button class="btn btn-primary" data-action="again">' + esc(UI.tryAgain) + "</button>" +
      '<button class="btn btn-secondary" data-go="#/level/' + round.level + '">' + esc(UI.otherTopic) + "</button></div></div></div>";
    app.focus();
  }

  function next() {
    if (round.index < round.items.length - 1) { round.index++; renderQuestion(); app.focus(); }
    else renderResults();
  }

  /* ---------- Events ---------- */
  app.addEventListener("click", function (e) {
    var el = e.target.closest("button");
    if (!el) return;
    if (el.dataset.go !== undefined) { location.hash = el.dataset.go; return; }
    if (el.dataset.option !== undefined) return answerChoice(+el.dataset.option);
    if (el.dataset.letter) {
      var field = document.getElementById("typeInput") || document.getElementById("writingInput");
      if (field && !field.disabled) {
        var s = field.selectionStart, en = field.selectionEnd;
        field.value = field.value.slice(0, s) + el.dataset.letter + field.value.slice(en);
        field.focus(); field.setSelectionRange(s + 1, s + 1);
      }
      return;
    }
    var item = round && round.items[round.index];
    if (el.dataset.place !== undefined && item) {
      var tile = item._tiles.filter(function (t) { return t.id === +el.dataset.place; })[0];
      item._placed.push(tile); drawTiles(); return;
    }
    if (el.dataset.unplace !== undefined && item && !round.results[round.index]) {
      item._placed = item._placed.filter(function (t) { return t.id !== +el.dataset.unplace; }); drawTiles(); return;
    }
    switch (el.dataset.action) {
      case "clear-tiles": item._placed = item._lead ? [item._lead] : []; drawTiles(); break;
      case "check-order": answerOrder(); break;
      case "check-writing": answerWriting(); break;
      case "next": next(); break;
      case "again": startRound(round.level, round.cat); break;
      case "reset":
        if (confirm(UI.resetConfirm)) { progress = { best: {}, points: 0, bestStreak: 0 }; saveProgress(); route(); }
        break;
    }
  });

  app.addEventListener("submit", function (e) {
    if (e.target.id === "typeForm") { e.preventDefault(); answerType(); }
  });

  document.addEventListener("keydown", function (e) {
    if (!round || !location.hash.startsWith("#/play/")) return;
    var item = round.items[round.index];
    var answered = !!round.results[round.index];
    if (e.target.id === "writingInput" && e.key === "Enter" && !e.shiftKey) { e.preventDefault(); answerWriting(); return; }
    if (answered && e.key === "Enter" && e.target.tagName !== "BUTTON") { e.preventDefault(); next(); return; }
    if (!answered && item && item.type === "choice" && /^[1-4]$/.test(e.key) && e.target.tagName !== "INPUT") {
      var i = +e.key - 1;
      if (item._options && i < item._options.length) answerChoice(i);
    }
  });

  document.querySelector(".brand").addEventListener("click", function () { location.hash = "#/"; });

  function route() {
    var parts = (location.hash || "#/").replace(/^#\/?/, "").split("/");
    if (parts[0] === "level" && UI.levels[parts[1]]) { round = null; renderLevel(parts[1]); }
    else if (parts[0] === "play" && UI.levels[parts[1]] && categoriesFor(parts[1]).indexOf(parts[2]) !== -1) startRound(parts[1], parts[2]);
    else { round = null; renderHome(); }
    window.scrollTo(0, 0);
    app.focus();
  }

  window.addEventListener("hashchange", route);
  document.querySelector(".top-stats").innerHTML =
    '<span class="top-stat"><strong id="totalPoints">0</strong> ' + esc(UI.points) + '</span>' +
    '<span class="top-stat top-stat-streak">' + esc(UI.streak) + ': <strong id="bestStreak">0</strong></span>';
  document.querySelector(".brand-name").textContent = UI.appName;
  document.title = UI.appName;
  updateTop();
  route();
})();
