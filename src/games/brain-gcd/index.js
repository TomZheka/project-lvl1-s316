#!/usr/bin/env node

import game from '../..';
import { randomNumber } from '../brain-even';

const gcd = (number1, number2) => `${number1()} ${number2()}`;

const isCorrectGcd = (question) => {
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

const gameGcd = () => {
  game('Find the greatest common divisor of given numbers.', gcd, isCorrectGcd, randomNumber, randomNumber);
};

export default gameGcd;
