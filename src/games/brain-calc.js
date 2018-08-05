import { game } from '..';


const example = (number1, number2) => {
  const arraySing = ['+', '-', '*'];
  return `${number1()} ${arraySing[Math.floor(Math.random() * arraySing.length)]} ${number2()}`;
};

const isCorrectExample = (question) => {
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

const gameCalc = () => {
  game('What is the result of the expression?', example, isCorrectExample);
};

export default gameCalc;
