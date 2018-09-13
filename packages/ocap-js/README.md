# [**@arcblock/ocap-js**](https://github.com/arcblock/ocap-javascript-sdk)

[![build status](https://img.shields.io/travis/ArcBlock/ocap-javascript-sdk.svg)](https://travis-ci.org/ArcBlock/ocap-javascript-sdk)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/ocap-javascript-sdk.svg)](https://codecov.io/gh/ArcBlock/ocap-javascript-sdk)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ArcBlock/ocap-javascript-sdk.svg)](LICENSE)

> Javascript SDK for OCAP Service by ArcBlock for both Node.js, browser and react-native.
>
> If you are using this SDK in browser environment, [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill) is required.
>
> 中文版文档，请移步[这里](./README.cn.md).


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)
* [Starter Templates](#starter-templates)
* [CodeSandbox Projects](#codesandbox-projects)
* [OCAP Service CheatSheet](#ocap-service-cheatsheet)
* [Contributors](#contributors)
* [License](#license)


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
const { blocksByHeight: blocks } = await client.blocksByHeight({
  fromHeight: 1000000,
  toHeight: 1000020,
});
console.log('PagedQuery.1', blocks.data.map(x => x.hash));
if (typeof blocks.next === 'function') {
  const { blocksByHeight: blocks2 } = await blocks.next();
  console.log('PagedQuery.2', blocks2.data.map(x => x.hash));
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

* See [docs/example.btc.js](./docs/example.btc.js) for Bitcoin examples.
* See [docs/example.eth.js](./docs/example.btc.js) for Ethereum examples.


## Documentation

* [Specification](./docs/spec.md)
* [Bitcoin](./docs/btc.md)
* [Ethereum](./docs/eth.md)


## Starter Templates

**Start building OCAP DApp with just one command**.

* [ocap-vue-starter](https://github.com/ArcBlock/ocap-vue-starter)
* [ocap-react-starter](https://github.com/ArcBlock/ocap-react-starter)
* [ocap-react-native-starter](https://github.com/ArcBlock/ocap-react-native-starter)


## CodeSandbox Projects

**Start building OCAP DApp without setting up environment.**

* [arcblock/ocap-react-starter](https://codesandbox.io/s/lppjkmov49)
* [arcblock/ocap-vue-starter](https://codesandbox.io/s/o4q563jvv6)


## OCAP Service CheatSheet

* [Bitcoin CheatSheet](./docs/cheatsheet.bitcoin.png)
* [Ethereum CheatSheet](./docs/cheatsheet.bitcoin.png)


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |

* [wangshijun](https://github.com/wangshijun)


## License

[MIT](LICENSE) © [wangshijun](https://ocap.arcblock.io)
