const HOME_KEY = "homeScore";
const AWAY_KEY = "awayScore";

let homeScore = Number(localStorage.getItem(HOME_KEY)) || 0;
let awayScore = Number(localStorage.getItem(AWAY_KEY)) || 0;

const homeScoreElem = document.getElementById("home-score");
const awayScoreElem = document.getElementById("away-score");

renderScores();


function renderScores() {
    homeScoreElem.textContent = homeScore;
    awayScoreElem.textContent = awayScore;
}

function incrementScore(score, team) {
    
    if(team === "home") {
        homeScore += score;
    } else if(team === "away") {
        awayScore += score;
    } else {
        return;
    }
    persistScores();
    renderScores();
}

function persistScores() {
    localStorage.setItem(HOME_KEY, String(homeScore));
    localStorage.setItem(AWAY_KEY, String(awayScore));
}

function resetScores() {
    homeScore = 0;
    awayScore = 0;

    persistScores();
    renderScores();
}