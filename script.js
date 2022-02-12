let playerSelection;
let computerSelection;
let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

// Choose a random weapon for the COMPUTER to play
function computerPlay() {
    const weapons = ['🪨', '📄', '✂️']
    computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
}

// Play a whole round
function playRound(playerSelection) {
    computerPlay();

    // Logic for declaring winner
    switch(playerSelection) {
    case '🪨':
        if (computerSelection === '📄') {
            winner.innerText = 'Computer Wins!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
            computerPoints +++ 1;
        } else if (computerSelection === '✂️') {
            winner.innerText = 'You Win!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
        break;

    case '📄':
        if (computerSelection === '✂️') {
            winner.innerText = 'Computer Wins!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
            computerPoints +++ 1;
        } else if (computerSelection === '🪨') {
            winner.innerText = 'You Win!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
        break;

    case '✂️':
        if (computerSelection === '🪨') {
            winner.innerText = 'Computer Wins!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;

            computerPoints +++ 1;
        } else if (computerSelection === '📄') {
            winner.innerText = 'You Win!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
            playerPoints +++ 1;
        } else
            winner.innerText = 'Its a draw!';
            playoutPlayer.innerText = `${playerSelection}`;
            playoutComputer.innerText = `${computerSelection}`;
        break;
    }
    roundsPlayed +++ 1;
    updateScore();

    // Declare winner
    if (computerPoints === 5) {
        let winner = 'COMPUTER'
        alert(`GAME OVER! ${winner} WINS!. Press OK to restart`);
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
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const round = document.querySelector('.round');
const playoutPlayer = document.querySelector('.playoutPlayer');
const playoutComputer = document.querySelector('.playoutComputer');

function updateScore() {
    playerScore.innerText = `Player: ${playerPoints}`
    computerScore.innerText = `Computer: ${computerPoints}`
    round.innerText = `Round ${roundsPlayed}`
}

function restartGame(){
    playerPoints = 0;
    computerPoints = 0;
    roundsPlayed = 0;
    updateScore();
    winner.innerText = 'Choose your weapon! First to 5 wins!';
    playoutPlayer.innerText = '❓';
    playoutComputer.innerText = '❓';
}

rockBtn.addEventListener('click', () => playRound('🪨'));
paperBtn.addEventListener('click', () => playRound('📄'));
scissorsBtn.addEventListener('click', () => playRound('✂️'));