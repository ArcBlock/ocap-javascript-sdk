/* eslint no-console:"off" */
const OCAPClient = require('../src/node');

(async () => {
  const client = new OCAPClient({ dataSource: 'btc' });

  // get supported api list
  const queries = client.getQueries();
  const subscriptions = client.getSubscriptions();
  const mutations = client.getMutations();
  console.log({ queries, subscriptions, mutations });

  // query
  const account = await client.accountByAddress({
    address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
  });
  console.log(account);

  // subscription
  const subscription = await client.newBlockMined();
  subscription.on('data', data => console.log(data));
})();
