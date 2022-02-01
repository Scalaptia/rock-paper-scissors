let playerSelection;
let computerSelection;

// Choose a random number (1-3) for the COMPUTER to play
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1  // Choose random number
    computerSelection = randomNumber;
    switch(computerSelection) {
        case 1:
            computerSelection = 'Rock'
            break;

        case 2:
            computerSelection = 'Paper'
            break;

        case 3:
            computerSelection = 'Scissors'
            break;

        default:
            computerSelection = 'Invalid Arguement'
        }

    console.log('Computer chose: ' + computerSelection);
}
computerPlay();

// Prompt player to choose number from 1-3
function playerPlay() {
    playerSelection = parseInt(prompt('Choose 1-3: '));  // Choose random number
    switch(playerSelection) {
        case 1:
            playerSelection = 'Rock'
            break;

        case 2:
            playerSelection = 'Paper'
            break;

        case 3:
            playerSelection = 'Scissors'
            break;

        default:
            playerSelection = 'Invalid Arguement'
        }
    console.log('Player chose: ' + playerSelection);
}

    

playerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 1) {
        if (computerSelection === 2) {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Computer Wins!`);
        } else if (computerSelection === 3) {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Player Wins!`);
        } else (console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Its a draw!`));

    }
}
playRound()