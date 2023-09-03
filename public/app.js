// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
];

// Function to check if a player has won
function checkWinner(player) {
for (let condition of conditions) {
const [a, b, c] = condition;
if (cells[a] === player && cells[b] === player && cells[c] === player) {
return true;
}
}
return false;
}

// Function to check if it's a draw
function checkDraw() {
return !cells.includes('');
}

// Function to update the game state
function updateGameState(cellIndex, player) {
cells[cellIndex] = player;
btns[cellIndex].textContent = player;
}

// Function to handle a cell click
function ticTacToe(btn, index) {
if (cells[index] === '' && !checkWinner('X') && !checkWinner('O')) {
updateGameState(index, currentPlayer);

if (checkWinner(currentPlayer)) {
result.textContent = `Player ${currentPlayer} wins!`;
} else if (checkDraw()) {
result.textContent = 'It\'s a draw!';
} else {
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
}
}

// Function to reset the game
function resetGame() {
cells = ['', '', '', '', '', '', '', '', ''];
currentPlayer = 'X';
result.textContent = '';
btns.forEach((btn) => (btn.textContent = ''));
}

// Add click event listeners to all buttons (cells)
btns.forEach((btn, i) => {
btn.addEventListener('click', () => ticTacToe(btn, i));
});

// Add click event listener to the reset button
document.querySelector('#reset').addEventListener('click', resetGame);
