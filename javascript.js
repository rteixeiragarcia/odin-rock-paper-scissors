let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}

const textPlayerScore = document.querySelector(".player-score");
textPlayerScore.textContent = `${playerScore}`;

const textComputerScore = document.querySelector(".computer-score");
textComputerScore.textContent = `${computerScore}`;