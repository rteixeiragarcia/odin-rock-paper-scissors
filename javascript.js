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
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/fist.png");
            computerBtn.appendChild(compImg);
            rockBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;"
            return "tie";
            break;

        case "paper":
            scissorsBtn.style.cssText = "box-shadow: none";
            paperBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You lose! Paper beats Rock."
            ++computerScore;
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/hand.png");
            computerBtn.appendChild(compImg);
            rockBtn.style.cssText = "box-shadow: 0px 0px 30px red;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px green;"
            return "lose";
            break;

        case "scissors":
            scissorsBtn.style.cssText = "box-shadow: none";
            paperBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You win! Rock beats Scissors."
            ++playerScore;
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/two.png");
            computerBtn.appendChild(compImg);
            rockBtn.style.cssText = "box-shadow: 0px 0px 30px green;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px red;"
            return "win";
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
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/fist.png");
            computerBtn.appendChild(compImg);
            paperBtn.style.cssText = "box-shadow: 0px 0px 30px green;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px red;"
            return "win";
            break;

        case "paper":
            scissorsBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "It's a tie. Paper ties with Paper.";
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/hand.png");
            computerBtn.appendChild(compImg);
            paperBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;"
            return "tie";
            break;

        case "scissors":
            scissorsBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You lose! Scissors beats Paper.";
            ++computerScore;
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/two.png");
            computerBtn.appendChild(compImg);
            paperBtn.style.cssText = "box-shadow: 0px 0px 30px red;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px green;"
            return "lose";
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
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/fist.png");
            computerBtn.appendChild(compImg);
            scissorsBtn.style.cssText = "box-shadow: 0px 0px 30px red;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px green;"
            return "lose";
            break;

        case "paper":
            paperBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "You win! Scissors beats Paper";
            ++playerScore;
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/hand.png");
            computerBtn.appendChild(compImg);
            scissorsBtn.style.cssText = "box-shadow: 0px 0px 30px green;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px red;"
            return "win";
            break;

        case "scissors":
            paperBtn.style.cssText = "box-shadow: none";
            rockBtn.style.cssText = "box-shadow: none";
            resultRound.textContent = "It's a tie. Scissors ties with Scissors.";
            updateScore("player-score", playerScore);
            updateScore("computer-score", computerScore);
            compImg.setAttribute("src", "images/two.png");
            computerBtn.appendChild(compImg);
            scissorsBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;";
            computerBtn.style.cssText = "box-shadow: 0px 0px 30px yellow;"
            return "tie";
            break;
    }
}

let round = () => {
    rockBtn.addEventListener("click", playRock);
    paperBtn.addEventListener("click", playPaper);
    scissorsBtn.addEventListener("click", playScissors);
}

round();