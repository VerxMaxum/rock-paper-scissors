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

console.log(getComputerChoice());