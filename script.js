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

    // Logic for declaring winner
    switch(playerSelection) {
    case 'ROCK':
        if (computerSelection === 'PAPER') {
            winner.innerText = 'Computer Wins!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            computerPoints +++ 1;
        } else if (computerSelection === 'SCISSORS') {
            winner.innerText = 'You Win!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
        break;

    case 'PAPER':
        if (computerSelection === 'SCISSORS') {
            winner.innerText = 'Computer Wins!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            computerPoints +++ 1;
        } else if (computerSelection === 'ROCK') {
            winner.innerText = 'You Win!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
        break;

    case 'SCISSORS':
        if (computerSelection === 'ROCK') {
            winner.innerText = 'Computer Wins!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            computerPoints +++ 1;
        } else if (computerSelection === 'PAPER') {
            winner.innerText = 'You Win!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playout.innerText = `You chose ${playerSelection}, Computer chose ${computerSelection}`;
        break;
    }
    roundsPlayed +++ 1;
    updateScore();

    // Declare winner
    if (computerPoints === 5) {
        let winner = 'COMPUTER'
        alert(`Game Over! ${winner} WINS!. Press OK to restart`);
        restartGame();
    }
    if (playerPoints === 5) {
        let winner = 'PLAYER'
        alert(`Game Over! ${winner} WINS!. Press OK to restart`);
        restartGame();
    }
    
}

// UI

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const winner = document.querySelector('.winner');
const playout = document.querySelector('.playout');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const round = document.querySelector('.round');

function updateScore() {
    playerScore.innerText = `Player Score = ${playerPoints}`
    computerScore.innerText = `Computer Score = ${computerPoints}`
    round.innerText = `Round ${roundsPlayed}`
}

function restartGame(){
    playerPoints = 0;
    computerPoints = 0;
    roundsPlayed = 0;
    updateScore();
    winner.innerText = 'Choose your weapon!';
    playout.innerText = `First to 5 points wins`;
}

rockBtn.addEventListener('click', () => playRound('ROCK'));
paperBtn.addEventListener('click', () => playRound('PAPER'));
scissorsBtn.addEventListener('click', () => playRound('SCISSORS'));