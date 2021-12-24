"use strict";
const message = document.querySelector(".message");
const userGuess = document.querySelector(".guess");
const checkBtn = document.querySelector(".btn.check");
const restartBtn = document.querySelector(".btn.again");
const scoreBar = document.querySelector(".score");
const highScoreBar = document.querySelector(".label-highscore");
const hiddenNumber = document.querySelector(".number");
const body = document.querySelector("body");

let correctNumber = Math.round(Math.random() * 20);
let userGuesed = false;
let currentScore = 20;
let highScore = null;

const keyboardHandler = function (e) {
  console.log(e.key);
  if (e.key === "Escape") {
    restartGame();
  } else if (e.key === " " || e.key == "Enter") {
    checkUserNumber();
  }
};

const checkGameOver = function () {
  if (currentScore <= 0) {
    message.textContent = "Game Over";
    restartGame();
  }
};

const restartGame = function () {
  currentScore = 20;
  userGuesed = false;
  correctNumber = Math.round(Math.random() * 20);
  hiddenNumber.textContent = "?";
  userGuess.value = "";
  body.style.backgroundColor = "#222";
  updateUi();
};

const updateUi = function () {
  scoreBar.textContent = currentScore;
};

const ifUserGuessed = function () {
  console.log(correctNumber);
  if (userGuesed) {
    if (highScore === null || currentScore > highScore) {
      highScoreBar.textContent = `🥇 Highscore:${currentScore}`;
    }
    hiddenNumber.textContent = correctNumber;
    body.style.backgroundColor = "green";
  }
};

const findIfsmallerOrBigger = function () {
  if (+userGuess.value > correctNumber) {
    message.textContent = "your guess is too big";
  } else if (+userGuess.value < correctNumber) {
    message.textContent = "your guess is too low";
  } else {
    userGuesed = true;
    message.textContent = "Correct";
  }
  currentScore--;
};

const checkUserNumber = function () {
  if (userGuesed) {
    restartGame();
  }
  if (userGuess.value !== "" && !userGuesed) {
    findIfsmallerOrBigger();
    checkGameOver();
    ifUserGuessed();
    updateUi();
  } else {
    message.textContent = "Please write a number between 0 and 20";
  }
};

checkBtn.addEventListener("click", checkUserNumber);
restartBtn.addEventListener("click", restartGame);

document.addEventListener("keydown", keyboardHandler);
