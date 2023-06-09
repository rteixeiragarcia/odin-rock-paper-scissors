function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];

    let optionRandom = Math.floor(Math.random() * 3);

    console.log(options[optionRandom]);

    return options[optionRandom];
}