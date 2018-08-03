#!/usr/bin/env node

import {
  game, randomNumber, isCorrectExample, example,
} from '..';

game('What is the result of the expression?', example, isCorrectExample, randomNumber, randomNumber);
