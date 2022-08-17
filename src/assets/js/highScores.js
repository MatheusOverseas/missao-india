const highScoresList = document.querySelector("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores"));

const highScoresValues = [];
highScoresValues.push(highScores);

highScoresList.innerHTML = 
highScoresValues.map(score => {
  return `<li class=high-score>${score.name} - ${score.score}</li>`;
}).join("");