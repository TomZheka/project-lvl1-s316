#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games! \n');
};

export const questionName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} \n`);
  return userName;
};
export const gameEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = questionName();
  for (let stepCount = 0; stepCount < 3; stepCount += 1) {
    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const worngAnswer = question % 2 === 0 ? 'yes' : 'no';
    const correctAnswer = question % 2 === 0 ? 'no' : 'yes';
    if (answer === worngAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${worngAnswer}' is wrong answer ;( . Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
      break;
    }

    if (stepCount === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }
};
