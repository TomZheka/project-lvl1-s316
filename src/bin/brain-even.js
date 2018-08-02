#!/usr/bin/env node

import { gameEven, welcome, questionName } from '..';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
const name = questionName();

gameEven(name);
