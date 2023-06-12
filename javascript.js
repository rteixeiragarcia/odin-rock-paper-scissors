function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    return options[optionRandom];
}
