# [**@arcblock/analytics-js**](https://github.com/arcblock/arc-javascript-sdk)

[![build status](https://img.shields.io/travis/ArcBlock/arc-javascript-sdk.svg)](https://travis-ci.org/ArcBlock/arc-javascript-sdk)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/arc-javascript-sdk.svg)](https://codecov.io/gh/ArcBlock/arc-javascript-sdk)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ArcBlock/arc-javascript-sdk.svg)](LICENSE)

> Analytics Javascript SDK for ArcBlock for both Node.js and Browser

> If you are using this SDK in browser environment, [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) is required.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Install

```sh
npm install @arcblock/ocap-js
// or
yarn add @arcblock/ocap-js
```

## Usage

```js
const SDK = require('@arcblock/analytics-js');

// init client
const client = new SDK();

const result = await client.createEvent({
  clientTimestamp: 'abc',
  deviceId: 'abc',
  eventType: 'abc',
  objectId: 'abc',
  objectType: 'abc',
  operation: 'abc',
  source: 'abc',
  userId: 'abc',
});
```

## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |

- wangshijun

## License

[MIT](LICENSE) © [wangshijun](https://ocap.arcblock.io)
