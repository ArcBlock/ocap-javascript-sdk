/**
 * OCAP Service is free by default, but to make sure our service is not abused
 * Anonymous requests are rate-limited, query page sizing is also limited
 *
 * For those who want a large rate-limit and page-size limit,
 * Request signature and certain amount of ABT stake are required
 *
 * Steps for generating signed requests:
 *
 *  1. Create developer account on https://console.arcblock.io
 *  2. Verify your ABT wallet at https://console.arcblock.io/uesrs/settings
 *  3. Create accessKey and accessSecret pair at https://console.arcblock.io/users/settings
 *  4. Init your OCAP SDK Client with your accessKey and accessSecret as following code snippet
 *  5. You are ready to go.
 *  6. For our quota policies on different ABT stake holders, [TODO: detailed info here]
 */
const OCAPClient = require('../src/node');

(async () => {
  // Request with signature, you can obtain accessKey and accessSecret from https://console.arcblock.io
  const client = new OCAPClient({
    httpEndpoint: ds => `https://ocap.arcblock.io/api/${ds}`,
    socketEndpoint: ds => `wss://ocap.arcblock.io/api/${ds}/socket`,
    dataSource: 'eth',
    // For test purpose only, replace with your own key/secret pair
    accessKey: '2b5eded2-33e8-48cd-9b16-6deefb0eaf8b',
    accessSecret: '5e00dd99e1a65c61bd501372899719d7ceeb6581e62e21daf4ec8bb4794cc7a3',
  });

  /* eslint no-console:"off" */
  const consoleOutput = (title, data, type = 'info') => {
    console.log(`======${title}========`);
    console[type](data);
    console.log('');
    console.log('');
  };

  const doShortcutQuery = async (method, args) => {
    try {
      const result = await client[method](args || {});
      consoleOutput(`ShortcutQuery.${method}`, result);
    } catch (err) {
      consoleOutput(`ShortcutQuery.${method}`, err);
    }
  };

  await doShortcutQuery('accountByAddress', {
    address: '0xe65d3128feafd14d472442608daf94bceb91e333',
  });
})();
