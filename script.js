let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

// Choose a random number (1-3) for the COMPUTER to play
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1  // Choose random number
    computerSelection = randomNumber;
    switch(computerSelection) {                             // Convert number to RPS
        case 1:
            computerSelection = 'ROCK'
            break;

        case 2:
            computerSelection = 'PAPER'
            break;

        case 3:
            computerSelection = 'SCISSORS'
            break;

        default:
            computerSelection = 'Invalid Arguement'
        }
}

// Prompt player to choose RPS
function playerPlay() {
    playerSelection = prompt('Choose your weapon! Rock, Paper or Scissors');
}

// Play a whole round
function playRound() {
    playerPlay();
    computerPlay();
    switch(playerSelection.toUpperCase()) {
    case 'ROCK':
        if (computerSelection === 'PAPER') {
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Computer Wins!`);
            computerPoints +++ 1;
        } else if (computerSelection === 'SCISSORS') {
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Player Wins!`);
            playerPoints +++ 1;
        } else
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Its a draw!`);
        break;

    case 'PAPER':
        if (computerSelection === 'SCISSORS') {
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Computer Wins!`);
            computerPoints +++ 1;
        } else if (computerSelection === 'ROCK') {
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Player Wins!`);
            playerPoints +++ 1;
        } else
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Its a draw!`);
        break;

    case 'SCISSORS':
        if (computerSelection === 'ROCK') {
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Computer Wins!`);
            computerPoints +++ 1;
        } else if (computerSelection === 'PAPER') {
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Player Wins!`);
            playerPoints +++ 1;
        } else
            console.log(`Player chose: ${playerSelection.toUpperCase()}, Computer chose: ${computerSelection}. Its a draw!`);
        break;
    }
    roundsPlayed +++ 1;
    console.log(`Player has: ${playerPoints}, Computer has: ${computerPoints}`)
}

// Loops game until either Player or Computer reaches 5
window.onload = function game() {
    while (true) {
        if (computerPoints === 5) {
            winner = 'COMPUTER'
            break;
        }

        if (playerPoints === 5) {
            winner = 'PLAYER'
            break;
        }

        console.log(`Round ${roundsPlayed + 1}`)
        playRound(playerSelection, computerSelection);
    }

    console.log(`GAME OVER! ${winner} WINS!`)
    
}