# babel-plugin-fizzbuzz
[![Build Status](https://travis-ci.org/akameco/babel-plugin-fizzbuzz.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-fizzbuzz)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Babel Plugin for fizzbuzz

## Why

[![https://gyazo.com/d2e1fb56701e997e3b592ae8a0f76c30](https://i.gyazo.com/d2e1fb56701e997e3b592ae8a0f76c30.png)](https://gyazo.com/d2e1fb56701e997e3b592ae8a0f76c30)

Do you need a `TensorFlow` for FizzBuzz?
Funny 😂
What you need is `Babel` 😎

## Install

npm:

```
$ npm install --save-dev babel-plugin-fizzbuzz
```

yarn:
```
$ yarn add --dev babel-plugin-fizzbuzz
```


## Usage

.babelrc

```js
{
  "plugins": ["babel-plugin-fizzbuzz"]
}
```

## Examples

```js
for (var i=0; i<100; i++) {
  console.log(i)
}

      ↓ ↓ ↓ ↓ ↓ ↓

for (var i = 0; i < 100; i++) {
  console.log(
    i % 15 === 0 ? 'FizzBuzz' : i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i
  )
}
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/typed-assign/commits?author=akameco "Code") [📖](https://github.com/akameco/typed-assign/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/typed-assign/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
