# [**@arcblock/ocap-js**](https://github.com/arcblock/ocap-javascript-sdk)

[![build status](https://img.shields.io/travis/ArcBlock/ocap-javascript-sdk.svg)](https://travis-ci.org/ArcBlock/ocap-javascript-sdk)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/ocap-javascript-sdk.svg)](https://codecov.io/gh/ArcBlock/ocap-javascript-sdk)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/ArcBlock/ocap-javascript-sdk.svg)](LICENSE)

> Javascript SDK for OCAP Service by ArcBlock for both Node.js, browser and react-native

> If you are using this SDK in browser environment, [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) is required.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Documentation](#documentation)
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
const OCAPClient = require('@arcblock/ocap-js');

// init client
const client = new OCAPClient({
  dataSource: 'eth', // btc, eth
});

// shortcut query
const account = await client.accountByAddress({
  address: '0xe65d3128feafd14d472442608daf94bceb91e333',
});
console.log('ShortcutQuery', account);

// raw query
const result = await client.doRawQuery(`{
  blockByHeight(height:5027689) {
    time
    size
    gasUsed
    gasLimit
    nonce
    reward
    preHash
    size
  }
}`);
console.log('RawQuery', result);

// paged result with shortcut query
const pagedResult = await client.blocksByHeight({ fromHeight: 1000000, toHeight: 1000020 });
console.log('PagedQuery.1', pagedResult);
if (typeof pagedResult.next === 'function') {
  const pagedResult2 = await pagedResult.next();
  console.log('PagedQuery.2', pagedResult2);
}

// shortcut subscription
const subscription = await client.newBlockMined();
subscription.on('data', data => console.log('ShortcutSubscription', data));

// raw subscription
const rawSubscription = await client.doRawSubscription(`
  subscription {
    newBlockMined {
      height
      hash
    }
  }`);
rawSubscription.on('data', data => console.log('RawSubscription', data));
```

Want more examples?

- See [docs/example.btc.js](./docs/example.btc.js) for Bitcoin examples.
- See [docs/example.eth.js](./docs/example.btc.js) for Ethereum examples.

## Documentation

- [Specification](./docs/spec.md)
- [Bitcoin](./docs/btc.md)
- [Ethereum](./docs/eth.md)

## Starter Templates

**Start building OCAP DApp with just one command**.

- [ocap-vue-starter](https://github.com/ArcBlock/ocap-vue-starter)
- [ocap-react-starter](https://github.com/ArcBlock/ocap-react-starter)
- [ocap-react-native-starter](https://github.com/ArcBlock/ocap-react-native-starter)

## CodeSandbox Projects

**Start building OCAP DApp without setting up environment.**

- [arcblock/ocap-react-starter v2](https://codesandbox.io/s/lppjkmov49)
- [arcblock/ocap-vue-starter v1](https://codesandbox.io/s/o4q563jvv6)

## OCAP Service CheatSheet

- [Bitcoin CheatSheet](./docs/cheatsheet.bitcoin.png)
- [Ethereum CheatSheet](./docs/cheatsheet.bitcoin.png)

## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |

- wangshijun

## License

[MIT](LICENSE) © [ArcBlock](https://www.arcblock.io)
