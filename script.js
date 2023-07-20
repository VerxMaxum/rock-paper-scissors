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

function game() {
    playerWin = 0;
    computerWin = 0;
    for(let i = 1; i <= 5; i++) {
        playerChoice = prompt("Rock, paper, or scissors?");
        computerChoice = getComputerChoice();
        message = play(playerChoice, computerChoice);

        winOrLose = message.charAt(4);

        if(winOrLose === 'w') {
            playerWin++;
        }
        else if(winOrLose === 'l') {
            computerWin++;
        }

        console.log(message);
    }

    if(playerWin > computerWin) {
        console.log("You won more rounds than the computer!");
    }
    else if(computerWin > playerWin){
        console.log("The computer won more rounds than you.");
    }
    else {
        console.log("It's really a tie...")
    }
}

game();