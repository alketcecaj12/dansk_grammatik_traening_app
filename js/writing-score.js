/* Writing trainer scoring.
   Compares what the learner typed with the hidden Danish phrase, word by word.
   - A word in the right place counts 1.
   - A word with a small spelling slip, or the right word in the wrong place, counts 0.5.
   - Score = points / number of words in the longer of the two sentences.
   Capitals, punctuation and extra spaces never cost points.
   Optional words are written in brackets in the data: "Jeg synes, (at) det er godt." */
(function (root) {
  "use strict";

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[’'`´]/g, "")
      .replace(/[^a-z0-9æøåäöüéè\s-]/g, " ")
      .replace(/-/g, " ")
      .split(/\s+/)
      .filter(Boolean);
  }

  // "Jeg synes, (at) det er godt." -> ["Jeg synes, at det er godt.", "Jeg synes, det er godt."]
  function expandOptional(phrase) {
    var match = phrase.match(/\(([^)]+)\)/);
    if (!match) return [phrase.replace(/\s+/g, " ").trim()];
    var withWord = phrase.replace(match[0], match[1]);
    var without = phrase.replace(match[0], "");
    return expandOptional(withWord).concat(expandOptional(without));
  }

  function displayForm(phrase) {
    return phrase.replace(/\(([^)]+)\)/g, "$1").replace(/\s+/g, " ").trim();
  }

  function editDistance(a, b) {
    var prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }

  // 1 = same word, 0.5 = small slip (one letter off in a word of 4+ letters), 0 = different.
  function wordMatch(target, typed) {
    if (target === typed) return 1;
    var plain = function (w) { return w.replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa"); };
    if (plain(target) === plain(typed)) return 0.5;
    if (target.length >= 4 && editDistance(target, typed) === 1) return 0.5;
    return 0;
  }

  // Longest common subsequence over words, so words in the right order count fully.
  function align(target, typed) {
    var n = target.length, m = typed.length, dp = [], i, j;
    for (i = 0; i <= n; i++) { dp[i] = []; for (j = 0; j <= m; j++) dp[i][j] = 0; }
    for (i = n - 1; i >= 0; i--) {
      for (j = m - 1; j >= 0; j--) {
        var w = wordMatch(target[i], typed[j]);
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1], w > 0 ? w + dp[i + 1][j + 1] : 0);
      }
    }
    var pairs = [];
    i = 0; j = 0;
    while (i < n && j < m) {
      var w2 = wordMatch(target[i], typed[j]);
      if (w2 > 0 && dp[i][j] === w2 + dp[i + 1][j + 1]) { pairs.push([i, j, w2]); i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    return pairs;
  }

  function scoreAgainst(targetPhrase, typedText) {
    var target = normalize(targetPhrase);
    var typed = normalize(typedText);
    var targetState = target.map(function () { return "missing"; });
    var typedUsed = typed.map(function () { return false; });
    var points = 0;

    align(target, typed).forEach(function (p) {
      targetState[p[0]] = p[2] === 1 ? "correct" : "close";
      typedUsed[p[1]] = true;
      points += p[2];
    });

    // Right word, wrong place: half a point.
    targetState.forEach(function (state, ti) {
      if (state !== "missing") return;
      for (var k = 0; k < typed.length; k++) {
        if (!typedUsed[k] && wordMatch(target[ti], typed[k]) === 1) {
          targetState[ti] = "moved"; typedUsed[k] = true; points += 0.5; return;
        }
      }
    });

    var longest = Math.max(target.length, typed.length) || 1;
    return {
      score: Math.round((points / longest) * 100),
      words: target.map(function (w, idx) { return { word: w, state: targetState[idx] }; }),
      extra: typed.filter(function (_, idx) { return !typedUsed[idx]; })
    };
  }

  // item: { da: "Hvordan går det?", alt: ["Hvordan har du det?"] }
  function scoreWriting(item, typedText) {
    var variants = [];
    [item.da].concat(item.alt || []).forEach(function (p) { variants = variants.concat(expandOptional(p)); });
    var best = null;
    variants.forEach(function (v) {
      var result = scoreAgainst(v, typedText);
      if (!best || result.score > best.score) { best = result; best.matched = v; }
    });
    best.answer = displayForm(item.da);
    return best;
  }

  var api = { scoreWriting: scoreWriting, normalize: normalize, expandOptional: expandOptional, displayForm: displayForm };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.WritingScore = api;
})(this);
