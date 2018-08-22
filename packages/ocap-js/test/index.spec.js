const EventEmitter = require('events');
const OCAPClient = require('../src/node');
const OCAPBrowserClient = require('../src/browser');

[OCAPClient, OCAPBrowserClient].forEach(Client => {
  describe(Client.name, () => {
    test('should be a constructor', () => {
      expect(typeof Client).toEqual('function');
    });

    test('should throw error if no dataSource option', () => {
      try {
        new Client();
      } catch (err) {
        expect(err).toBeTruthy();
      }
    });

    test('should throw error if invalid dataSource option', () => {
      try {
        new Client({ dataSource: 'xxx' });
      } catch (err) {
        expect(err).toBeTruthy();
      }
    });

    test('should list api as array', () => {
      const client = new Client({
        dataSource: 'eth',
      });

      const queries = client.getQueries();
      expect(Array.isArray(queries)).toEqual(true);
      expect(queries.includes('accountByAddress')).toEqual(true);

      const subscriptions = client.getSubscriptions();
      expect(Array.isArray(subscriptions)).toEqual(true);
      expect(subscriptions.includes('newBlockMined')).toEqual(true);

      expect(Array.isArray(client.getMutations())).toEqual(true);
    });
  });

  describe('#query', () => {
    test('should have basic query methods for btc', () => {
      const client = new Client({
        dataSource: 'btc',
      });

      expect(typeof client.accountByAddress).toEqual('function');
      expect(typeof client.blockByHash).toEqual('function');
      expect(typeof client.blockByHeight).toEqual('function');
      expect(typeof client.blocksByHeight).toEqual('function');
      expect(typeof client.transactionByHash).toEqual('function');
    });

    test('should have basic query methods for eth', () => {
      const client = new Client({
        dataSource: 'eth',
      });

      expect(typeof client.accountByAddress).toEqual('function');
      expect(typeof client.blockByHash).toEqual('function');
      expect(typeof client.blockByHeight).toEqual('function');
      expect(typeof client.blocksByHeight).toEqual('function');
      expect(typeof client.transactionByHash).toEqual('function');
    });

    test(
      'should query methods work as expected',
      async () => {
        const client = new Client({
          dataSource: 'btc',
        });

        const result = await client.accountByAddress({
          address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        });
        expect(result).toBeTruthy();
        expect(result.accountByAddress).toBeTruthy();
        expect(result.accountByAddress.address).toBeTruthy();
      },
      8000
    );
  });

  describe('#subscription', () => {
    const client = new Client({
      dataSource: 'eth',
    });

    test('should have basic subscription methods for eth', () => {
      expect(typeof client.newBlockMined).toEqual('function');
      expect(typeof client.bigTransactionExecuted).toEqual('function');
    });

    if (Client.name !== 'OCAPBrowserClient') {
      test(
        'should subscribe to newBlockMined event',
        async () => {
          // TODO: setup mock socket server for testing env
          const subscription = await client.newBlockMined();
          expect(subscription instanceof EventEmitter).toEqual(true);
          expect(subscription.subscriptionId).toBeTruthy();
          expect(Object.keys(client.subscriptions).length).toEqual(1);
        },
        5000
      );
    }
  });
});
