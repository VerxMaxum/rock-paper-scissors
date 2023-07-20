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
    let playerChoiceValue, computerChoiceValue;

    //if()
    if(playerSelection === computerSelection) {
        return `Tie! Both of you chose ${playerSelection}`;
    }
    else if(playerSelection === "rock" && computer)
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
}
console.log(getComputerChoice());