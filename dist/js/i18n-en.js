/* All interface text lives here. To make the Italian version, copy this file to
   i18n-it.js, translate the values, and load it instead of this one in index.html. */
(function (root) {
  "use strict";
  root.UI = {
    appName: "Danish Grammar Trainer",
    tagline: "Danish grammar, one step at a time",
    homeTitle: "Choose your level",
    homeLead: "Short quizzes built from Danish course books. Pick the level that fits you, then choose what to practise.",
    points: "points",
    streak: "Best streak",

    levels: {
      beginner: { name: "Beginner", tag: "A1", blurb: "Pronouns, present tense, simple word order, telling the time." },
      intermediate: { name: "Beginner–intermediate", tag: "A2", blurb: "Past tenses, conjunctions, inversion, comparing things." },
      advanced: { name: "Intermediate–advanced", tag: "B1", blurb: "Førdatid, indirect speech, sin/hans, relative clauses." }
    },

    categories: {
      verbs: { name: "Verbs", blurb: "Tenses, modal verbs and irregular forms" },
      adverbs: { name: "Adverbs", blurb: "ikke, også, altid … and ud/ude, hjem/hjemme" },
      adjectives: { name: "Adjectives", blurb: "Endings, comparison and irregular forms" },
      pronouns: { name: "Pronouns", blurb: "Personal, possessive and reflexive pronouns" },
      prepositions: { name: "Prepositions", blurb: "i, på, til, fra, med, om, af …" },
      conjunctions: { name: "Conjunctions", blurb: "og, men, fordi, da, når, hvis, om …" },
      wordorder: { name: "Inversion & word order", blurb: "Where the verb and the adverb go" },
      clock: { name: "Can you tell the clock?", blurb: "Read clocks and say the time in Danish" },
      time: { name: "Can you talk about time?", blurb: "i går, i forgårs, i overmorgen, for … siden, om …" },
      writing: { name: "Let's train your writing", blurb: "Write the Danish sentence and get a score" }
    },

    backToLevels: "All levels",
    backToTopics: "All topics",
    chooseTopic: "Choose a topic",
    topicsTried: "{n} of {total} topics tried",
    bestScore: "Best",
    notTried: "Not tried yet",
    questionOf: "Question {n} of {total}",
    check: "Check",
    next: "Next",
    seeResults: "See results",
    correct: "Correct!",
    wrong: "Not quite.",
    theAnswerIs: "The answer is",
    whyLabel: "Why",
    typeHere: "Type your answer",
    buildSentence: "Tap the words in the right order.",
    clearTiles: "Start again",
    pickAnswer: "Choose the right word.",
    typeForm: "Type the missing word.",

    writingPrompt: "Write this in Danish:",
    writingPlaceholder: "Skriv her …",
    writingHint: "Press Enter to check.",
    yourScore: "Your score",
    rightPhrase: "Correct Danish",
    youWrote: "You wrote",
    legendCorrect: "right word",
    legendClose: "small spelling slip or wrong place",
    legendMissing: "missing or wrong",
    extraWords: "Extra words",
    writingFeedback: [
      [100, "Perfect!"],
      [80, "Very close!"],
      [50, "Good try. Compare with the correct sentence."],
      [0, "Keep practising. Read the correct sentence and try the next one."]
    ],

    resultsTitle: "Your result",
    resultsScore: "{score} of {total} correct",
    resultsAverage: "Average score: {score}%",
    resultsMistakes: "Go through your mistakes",
    resultsNoMistakes: "No mistakes. Well done!",
    tryAgain: "Try again",
    otherTopic: "Choose another topic",
    resetProgress: "Reset my progress",
    resetConfirm: "Delete all your saved scores?",
    footer: "Your progress is saved in this browser only."
  };
})(this);
