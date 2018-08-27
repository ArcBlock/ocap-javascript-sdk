/* eslint no-console:"off" */
const OCAPClient = require('../src/node');

(async () => {
  const client = new OCAPClient({ dataSource: 'btc' });

  // get supported api list
  const queries = client.getQueries();
  const subscriptions = client.getSubscriptions();
  const mutations = client.getMutations();
  console.log({ queries, subscriptions, mutations });

  // shortcut query
  const account = await client.accountByAddress({
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  });
  console.log('ShortcutQuery', account);

  // raw query
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
  console.log('RawQuery', result);

  // paged result with shortcut query
  const pagedResult = await client.blocksByHeight({ fromHeight: 500000, toHeight: 500020 });
  console.log('PagedQuery.1', pagedResult);
  if (typeof pagedResult.next === 'function') {
    const pagedResult2 = await pagedResult.next();
    console.log('PagedQuery.2', pagedResult2);
  }

  // shortcut subscription
  const subscription = await client.newBlockMined();
  subscription.on('data', data => console.log('ShortcutSubscription', data));

  // raw subscription
  const rawSubscription = await client.doRawSubscription(`{
    subscription {
      newBlockMined {
        height
        hash
      }

  }`);
  rawSubscription.on('data', data => console.log('RawSubscription', data));
})();
