function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}

function playRound(player, computer) {
    if (player === "rock" && computer === "rock") {
        return "It's a draw. Rock against Rock. Try again."
    } else if (player === "rock" && computer === "paper") {
        return "You lose! Paper beats Rock."
    } else if (player === "rock" && computer === "scissors") {
        return "You win! Rock beats Scissors."
    } else if (player === "paper" && computer === "rock") {
        return "You win! Paper beats Rock."
    } else if (player === "paper" && computer === "paper") {
        return "It's a draw. Paper against Paper. Try again."
    } else if (player === "paper" && computer === "scissors") {
        return "You lose! Scissors beats Paper."
    } else if (player === "scissors" && computer === "rock") {
        return "You lose! Rock beats Scissors."
    } else if (player === "scissors" && computer === "paper") {
        return "You win! Scissors beats Paper."
    } else if (player === "scissors" && computer === "scissors") {
        return "It's a draw. Scissors against Scissors. Try again."
    }
}

const choicePlayer = "paper";
const choiceComputer = getComputerChoice();
console.log(playRound(choicePlayer, choiceComputer));