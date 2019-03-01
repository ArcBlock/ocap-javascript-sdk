const extractedArgSpecs = {
  addressFilter: {
    defaultValue: null,
    description: '',
    fields: {
      direction: {
        defaultValue: null,
        description: null,
        name: 'direction',
        type: { kind: 'ENUM', name: 'Direction', ofType: null },
      },
      receiver: {
        defaultValue: null,
        description: null,
        name: 'receiver',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
      sender: {
        defaultValue: null,
        description: null,
        name: 'sender',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
    },
    name: 'addressFilter',
    type: { kind: 'INPUT_OBJECT', name: 'AddressFilter', ofType: null },
  },
  paging: {
    defaultValue: null,
    description: '',
    fields: {
      cursor: {
        defaultValue: null,
        description: null,
        name: 'cursor',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
      order: {
        defaultValue: null,
        description: null,
        name: 'order',
        type: {
          kind: 'LIST',
          name: null,
          ofType: {
            fields: {
              field: {
                defaultValue: null,
                description: null,
                name: 'field',
                type: { kind: 'SCALAR', name: 'String', ofType: null },
              },
              type: {
                defaultValue: null,
                description: null,
                name: 'type',
                type: { kind: 'SCALAR', name: 'String', ofType: null },
              },
            },
            kind: 'INPUT_OBJECT',
            name: 'PageOrder',
            ofType: null,
          },
        },
      },
      size: {
        defaultValue: null,
        description: null,
        name: 'size',
        type: { kind: 'SCALAR', name: 'Int', ofType: null },
      },
    },
    name: 'paging',
    type: { kind: 'INPUT_OBJECT', name: 'PageInput', ofType: null },
  },
  timeFilter: {
    defaultValue: null,
    description: '',
    fields: {
      endDateTime: {
        defaultValue: null,
        description: null,
        name: 'endDateTime',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
      startDateTime: {
        defaultValue: null,
        description: null,
        name: 'startDateTime',
        type: { kind: 'SCALAR', name: 'String', ofType: null },
      },
    },
    name: 'timeFilter',
    type: { kind: 'INPUT_OBJECT', name: 'TimeFilter', ofType: null },
  },
  token: {
    defaultValue: null,
    description: '',
    name: 'token',
    type: { kind: 'SCALAR', name: 'String', ofType: null },
  },
  typeFilter: {
    defaultValue: null,
    description: '',
    fields: {
      types: {
        defaultValue: null,
        description: null,
        name: 'types',
        type: {
          kind: 'LIST',
          name: null,
          ofType: { kind: 'SCALAR', name: 'String', ofType: null },
        },
      },
    },
    name: 'typeFilter',
    type: { kind: 'INPUT_OBJECT', name: 'TypeFilter', ofType: null },
  },
  types: {
    defaultValue: null,
    description: null,
    name: 'types',
    type: { kind: 'LIST', name: null, ofType: { kind: 'SCALAR', name: 'String', ofType: null } },
  },
};

const mutationCreateWallet = `mutation {
  createWallet(moniker: "wangshijun", passphrase: "1234556") {
    code
    token
    wallet {
      address
      pk
      sk
      type {
        address
        hash
        pk
        role
      }
    }
  }
}
`;

const queryListTransactions = `{
  listTransactions(paging: {size: 1}, typeFilter: {types: ["AccountMigrate", "Transfer"]}, addressFilter: {sender: "123", receiver: "123", direction: UNION}) {
    code
    page {
      cursor
      next
      total
    }
    transactions {
      hash
      receiver
      sender
      time
      type
      tx {
        chainId
        from
        nonce
        signature
        signatures {
          key
          value
        }
        itx {
          __typename
          ... on UpdateAssetTx {
            address
            moniker
            data {
              typeUrl
              value
            }
          }
          ... on TransferTx {
            assets
            to
            value
            data {
              typeUrl
              value
            }
          }
          ... on SysUpgradeTx {
            gracePeriod
            data {
              typeUrl
              value
            }
            task {
              actions
              dataHash
              type
            }
          }
          ... on StakeTx {
            message
            to
            value
            data {
              type
            }
          }
          ... on ExchangeTx {
            expiredAt
            to
            data {
              typeUrl
              value
            }
            receiver {
              assets
              value
            }
            sender {
              assets
              value
            }
          }
          ... on DeclareFileTx {
            hash
          }
          ... on DeclareTx {
            moniker
            pk
            data {
              typeUrl
              value
            }
            type {
              address
              hash
              pk
              role
            }
          }
          ... on CreateAssetTx {
            expiredAt
            moniker
            readonly
            data {
              typeUrl
              value
            }
          }
          ... on ConsensusUpgradeTx {
            maxBytes
            maxCandidates
            maxGas
            maxValidators
            data {
              typeUrl
              value
            }
            validators {
              address
              power
            }
          }
          ... on AccountMigrateTx {
            pk
            type {
              address
              hash
              pk
              role
            }
          }
        }
      }
    }
  }
}
`;

module.exports = {
  extractedArgSpecs,
  mutationCreateWallet,
  queryListTransactions,
};
