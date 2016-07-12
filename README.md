# Babel setup
Simplest babel setup for a single transform (async).

We are using the single transform: `transform-async-to-generator`, although it is included in stage 3, because we are targetting `node v6` and do not want to transpile all other ES2015 features, only async/await.


*eslint is installed globally for editor, 
so we need to `sudo npm i eslint-plugin-babel -g`,
because it is a peer dependancy*

## TODO

- eslint does not seem to be picking up `.babelrc`.
- Review npm run script targets.

## Usage
Run with `babel-node`:

    npm start

Transpile:

    npm build

Transpile & run:

    npm run start-es5
    # or
    npm build
    node tranpsiled.js

## Setup
Start with 

    npm install eslint --save-dev
    npm install babel-cli --save-dev
    npm install babel-eslint --save-dev
    npm install eslint-plugin-babel --save-dev
    npm install babel-plugin-transform-async-to-generator --save-dev

## References
[Babel async to generator](https://babeljs.io/docs/plugins/transform-async-to-generator/)