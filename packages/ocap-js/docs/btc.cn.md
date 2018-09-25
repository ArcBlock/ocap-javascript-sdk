# BTC API 列表

> For English documentation please checkout [btc.md](./btc.md)
>
> 查询串其实已经定义了查询结果的数据结构


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

#### 参数列表

* **address**, **必须**, The address generated based on the public key of the account.

#### 查询串

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
        time
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
        time
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

#### 参数列表

* **hash**, **必须**, The hash of the block.

#### 查询串

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
        time
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

#### 参数列表

* **height**, **必须**, The number of blocks ahead of this block.

#### 查询串

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
        time
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

#### 参数列表

* **instance**, **必须**, The name of the blockchain instance.

#### 查询串

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
            time
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

#### 参数列表

* **fromHeight**, **必须**, The height of block from which to return.
* **paging**, 可选, Describes which page of data to return.
* **toHeight**, 可选, The height of block to which to return.

#### 查询串

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
          time
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

#### 参数列表

* **endDate**, **必须**, the end_date of the interval
* **paging**, 可选, Describes which page of data to return.
* **startDate**, **必须**, the start_date of the interval
* **token**, **必须**, the name of the token

#### 查询串

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

#### 参数列表

* **fromHeight**, **必须**, The height of block from which to return.
* **paging**, 可选, Describes which page of data to return.
* **toHeight**, 可选, The height of block to which to return.

#### 查询串

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
          time
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

#### 参数列表

无需参数

#### 查询串

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
        time
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

#### 参数列表

* **paging**, 可选, Describes which page of data to return.

#### 查询串

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
          time
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
          time
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

#### 参数列表

* **hash**, **必须**, The hash of the transaction to return.

#### 查询串

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
    time
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

#### 参数列表

* **blockHash**, 可选, The hash of the block containing the target transaction.
* **blockHeight**, 可选, The height of the block containing the target transaction.
* **index**, **必须**, The index of the transaction insdie the block.

#### 查询串

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
    time
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

#### 参数列表

* **paging**, 可选, Describes which page of data to return.
* **receiver**, 可选, Specifies the receiver's address.
* **sender**, 可选, Specifies the sender's address.

#### 查询串

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
      time
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

#### 参数列表

* **blockHash**, 可选, The hash of the block containing the target transactions.
* **blockHeight**, 可选, The height of the block containing the target transactions.
* **fromIndex**, 可选, The index of the transaction from which to return.
* **paging**, 可选, Describes which page of data to return.
* **toIndex**, 可选, The index of the transaction to which to return.

#### 查询串

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
      time
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

#### 参数列表

* **fromHeight**, **必须**, The height of block from which to return.
* **paging**, 可选, Describes which page of data to return.
* **toHeight**, 可选, The height of block to which to return.

#### 查询串

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
          time
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

#### 参数列表

无需参数

#### 查询串

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
    time
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

#### 参数列表

* **address**, **必须**, 

#### 查询串

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
    time
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

#### 参数列表

* **address**, **必须**, 

#### 查询串

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
    time
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

#### 参数列表

无需参数

#### 查询串

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
        time
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
