function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}

function playRound(player, computer) {
    if (player === "rock" && computer === "rock") {
        return "draw"
    } else if (player === "rock" && computer === "paper") {
        return "lose"
    } else if (player === "rock" && computer === "scissors") {
        return "win"
    } else if (player === "paper" && computer === "rock") {
        return "win"
    } else if (player === "paper" && computer === "paper") {
        return "draw"
    } else if (player === "paper" && computer === "scissors") {
        return "lose"
    } else if (player === "scissors" && computer === "rock") {
        return "lose"
    } else if (player === "scissors" && computer === "paper") {
        return "win"
    } else if (player === "scissors" && computer === "scissors") {
        return "draw"
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 0; i < 5; i++){
        let computer = getComputerChoice();
        let player = prompt("Choose your weapon: ");
        let playerLower = player.toLowerCase();

        if (playRound(playerLower, computer) === "win") {
            ++scorePlayer;
            console.log(`You win! ${playerLower} beats ${computer}. You have ${scorePlayer} win(s). Computer has ${scoreComputer} win(s).`);
        } else if(playRound(playerLower, computer) === "lose") {
            ++scoreComputer;
            console.log(`You lose! ${computer} beats ${playerLower}. You have ${scorePlayer} win(s). Computer has ${scoreComputer} win(s).`);
        } else if(playRound(playerLower, computer) === "draw") {
            console.log(`It's a draw! ${playerLower} draws ${computer}. You have ${scorePlayer} win(s). Computer has ${scoreComputer} win(s).`);
        }
    }
}

game();