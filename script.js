const choices = Array.from(document.getElementsByClassName('choice'));
const rock_paper_or_scissors = [-1, 0, 1];
// global so that it can be accessed and reverted back to 0
let playerScore = 0;
let computerScore = 0;

function getRpsValue(buttonId) {
    if(buttonId === 'rock') return -1;
    else if(buttonId === 'paper') return 0;
    else if(buttonId === 'scissors') return 1;
}

function getComputerChoice() {
    return rock_paper_or_scissors[Math.floor(Math.random() * 3)];
}

function playRound(event) {
    const playerChoice = getRpsValue(event.target.id);
    const computerChoice = getComputerChoice();

    const displayedPlayerScore = document.getElementById('human-point');
    const displayedComputerScore = document.getElementById('computer-point');

    const result = playerChoice - computerChoice;

    if(result === 1 || result === -2) playerScore++;
    else if(result === -1 || result === 2) computerScore++;
    
    displayedPlayerScore.textContent = playerScore;
    displayedComputerScore.textContent = computerScore;

    if(playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        displayedPlayerScore.textContent = playerScore;
        displayedComputerScore.textContent = computerScore;
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', playRound);
});