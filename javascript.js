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
    
let playRock = () => {
    let choice = getComputerChoice();

    switch (choice) {
        case "rock":
            return "tie";
            break;
        case "paper":
            return "lose";
            break;
        case "scissors":
            return "win";
            break;
    }
}

let playPaper = () => {
    let choice = getComputerChoice();

    switch (choice) {
        case "rock":
            return "win";
            break;
        case "paper":
            return "tie";
            break;
        case "scissors":
            return "lose";
            break;
    }
}

let playScissors = () => {
    let choice = getComputerChoice();

    switch (choice) {
        case "rock":
            return "lose";
            break;
        case "paper":
            return "win";
            break;
        case "scissors":
            return "tie";
            break;
    }
}