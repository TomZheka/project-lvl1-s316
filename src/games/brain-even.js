import { randomNumber, game } from '..';

const isEven = number => (number % 2 === 0 ? 'yes' : 'no');

const gameEven = () => {
  game('Answer "yes" if number even otherwise answer "no".', randomNumber, isEven);
};

export default gameEven;
