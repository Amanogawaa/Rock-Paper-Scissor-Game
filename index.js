const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const userScore = document.querySelector("#player-score");
const aiScore = document.querySelector("#computer-score");
const winner = document.querySelector("#winner");
const currentRound = document.querySelector("#round");
const resetbtn = document.querySelector("#reset");

let playerScore = 0;
let computerScore = 0;
let round = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (round != 10) {
      playRound(button.id, computerChoice());
      round++;
      console.log(round);
      currentRound.textContent = round;
      if (round == 10) {
        if (playerScore == computerScore) {
          winner.textContent = "No one wins";
        } else if (playerScore > computerScore) {
          winner.textContent = "Player wins";
        } else {
          winner.textContent = "Computer Wins";
        }
      }
    }
  });
});

function computerChoice() {
  const computer = ["rock", "paper", "scissor"];
  const computerChoice = Math.floor(Math.random() * computer.length);
  return computer[computerChoice];
}

function playRound(player, computer) {
  if (player === computer) {
    result.innerHTML = "It's a tie!";
  } else if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    playerScore++;
    userScore.textContent = playerScore;
    result.textContent = `Player wins, ${player} beats ${computer}`;
  } else {
    computerScore++;
    aiScore.textContent = computerScore;
    result.textContent = `Computer Wins, ${computer} beats ${player}`;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  userScore.textContent = playerScore;
  aiScore.textContent = computerScore;
  currentRound.textContent = round;
}

resetbtn.addEventListener("click", resetGame);
