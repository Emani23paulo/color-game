// script.js

const colorBox = document.getElementById('colorBox');
const colorOptionsContainer = document.getElementById('colorOptions');
const gameInstructions = document.getElementById('gameInstructions');
const gameStatus = document.getElementById('gameStatus');
const scoreDisplay = document.getElementById('score');
const newGameButton = document.getElementById('newGameButton');

let score = 0;

// Predefined set of colors (can add more colors if needed)
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F2F033', '#FF33F5', '#33F5FF'];

// Function to generate a random target color and color options
function generateGame() {
    const targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;

    const correctIndex = Math.floor(Math.random() * 6);
    const options = colors.slice();
    options[correctIndex] = targetColor;

    colorOptionsContainer.innerHTML = '';

    options.forEach((color, index) => {
        const button = document.createElement('button');
        button.style.backgroundColor = color;
        button.classList.add('color-option');
        button.setAttribute('data-testid', 'colorOption');
        button.addEventListener('click', () => checkGuess(color, targetColor));
        colorOptionsContainer.appendChild(button);
    });

    // Reset the game status
    gameStatus.textContent = '';
}

// Function to check the player's guess
function checkGuess(selectedColor, targetColor) {
    if (selectedColor === targetColor) {
        score++;
        gameStatus.textContent = 'Correct! Well done!';
        gameStatus.style.color = 'green';
    } else {
        gameStatus.textContent = 'Wrong! Try again.';
        gameStatus.style.color = 'red';
    }

    scoreDisplay.textContent = `Score: ${score}`;
}

// Reset the game and start a new round
newGameButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    generateGame();
});

// Initialize the game when the page loads
window.onload = generateGame;
