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

function getHumanChoice() {
    let choice = prompt('Make your choice: rock, paper, scissors? ');
    if(choice === null) {
        return getHumanChoice();
    }
    choice = choice.toLowerCase();
    switch(choice) {
        case 'rock':
            return choice;
        case 'paper':
            return choice;
        case 'scissors':
            return choice;
        default:
            return getHumanChoice();    
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let winner;
    switch(humanChoice) {
        case computerChoice:
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
    return [winner, humanChoice, computerChoice];
}