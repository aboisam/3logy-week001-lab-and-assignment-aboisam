'use strict';


 //Simple number guessing game.
 //Compares user guess with a secret number.
 // Change anytime (1-100)
 

const secretNumber = 42; 
let guessCount = 0;


function checkGuess(guess) {
  if (typeof guess !== 'number' || Number.isNaN(guess)) {
    throw new TypeError('Guess must be a valid number');
  }

  guessCount++;

  if (guess > secretNumber) {
    return 'Too high';
  }

  if (guess < secretNumber) {
    return 'Too low';
  }

  return `Correct!  You won in ${guessCount} guesses!`;
}

// ---- Testing ----
console.log(`Secret number: ${secretNumber}\n`);

console.log(`Guess 50: ${checkGuess(50)}`);
console.log(`Guess 30: ${checkGuess(30)}`);
console.log(`Guess 42: ${checkGuess(42)}`);
console.log(`Guess 100: ${checkGuess(100)}`);
console.log(`Guess 1: ${checkGuess(1)}`);

module.exports = checkGuess;
