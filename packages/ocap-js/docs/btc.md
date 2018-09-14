# BTC API List

> 中文版文档请猛击 [btc.cn.md](./btc.cn.md)
>
> Raw Query also tells us the shape of the response


## Table of Contents

* [Queries](#queries)
  * [accountByAddress](#accountbyaddress)
  * [blockByHash](#blockbyhash)
  * [blockByHeight](#blockbyheight)
  * [blockchainInfo](#blockchaininfo)
  * [blocksByHeight](#blocksbyheight)
  * [cryptoHistoryPrice](#cryptohistoryprice)
  * [emptyBlocks](#emptyblocks)
  * [genesisBlock](#genesisblock)
  * [richestAccounts](#richestaccounts)
  * [transactionByHash](#transactionbyhash)
  * [transactionByIndex](#transactionbyindex)
  * [transactionsByAddress](#transactionsbyaddress)
  * [transactionsByIndex](#transactionsbyindex)
  * [zeroFeesBlocks](#zerofeesblocks)
* [Subscriptions](#subscriptions)
  * [bigTransactionExecuted](#bigtransactionexecuted)
  * [coinReceived](#coinreceived)
  * [coinSent](#coinsent)
  * [newBlockMined](#newblockmined)
* [Mutations](#mutations)


## Queries

### accountByAddress

#### Arguments

* **address**, **required**, The address generated based on the public key of the account.

#### Raw Query

```graphql
{
  accountByAddress(address: "abc") {
    address
    balance
    numberTxsReceived
    numberTxsSent
    priceInUsd
    pubKey
    scriptType
    subKeys
    totalAmountReceived
    totalAmountSent
    txsReceived {
      data {
        blockHash
        blockHeight
        fees
        feesOverWeight
        hash
        index
        lockTime
        numberInputs
        numberOutputs
        priceInUsd
        size
        strippedSize
        total
        version
        virtualSize
        weight
        witnessHash
        inputs {
          data {
            account
            blockHash
            blockHeight
            index
            preOutput
            preTx
            script
            scriptType
            sequence
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
        outputs {
          data {
            account
            blockHash
            blockHeight
            index
            script
            scriptType
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
    txsSent {
      data {
        blockHash
        blockHeight
        fees
        feesOverWeight
        hash
        index
        lockTime
        numberInputs
        numberOutputs
        priceInUsd
        size
        strippedSize
        total
        version
        virtualSize
        weight
        witnessHash
        inputs {
          data {
            account
            blockHash
            blockHeight
            index
            preOutput
            preTx
            script
            scriptType
            sequence
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
        outputs {
          data {
            account
            blockHash
            blockHeight
            index
            script
            scriptType
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### blockByHash

#### Arguments

* **hash**, **required**, The hash of the block.

#### Raw Query

```graphql
{
  blockByHash(hash: "abc") {
    bits
    fees
    hash
    height
    medianTime
    merkleRoot
    nonce
    numberTxs
    preHash
    priceInUsd
    reward
    size
    strippedSize
    time
    total
    version
    weight
    miner {
      address
      balance
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      scriptType
      subKeys
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        blockHash
        blockHeight
        fees
        feesOverWeight
        hash
        index
        lockTime
        numberInputs
        numberOutputs
        priceInUsd
        size
        strippedSize
        total
        version
        virtualSize
        weight
        witnessHash
        inputs {
          data {
            account
            blockHash
            blockHeight
            index
            preOutput
            preTx
            script
            scriptType
            sequence
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
        outputs {
          data {
            account
            blockHash
            blockHeight
            index
            script
            scriptType
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### blockByHeight

#### Arguments

* **height**, **required**, The number of blocks ahead of this block.

#### Raw Query

```graphql
{
  blockByHeight(height: 123) {
    bits
    fees
    hash
    height
    medianTime
    merkleRoot
    nonce
    numberTxs
    preHash
    priceInUsd
    reward
    size
    strippedSize
    time
    total
    version
    weight
    miner {
      address
      balance
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      scriptType
      subKeys
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        blockHash
        blockHeight
        fees
        feesOverWeight
        hash
        index
        lockTime
        numberInputs
        numberOutputs
        priceInUsd
        size
        strippedSize
        total
        version
        virtualSize
        weight
        witnessHash
        inputs {
          data {
            account
            blockHash
            blockHeight
            index
            preOutput
            preTx
            script
            scriptType
            sequence
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
        outputs {
          data {
            account
            blockHash
            blockHeight
            index
            script
            scriptType
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### blockchainInfo

#### Arguments

* **instance**, **required**, The name of the blockchain instance.

#### Raw Query

```graphql
{
  blockchainInfo(instance: "abc") {
    avgBlockGap
    avgFees
    avgFeesOverWeight
    avgTotal
    consensus
    instance
    latestHash
    latestHeight
    latestUpdateTime
    name
    blocks {
      data {
        bits
        fees
        hash
        height
        medianTime
        merkleRoot
        nonce
        numberTxs
        preHash
        priceInUsd
        reward
        size
        strippedSize
        time
        total
        version
        weight
        miner {
          address
          balance
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          scriptType
          subKeys
          totalAmountReceived
          totalAmountSent
        }
        transactions {
          data {
            blockHash
            blockHeight
            fees
            feesOverWeight
            hash
            index
            lockTime
            numberInputs
            numberOutputs
            priceInUsd
            size
            strippedSize
            total
            version
            virtualSize
            weight
            witnessHash
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### blocksByHeight

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Raw Query

```graphql
{
  blocksByHeight(fromHeight: 123) {
    data {
      bits
      fees
      hash
      height
      medianTime
      merkleRoot
      nonce
      numberTxs
      preHash
      priceInUsd
      reward
      size
      strippedSize
      time
      total
      version
      weight
      miner {
        address
        balance
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        scriptType
        subKeys
        totalAmountReceived
        totalAmountSent
      }
      transactions {
        data {
          blockHash
          blockHeight
          fees
          feesOverWeight
          hash
          index
          lockTime
          numberInputs
          numberOutputs
          priceInUsd
          size
          strippedSize
          total
          version
          virtualSize
          weight
          witnessHash
        }
        page {
          cursor
          next
          total
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### cryptoHistoryPrice

#### Arguments

* **endDate**, **required**, the end_date of the interval
* **paging**, optional, Describes which page of data to return.
* **startDate**, **required**, the start_date of the interval
* **token**, **required**, the name of the token

#### Raw Query

```graphql
{
  cryptoHistoryPrice(endDate: "123", startDate: "123", token: "abc") {
    data {
      date
      price
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### emptyBlocks

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Raw Query

```graphql
{
  emptyBlocks(fromHeight: 123) {
    data {
      bits
      fees
      hash
      height
      medianTime
      merkleRoot
      nonce
      numberTxs
      preHash
      priceInUsd
      reward
      size
      strippedSize
      time
      total
      version
      weight
      miner {
        address
        balance
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        scriptType
        subKeys
        totalAmountReceived
        totalAmountSent
      }
      transactions {
        data {
          blockHash
          blockHeight
          fees
          feesOverWeight
          hash
          index
          lockTime
          numberInputs
          numberOutputs
          priceInUsd
          size
          strippedSize
          total
          version
          virtualSize
          weight
          witnessHash
        }
        page {
          cursor
          next
          total
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### genesisBlock

#### Arguments

No arguments

#### Raw Query

```graphql
{
  genesisBlock {
    bits
    fees
    hash
    height
    medianTime
    merkleRoot
    nonce
    numberTxs
    preHash
    priceInUsd
    reward
    size
    strippedSize
    time
    total
    version
    weight
    miner {
      address
      balance
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      scriptType
      subKeys
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        blockHash
        blockHeight
        fees
        feesOverWeight
        hash
        index
        lockTime
        numberInputs
        numberOutputs
        priceInUsd
        size
        strippedSize
        total
        version
        virtualSize
        weight
        witnessHash
        inputs {
          data {
            account
            blockHash
            blockHeight
            index
            preOutput
            preTx
            script
            scriptType
            sequence
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
        outputs {
          data {
            account
            blockHash
            blockHeight
            index
            script
            scriptType
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### richestAccounts

#### Arguments

* **paging**, optional, Describes which page of data to return.

#### Raw Query

```graphql
{
  richestAccounts {
    data {
      address
      balance
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      scriptType
      subKeys
      totalAmountReceived
      totalAmountSent
      txsReceived {
        data {
          blockHash
          blockHeight
          fees
          feesOverWeight
          hash
          index
          lockTime
          numberInputs
          numberOutputs
          priceInUsd
          size
          strippedSize
          total
          version
          virtualSize
          weight
          witnessHash
        }
        page {
          cursor
          next
          total
        }
      }
      txsSent {
        data {
          blockHash
          blockHeight
          fees
          feesOverWeight
          hash
          index
          lockTime
          numberInputs
          numberOutputs
          priceInUsd
          size
          strippedSize
          total
          version
          virtualSize
          weight
          witnessHash
        }
        page {
          cursor
          next
          total
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### transactionByHash

#### Arguments

* **hash**, **required**, The hash of the transaction to return.

#### Raw Query

```graphql
{
  transactionByHash(hash: "abc") {
    blockHash
    blockHeight
    fees
    feesOverWeight
    hash
    index
    lockTime
    numberInputs
    numberOutputs
    priceInUsd
    size
    strippedSize
    total
    version
    virtualSize
    weight
    witnessHash
    inputs {
      data {
        account
        blockHash
        blockHeight
        index
        preOutput
        preTx
        script
        scriptType
        sequence
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
    outputs {
      data {
        account
        blockHash
        blockHeight
        index
        script
        scriptType
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### transactionByIndex

#### Arguments

* **blockHash**, optional, The hash of the block containing the target transaction.
* **blockHeight**, optional, The height of the block containing the target transaction.
* **index**, **required**, The index of the transaction insdie the block.

#### Raw Query

```graphql
{
  transactionByIndex(index: 123) {
    blockHash
    blockHeight
    fees
    feesOverWeight
    hash
    index
    lockTime
    numberInputs
    numberOutputs
    priceInUsd
    size
    strippedSize
    total
    version
    virtualSize
    weight
    witnessHash
    inputs {
      data {
        account
        blockHash
        blockHeight
        index
        preOutput
        preTx
        script
        scriptType
        sequence
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
    outputs {
      data {
        account
        blockHash
        blockHeight
        index
        script
        scriptType
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### transactionsByAddress

#### Arguments

* **paging**, optional, Describes which page of data to return.
* **receiver**, optional, Specifies the receiver's address.
* **sender**, optional, Specifies the sender's address.

#### Raw Query

```graphql
{
  transactionsByAddress {
    data {
      blockHash
      blockHeight
      fees
      feesOverWeight
      hash
      index
      lockTime
      numberInputs
      numberOutputs
      priceInUsd
      size
      strippedSize
      total
      version
      virtualSize
      weight
      witnessHash
      inputs {
        data {
          account
          blockHash
          blockHeight
          index
          preOutput
          preTx
          script
          scriptType
          sequence
          txHash
          txIndex
          value
        }
        page {
          cursor
          next
          total
        }
      }
      outputs {
        data {
          account
          blockHash
          blockHeight
          index
          script
          scriptType
          txHash
          txIndex
          value
        }
        page {
          cursor
          next
          total
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### transactionsByIndex

#### Arguments

* **blockHash**, optional, The hash of the block containing the target transactions.
* **blockHeight**, optional, The height of the block containing the target transactions.
* **fromIndex**, optional, The index of the transaction from which to return.
* **paging**, optional, Describes which page of data to return.
* **toIndex**, optional, The index of the transaction to which to return.

#### Raw Query

```graphql
{
  transactionsByIndex {
    data {
      blockHash
      blockHeight
      fees
      feesOverWeight
      hash
      index
      lockTime
      numberInputs
      numberOutputs
      priceInUsd
      size
      strippedSize
      total
      version
      virtualSize
      weight
      witnessHash
      inputs {
        data {
          account
          blockHash
          blockHeight
          index
          preOutput
          preTx
          script
          scriptType
          sequence
          txHash
          txIndex
          value
        }
        page {
          cursor
          next
          total
        }
      }
      outputs {
        data {
          account
          blockHash
          blockHeight
          index
          script
          scriptType
          txHash
          txIndex
          value
        }
        page {
          cursor
          next
          total
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```

### zeroFeesBlocks

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Raw Query

```graphql
{
  zeroFeesBlocks(fromHeight: 123) {
    data {
      bits
      fees
      hash
      height
      medianTime
      merkleRoot
      nonce
      numberTxs
      preHash
      priceInUsd
      reward
      size
      strippedSize
      time
      total
      version
      weight
      miner {
        address
        balance
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        scriptType
        subKeys
        totalAmountReceived
        totalAmountSent
      }
      transactions {
        data {
          blockHash
          blockHeight
          fees
          feesOverWeight
          hash
          index
          lockTime
          numberInputs
          numberOutputs
          priceInUsd
          size
          strippedSize
          total
          version
          virtualSize
          weight
          witnessHash
        }
        page {
          cursor
          next
          total
        }
      }
    }
    page {
      cursor
      next
      total
    }
  }
}
```


## Subscriptions

### bigTransactionExecuted

#### Arguments

No arguments

#### Raw Query

```graphql
subscription {
  bigTransactionExecuted {
    blockHash
    blockHeight
    fees
    feesOverWeight
    hash
    index
    lockTime
    numberInputs
    numberOutputs
    priceInUsd
    size
    strippedSize
    total
    version
    virtualSize
    weight
    witnessHash
    inputs {
      data {
        account
        blockHash
        blockHeight
        index
        preOutput
        preTx
        script
        scriptType
        sequence
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
    outputs {
      data {
        account
        blockHash
        blockHeight
        index
        script
        scriptType
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### coinReceived

#### Arguments

* **address**, **required**, 

#### Raw Query

```graphql
subscription {
  coinReceived(address: "abc") {
    blockHash
    blockHeight
    fees
    feesOverWeight
    hash
    index
    lockTime
    numberInputs
    numberOutputs
    priceInUsd
    size
    strippedSize
    total
    version
    virtualSize
    weight
    witnessHash
    inputs {
      data {
        account
        blockHash
        blockHeight
        index
        preOutput
        preTx
        script
        scriptType
        sequence
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
    outputs {
      data {
        account
        blockHash
        blockHeight
        index
        script
        scriptType
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### coinSent

#### Arguments

* **address**, **required**, 

#### Raw Query

```graphql
subscription {
  coinSent(address: "abc") {
    blockHash
    blockHeight
    fees
    feesOverWeight
    hash
    index
    lockTime
    numberInputs
    numberOutputs
    priceInUsd
    size
    strippedSize
    total
    version
    virtualSize
    weight
    witnessHash
    inputs {
      data {
        account
        blockHash
        blockHeight
        index
        preOutput
        preTx
        script
        scriptType
        sequence
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
    outputs {
      data {
        account
        blockHash
        blockHeight
        index
        script
        scriptType
        txHash
        txIndex
        value
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```

### newBlockMined

#### Arguments

No arguments

#### Raw Query

```graphql
subscription {
  newBlockMined {
    bits
    fees
    hash
    height
    medianTime
    merkleRoot
    nonce
    numberTxs
    preHash
    priceInUsd
    reward
    size
    strippedSize
    time
    total
    version
    weight
    miner {
      address
      balance
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      scriptType
      subKeys
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        blockHash
        blockHeight
        fees
        feesOverWeight
        hash
        index
        lockTime
        numberInputs
        numberOutputs
        priceInUsd
        size
        strippedSize
        total
        version
        virtualSize
        weight
        witnessHash
        inputs {
          data {
            account
            blockHash
            blockHeight
            index
            preOutput
            preTx
            script
            scriptType
            sequence
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
        outputs {
          data {
            account
            blockHash
            blockHeight
            index
            script
            scriptType
            txHash
            txIndex
            value
          }
          page {
            cursor
            next
            total
          }
        }
      }
      page {
        cursor
        next
        total
      }
    }
  }
}
```


## Mutations

No Mutations supported yet.


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
