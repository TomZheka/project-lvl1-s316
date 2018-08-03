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

export const game = (msg, funcQuestion, checkAnswer, arg1, arg2) => {
  welcome();
  console.log(msg);
  const countQuestion = 3;
  const userName = questionName();

  for (let stepCount = 0; stepCount < countQuestion; stepCount += 1) {
    const question = funcQuestion(arg1, arg2);
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

export const randomNumber = () => Math.floor(Math.random() * 100);

export const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

export const example = (number1, number2) => {
  const arraySing = ['+', '-', '*'];
  return `${number1()} ${arraySing[Math.floor(Math.random() * arraySing.length)]} ${number2()}`;
};

export const isCorrectExample = (question) => {
  const array = question.split(' ');
  let result = 0;
  if (array[1] === '+') {
    result = parseInt(array[0], 10) + parseInt(array[2], 10);
  } else if (array[1] === '-') {
    result = parseInt(array[0], 10) - parseInt(array[2], 10);
  } else {
    result = parseInt(array[0], 10) * parseInt(array[2], 10);
  }

  return result;
};

export const gcd = (number1, number2) => `${number1()} ${number2()}`;

export const isCorrectGcd = (question) => {
  const array = question.split(' ');
  const max = array[0] >= array[1] ? array[0] : array[1];
  let result = 0;
  for (let i = 1; i <= max; i += 1) {
    if (array[0] % i === 0 && array[1] % i === 0) {
      result = i;
    }
  }
  return result;
};
