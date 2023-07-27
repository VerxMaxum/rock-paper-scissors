const choices = Array.from(document.getElementsByClassName('choice'));

function play(){
    choices.forEach(choice => {
        choice.addEventListener('click', getPlayerChoice);
    });
}

function getComputerChoice() {
    randNum = Math.floor(Math.random() * 100);
    randNum = Math.ceil(randNum / 33);
    choice = "none";
    if(randNum === 1) {
        choice = "Rock";
    }
    else if(randNum === 2) {
        choice = "Paper";
    }
    else if(randNum === 3) {
        choice = "Scissors";
    }
    // console.log(randNum);
    return choice;
}

function play2(playerSelection, computerSelection) {
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
    if(str === "Rock") {
        return -1;
    }
    else if(str === "Paper") {
        return 0;
    }
    else if(str === "Scissors") {
        return 1;
    }
    else {
        return -10;
    }
}

function getPlayerChoice(e) {
    const choice = e.target.id;
    console.log(choice);
}
play();
// document.getElementById('rock').addEventListener('click', getPlayerChoice);
// document.getElementById('paper').addEventListener('click', getPlayerChoice);
// document.getElementById('scissors').addEventListener('click', getPlayerChoice);