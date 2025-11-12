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