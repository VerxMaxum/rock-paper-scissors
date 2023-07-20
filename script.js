function getComputerChoice() {
    randNum = Math.floor(Math.random() * 100);
    randNum = Math.ceil(randNum / 33);
    choice = "none";
    if(randNum === 1) {
        choice = "rock";
    }
    else if(randNum === 2) {
        choice = "paper";
    }
    else if(randNum === 3) {
        choice = "scissors";
    }
    // console.log(randNum);
    return choice;
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // gets integer representation of the selection
    let playerChoiceValue = getChoiceValue(playerSelection);
    let computerChoiceValue = getChoiceValue(computerSelection);

    result = playerChoiceValue - computerChoiceValue;
    
    if(result === 0) {
        return `Tie! Both of you chose ${playerSelection}`;
    }
    else if(result === 1 || result === -2) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if(result === -1 || result === 2) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return "Invalid choice!";
    }
}

function getChoiceValue(str) {
    str = str.toLowerCase();
    if(str === "rock") {
        return -1;
    }
    else if(str === "paper") {
        return 0;
    }
    else if(str === "scissors") {
        return 1;
    }
    else {
        return -10;
    }
}
console.log(getComputerChoice());