let homeScore = 0;
let awayScore = 0;

let homeScoreElem = document.getElementById("home-score");
let awayScoreElem = document.getElementById("away-score");

homeScoreElem.textContent = homeScore;
awayScoreElem.textContent = awayScore;

function incrementScore(score, team) {
    
    if(team === "home") {
        homeScore += score;
        homeScoreElem.textContent = homeScore;
    } else if(team === "away") {
        awayScore += score;
        awayScoreElem.textContent = awayScore;
    }
}