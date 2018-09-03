/* eslint no-console:"off" */
const OCAPClient = require('../src/node');

(async () => {
  const client = new OCAPClient({
    httpEndpoint: ds => `https://ocap.arcblock.io/api/${ds}`,
    socketEndpoint: ds => `wss://ocap.arcblock.io/api/${ds}/socket`,
    dataSource: 'eth',
    enableQuery: true,
    enableSubscription: true,
    enableMutation: true,
  });

  // 1. get supported api list
  const queries = client.getQueries();
  const subscriptions = client.getSubscriptions();
  const mutations = client.getMutations();
  console.log({ queries, subscriptions, mutations });

  // 2. shortcut query
  const account = await client.accountByAddress({
    address: '0xe65d3128feafd14d472442608daf94bceb91e333',
  });
  console.log('ShortcutQuery', account);

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
  console.log('RawQuery', result);

  // 4. paged result with shortcut query
  const { blocksByHeight: blocks } = await client.blocksByHeight({
    fromHeight: 1000000,
    toHeight: 1000020,
  });
  console.log('PagedQuery.1', blocks.data.map(x => x.hash));
  if (typeof blocks.next === 'function') {
    const { blocksByHeight: blocks2 } = await blocks.next();
    console.log('PagedQuery.2', blocks2.data.map(x => x.hash));
  }

  // 5. nested paged result with shortcut query
  const { blockByHeight: block } = await client.blockByHeight({ height: 5000000 });
  console.log('PagedSubQuery.1', block.transactions.data.map(x => x.hash));
  if (typeof block.transactions.next === 'function') {
    const { blockByHeight: block2 } = await block.transactions.next();
    console.log('PagedSubQuery.2', block2.transactions.data.map(x => x.hash));
  }

  // 6. shortcut subscription
  const subscription = await client.newBlockMined();
  subscription.on('data', data => console.log('ShortcutSubscription', data));

  // 7. raw subscription
  const rawSubscription = await client.doRawSubscription(`
    subscription {
      newBlockMined {
        height
        hash
      }
    }`);
  rawSubscription.on('data', data => console.log('RawSubscription', data));
})();
