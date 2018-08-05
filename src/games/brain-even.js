#!/usr/bin/env node

import game from '..';

export const randomNumber = () => Math.floor(Math.random() * 100);

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');


const gameEven = () => {
  game('Answer "yes" if number even otherwise answer "no".', randomNumber, isEven);
};

export default gameEven;
