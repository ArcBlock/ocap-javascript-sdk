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

  // get supported api list
  const queries = client.getQueries();
  const subscriptions = client.getSubscriptions();
  const mutations = client.getMutations();
  console.log({ queries, subscriptions, mutations });

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
})();
