# [**@arcblock/ocap-js**](https://github.com/arcblock/ocap-javascript-sdk)

[![build status](https://img.shields.io/travis/ArcBlock/ocap-javascript-sdk.svg)](https://travis-ci.org/ArcBlock/ocap-javascript-sdk)
[![code coverage](https://img.shields.io/codecov/c/github/ArcBlock/ocap-javascript-sdk.svg)](https://codecov.io/gh/ArcBlock/ocap-javascript-sdk)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/ArcBlock/ocap-javascript-sdk.svg)](LICENSE)

> 基于 ArcBlock [OCAP](https://ocap.arcblock.io) 服务为 Javascript 开发者定制的 SDK，可运行在多种 Javascript 环境中，比如 Node.js、浏览器、React-Native 中。
>
> 如果要在浏览器环境下使用该 SDK，必须在代码中引入 [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill)。
>
> For English documentation，please look at [README.md](./README.md)。


## Table of Contents

* [安装依赖](#安装依赖)
* [基本用法](#基本用法)
* [接口文档](#接口文档)
* [种子项目](#种子项目)
* [CodeSandbox 项目](#codesandbox-项目)
* [OCAP 作弊条](#ocap-作弊条)
* [License](#license)
* [Contributors](#contributors)


## 安装依赖

```sh
npm install @arcblock/ocap-js --save
// 或者
yarn add @arcblock/ocap-js
```


## 基本用法

```js
const OCAPClient = require('@arcblock/ocap-js');

// 初始化 SDK
const client = new OCAPClient({
  dataSource: 'eth', // 目前仅支持 btc, eth
});

// 直接调用快捷查询方法
const account = await client.accountByAddress({
  address: '0xe65d3128feafd14d472442608daf94bceb91e333',
});
console.log('ShortcutQuery', account);

// 自己构造并发起查询
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

// 查询结果翻页
const blocks = await client.listBlocks({
  timeFilter: {
    fromHeight: 1000000,
    toHeight: 1000020,
  },
  paging: { size: 5 },
});
console.log('PagedQuery.1', blocks.data.map(x => x.hash));
if (typeof blocks.next === 'function') {
  const blocks2 = await blocks.next();
  console.log('PagedQuery.2', blocks2.data.map(x => x.hash));
}

// 直接调用实时数据订阅方法
const subscription = await client.newBlockMined();
subscription.on('data', data => console.log('ShortcutSubscription', data));

// 自己构造并订阅实时数据
const rawSubscription = await client.doRawSubscription(`
  subscription {
    newBlockMined {
      height
      hash
    }
  }`);
rawSubscription.on('data', data => console.log('RawSubscription', data));
```

更多 API 调用代码示例：

* 比特币接口：[docs/example.btc.js](./docs/example.btc.js)
* 以太坊接口：[docs/example.eth.js](./docs/example.btc.js)


## 接口文档

当前版本的接口、接口参数、接口响应列表参见：

* 比特币：[docs/btc.md](./docs/btc.md)
* 以太坊：[docs/eth.md](./docs/eth.md)


## 种子项目

**为节省开发者时间，我们准备了如下的种子项目，在其中集成了 OCAP JS SDK，仅需一条命令就可以开始构建 DAPP**。

* Vue.js: [ocap-vue-starter](https://github.com/ArcBlock/ocap-vue-starter)
* React: [ocap-react-starter](https://github.com/ArcBlock/ocap-react-starter)
* React Native: [ocap-react-native-starter](https://github.com/ArcBlock/ocap-react-native-starter)

如果你是在现有项目中集成 OCAP JS SDK，请参见集成文档：<https://ocap.arcblock.io/playbooks/67df3512-c575-4751-8052-e3dcae3f3e1a>


## CodeSandbox 项目

**如果你想直接在浏览器中开始开发 DApp，我们还准备了 CodeSandbox 上面的种子项目，可以 fork 后开始开发**。

* Vue.js: [arcblock/ocap-vue-starter](https://codesandbox.io/s/o4q563jvv6)
* React: [arcblock/ocap-react-starter](https://codesandbox.io/s/lppjkmov49)


## OCAP 作弊条

* [Bitcoin CheatSheet](../../docs/cheatsheet.bitcoin.png)
* [Ethereum CheatSheet](../../docs/cheatsheet.bitcoin.png)

> OCAP 服务支持的所有 Query、Subscription 详细文档可以在 Playground 的[实时文档](https://ocap.arcblock.io)或[生成的文档](https://ocap.arcblock.io/docs)中看到。


## License

[MIT](LICENSE) © [wangshijun](https://ocap.arcblock.io)


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
