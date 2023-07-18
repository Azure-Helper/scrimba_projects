let initHome = 0;
let initAway = 0;
let scoreHome = document.getElementById("score-home");
let scoreAway = document.getElementById("score-away");

function oneHome() {
  initHome += 1;
  scoreHome.textContent = initHome;
}

function twoHome() {
  initHome += 2;
  scoreHome.textContent = initHome;
}

function threeHome() {
  initHome += 3;
  scoreHome.textContent = initHome;
}

function oneAway() {
  initAway += 1;
  scoreAway.textContent = initAway;
}

function twoAway() {
  initAway += 2;
  scoreAway.textContent = initAway;
}

function threeAway() {
  initAway += 3;
  scoreAway.textContent = initAway;
}

function newGame() {
  scoreHome.textContent = 0;
  scoreAway.textContent = 0;
  initHome = 0;
  initAway = 0;
}
