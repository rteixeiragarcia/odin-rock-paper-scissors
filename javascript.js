let playerScore = 0;
let computerScore = 0;

const textPlayerScore = document.querySelector(".player-score");
textPlayerScore.textContent = `${playerScore}`;

const textComputerScore = document.querySelector(".computer-score");
textComputerScore.textContent = `${computerScore}`;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}

function updateScore(classPlayer, score) {
    const textScore = document.querySelector(classPlayer);
    textScore.textContent = `${score}`;
}