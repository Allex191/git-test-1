/* const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const DRAFT = "It's a draft";
const WIN = "You win";
const LOOSE = "You loosed";

let gameIsRunning = false;
let count = 0;

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK} ${PAPER} or ${SCISSORS}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`invalid choice we selected ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomNumber = Math.random();
  if (randomNumber <= 0.33) {
    return ROCK;
  } else if (randomNumber <= 0.66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinStatus = function (player, computer) {
  if (player === computer) {
    return DRAFT;
  } else if (
    (player === ROCK && computer === SCISSORS) ||
    (player === SCISSORS &&
      computer === PAPER &&
      player === PAPER &&
      computer === ROCK)
  ) {
    return WIN;
  } else {
    return LOOSE;
  }
};

startGameBtn.addEventListener("click", function () {
  count++;
   if (gameIsRunning) {
    return;
  }
  gameIsRunning = true; 
  console.log(`Game Nr${count} is starting`);
  const playerSelection = getPlayerChoice();
  console.log(`You selected ${playerSelection}`);
  const computerSelection = getComputerChoice();
  console.log(`Computer selected ${computerSelection}`);
  const gameStatus = getWinStatus(playerSelection, computerSelection);
  console.log(gameStatus);
});
 */