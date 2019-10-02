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
let gameLives = 5;
lifeField.textContent = `Guesses Remaining: ${gameLives}`;


//Set Event Handlers
submission.addEventListener('click', function() {  
    let userGuess = Number(userInput.value);
    previousGuessField.textContent = `Your guess was ${userGuess}`;
    let comparisonResult = compareNumbers(userGuess, targetNumber);
    if (comparisonResult < 0) {
        gameLives--;
        lowHighField.style.cssText = 'background-color: orange;';
        lowHighField.textContent = 'Your guess was too low';
        lifeField.textContent = `Guesses Remaining: ${gameLives}`;
    } else if (comparisonResult > 0) {
        gameLives--;
        lowHighField.style.cssText = 'background-color: yellow;';
        lowHighField.textContent = 'Your guess was too high';
        lifeField.textContent = `Guesses Remaining: ${gameLives}`;
    } else if (comparisonResult === 0) {
        lowHighField.style.cssText = 'background-color: green;';
        lowHighField.textContent = 'CORRECT!';
    }
});
