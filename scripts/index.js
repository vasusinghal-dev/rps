const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector(".reset");
const autoButton = document.querySelector(".auto");

const playerMoveDisplay = document.getElementById("player-move");
const computerMoveDisplay = document.getElementById("computer-move");
const resultText = document.getElementById("result-text");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const tiesDisplay = document.getElementById("ties");

let wins = 0;
let losses = 0;
let ties = 0;
let autoPlay = false;
let intervalID;

// Event Listeners
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));

resetButton.addEventListener("click", resetGame);
autoButton.addEventListener("click", toggleAutoPlay);

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "a" || key === "r" || key === "p" || key === "s" || key === "x") {
    event.preventDefault();
  }

  if (key === "a") {
    toggleAutoPlay();
  } else if (key === "r") {
    if (!autoPlay) playRound("rock");
  } else if (key === "p") {
    if (!autoPlay) playRound("paper");
  } else if (key === "s") {
    if (!autoPlay) playRound("scissors");
  } else if (key === "x") {
    resetGame();
  }
});

// Game functions
function randomMove() {
  let move;
  const random = Math.random();

  if (random < 1 / 3) move = "rock";
  else if (random >= 1 / 3 && random < 2 / 3) move = "paper";
  else move = "scissors";

  return move;
}

function playRound(playerMove) {
  const computerMove = randomMove();

  // Update move displays
  playerMoveDisplay.src = `images/${playerMove}.png`;
  computerMoveDisplay.src = `images/${computerMove}.png`;

  // Determine winner
  let result;
  if (playerMove === computerMove) {
    result = "It's a tie!";
    ties++;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win!";
    wins++;
  } else {
    result = "Computer wins!";
    losses++;
  }

  // Update UI
  resultText.textContent = result;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  tiesDisplay.textContent = ties;
}

function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;

  playerMoveDisplay.src = "images/question.png";
  computerMoveDisplay.src = "images/question.png";
  resultText.textContent = "Choose your move!";

  updateScoreDisplay();

  if (autoPlay) {
    toggleAutoPlay();
  }
}

function toggleAutoPlay() {
  autoPlay = !autoPlay;

  rockButton.disabled = autoPlay;
  paperButton.disabled = autoPlay;
  scissorsButton.disabled = autoPlay;

  if (autoPlay) {
    intervalID = setInterval(() => {
      playRound(randomMove());
    }, 700);
  } else clearInterval(intervalID);
}
