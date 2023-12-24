/* 
    0 = rock
    1 = paper
    2 = scissors
*/

let computerScore = 0;
let playerScore = 0;
let rounds;

function game() {

    let player = playerChoice("Rock");
    let computer = getComputerChoice();

    let gameOne = playRound(player, computer);
    console.log(gameOne);
    let gameTwo = playRound(player, computer);
    console.log(gameTwo);
    let gameThree = playRound(player, computer);
    console.log(gameThree);
    let gameFour = playRound(player, computer);
    console.log(gameFour);
    let gameFive = playRound(player, computer);
    console.log(gameFive);
}

function playerChoice(choice) {
    switch (choice) {
        case "Rock":
            return "Rock";
        case "Paper":
            return "Paper";
        case "Scissor":
            return "Scissor";
    }

}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    switch (random) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
    }

    return random;
}

function playRound(player, computer) {

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "Rock" && computer === "Scissor") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissor" && computer === "Paper")) {
        console.log(`${player} beats ${computer}`);
        playerScore++;
        return "Player Wins";

    }
    if (
        (computer === "Rock" && player === "Scissor") ||
        (computer === "Paper" && player === "Rock") ||
        (computer === "Scissor" && player === "Paper")
    ) {
        console.log(`${computer} beats ${player}`);
        computerScore++;
        return "Computer Wins";
    }
   
}

game();