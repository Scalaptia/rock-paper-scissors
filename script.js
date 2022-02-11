let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

// Choose a random weapon for the COMPUTER to play
function computerPlay() {
    const weapons = ['ROCK', 'PAPER', 'SCISSORS']
    computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
}

// Play a whole round
function playRound(playerSelection) {
    computerPlay();
    switch(playerSelection) {
    case 'ROCK':
        if (computerSelection === 'PAPER') {
            winner.innerText = 'Computer Wins!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
            computerPoints +++ 1;
        } else if (computerSelection === 'SCISSORS') {
            winner.innerText = 'You Win!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
        break;

    case 'PAPER':
        if (computerSelection === 'SCISSORS') {
            winner.innerText = 'Computer Wins!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
            computerPoints +++ 1;
        } else if (computerSelection === 'ROCK') {
            winner.innerText = 'You Win!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
        break;

    case 'SCISSORS':
        if (computerSelection === 'ROCK') {
            winner.innerText = 'Computer Wins!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
            computerPoints +++ 1;
        } else if (computerSelection === 'PAPER') {
            winner.innerText = 'You Win!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}.`;
        break;
    }
    roundsPlayed +++ 1;
    console.log(`Player has: ${playerPoints}, Computer has: ${computerPoints}`)
}

// Loops game until either Player or Computer reaches 5
/*window.onload = function game() {
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
} */

// UI

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const winner = document.querySelector('.winner');
const playout = document.querySelector('.playout');

rockBtn.addEventListener('click', () => playRound('ROCK'));
paperBtn.addEventListener('click', () => playRound('PAPER'));
scissorsBtn.addEventListener('click', () => playRound('SCISSORS'));