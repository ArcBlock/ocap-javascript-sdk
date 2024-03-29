const { types, queryType, mutationType } = require('./schema.json');
const {
  types: nodeTypes,
  queryType: nodeQueryType,
  // mutationType: nodeMutationType,
} = require('./graphql.json');
const {
  getTypeFilter,
  makeQuery,
  formatArgs,
  fakeMessage,
  extractArgSpecs,
  resolveFieldTree,
  getQueryBuilders,
  getMutationBuilders,
  getSubscriptionBuilders,
  getGraphQLBuilders,
} = require('../src/util');
const {
  extractedArgSpecs,
  extractedListArgSpecs,
  extractedComplexArgSpecs,
  mutationCreateWallet,
  queryListTransactions,
  queryListTransactionsNoUpgrade,
  queryListTransactionsNoItx,
  queryGetNodeInfo,
  queryListBlocklets,
  queryGetBlocklets,
} = require('./fixture');

const typesMap = types.reduce((acc, x) => {
  acc[x.name] = x;
  return acc;
}, {});

const nodeTypesMap = nodeTypes.reduce((acc, x) => {
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

  test('should process scalar types correctly (has break line)', () => {
    const args = formatArgs({ address: 'ab\ncd', height: 123 }, specs);
    expect(args).toEqual('address: """ab\ncd""", height: 123');
  });

  test('should process scalar types correctly (object in string)', () => {
    const args = formatArgs({ address: { name: 'abc' }, height: 123 }, specs);
    expect(args).toEqual('address: "[object Object]", height: 123');
  });

  test('should process scalar types correctly (null)', () => {
    const args = formatArgs({ address: null, height: 123 }, specs);
    expect(args).toEqual('address: null, height: 123');
  });

  test('should process null scalar values correctly', () => {
    const args = formatArgs({ address: null, height: 123 }, specs);
    expect(args).toEqual('address: null, height: 123');
  });

  test('should process null scalar values correctly', () => {
    const args = formatArgs({ address: 'abc', height: null }, specs);
    expect(args).toEqual('address: "abc", height: null');
  });

  test('should escape slash when process scalar types correctly', () => {
    const args = formatArgs({ address: '\\arcblock\\', height: 123 }, specs);
    expect(args).toEqual('address: "\\\\arcblock\\\\", height: 123');
  });

  test('should escape double quotation correctly when process scalar types correctly', () => {
    const args = formatArgs({ address: '"xxx"', height: 123 }, specs);
    expect(args).toEqual('address: "\\"xxx\\"", height: 123');
  });

  test('should process object types correctly', () => {
    const args = formatArgs(
      { address: 'xxx', height: 123, paging: { size: 10, cursor: 'abc' } },
      specs
    );
    expect(args).toEqual('address: "xxx", height: 123');
  });

  test('should process list types correctly', () => {
    const args = formatArgs(
      { input: { did: 'abc', configs: [{ key: 'key', value: 'value' }] } },
      extractedListArgSpecs
    );
    expect(args).toEqual('input: {did: "abc", configs: [{key: "key", value: "value"}]}');
  });

  test('should process list types correctly', () => {
    const args = formatArgs(
      { input: { did: 'abc', configs: [{ key: 'key', value: 'value' }] } },
      extractedListArgSpecs
    );
    expect(args).toEqual('input: {did: "abc", configs: [{key: "key", value: "value"}]}');
  });

  test('should process deeply nested types correctly', () => {
    const args = [
      {
        name: 'input',
        description: null,
        type: {
          kind: 'INPUT_OBJECT',
          name: 'RoutingRuleInput',
          ofType: null,
        },
        defaultValue: null,
      },
    ];
    const argSpecs = extractArgSpecs(args, nodeTypesMap);
    // console.log(require('util').inspect(argSpecs, { depth: 8 }));

    const formatted = formatArgs(
      {
        input: {
          from: { domain: 'abc', pathPrefix: '/' },
          to: { port: 8089, type: 'blocklet', did: 'z123' },
        },
      },
      argSpecs
    );
    expect(formatted).toEqual(
      'input: {from: {domain: "abc", pathPrefix: "/"}, to: {port: 8089, type: blocklet, did: "z123"}}'
    );
  });

  test('should process nested list types correctly', () => {
    const args = [
      {
        name: 'input',
        description: null,
        type: {
          kind: 'INPUT_OBJECT',
          name: 'RequestRemoveRoutingRulesInput',
          ofType: null,
        },
        defaultValue: null,
      },
    ];
    const argSpecs = extractArgSpecs(args, nodeTypesMap);
    // console.log(require('util').inspect(argSpecs, { depth: 8 }));

    const formatted = formatArgs(
      {
        input: {
          ids: ['1', '2', '3'],
        },
      },
      argSpecs
    );
    expect(formatted).toEqual('input: {ids: ["1","2","3"]}');
  });
});

describe('#extractArgSpecs', () => {
  test('should be a function', () => {
    expect(typeof extractArgSpecs).toEqual('function');
  });

  test('should extract correct arg specs', () => {
    const args = [
      {
        defaultValue: null,
        description: '',
        name: 'addressFilter',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'AddressFilter',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        description: '',
        name: 'paging',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'PageInput',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        description: '',
        name: 'timeFilter',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'TimeFilter',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        description: '',
        name: 'typeFilter',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'TypeFilter',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        description: '',
        name: 'token',
        type: {
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        description: null,
        name: 'types',
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
      },
    ];

    const argSpecs = extractArgSpecs(args, typesMap);
    // console.log(require('util').inspect(argSpecs, { depth: 8 }));
    expect(argSpecs).toEqual(extractedArgSpecs);
  });

  test('should extract correct arg specs', () => {
    const args = [
      {
        name: 'input',
        description: null,
        type: {
          kind: 'INPUT_OBJECT',
          name: 'RequestConfigBlockletInput',
          ofType: null,
        },
        defaultValue: null,
      },
    ];

    const argSpecs = extractArgSpecs(args, nodeTypesMap);
    // console.log(require('util').inspect(argSpecs, { depth: 8 }));
    expect(argSpecs).toEqual(extractedListArgSpecs);
  });

  test.skip('should extract correct arg specs', () => {
    const args = [
      {
        name: 'input',
        description: '',
        type: {
          kind: 'INPUT_OBJECT',
          name: 'RequestUpdateRoutingRuleInput',
          ofType: null,
        },
        defaultValue: null,
      },
    ];

    const argSpecs = extractArgSpecs(args, nodeTypesMap);
    // console.log(require('util').inspect(argSpecs, { depth: 100 }));
    expect(argSpecs).toEqual(extractedComplexArgSpecs);

    const formatted = formatArgs(
      {
        input: {
          id: 'l2OXw5cqXrfoNbfL',
          rule: {
            id: '4bf366ac-c87f-4b17-904a-5360a27b2a2d',
            from: { pathPrefix: '/' },
            to: {
              type: 'blocklet',
              port: 5556,
              did: 'z8ia4e5vAeDsQEE2P26bQqz9oWR1Lxg9qUMaV',
              interfaceName: 'publicUrl',
            },
            services: [
              {
                configJson: '{}',
                configSchema: '{}',
                description: 'Login service shared by all blocklets running inside ABT Node',
                name: '@abtnode/login-service',
                version: '1.1.8',
              },
            ],
          },
        },
      },
      argSpecs
    );

    expect(formatted).toEqual(
      'input: {id: "l2OXw5cqXrfoNbfL", rule: {id: "4bf366ac-c87f-4b17-904a-5360a27b2a2d", from: {pathPrefix: "/"}, to: {type: blocklet, port: 5556, did: "z8ia4e5vAeDsQEE2P26bQqz9oWR1Lxg9qUMaV", interfaceName: "publicUrl"}, services: [{configJson: "{}", configSchema: "{}", description: "Login service shared by all blocklets running inside ABT Node", name: "@abtnode/login-service", version: "1.1.8"}]}}'
    );
  });
});

describe('#getQueryBuilders', () => {
  test('should be a function', () => {
    expect(typeof getQueryBuilders).toEqual('function');
  });

  test('should generate functions', () => {
    const fns = getQueryBuilders({ types, rootName: queryType.name, maxDepth: 4 });
    expect(typeof fns.listTransactions).toEqual('function');
    expect(typeof fns.getBlock).toEqual('function');
    expect(typeof fns.getBlocks).toEqual('function');

    expect(
      fns.listTransactions({
        paging: { size: 1 },
        typeFilter: {
          types: ['AccountMigrate', 'Transfer'],
        },
        addressFilter: {
          sender: '123',
          receiver: '123',
          direction: 'UNION',
        },
      })
    ).toEqual(queryListTransactions);
  });

  test('should respect ignore on oneOf type', () => {
    const fns = getQueryBuilders({ types, rootName: queryType.name, maxDepth: 4 });
    expect(typeof fns.listTransactions).toEqual('function');
    expect(typeof fns.getBlock).toEqual('function');
    expect(typeof fns.getBlocks).toEqual('function');

    expect(
      fns.listTransactions(
        {
          paging: { size: 1 },
          typeFilter: {
            types: ['AccountMigrate', 'Transfer'],
          },
          addressFilter: {
            sender: '123',
            receiver: '123',
            direction: 'UNION',
          },
        },
        ['ConsensusUpgradeTx']
      )
    ).toEqual(queryListTransactionsNoUpgrade);

    expect(
      fns.listTransactions(
        {
          paging: { size: 1 },
          typeFilter: {
            types: ['AccountMigrate', 'Transfer'],
          },
          addressFilter: {
            sender: '123',
            receiver: '123',
            direction: 'UNION',
          },
        },
        [/\.itx$/]
      )
    ).toEqual(queryListTransactionsNoItx);
  });

  test('should respect list', () => {
    const fns = getQueryBuilders({ types: nodeTypes, rootName: nodeQueryType.name, maxDepth: 4 });
    expect(typeof fns.listBlocklets).toEqual('function');
    expect(typeof fns.getBlocklet).toEqual('function');
    expect(typeof fns.getBlocklets).toEqual('function');
    expect(typeof fns.getNodeInfo).toEqual('function');

    expect(fns.getNodeInfo()).toEqual(queryGetNodeInfo);
    expect(fns.getBlocklets()).toEqual(queryGetBlocklets);
    expect(fns.listBlocklets()).toEqual(queryListBlocklets);
  });
});

describe('#getMutationBuilders', () => {
  test('should be a function', () => {
    expect(typeof getMutationBuilders).toEqual('function');
  });

  test('should generate functions', () => {
    const fns = getMutationBuilders({ types, rootName: mutationType.name, maxDepth: 4 });
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

describe('#fakeMessage.arg', () => {
  test('should be a function', () => {
    expect(typeof fakeMessage).toEqual('function');
  });
  test('should return arg corectly', () => {
    expect(fakeMessage(typesMap.PageInput, typesMap)).toEqual({
      cursor: 'abc',
      order: [{ field: 'abc', type: 'abc' }],
      size: 123,
    });
  });
});

describe('#fakeMessage.response', () => {
  const specs = types.reduce((acc, x) => {
    acc[x.name] = x;
    return acc;
  }, {});

  test('should get fake response', () => {
    const result = fakeMessage(specs.ResponseGetAccountState, specs, 'fields');
    expect(result).toEqual({
      code: 'ACCOUNT_MIGRATED',
      state: {
        address: 'abc',
        balance: 'abc',
        context: {
          genesisTime: '2019-04-29T00:00:00.000Z',
          genesisTx: {
            code: 'ACCOUNT_MIGRATED',
            hash: 'abc',
            height: 123,
            index: 123,
            tags: [{ key: 'abc', value: 'abc' }],
            tx: {
              chainId: 123,
              from: 'abc',
              nonce: 123,
              signature: 'abc',
              signatures: [{ key: 'abc', value: 'abc' }],
            },
          },
          renaissanceTime: '2019-04-29T00:00:00.000Z',
          renaissanceTx: {
            code: 'ACCOUNT_MIGRATED',
            hash: 'abc',
            height: 123,
            index: 123,
            tags: [{ key: 'abc', value: 'abc' }],
            tx: {
              chainId: 123,
              from: 'abc',
              nonce: 123,
              signature: 'abc',
              signatures: [{ key: 'abc', value: 'abc' }],
            },
          },
        },
        data: { typeUrl: 'abc', value: 'abc' },
        migratedFrom: ['abc'],
        migratedTo: ['abc'],
        moniker: 'abc',
        nonce: 123,
        numAssets: 123,
        numTxs: 123,
        pinnedFiles: { circular: true, fifo: true, items: ['abc'], maxItems: 123, typeUrl: 'abc' },
        pk: 'abc',
        stake: {
          recentReceivedStakes: {
            circular: true,
            fifo: true,
            items: ['abc'],
            maxItems: 123,
            typeUrl: 'abc',
          },
          recentStakes: {
            circular: true,
            fifo: true,
            items: ['abc'],
            maxItems: 123,
            typeUrl: 'abc',
          },
          totalReceivedStakes: 'abc',
          totalStakes: 'abc',
          totalUnstakes: 'abc',
        },
        type: { address: 'BASE16', hash: 'KECCAK', pk: 'ED25519', role: 'ROLE_ACCOUNT' },
      },
    });
  });
});
