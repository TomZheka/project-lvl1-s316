#!/usr/bin/env node

import readlineSync from 'readline-sync';

const countQuestion = 3;

export const randomNumber = () => Math.floor(Math.random() * 100);

const welcome = () => {
  console.log('Welcome to the Brain Games! \n');
};

const questionName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName} \n`);
  return userName;
};

export const game = (msg, funcQuestion, checkAnswer) => {
  welcome();
  console.log(msg);
  const userName = questionName();

  for (let stepCount = 0; stepCount < countQuestion; stepCount += 1) {
    const question = funcQuestion(randomNumber, randomNumber);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(checkAnswer(question));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;( . Correct answer was '${correctAnswer}'. Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
