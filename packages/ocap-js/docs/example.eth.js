/* eslint no-console:"off" */
const OCAPClient = require('../src/node');

(async () => {
  const client = new OCAPClient({
    httpEndpoint: ds => `https://ocap.arcblock.io/api/${ds}`,
    // httpEndpoint: ds => `http://localhost:8080/api/${ds}`,
    socketEndpoint: ds => `wss://ocap.arcblock.io/api/${ds}/socket`,
    dataSource: 'eth',
    enableQuery: true,
    enableSubscription: true,
    enableMutation: true,
  });

  const consoleOutput = (title, data, type = 'info') => {
    console.log(`======${title}========`);
    console[type](data);
    console.log('');
    console.log('');
  };

  // 1. get supported api list
  const queries = client.getQueries();
  const subscriptions = client.getSubscriptions();
  const mutations = client.getMutations();
  consoleOutput('API LIST', { queries, subscriptions, mutations });

  const doShortcutQuery = async (method, args, params) => {
    try {
      const result = await client[method](args || {}, params);
      consoleOutput(`ShortcutQuery.${method}`, result);
    } catch (err) {
      consoleOutput(`ShortcutQuery.${method}`, err);
    }
  };

  // 2. shortcut query
  await doShortcutQuery('accountByAddress', {
    address: '0xe65d3128feafd14d472442608daf94bceb91e333',
  });
  await doShortcutQuery('blockByHash', {
    hash: '8e38b4dbf6b11fcc3b9dee84fb7986e29ca0a02cecd8977c161ff7333329681e',
  });
  await doShortcutQuery('blockByHeight', { height: 5000000 });
  await doShortcutQuery('blockchainInfo', { instance: 'main' });
  await doShortcutQuery('emptyBlocks', { fromHeight: 1 });
  await doShortcutQuery('erc20Tokens', { symbol: 'ABT' });
  await doShortcutQuery('erc20TokenBalance', {
    symbol: 'ABT',
    accountAddress: '0x6f6e3e7cfe884663053fb02b17cf13f77ddce8e1',
  });
  await doShortcutQuery('genesisBlock');
  await doShortcutQuery(
    'richestAccounts',
    {},
    {
      ignoreFields: ['data.txsReceived', 'data.txsSent'],
    }
  );
  await doShortcutQuery('cryptoHistoryPrice', {
    token: 'prs',
    startDate: '2018-06-01T00:00:00.000Z',
    endDate: '2018-09-10T13:59:45.789Z',
  });
  await doShortcutQuery('transactionByHash', {
    // ether-transaction
    hash: '0x569c5b35f203ca6db6e2cec44bceba756fad513384e2bd79c06a8c0181273379',
  });
  await doShortcutQuery('transactionByHash', {
    // contract-execution
    hash: '0x706f51639f0f7af21b13eae2b8dadb3cb52a8a3e4c7995eee6340c72c4db75eb',
  });
  await doShortcutQuery('transactionByHash', {
    // contract-creation
    hash: '0xf9c088a928e578987c1cf81e95d630918d91653d96adbf00ccddc382cff59ab2',
  });
  await doShortcutQuery('transactionByIndex', { blockHeight: 5000000, index: 0 });
  await doShortcutQuery('transfersInContract', {
    symbol: 'ABT',
    to: '0x6f6e3e7cfe884663053fb02b17cf13f77ddce8e1',
  });
  await doShortcutQuery(
    'transactionsByAddress',
    {
      sender: '0x6f6e3e7cfe884663053fb02b17cf13f77ddce8e1',
    },
    {
      ignoreFields: ['data.parent'],
    }
  );
  await doShortcutQuery(
    'zeroFeesBlocks',
    { fromHeight: 1 },
    { ignoreFields: ['data.transactions'] }
  );

  // 3. raw query
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
  consoleOutput('RawQuery.BlockByHeight', result);

  // 4. paged result with shortcut query
  const { blocksByHeight: blocks } = await client.blocksByHeight({
    fromHeight: 1000000,
    toHeight: 1000020,
  });
  consoleOutput('PagedQuery.blocksByHeight.1', blocks.data.map(x => x.hash));
  if (typeof blocks.next === 'function') {
    const { blocksByHeight: blocks2 } = await blocks.next();
    consoleOutput('PagedQuery.blocksByHeight.2', blocks2.data.map(x => x.hash));
  }

  // 5. nested paged result with shortcut query
  const { blockByHeight: block } = await client.blockByHeight({ height: 5000000 });
  consoleOutput(
    'PagedSubQuery.blockByHeight.transactions.1',
    block.transactions.data.map(x => x.hash)
  );
  if (typeof block.transactions.next === 'function') {
    const { blockByHeight: block2 } = await block.transactions.next();
    consoleOutput(
      'PagedSubQuery.blockByHeight.transactions.2',
      block2.transactions.data.map(x => x.hash)
    );
  }

  // 6. shortcut subscription
  try {
    const subscription = await client.newBlockMined();
    console.info('Subscription.newBlockMined.subscribed');
    subscription.on('data', data => consoleOutput('ShortcutSubscription.newBlockMined', data));
  } catch (err) {
    console.error('Subscription.newBlockMined.error', err.errors.shift());
  }

  // 7. raw subscription
  try {
    const rawSubscription = await client.doRawSubscription(`
    subscription {
      newBlockMined {
        height
        hash
      }
    }`);
    console.info('Subscription.rawSubscription.subscribed');
    rawSubscription.on('data', data => consoleOutput('RawSubscription.newBlockMined', data));
  } catch (err) {
    console.error('Subscription.rawSubscription.error', err.errors.shift());
  }
})();
