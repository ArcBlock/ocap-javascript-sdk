const AnalyticsSDK = require('../src');

describe(AnalyticsSDK.name, () => {
  test('should be a constructor', () => {
    expect(typeof AnalyticsSDK).toEqual('function');
  });

  const client = new AnalyticsSDK();

  test('should have mutation methods', async () => {
    const mutations = client.getMutations();
    expect(Array.isArray(mutations)).toEqual(true);
    expect(mutations.includes('createEvent')).toEqual(true);
    expect(mutations.includes('createEvents')).toEqual(true);
  });

  test('should support event creation', async () => {
    const result = await client.createEvent({
      clientTimestamp: 'abc',
      deviceId: 'abc',
      eventType: 'abc',
      objectId: 'abc',
      objectType: 'abc',
      operation: 'abc',
      source: 'abc',
      userId: 'abc',
    });

    expect(result).toBeTruthy();
  });
});
