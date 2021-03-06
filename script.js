'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '๐Correct Number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 5;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'โ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '๐Correct Number !';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is higher than secret number
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '๐ Too high!';
      score = score - 1; // OR score--
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ๐ซ';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is lower than secret number
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '๐ Too low!';
      score = score - 1; // OR score--
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER ๐ซ';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When we want to play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
