#!/usr/bin/env node

import { game, randomNumber, isEven } from '..';

game('Answer "yes" if number even otherwise answer "no".', randomNumber, isEven, 20, 80);
