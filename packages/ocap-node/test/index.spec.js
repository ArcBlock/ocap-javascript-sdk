const EventEmitter = require('events');
const OCAPClient = require('../src/index');

describe('OCAPClient', () => {
  test('should be a constructor', () => {
    expect(typeof OCAPClient).toEqual('function');
  });

  test('should throw error if no dataSource option', () => {
    try {
      new OCAPClient();
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should throw error if invalid dataSource option', () => {
    try {
      new OCAPClient({ dataSource: 'xxx' });
    } catch (err) {
      expect(err).toBeTruthy();
    }
  });

  test('should list api as array', () => {
    const client = new OCAPClient({
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

describe('OCAPClient#query', () => {
  test('should have basic query methods for btc', () => {
    const client = new OCAPClient({
      dataSource: 'btc',
    });

    expect(typeof client.accountByAddress).toEqual('function');
    expect(typeof client.blockByHash).toEqual('function');
    expect(typeof client.blockByHeight).toEqual('function');
    expect(typeof client.blocksByHeight).toEqual('function');
    expect(typeof client.transactionByHash).toEqual('function');
  });

  test('should have basic query methods for eth', () => {
    const client = new OCAPClient({
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
      const client = new OCAPClient({
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

describe('OCAPClient#subscription', () => {
  const client = new OCAPClient({
    dataSource: 'eth',
  });

  test('should have basic subscription methods for eth', () => {
    expect(typeof client.newBlockMined).toEqual('function');
    expect(typeof client.bigTransactionExecuted).toEqual('function');
  });

  test.skip(
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
});
