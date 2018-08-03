#!/usr/bin/env node

import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games! \n');
};

const questionName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} \n`);
  return userName;
};

const gameEven = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const countQuestion = 3;
  const userName = questionName();

  for (let stepCount = 0; stepCount < countQuestion; stepCount += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;( . Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

export default gameEven;
