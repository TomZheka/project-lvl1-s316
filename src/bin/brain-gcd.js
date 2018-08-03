#!/usr/bin/env node

import {
  game, randomNumber, isCorrectGcd, gcd,
} from '..';

game('Find the greatest common divisor of given numbers.', gcd, isCorrectGcd, randomNumber, randomNumber);
