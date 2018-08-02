#!/usr/bin/env node

import readlineSync from 'readline-sync';


export const welcome = () => {
	console.log('Welcome to the Brain Games!');
	const name = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${name}`);
	return name;
};


export const gameEven = (name) => {
	let i = 0;
	do{
		let num = Math.floor(Math.random() * 100);
		console.log(`Question: ${num}`);
		const answer = readlineSync.question('Your answer: ');
		if((answer === 'yes' && (num % 2 === 0)) || (answer === 'no' && !(num % 2 === 0))){
			console.log('Correct!');
		} else {

			if(!isNaN(num % 2)){
				console.log('incorrect data');
			}else if(num % 2 === 0){
				console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${name})`);
				break;
			}else{
				console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${name})`);
				}
			break;

		}
		if(i === 2){
			console.log(`Congratulations, ${name}`);
		}
		



		i++;
	} while (i < 3);

}