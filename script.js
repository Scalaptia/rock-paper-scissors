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
}

// Prompt player to choose number from 1-3
function playerPlay() {
    playerSelection = parseInt(prompt('Choose 1-3: '));  // Prompt to choose number and convert to int
    switch(playerSelection) {                            // Convert number to RPS
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
}

// Play a whole round
function playRound() {
    playerPlay();
    computerPlay();
    switch(playerSelection) {
    case 'Rock':
        if (computerSelection === 'Paper') {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Computer Wins!`);
            computerPoints +++ 1;
        } else if (computerSelection === 'Scissors') {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Player Wins!`);
            playerPoints +++ 1;
        } else
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Its a draw!`);
        break;

    case 'Paper':
        if (computerSelection === 'Scissors') {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Computer Wins!`);
            computerPoints +++ 1;
        } else if (computerSelection === 'Rock') {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Player Wins!`);
            playerPoints +++ 1;
        } else
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Its a draw!`);
        break;

    case 'Scissors':
        if (computerSelection === 'Rock') {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Computer Wins!`);
            computerPoints +++ 1;
        } else if (computerSelection === 'Paper') {
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Player Wins!`);
            playerPoints +++ 1;
        } else
            console.log(`Player chose: ${playerSelection}, Computer chose: ${computerSelection}. Its a draw!`);
        break;
    }
    roundsPlayed +++ 1;
    console.log(`Player has: ${playerPoints}, Computer has: ${computerPoints}`)
}

// Loops game until either Player or Computer reaches 5
function game() {
    while (i = 1) {
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

game();