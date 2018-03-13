# React quick starter kit

![](https://travis-ci.org/fakiolinho/react-quick-starter-kit.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/github/fakiolinho/react-quick-starter-kit/badge.svg?branch=master)](https://coveralls.io/github/fakiolinho/react-quick-starter-kit?branch=master)

React starter kit without having to remove more than 50% of code to build a Single Page Application prototype.

All React starter kits out there are really awesome but most of the times i found myself overengineering while trying to setup a solid working environment by removing all the unnecessary pieces and technologies. Sometimes it is better to keep bare minimum technologies in place so that we can build on top of them, scale faster and retain maximum flexibility and freedom.

## Installation

```bash
git clone https://github.com/fakiolinho/react-quick-starter-kit.git
cd react-quick-starter-kit
npm i && npm start
```

Check in your browser under `http://localhost:3000`


## Technologies Included

### ReactJS 16

[ReactJS](https://facebook.github.io/react/) since we cannot build a React starter kit without React itself right?

### Redux 4

[Redux](https://github.com/reactjs/redux) is used so we can create a global store and maintain our application's state with ease. Localstorage is used in order to preserve latest changes when browser gets refreshed.

### Redux-thunk

Because of [redux-thunk](https://github.com/gaearon/redux-thunk) we can have action creators that return a function instead of an action so we can perform asynchronous dispatching. Redux-thunk under the hood uses Promises. If you need more power in your hands i highly recommend [redux-saga](https://github.com/redux-saga/redux-saga) which uses generators.

### Express

[Express](http://expressjs.com/) is used to provide a bare minimum nodejs server to serve our Single Page Application.

### Jest 22

[Jest](https://facebook.github.io/jest/) is our preferable testing tool to test a React project. You can also use [Mocha](https://mochajs.org/) but i prefer Jest because:

- it plays nicely with React
- it offers snapshot testing
- it offers a robust assertion library out of the box so we don't need to add an extra dependency for that like chai etc
- it offers mock utilities so there is no need to include tools like sinon to achieve this
- it provides tests coverage statistics by default so i don't have to bind istanbul by myself

### Enzyme 3

[Enzyme](https://github.com/airbnb/enzyme) is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. With Enzyme unit testing ReactJS components is really easy.

### CSS / SASS / POSTCSS

All css code is written using scss syntax. Postcss is used through webpack under the hood in order to add some extra goodies like autoprefixing for cross-browser testing. If you are bored with css and want to use css modules and more abstracted styling for your React components i highly propose [styled-components](https://styled-components.com/).

### Webpack 3

[Webpack](https://webpack.js.org/) is the ultimate module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Here we use:

- tree-shaking
- hot module replacement
- es6 transpiling to es5 with Babel (preset-2)
- scss transformation to css
- extra goodies like autoprefixing through postcss
- separate setups for development and production environment so we can minify our bundle and run some quick measurements
- bundle analyzer tool to investigate fast what's is going on under the hood

### Babel

[Babel](https://babeljs.io/) is a compiler for writing next generation JavaScript. We use stage-2 to include property initializer syntax, rest/spread operator for objects and many more.

### ESLint

[ESLint](http://eslint.org/) is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

### StyleLint

[StyleLint](https://stylelint.io/) is a mighty, modern CSS linter that helps you enforce consistent conventions and avoid errors in your stylesheets.

## Folders Structure

Unfortunately folders structure across most of react starter kits is overlooked. Here is applied [proposed pattern](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) by [Alexis Mangin](http://www.alexismangin.com/) which i have personally used in a quite big SPA and found out that it scales extremely well.

Basic idea is that scenes are full-pages components while plain components are the essential bricks to build a scene or a more complicated component. So all components needed by a scene are placed inside a nested folder named `components`. That way we call them into action only for that very scene. Same with sub-components for bigger ones. We put them in a nested folder so we can have quick access. When we need to use a sub-component for more than 2 bigger components then we move this up to components tree structure. Let's see an example:

```bash
--components
--scenes
----PageA
------index.jsx
------index.spec.js
------style.scss
------components
--------ButtonGroup
----------index.jsx
----------index.spec.js
----------style.scss
----------components
------------Button
--------------index.jsx
--------------index.spec.js
--------------style.scss
----PageB
------index.jsx
------index.spec.js
------style.scss
```

Here we have `PageA` scene that uses `ButtonGroup` component. This is placed in a nested folder. This uses also a small one named `Button` so we follow same pattern with nested components folder for it. Scene `PageB` doesn't use component `ButtonGroup`. If we want to make it globally available for more scenes then we move it to the sibling folder named `components` next to `scenes` one. That way more than 2 scenes can share same sub-components in our application.

Also take notice that next to the scenes / components files a unit tests and a scss file are placed so we keep things in order as much as possible:

```bash
--Button
----index.jsx
----index.spec.js
----style.scss
```

## Useful Commands

### npm run start

Create a bundle in developement mode and launch a nodejs server under `http://localhost:3000`. Hot-module-replacement is enabled by default.

### npm run build

Create a production-ready bundle

### npm run deploy

This command forces `npm run build` and then a nodejs server is launched under `http://localhost:3000`

### npm run eslint

Check for js linting issues

### npm run stylelint

Check for scss linting issues

### npm run analyze

Analyze the final bundle in production mode

## License

This project is licensed under the MIT License