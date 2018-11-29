# ETH API 列表

> For English documentation please checkout [eth.md](./eth.md)
>
> 查询串其实已经定义了查询结果的数据结构


## Table of Contents

* [Queries](#queries)
  * [accountByAddress](#accountbyaddress)
  * [blockByHash](#blockbyhash)
  * [blockByHeight](#blockbyheight)
  * [blockchainInfo](#blockchaininfo)
  * [blocksByHeight](#blocksbyheight)
  * [contractTransferByHash](#contracttransferbyhash)
  * [cryptoHistoryPrice](#cryptohistoryprice)
  * [emptyBlocks](#emptyblocks)
  * [erc20TokenBalance](#erc20tokenbalance)
  * [erc20Tokens](#erc20tokens)
  * [genesisBlock](#genesisblock)
  * [richestAccounts](#richestaccounts)
  * [transactionByHash](#transactionbyhash)
  * [transactionByIndex](#transactionbyindex)
  * [transactionsByAddress](#transactionsbyaddress)
  * [transactionsByIndex](#transactionsbyindex)
  * [transactionsByTime](#transactionsbytime)
  * [transfersInContract](#transfersincontract)
  * [zeroFeesBlocks](#zerofeesblocks)
* [Subscriptions](#subscriptions)
  * [bigTransactionExecuted](#bigtransactionexecuted)
  * [contractExecuted](#contractexecuted)
  * [etherReceived](#etherreceived)
  * [etherSent](#ethersent)
  * [newBlockMined](#newblockmined)
  * [newContractCreated](#newcontractcreated)
  * [tokenReceived](#tokenreceived)
  * [tokenSent](#tokensent)
  * [tokenTransferred](#tokentransferred)
* [Mutations](#mutations)
  * [sendRawTransaction](#sendrawtransaction)


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
    isContract
    numberTxsSent
    priceInUsd
    pubKey
    txsReceived {
      data {
        nonce
        priceInUsd
        total
        cumulativeGasUsed
        functionSignature
        index
        txType
        publicKey
        blockHeight
        historyPrice
        standardV
        gasPrice
        blockHash
        input
        receiptStatus
        gasUsed
        gasLimit
        hash
        functionInput
        size
        s
        v
        time
        r
        fees
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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
        nonce
        priceInUsd
        total
        cumulativeGasUsed
        functionSignature
        index
        txType
        publicKey
        blockHeight
        historyPrice
        standardV
        gasPrice
        blockHash
        input
        receiptStatus
        gasUsed
        gasLimit
        hash
        functionInput
        size
        s
        v
        time
        r
        fees
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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
    difficulty
    uncleReward
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    historyPrice
    logsBloom
    mixHash
    nonce
    numberTxs
    extraData
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
    total
    totalDifficulty
    transactionsRoot
    preHash
    miner {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    transactions {
      data {
        nonce
        priceInUsd
        total
        cumulativeGasUsed
        functionSignature
        index
        txType
        publicKey
        blockHeight
        historyPrice
        standardV
        gasPrice
        blockHash
        input
        receiptStatus
        gasUsed
        gasLimit
        hash
        functionInput
        size
        s
        v
        time
        r
        fees
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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
    difficulty
    uncleReward
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    historyPrice
    logsBloom
    mixHash
    nonce
    numberTxs
    extraData
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
    total
    totalDifficulty
    transactionsRoot
    preHash
    miner {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    transactions {
      data {
        nonce
        priceInUsd
        total
        cumulativeGasUsed
        functionSignature
        index
        txType
        publicKey
        blockHeight
        historyPrice
        standardV
        gasPrice
        blockHash
        input
        receiptStatus
        gasUsed
        gasLimit
        hash
        functionInput
        size
        s
        v
        time
        r
        fees
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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
    avgGasPrice
    avgTotal
    consensus
    instance
    latestHash
    latestHeight
    latestUpdateTime
    name
    blocks {
      data {
        difficulty
        uncleReward
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        historyPrice
        mixHash
        nonce
        numberTxs
        extraData
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        stateRoot
        time
        total
        totalDifficulty
        transactionsRoot
        preHash
        miner {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        transactions {
          data {
            nonce
            blockHash
            total
            cumulativeGasUsed
            functionSignature
            index
            txType
            publicKey
            blockHeight
            historyPrice
            standardV
            gasPrice
            fees
            input
            receiptStatus
            gasUsed
            gasLimit
            hash
            functionInput
            size
            s
            v
            time
            r
            priceInUsd
          }
          page {
            cursor
            next
            total
          }
        }
        uncles {
          hash
          height
          reward
          miner {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
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
      difficulty
      uncleReward
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      historyPrice
      mixHash
      nonce
      numberTxs
      extraData
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      stateRoot
      time
      total
      totalDifficulty
      transactionsRoot
      preHash
      miner {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      transactions {
        data {
          nonce
          priceInUsd
          total
          cumulativeGasUsed
          functionSignature
          index
          txType
          publicKey
          blockHeight
          historyPrice
          standardV
          gasPrice
          blockHash
          input
          receiptStatus
          gasUsed
          gasLimit
          hash
          functionInput
          size
          s
          v
          time
          r
          fees
          to {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
          from {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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

### contractTransferByHash

#### 参数列表

* **transactionHash**, **必须**, The hash of the contract transfer to return.

#### 查询串

```graphql
{
  contractTransferByHash(transactionHash: "abc") {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    blockHeight
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    gasUsed
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
      difficulty
      uncleReward
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      historyPrice
      mixHash
      nonce
      numberTxs
      extraData
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      stateRoot
      time
      total
      totalDifficulty
      transactionsRoot
      preHash
      miner {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      transactions {
        data {
          nonce
          priceInUsd
          total
          cumulativeGasUsed
          functionSignature
          index
          txType
          publicKey
          blockHeight
          historyPrice
          standardV
          gasPrice
          blockHash
          input
          receiptStatus
          gasUsed
          gasLimit
          hash
          functionInput
          size
          s
          v
          time
          r
          fees
          to {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
          from {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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

### erc20TokenBalance

#### 参数列表

* **accountAddress**, 可选, the address of the token
* **contractAddress**, 可选, The address of the ERC20 contract.
* **symbol**, 可选, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.

#### 查询串

```graphql
{
  erc20TokenBalance {
    accountAddress
    balance
    contractAddress
    decimals
    name
    symbol
    totalSupply
    website
    transfersInContract {
      data {
        blockHash
        value
        callType
        caller
        contractAddress
        error
        functionInput
        functionSignature
        gasLimit
        blockHeight
        input
        output
        receiptStatus
        subTraces
        time
        transactionHash
        transactionIndex
        gasUsed
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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

### erc20Tokens

#### 参数列表

* **address**, 可选, the address of the token
* **symbol**, 可选, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.

#### 查询串

```graphql
{
  erc20Tokens {
    data {
      contractAddress
      decimals
      name
      symbol
      totalSupply
      website
      transfersInContract {
        data {
          blockHash
          value
          callType
          caller
          contractAddress
          error
          functionInput
          functionSignature
          gasLimit
          blockHeight
          input
          output
          receiptStatus
          subTraces
          time
          transactionHash
          transactionIndex
          gasUsed
          from {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
          to {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
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
}
```

### genesisBlock

#### 参数列表

无需参数

#### 查询串

```graphql
{
  genesisBlock {
    difficulty
    uncleReward
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    historyPrice
    logsBloom
    mixHash
    nonce
    numberTxs
    extraData
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
    total
    totalDifficulty
    transactionsRoot
    preHash
    miner {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    transactions {
      data {
        nonce
        priceInUsd
        total
        cumulativeGasUsed
        functionSignature
        index
        txType
        publicKey
        blockHeight
        historyPrice
        standardV
        gasPrice
        blockHash
        input
        receiptStatus
        gasUsed
        gasLimit
        hash
        functionInput
        size
        s
        v
        time
        r
        fees
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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
      isContract
      numberTxsSent
      priceInUsd
      pubKey
      txsReceived {
        data {
          nonce
          priceInUsd
          total
          cumulativeGasUsed
          functionSignature
          index
          txType
          publicKey
          blockHeight
          historyPrice
          standardV
          gasPrice
          blockHash
          input
          receiptStatus
          gasUsed
          gasLimit
          hash
          functionInput
          size
          s
          v
          time
          r
          fees
          to {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
          from {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
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
          nonce
          priceInUsd
          total
          cumulativeGasUsed
          functionSignature
          index
          txType
          publicKey
          blockHeight
          historyPrice
          standardV
          gasPrice
          blockHash
          input
          receiptStatus
          gasUsed
          gasLimit
          hash
          functionInput
          size
          s
          v
          time
          r
          fees
          to {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
          from {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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
    nonce
    priceInUsd
    total
    cumulativeGasUsed
    functionSignature
    index
    txType
    publicKey
    blockHeight
    historyPrice
    raw
    standardV
    gasPrice
    blockHash
    input
    receiptStatus
    gasUsed
    gasLimit
    hash
    logsBloom
    functionInput
    size
    s
    v
    time
    r
    fees
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
    nonce
    priceInUsd
    total
    cumulativeGasUsed
    functionSignature
    index
    txType
    publicKey
    blockHeight
    historyPrice
    raw
    standardV
    gasPrice
    blockHash
    input
    receiptStatus
    gasUsed
    gasLimit
    hash
    logsBloom
    functionInput
    size
    s
    v
    time
    r
    fees
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
      nonce
      priceInUsd
      total
      cumulativeGasUsed
      functionSignature
      index
      txType
      publicKey
      blockHeight
      historyPrice
      standardV
      gasPrice
      blockHash
      input
      receiptStatus
      gasUsed
      gasLimit
      hash
      functionInput
      size
      s
      v
      time
      r
      fees
      to {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      from {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      parent {
        difficulty
        uncleReward
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        historyPrice
        mixHash
        nonce
        numberTxs
        extraData
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        stateRoot
        time
        total
        totalDifficulty
        transactionsRoot
        preHash
        miner {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        uncles {
          hash
          height
          reward
          miner {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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
      nonce
      priceInUsd
      total
      cumulativeGasUsed
      functionSignature
      index
      txType
      publicKey
      blockHeight
      historyPrice
      standardV
      gasPrice
      blockHash
      input
      receiptStatus
      gasUsed
      gasLimit
      hash
      functionInput
      size
      s
      v
      time
      r
      fees
      to {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      from {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      parent {
        difficulty
        uncleReward
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        historyPrice
        mixHash
        nonce
        numberTxs
        extraData
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        stateRoot
        time
        total
        totalDifficulty
        transactionsRoot
        preHash
        miner {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        uncles {
          hash
          height
          reward
          miner {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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

### transactionsByTime

#### 参数列表

* **days**, 可选, days shift from start time. Negative value is accepted. Default is 7.
* **paging**, 可选, Describes which page of data to return.
* **startTime**, **必须**, beginning time, in ISO format.

#### 查询串

```graphql
{
  transactionsByTime(startTime: "abc") {
    data {
      nonce
      priceInUsd
      total
      cumulativeGasUsed
      functionSignature
      index
      txType
      publicKey
      blockHeight
      historyPrice
      standardV
      gasPrice
      blockHash
      input
      receiptStatus
      gasUsed
      gasLimit
      hash
      functionInput
      size
      s
      v
      time
      r
      fees
      to {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      from {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      parent {
        difficulty
        uncleReward
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        historyPrice
        mixHash
        nonce
        numberTxs
        extraData
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        stateRoot
        time
        total
        totalDifficulty
        transactionsRoot
        preHash
        miner {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        uncles {
          hash
          height
          reward
          miner {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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

### transfersInContract

#### 参数列表

* **contractAddress**, 可选, The address of the contract to query.
* **from**, 可选, The address from which the token is transacted.
* **paging**, 可选, Describes which page of data to return.
* **symbol**, 可选, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.
* **to**, 可选, The address to which the token is transacted.

#### 查询串

```graphql
{
  transfersInContract {
    data {
      blockHash
      value
      callType
      caller
      contractAddress
      error
      functionInput
      functionSignature
      gasLimit
      blockHeight
      input
      output
      receiptStatus
      subTraces
      time
      transactionHash
      transactionIndex
      gasUsed
      from {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      to {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
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
      difficulty
      uncleReward
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      historyPrice
      mixHash
      nonce
      numberTxs
      extraData
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      stateRoot
      time
      total
      totalDifficulty
      transactionsRoot
      preHash
      miner {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
      }
      transactions {
        data {
          nonce
          priceInUsd
          total
          cumulativeGasUsed
          functionSignature
          index
          txType
          publicKey
          blockHeight
          historyPrice
          standardV
          gasPrice
          blockHash
          input
          receiptStatus
          gasUsed
          gasLimit
          hash
          functionInput
          size
          s
          v
          time
          r
          fees
          to {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
          from {
            address
            balance
            isContract
            numberTxsSent
            priceInUsd
            pubKey
          }
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
    nonce
    priceInUsd
    total
    cumulativeGasUsed
    functionSignature
    index
    txType
    publicKey
    blockHeight
    historyPrice
    raw
    standardV
    gasPrice
    blockHash
    input
    receiptStatus
    gasUsed
    gasLimit
    hash
    logsBloom
    functionInput
    size
    s
    v
    time
    r
    fees
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
  }
}
```

### contractExecuted

#### 参数列表

* **contractAddress**, 可选, The contract address to listen.
* **symbol**, 可选, The contract symbol, such as ABT for ArcBlock, BNB for Binance and so on.

#### 查询串

```graphql
subscription {
  contractExecuted {
    blockHash
    transactionIndex
    callType
    caller
    contractAddress
    error
    functionInput
    functionSignature
    blockHeight
    gasUsed
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    gasLimit
  }
}
```

### etherReceived

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

```graphql
subscription {
  etherReceived(address: "abc") {
    nonce
    priceInUsd
    total
    cumulativeGasUsed
    functionSignature
    index
    txType
    publicKey
    blockHeight
    historyPrice
    raw
    standardV
    gasPrice
    blockHash
    input
    receiptStatus
    gasUsed
    gasLimit
    hash
    logsBloom
    functionInput
    size
    s
    v
    time
    r
    fees
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
  }
}
```

### etherSent

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

```graphql
subscription {
  etherSent(address: "abc") {
    nonce
    priceInUsd
    total
    cumulativeGasUsed
    functionSignature
    index
    txType
    publicKey
    blockHeight
    historyPrice
    raw
    standardV
    gasPrice
    blockHash
    input
    receiptStatus
    gasUsed
    gasLimit
    hash
    logsBloom
    functionInput
    size
    s
    v
    time
    r
    fees
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
    difficulty
    uncleReward
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    historyPrice
    logsBloom
    mixHash
    nonce
    numberTxs
    extraData
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
    total
    totalDifficulty
    transactionsRoot
    preHash
    miner {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    transactions {
      data {
        nonce
        priceInUsd
        total
        cumulativeGasUsed
        functionSignature
        index
        txType
        publicKey
        blockHeight
        historyPrice
        standardV
        gasPrice
        blockHash
        input
        receiptStatus
        gasUsed
        gasLimit
        hash
        functionInput
        size
        s
        v
        time
        r
        fees
        to {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
        }
        from {
          address
          balance
          isContract
          numberTxsSent
          priceInUsd
          pubKey
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

### newContractCreated

#### 参数列表

无需参数

#### 查询串

```graphql
subscription {
  newContractCreated {
    address
    blockHeight
    contractCode
    creator
    initCode
    name
    sourceCode
    symbol
    transactionHash
    transactionIndex
  }
}
```

### tokenReceived

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

```graphql
subscription {
  tokenReceived(address: "abc") {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    blockHeight
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    gasUsed
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
  }
}
```

### tokenSent

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

```graphql
subscription {
  tokenSent(address: "abc") {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    blockHeight
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    gasUsed
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
  }
}
```

### tokenTransferred

#### 参数列表

* **contractAddress**, 可选, Must be an contract address.
* **symbol**, 可选, The contract symbol,, such as ABT for ArcBlock, BNB for Binance and so on.

#### 查询串

```graphql
subscription {
  tokenTransferred {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    blockHeight
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    gasUsed
    from {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
    }
  }
}
```


## Mutations

### sendRawTransaction

#### 参数列表

* **data**, **必须**, The signed transaction data.

#### 查询串

```graphql
mutation {
  sendRawTransaction(data: "abc")
}
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
