function playRound(player, computer) {
    if((player === "rock" && computer === "Scissor") || (player === "scissor" && computer === "Paper") || (player === "paper" && computer === "Rock")) {
        return "Playe win";
    }
    
    if ((computer === "Rock" && player === "scissor") || (computer === "Scissor" && player === "paper") || (computer === "Paper" && player === "rock")) {
        return "computer wins";
    } 
    
    if (player = computer) {
        return "Its a Tie";
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
        default:
            return "something went wrong"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));