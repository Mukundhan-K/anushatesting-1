const spamWords = [
  "free", "win", "offer", "guarantee", "urgent", "deal", "prize",
  "click", "money", "cash", "cheap", "rummy" , "hot"
];

function scoreSubject(subject = "") {
  let score = 0;
  spamWords.forEach(word => {
    if (subject.toLowerCase().includes(word)) score += 1;
  });

  if (subject.length < 5) score += 2;
  if (subject.length > 80) score += 1;

  return score; // 0 = safe, >=3 = risky
};

module.exports = scoreSubject