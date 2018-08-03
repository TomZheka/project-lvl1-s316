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
    if ((answer === 'yes' && (question % 2 === 0)) || (answer === 'no' && !(question % 2 === 0))) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log(`'no' is wrong answer ;( . Correct answer was 'yes'. Let's try again, ${userName}`);
      break;
    } else if (answer === 'no') {
      console.log(`'yes' is wrong answer ;( . Correct answer was 'no'. Let's try again, ${userName}`);
      break;
    } else {
      console.log('incorrect data');
      break;
    }

    if (stepCount === 2) {
      console.log(`Congratulations, ${userName}`);
    }
  }
};
