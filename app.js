import { compareNumbers } from './compare-numbers.js';

//Intialize DOM Elements
const userInput = document.getElementById('guessInput');
const lifeField = document.getElementById('remaining');
const previousGuessField = document.getElementById('last-guess');
const lowHighField = document.getElementById('low-high');
const resultField = document.getElementById('result');
const submission = document.getElementById('submit-button');

//Set Initial State
const targetNumber = Math.floor(Math.random() * 20);
let gameLives = 4;
lifeField.textContent = `Guesses Remaining: ${gameLives}`;


//Set Event Handlers
submission.addEventListener('click', function() {  
    let userGuess = Number(userInput.value);
    previousGuessField.textContent = `Your guess was ${userGuess}`;
    let comparisonResult = compareNumbers(userGuess, targetNumber);
    if (comparisonResult < 0) {
        updateLives();
        updateTooLow();
    } else if (comparisonResult > 0) {
        updateLives();
        updateTooHigh();
    } else if (comparisonResult === 0) {
        youWin();
    }
    if (gameLives === 0){
        youLose();
    }
});

const updateLives = () => {
    gameLives--;
    lifeField.textContent = `Guesses Remaining: ${gameLives}`;
};

const updateTooLow = () => {
    lowHighField.style.cssText = 'background-color: orange;';
    lowHighField.textContent = 'Your guess was too low';
};

const updateTooHigh = () => {
    lowHighField.style.cssText = 'background-color: yellow;';
    lowHighField.textContent = 'Your guess was too high';
};

const youLose = () => {
    resultField.textContent = 'You have run out of lives, sorry! Please play again.';
    userInput.style.cssText = 'visibility: hidden;';
    submission.style.cssText = 'visibility: hidden;';
};

const youWin = () => {
    lowHighField.style.cssText = 'background-color: green;';
    lowHighField.textContent = 'CORRECT!';
    resultField.textContent = 'Congratulations! You won!';
    userInput.style.cssText = 'visibility: hidden;';
    submission.style.cssText = 'visibility: hidden;';
}
