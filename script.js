let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;


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
    console.log('Player chose: ' + playerSelection);
}

// Play a whole round
function playRound(playerSelection, computerSelection) {
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
    console.log(`Player has: ${playerPoints}, Computer has: ${computerPoints}`)
}

// Loops game until either Player or Computer reaches 5
function game() {
    while (playerPoints != 5 || computerPoints != 5) {
        playRound(playerSelection, computerSelection);
    }
    console.log(`GAME OVER!`)
    
}

game();