# OCAP JS SDK

> This file defines basic api usage case for OCAP JS SDK

## Basic Requirements

- GraphQL Schema should be bundled with the sdk, schema changes cause new releases
- User **do not** need to manage authentication and authorization details
- User **do not** need to assemble raw query
- User **do not** need to manage socket connection to use subscription feature

## Getting started

```javascript
const OcapSDK = require('@arcblock/ocap-sdk');

// init client
const client = new OcapSDK({
  appId: '<todo>',
  appSecret: '<todo>',
  baseUrl: 'https://ocap.arcblock.io/api', // we may have multiple hosts in future
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

### Shortcut Query Methods

```javascript
// get all fields account detail and transactions
const account = await client.accountByAddress({
  args: { address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
});

// simpler syntax
const account = await client.accountByAddress({ address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' });

// FIXME: field customization is a bit weird, very similar to mongo shell field selection
const account = await client.accountByAddress({
  args: { address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa' },
  fields: {
    account: true,
    balance: true,
    txsSent: [ // indicates a list
      {
	hash: true,
	total: true,
	inputs: [
	  {
	    index: true,
	    account: true,
	  },
	],
      },
    ],
  },
});
```

### Supported API List

```javascript
const block = await client.blockByHash({
  hash: '00000000000000000029e8e5da267d2dbdf4e614dc6971451fcc570e897fbddf',
});
const block = await client.blockByHeight({ height: 526162 });
const blocks = await client.blocksByHeight({ fromHeight: 526162, paging: { size: 12 } });
const transaction = await client.transactionByHash({
  hash: '256add784c8975fb357010b1b21539a5e55c25af231870616675ff757c5a64f5',
});
const transactions = await client.transactionsByAddress({
  sender: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
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
