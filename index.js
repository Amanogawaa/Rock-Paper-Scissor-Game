/* 
    0 = rock
    1 = paper
    2 = scissors
*/

let computerScore = 0;
let playerScore = 0;
let rounds = 1;

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissor";
    }

    return random;
}

function playRound(player, computer) {
    if (computer != player) {
        if (
            (player === "Rock" && computer === "Scissor") ||
            (player === "Paper" && computer === "Rock") ||
            (player === "Scissor" && computer === "Paper")) {
            return "Player Wins";
        }
        if (
            (computer === "Rock" && player === "Scissor") ||
            (computer === "Paper" && player === "Rock") ||
            (computer === "Scissor" && player === "Paper")
        ) {
            return "Computer Wins";
        }
    } else {
        return "It's a tie!";
    }
}

let player = "Paper";
let computer = getComputerChoice();
let gameOn = playRound(player, computer);
console.log(gameOn);