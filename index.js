/* 
    0 = rock
    1 = paper
    2 = scissors
*/
let user = window.prompt("Rock paper scssor? ");

let computerChoice = ["Rock", "Paper", "Scissor"];

let computerScore = 0;
let playerScore = 0;

function game(rounds) {
  let player = playerChoice("Scissor");
  let computer = getComputerChoice();

  for (let i = 0; i < rounds; i++) {
    console.log(playRound(player, computer));
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function playerChoice(choice) {
  switch (choice) {
    case "Rock":
      return "Rock";
    case "Paper":
      return "Paper";
    case "Scissor":
      return "Scissor";
    default:
      return "Something went wrong";
  }
}

function getComputerChoice() {
  let random = getRandom();
  return computerChoice[random];
}

function getRandom() {
  return Math.floor(Math.random() * computerChoice.length);
}

function playRound(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }

  if (
    (player === "Rock" && computer === "Scissor") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissor" && computer === "Paper")
  ) {
    playerScore++;
    return `Player wins! ${player} beats ${computer}`;
  }

  if (
    (computer === "Rock" && player === "Scissor") ||
    (computer === "Paper" && player === "Rock") ||
    (computer === "Scissor" && player === "Paper")
  ) {
    computerScore++;
    return `Computer wins! ${computer} beats ${player}`;
  }
}

game(5);
