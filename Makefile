install:
	npm install
start:
	npm run babel-node -- src/bin/games/brain-calc/brain-calc.js
publish:
	npm publish
lint:
	npm run eslint -- .