function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors'
    }
}

function getHumanChoice(event) {
    choice = event.target.id;
    switch(choice) {
        case 'rock':
            return choice;
        case 'paper':
            return choice;
        case 'scissors':
            return choice;   
    }
}

function updatePage(humanChoice, computerChoice, winner) {
    let yourChoiceP = document.querySelector('#your-choice');
    let computerChoiceP = document.querySelector('#computer-choice');
    let roundResultsP = document.querySelector('#round-results');
    let roundP = document.querySelector('#round');
    let wonP = document.querySelector('#won');
    let lostP = document.querySelector('#lost');
    let drawP = document.querySelector('#draw');
    yourChoiceP.innerHTML = '&#129490; Your choice: ' + humanChoice;
    computerChoiceP.innerHTML = '&#128187; Computer choice: ' + computerChoice;
    roundResultsP.textContent = `Round winner: ${winner}`;
    roundP.textContent = 'Round: ' + round;
    wonP.textContent = 'Won: ' + humanScore;
    lostP.textContent = 'Lost: ' + computerScore;
    drawP.textContent = 'Draw: ' + draw;
}

function gameOver() {
    let finalWinner = document.querySelector('#final-winner');
    let headerTwo = document.querySelector('h2');
    let results = document.querySelector('.results');
    let gameOverButton = document.createElement('button');
    headerTwo.style.display = 'none';
    buttons.style.display = 'none';
    results.classList += ' game-over';
    finalWinner.innerHTML = humanScore > computerScore ? 'You win the game! &#128526;' : 'You lose the game! &#128534;';
    gameOverButton.id = 'game-over-button';
    gameOverButton.textContent = 'Play again';
    gameOverButton.addEventListener('click', () => location.reload());
    results.appendChild(gameOverButton);
}

function playRound(event) {
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
    let winner;
    let finalWinner = document.querySelector('#final-winner');
    finalWinner.textContent = '';

    switch(humanChoice) {
        case computerChoice:
            draw++;
            winner = 'draw';
            break;
        case 'rock':
            winner = computerChoice === 'paper' ? 'computer' : 'human';
            break;
        case 'paper':
            winner = computerChoice === 'rock' ? 'human' : 'computer';
            break;
        case 'scissors':
            winner = computerChoice === 'rock' ? 'computer' : 'human';    
    }    

    if(winner === 'computer') {
        computerScore++;
    } else if(winner === 'human') {
        humanScore++;
    }

    round++;
    updatePage(humanChoice, computerChoice, winner);
    
    if(humanScore === 5 || computerScore === 5) {
        gameOver();
    }

}

let humanScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;
const buttons =  document.querySelector('.buttons');
buttons.addEventListener('click', playRound);