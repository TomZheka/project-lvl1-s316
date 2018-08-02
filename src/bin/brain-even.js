#!/usr/bin/env node

import { gameEven, welcome } from '..';

const name = welcome();

gameEven(name);