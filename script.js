'use strict';

// Обьявляем число, с которым будет сравниваться число введеное в input. Она обьявляется за функцией

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Каждый раз, когда неправильно угадываем число, то число в .score должно уменьшаться на 1. Для этого обьявим переменную, которая будет уменьшаться.
let score = 20;

// Переменная для подсчета рекорда
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // Если инпут пустой
  if (!guess) {
    document.querySelector('.message').textContent = 'Write a number...';

    // Если угадываешь номер правильно
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number...';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.label-highscore span').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Если ввел номер больше, чем отгадываемое число
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high...';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose...';
      document.querySelector('.score').textContent = 0;
    }

    // Если ввел номер меньше, чем отгадываемое число
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low...';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose...';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Условная кнопка сброса "Результатов"
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});