/* "Can you tell the clock?" questions, generated so every round is different.
   Danish counts towards the next hour: 2:30 = halv tre, 2:25 = fem minutter i halv tre. */
(function (root) {
  "use strict";

  var HOURS = ["tolv", "et", "to", "tre", "fire", "fem", "seks", "syv", "otte", "ni", "ti", "elleve", "tolv"];

  function hourWord(h) { return HOURS[((h % 12) + 12) % 12 || 12]; }

  // The phrase the books use first, plus any other correct way to say it.
  function phrase(h, m) {
    var now = hourWord(h), next = hourWord(h + 1);
    switch (m) {
      case 0: return ["Den er " + now];
      case 5: return ["Den er fem minutter over " + now];
      case 10: return ["Den er ti minutter over " + now];
      case 15: return ["Den er kvart over " + now];
      case 20: return ["Den er tyve minutter over " + now, "Den er ti minutter i halv " + next];
      case 25: return ["Den er fem minutter i halv " + next, "Den er femogtyve minutter over " + now];
      case 30: return ["Den er halv " + next];
      case 35: return ["Den er fem minutter over halv " + next, "Den er femogtyve minutter i " + next];
      case 40: return ["Den er tyve minutter i " + next, "Den er ti minutter over halv " + next];
      case 45: return ["Den er kvart i " + next];
      case 50: return ["Den er ti minutter i " + next];
      case 55: return ["Den er fem minutter i " + next];
    }
  }

  function digital(h, m) { return h + ":" + (m < 10 ? "0" : "") + m; }

  function svg(h, m) {
    var mAngle = m * 6, hAngle = (h % 12) * 30 + m * 0.5;
    var ticks = "";
    for (var i = 0; i < 60; i++) {
      var big = i % 5 === 0;
      ticks += '<line x1="100" y1="' + (big ? 14 : 16) + '" x2="100" y2="' + (big ? 26 : 21) +
        '" transform="rotate(' + i * 6 + ' 100 100)" class="clock-tick' + (big ? " big" : "") + '"/>';
    }
    var nums = "";
    for (var n = 1; n <= 12; n++) {
      var a = (n * 30 - 90) * Math.PI / 180;
      nums += '<text x="' + (100 + 62 * Math.cos(a)).toFixed(1) + '" y="' + (100 + 62 * Math.sin(a) + 6).toFixed(1) +
        '" class="clock-num">' + n + "</text>";
    }
    return '<svg class="clock" viewBox="0 0 200 200" role="img" aria-label="An analog clock">' +
      '<circle cx="100" cy="100" r="94" class="clock-face"/>' + ticks + nums +
      '<line x1="100" y1="100" x2="100" y2="52" class="clock-hour" transform="rotate(' + hAngle + ' 100 100)"/>' +
      '<line x1="100" y1="100" x2="100" y2="28" class="clock-minute" transform="rotate(' + mAngle + ' 100 100)"/>' +
      '<circle cx="100" cy="100" r="5" class="clock-pin"/></svg>';
  }

  function rand(list) { return list[Math.floor(Math.random() * list.length)]; }

  // Distractors are the mistakes learners actually make: halv to vs halv tre, kvart over vs kvart i, the hour before or after.
  function distractorTimes(h, m, minutes) {
    var pool = [
      [h - 1 || 12, m], [h % 12 + 1, m],
      [h, (m + 30) % 60], [h, 60 - m === 60 ? 0 : 60 - m],
      [m >= 30 ? h % 12 + 1 : h, m === 30 ? 0 : m]
    ];
    if (m === 30) pool.push([h % 12 + 1, 30]);
    if (m === 15) pool.push([h, 45]);
    if (m === 45) pool.push([h, 15], [h % 12 + 1, 15]);
    minutes.forEach(function (mm) { pool.push([h, mm]); });
    var seen = {}, out = [];
    seen[h + ":" + m] = true;
    pool.sort(function () { return Math.random() - 0.5; }).forEach(function (p) {
      var hh = ((p[0] - 1) % 12 + 12) % 12 + 1, key = hh + ":" + p[1];
      if (!seen[key] && minutes.indexOf(p[1]) !== -1 && out.length < 3) { seen[key] = true; out.push([hh, p[1]]); }
    });
    while (out.length < 3) {
      var rh = 1 + Math.floor(Math.random() * 12), rm = rand(minutes), rk = rh + ":" + rm;
      if (!seen[rk]) { seen[rk] = true; out.push([rh, rm]); }
    }
    return out;
  }

  var EXPLAIN = {
    0: "Full hour: 'Den er' + the hour.",
    5: "Up to 10 past: '… minutter over' + this hour.",
    10: "Up to 10 past: '… minutter over' + this hour.",
    15: "Quarter past: 'kvart over' + this hour.",
    20: "20 past: 'tyve minutter over' this hour, or 'ti minutter i halv' the next hour.",
    25: "Around half: Danish counts to the half hour of the NEXT hour. 2:25 = fem minutter i halv tre.",
    30: "Half: Danish says half TO the next hour. 2:30 = halv tre.",
    35: "Around half: 2:35 = fem minutter over halv tre (half of the next hour).",
    40: "40: 'tyve minutter i' the next hour, or 'ti minutter over halv' the next hour.",
    45: "Quarter to: 'kvart i' + the next hour.",
    50: "Before the hour: '… minutter i' + the next hour.",
    55: "Before the hour: '… minutter i' + the next hour."
  };

  // level: "beginner" or "intermediate"
  function makeQuestion(level) {
    var minutes = level === "beginner" ? [0, 5, 10, 15, 30, 45, 50, 55] : [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    var h = 1 + Math.floor(Math.random() * 12), m = rand(minutes);
    var answer = phrase(h, m)[0];
    var wrong = distractorTimes(h, m, minutes);
    var kind = rand(level === "beginner" ? ["face", "face", "digital", "say"] : ["face", "digital", "say", "say24"]);

    if (kind === "digital") {
      return {
        type: "choice", q: answer + ".", prompt: "Which time is this?",
        a: digital(h, m), o: wrong.map(function (p) { return digital(p[0], p[1]); }),
        e: EXPLAIN[m], answerText: answer + " = " + digital(h, m)
      };
    }
    if (kind === "say24") {
      var h24 = h + (Math.random() < 0.5 ? 12 : 0);
      if (h24 === 24) h24 = 12;
      return {
        type: "choice", q: "Klokken er " + digital(h24, m) + ".", prompt: "How do you say this time in everyday Danish?",
        a: answer, o: wrong.map(function (p) { return phrase(p[0], p[1])[0]; }),
        e: EXPLAIN[m] + " In everyday speech Danes use the 12-hour clock: " + digital(h24, m) + " = " + answer.toLowerCase() + ".",
        answerText: answer
      };
    }
    return {
      type: "choice", visual: svg(h, m), q: kind === "say" ? "Hvad er klokken?" : "", prompt: "What time is it? Pick the Danish phrase.",
      a: answer, o: wrong.map(function (p) { return phrase(p[0], p[1])[0]; }),
      e: EXPLAIN[m] + " (" + digital(h, m) + ")", answerText: answer
    };
  }

  var api = { makeQuestion: makeQuestion, phrase: phrase, svg: svg };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.Clock = api;
})(this);
