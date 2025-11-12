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

function playGame(){
    let computerScore = 0;
    let humanScore = 0;
    let roundResults;
    alert(`Welcome to rock paper scissors game! You will be playing five rounds against computer.`);
    for(let i = 1 ; i <= 5 ; i++){
        alert(`Round ${i}:`);
        roundResults = playRound();
        if(roundResults[0] === 'human') {
            humanScore++;
            alert(`YOU WIN! ${roundResults[1]} beats ${roundResults[2]}.`);
        } else if(roundResults[0] === 'computer') {
            computerScore++;
            alert(`YOU LOSE! ${roundResults[2]} beats ${roundResults[1]}.`);
        } else {
            alert(`DRAW! both of you chose ${roundResults[1]}.`);
        }
        alert(`Round ${i} scores. YOU : ${humanScore} --- COMPUTER : ${computerScore}`)
    }
    if(computerScore === humanScore) {
        alert(`THIS IS A DRAW! FINAL SCORES || You : ${humanScore} --- Computer : ${computerScore} ||`);
    } else if(humanScore > computerScore) {
        alert(`YOU WIN THE GAME! FINAL SCORES || You : ${humanScore} --- Computer : ${computerScore} ||`);
    } else {
        alert(`COMPUTER WINS THE GAME! FINAL SCORES || You : ${humanScore} --- Computer : ${computerScore} ||`);
    }
}