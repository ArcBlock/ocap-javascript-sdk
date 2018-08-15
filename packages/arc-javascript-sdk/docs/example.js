/* eslint no-console:"off" */
const OCAPClient = require('../src/index');

(async () => {
  const client = new OCAPClient({ dataSource: 'eth' });

  // get supported api list
  const queries = client.getQueries();
  const subscriptions = client.getSubscriptions();
  const mutations = client.getMutations();
  console.log({ queries, subscriptions, mutations });

  // query
  const account = await client.accountByAddress({
    address: '0xe65d3128feafd14d472442608daf94bceb91e333',
  });
  console.log(account);

  // subscription
  const subscription = await client.newBlockMined();
  subscription.on('data', data => console.log(data));
})();
