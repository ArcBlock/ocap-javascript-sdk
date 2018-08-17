const {
  getTypeFilter,
  makeQuery,
  formatArgs,
  resolveFieldTree,
  getQueryBuilders,
  getMutationBuilders,
  getSubscriptionBuilders,
  getGraphQLBuilders,
} = require('../src/helper');

describe('#getTypeFilter', () => {
  test('should return a function', () => {
    expect(typeof getTypeFilter()).toEqual('function');
  });
});

describe('#resolveFieldTree', () => {
  test('should be a function', () => {
    expect(typeof resolveFieldTree).toEqual('function');
  });
});

describe('#makeQuery', () => {
  test('should be a function', () => {
    expect(typeof makeQuery).toEqual('function');
  });
});

describe('#formatArgs', () => {
  const specs = {
    address: {
      type: {
	ofType: {
	  ofType: null,
	  name: 'String',
	  kind: 'SCALAR',
	},
	name: null,
	kind: 'NON_NULL',
      },
      name: 'address',
    },
    height: {
      type: {
	ofType: null,
	name: 'Int',
	kind: 'SCALAR',
      },
      name: 'height',
    },
  };

  test('should be a function', () => {
    expect(typeof formatArgs).toEqual('function');
  });

  test('should throw error when args is falsy', () => {
    try {
      formatArgs();
    } catch (err) {
      expect(err).toBeTruthy();
      expect(err.message).toContain('Empty args when');
    }
  });

  test('should throw error when missing required fields', () => {
    try {
      formatArgs({ key: 'value' }, specs);
    } catch (err) {
      expect(err.message).toContain('Missing required args');
    }
  });

  test('should process scalar types correctly', () => {
    const args = formatArgs({ address: 'xxx', height: 123 }, specs);
    expect(args).toEqual('address: "xxx", height: 123');
  });
});

describe('#getQueryBuilders', () => {
  test('should be a function', () => {
    expect(typeof getQueryBuilders).toEqual('function');
  });
});

describe('#getMutationBuilders', () => {
  test('should be a function', () => {
    expect(typeof getMutationBuilders).toEqual('function');
  });
});

describe('#getSubscriptionBuilders', () => {
  test('should be a function', () => {
    expect(typeof getSubscriptionBuilders).toEqual('function');
  });
});

describe('#getGraphQLBuilders', () => {
  test('should be a function', () => {
    expect(typeof getGraphQLBuilders).toEqual('function');
  });
});
