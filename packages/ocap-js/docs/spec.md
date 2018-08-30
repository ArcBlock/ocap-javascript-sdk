# OCAP JS SDK

> This file defines basic api usage case for OCAP JS SDK


## Basic Requirements

* GraphQL Schema should be bundled with the sdk, schema changes cause new releases
* User **do not** need to manage authentication and authorization details
* User **do not** need to assemble raw query
* User **do not** need to manage socket connection to use subscription feature


## Getting started

```javascript
const OcapSDK = require('@arcblock/node-ocap');

// init client
const client = new OcapSDK({
  dataSource: 'btc', // btc, eth
});
```


## Capabilities

```javascript
const queries = client.getQueries(); // list all queries, name, fields, args
const subscriptions = client.getSubscriptions(); // list all subscriptions, name, fields, args
const mutations = client.getMutations(); // list all mutations, name, fields, args
```


## Query API

### Shortcut Methods

```javascript
// BTC
const result = await client.accountByAddress({ address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' });
const result = await client.blockByHash({
  hash: '00000000000000000029e8e5da267d2dbdf4e614dc6971451fcc570e897fbddf',
});
const result = await client.blockByHeight({ height: 526162 });
const result = await client.blocksByHeight({ fromHeight: 526162 });
const result = await client.emptyBlocks({ fromHeight: 526162 });
const result = await client.genesisBlock();
const result = await client.richestAccounts({});
const result = await client.transactionByHash({
  hash: '256add784c8975fb357010b1b21539a5e55c25af231870616675ff757c5a64f5',
});
const result = await client.transactionsByAddress({ sender: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' });

// ETH
const result = await client.accountByAddress({
  address: '0xe65d3128feafd14d472442608daf94bceb91e333',
});
const result = await client.blockByHash({
  hash: '0x7f0d8308de939bca7f7bba4691df7c2602f3a11629d5251b0ea7e66023246254',
});
const result = await client.blockByHeight({ height: 6139002 });
const result = await client.blocksByHeight({ fromHeight: 6139002 });
const result = await client.transactionByHash({
  hash: '0x378ded8e76724b2a6d97a16909b307d1d8cf791fd8cbf4f024e5c4dfc5310fd7',
});
```

### Raw Query

```javascript
const result = await client.doRawQuery(`
{
  blockByHeight(height:5027689) {
    time
    size
    gasUsed
    gasLimit
  }
}`);
```


## Subscription API

Developers can listen to subscription types for real-time data

```javascript
const subscription = client.newBlockMined(); // EventEmitter ?
subscription.on('data', block => console.log);
subscription.on('error', err => console.log);
subscription.cancel();
```


## Mutation API

> TODO: not supported now


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
