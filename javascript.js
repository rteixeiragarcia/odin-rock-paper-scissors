let playerScore = 0;
let computerScore = 0;

const textPlayerScore = document.querySelector(".player-score");
textPlayerScore.textContent = `${playerScore}`;

const textComputerScore = document.querySelector(".computer-score");
textComputerScore.textContent = `${computerScore}`;

let getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}

let updateScore = (classPlayer, score) => {
    const textScore = document.querySelector(classPlayer);
    textScore.textContent = `${score}`;
}