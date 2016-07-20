# Babel setup
Simplest babel setup for a single transform (async).

We are using the single transform: `transform-async-to-generator`, 
although it is included in stage 3, because we are targetting `node v6` 
and do not want to transpile all other ES2015 features, only async/await.

## Dependencies

- `babel-cli`: babel itself
- `babel-eslint`: the module we tell eslint to use as a parser 
- `babel-plugin-transform-async-to-generator`: the transorm we wish to use
- `eslint`: eslint itself
- `eslint-plugin-babel": An eslint plugin companion to babel-eslint which changes the built in rules to support experimental features, `async/await` in our case
- `.babelrc`:   "plugins": ["transform-async-to-generator"]
- `.eslintrc`:
  - "parser": "babel-eslint"; which parser eslint should use.
  - "plugins": ["babel"] : override a few built-in rules for experimental features
  - "rules:
    - "generator-star-spacing": 0, disable old rule
    - "babel/generator-star-spacing": 1, enable new rule

*This now works with eslint is installed locally (project) for editor, *

## TODO

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