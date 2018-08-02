#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const questionName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};
export const gameEven = (userName) => {
  let stepCount = 0;
  do {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && (num % 2 === 0)) || (answer === 'no' && !(num % 2 === 0))) {
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
    stepCount += 1;
  } while (stepCount < 3);
};
