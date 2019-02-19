const { types, queryType, mutationType } = require('./schema.json');
const {
  getTypeFilter,
  makeQuery,
  formatArgs,
  randomArgs,
  resolveFieldTree,
  getQueryBuilders,
  getMutationBuilders,
  getSubscriptionBuilders,
  getGraphQLBuilders,
} = require('../src/util');
const { mutationCreateWallet, queryListTransactions } = require('./fixture');

const typesMap = types.reduce((acc, x) => {
  acc[x.name] = x;
  return acc;
}, {});

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
    paging: {
      type: {
        ofType: null,
        name: 'object',
        kind: 'PagedInput',
      },
      name: 'paging',
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

  test('should process object types correctly', () => {
    const args = formatArgs(
      { address: 'xxx', height: 123, paging: { size: 10, cursor: 'abc' } },
      specs
    );
    expect(args).toEqual('address: "xxx", height: 123, paging: { size: 10, cursor: "abc" }');
  });
});

describe('#getQueryBuilders', () => {
  test('should be a function', () => {
    expect(typeof getQueryBuilders).toEqual('function');
  });

  test('should generate functions', () => {
    const fns = getQueryBuilders({ types, rootName: queryType.name });
    expect(typeof fns.listTransactions).toEqual('function');
    expect(typeof fns.getBlock).toEqual('function');
    expect(typeof fns.getBlocks).toEqual('function');

    expect(fns.listTransactions({ paging: { size: 1 } })).toEqual(queryListTransactions);
  });
});

describe('#getMutationBuilders', () => {
  test('should be a function', () => {
    expect(typeof getMutationBuilders).toEqual('function');
  });

  test('should generate functions', () => {
    const fns = getMutationBuilders({ types, rootName: mutationType.name });
    expect(typeof fns.createWallet).toEqual('function');
    expect(typeof fns.createTx).toEqual('function');

    expect(fns.createWallet({ moniker: 'wangshijun', passphrase: '1234556' })).toEqual(
      mutationCreateWallet
    );
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

describe('#randomArgs', () => {
  test('should be a function', () => {
    expect(typeof randomArgs).toEqual('function');
  });
  test('should return arg corectly', () => {
    expect(randomArgs(typesMap.PageInput, typesMap)).toEqual({
      cursor: 'abc',
      order: [{ field: 'abc', type: 'abc' }],
      size: 123,
    });
  });
});
