import axios from 'axios';

const username = document.querySelector("#username");
const saveScoreBtn = document.querySelector("#saveScoreBtn");
const finalScore = document.querySelector("#finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


// axios.get("").then((response) =>{
//   console.log(response)
// })
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
  saveScoreBtn.disabled = !username.value
});

function saveHighScore(event){
  event.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value
  }

  highScores.push(score);
  
  highScores.sort((a, b) => {
    return b.score - a.score;
  });

  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("../html/highScores.html");
}