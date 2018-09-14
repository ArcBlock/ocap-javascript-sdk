/* eslint no-console:"off" */
const OCAPClient = require('../src/node');

(async () => {
  const client = new OCAPClient({
    httpEndpoint: ds => `https://ocap.arcblock.io/api/${ds}`,
    socketEndpoint: ds => `wss://ocap.arcblock.io/api/${ds}/socket`,
    dataSource: 'btc',
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

  // 2. shortcut query
  const doShortcutQuery = async (method, args) => {
    try {
      const result = await client[method](args || {});
      consoleOutput(`ShortcutQuery.${method}`, result);
    } catch (err) {
      consoleOutput(`ShortcutQuery.${method}`, err, 'error');
    }
  };

  // 2. shortcut query
  await doShortcutQuery('accountByAddress', { address: '36n452uGq1x4mK7bfyZR8wgE47AnBb2pzi' });
  await doShortcutQuery('blockByHash', {
    hash: '00000000000000000009240731986544fb2ee774281fa7973e1f7e5fa6c02f0b',
  });
  await doShortcutQuery('blockByHeight', { height: 540752 });
  await doShortcutQuery('blockchainInfo', { instance: 'main' });
  await doShortcutQuery('emptyBlocks', { fromHeight: 1 });
  await doShortcutQuery('genesisBlock');
  await doShortcutQuery('richestAccounts', { paging: { size: 1 } });
  await doShortcutQuery('cryptoHistoryPrice', {
    token: 'prs',
    startDate: '2018-06-01T00:00:00.000Z',
    endDate: '2018-09-10T13:59:45.789Z',
  });
  await doShortcutQuery('transactionByHash', {
    hash: '977d894328e513c3f800026865de9659a7cae459ec80c9d924ddc18b13316f11',
  });
  await doShortcutQuery('transactionByIndex', { blockHeight: 540752, index: 0 });
  await doShortcutQuery('transactionsByAddress', { sender: '36n452uGq1x4mK7bfyZR8wgE47AnBb2pzi' });
  await doShortcutQuery('zeroFeesBlocks', { fromHeight: 1 });

  // 3. raw query
  const result = await client.doRawQuery(`{
    transactionsByAddress(receiver: "1VayNert3x1KzbpzMGt2qdqrAThiRovi8") {
      data {
        blockHeight
        size
        hash
        total
      }
    }
  }`);
  consoleOutput('RawQuery', result);

  // 4. paged result with shortcut query
  const { blocksByHeight: blocks } = await client.blocksByHeight({
    fromHeight: 500000,
    toHeight: 500020,
  });
  consoleOutput('PagedQuery.1', blocks.data.map(x => x.hash));
  if (typeof blocks.next === 'function') {
    const { blocksByHeight: blocks2 } = await blocks.next();
    consoleOutput('PagedQuery.2', blocks2.data.map(x => x.hash));
  }

  // 5. nested paged result with shortcut query
  const { blockByHeight: block } = await client.blockByHeight({ height: 500000 });
  consoleOutput('PagedSubQuery.1', block.transactions.data.map(x => x.hash));
  if (typeof block.transactions.next === 'function') {
    const { blockByHeight: block2 } = await block.transactions.next();
    consoleOutput('PagedSubQuery.2', block2.transactions.data.map(x => x.hash));
  }

  // 6. shortcut subscription
  try {
    const subscription = await client.newBlockMined();
    console.info('Subscription.newBlockMined.subscribed');
    subscription.on('data', data => consoleOutput('ShortcutSubscription', data));
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
      }
    `);
    console.info('Subscription.rawSubscription.subscribed');
    rawSubscription.on('data', data => consoleOutput('RawSubscription', data));
  } catch (err) {
    console.error('Subscription.rawSubscription.error', err.errors.shift());
  }
})();
