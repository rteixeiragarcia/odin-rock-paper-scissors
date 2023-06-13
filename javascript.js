let playerScore = 0;
let computerScore = 0;

const textPlayerScore = document.getElementsByClassName("player-score")[0];
textPlayerScore.textContent = `${playerScore}`;

const textComputerScore = document.getElementsByClassName("computer-score")[0];
textComputerScore.textContent = `${computerScore}`;

const rockBtn = document.getElementsByClassName("rock-btn")[0];
const paperBtn = document.getElementsByClassName("paper-btn")[0];
const scissorsBtn = document.getElementsByClassName("scissors-btn")[0];
const resultRound = document.getElementsByClassName("result-round")[0];
const computerBtn = document.getElementsByClassName("computer-btn")[0];
const compImg = document.createElement("img");
const restartBtn = document.createElement("button");
const main = document.getElementsByClassName("main")[0];
const divGame = document.getElementsByClassName("div-game")[0];

restartBtn.textContent = "New Game";
restartBtn.style.cssText = "padding: 10px; font-family: 'Press Start 2P', cursive; background-color: #2E282A; color: #FAD8D6;";

let getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}

let updateScore = (classPlayer, score) => {
    const textScore = document.getElementsByClassName(classPlayer)[0];
    textScore.textContent = `${score}`;
}
    
let playRock = () => {
    let choice = getComputerChoice();

    switch (choice) {
        case "rock":
            scissorsBtn.style.cssText = "box-shadow: none";
            paperBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "It's a tie. Rock ties with Rock.";
            compImg.setAttribute("src", "images/fist.png");
            computerBtn.appendChild(compImg);
            rockBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;"
            break;

        case "paper":
            scissorsBtn.style.cssText = "box-shadow: none";
            paperBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You lose! Paper beats Rock."
            ++computerScore;
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/hand.png");
            computerBtn.appendChild(compImg);
            rockBtn.style.cssText = "box-shadow: 0px 0px 30px red;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px green;"
            if (computerScore === 5) {
                gameDone();
                playerScore = 0;
                computerScore = 0;
            }
            break;

        case "scissors":
            scissorsBtn.style.cssText = "box-shadow: none";
            paperBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You win! Rock beats Scissors."
            ++playerScore;
            updateScore("player-score", playerScore);
            compImg.setAttribute("src", "images/two.png");
            computerBtn.appendChild(compImg);
            rockBtn.style.cssText = "box-shadow: 0px 0px 30px green;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px red;"
            if (playerScore === 5) {
                gameDone();
                playerScore = 0;
                computerScore = 0;
            }
            break;
    }
}

let playPaper = () => {
    let choice = getComputerChoice();

    switch (choice) {
        case "rock":
            scissorsBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You win! Paper beats Rock.";
            ++playerScore;
            updateScore("player-score", playerScore);
            compImg.setAttribute("src", "images/fist.png");
            computerBtn.appendChild(compImg);
            paperBtn.style.cssText = "box-shadow: 0px 0px 30px green;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px red;"
            if (playerScore === 5) {
                gameDone();
                playerScore = 0;
                computerScore = 0;
            }
            break;

        case "paper":
            scissorsBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "It's a tie. Paper ties with Paper.";
            compImg.setAttribute("src", "images/hand.png");
            computerBtn.appendChild(compImg);
            paperBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;"
            break;

        case "scissors":
            scissorsBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You lose! Scissors beats Paper.";
            ++computerScore;
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/two.png");
            computerBtn.appendChild(compImg);
            paperBtn.style.cssText = "box-shadow: 0px 0px 30px red;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px green;"
            if (computerScore === 5) {
                gameDone();
                playerScore = 0;
                computerScore = 0;
            }
            break;
    }
}

let playScissors = () => {
    let choice = getComputerChoice();

    switch (choice) {
        case "rock":
            paperBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You lose! Rock beats Scissors";
            ++computerScore;
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/fist.png");
            computerBtn.appendChild(compImg);
            scissorsBtn.style.cssText = "box-shadow: 0px 0px 30px red;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px green;"
            if (computerScore === 5) {
                gameDone();
                playerScore = 0;
                computerScore = 0;
            }
            break;

        case "paper":
            paperBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You win! Scissors beats Paper";
            ++playerScore;
            updateScore("player-score", playerScore);
            compImg.setAttribute("src", "images/hand.png");
            computerBtn.appendChild(compImg);
            scissorsBtn.style.cssText = "box-shadow: 0px 0px 30px green;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px red;"
            if (playerScore === 5) {
                gameDone();
                playerScore = 0;
                computerScore = 0;
            }
            break;

        case "scissors":
            paperBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "It's a tie. Scissors ties with Scissors.";
            compImg.setAttribute("src", "images/two.png");
            computerBtn.appendChild(compImg);
            scissorsBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;"
            break;
    }
}

rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorsBtn.addEventListener("click", playScissors);
restartBtn.addEventListener("click", restartGame);

function gameDone() {
    divGame.remove();
    main.appendChild(restartBtn);
}

function restartGame() {
    restartBtn.remove();
    main.appendChild(divGame);

    const textPlayerScore = document.getElementsByClassName("player-score")[0];
    textPlayerScore.textContent = `${playerScore}`;

    const textComputerScore = document.getElementsByClassName("computer-score")[0];
    textComputerScore.textContent = `${computerScore}`;
}