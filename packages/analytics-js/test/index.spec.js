const AnalyticsSDK = require('../src');

describe(AnalyticsSDK.name, () => {
  test('should be a constructor', () => {
    expect(typeof AnalyticsSDK).toEqual('function');
  });

  test('should list api as array', () => {
    const client = new AnalyticsSDK();

    const queries = client.getQueries();
    expect(Array.isArray(queries)).toEqual(true);

    const subscriptions = client.getSubscriptions();
    expect(Array.isArray(subscriptions)).toEqual(true);

    const mutations = client.getMutations();
    expect(Array.isArray(mutations)).toEqual(true);
    expect(mutations.includes('createEvent')).toEqual(true);
    expect(mutations.includes('createEvents')).toEqual(true);
  });
});
