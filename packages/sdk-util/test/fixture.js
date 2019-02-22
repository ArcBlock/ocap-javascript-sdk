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
  listTransactions(paging: {size: 1}, typeFilter: {types: ["AccountMigrate", "Transfer"]}) {
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
  mutationCreateWallet,
  queryListTransactions,
};
