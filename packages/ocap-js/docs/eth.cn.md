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
  * [cryptoHistoryPrice](#cryptohistoryprice)
  * [emptyBlocks](#emptyblocks)
  * [erc20Tokens](#erc20tokens)
  * [genesisBlock](#genesisblock)
  * [richestAccounts](#richestaccounts)
  * [transactionByHash](#transactionbyhash)
  * [transactionByIndex](#transactionbyindex)
  * [transactionsByIndex](#transactionsbyindex)
  * [transactionsByToken](#transactionsbytoken)
  * [zeroFeesBlocks](#zerofeesblocks)
* [Subscriptions](#subscriptions)
  * [bigTransactionExecuted](#bigtransactionexecuted)
  * [contractExecuted](#contractexecuted)
  * [newBlockMined](#newblockmined)
  * [newContractCreated](#newcontractcreated)
  * [tokenReceived](#tokenreceived)
  * [tokenSent](#tokensent)
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
    isContract
    numberTxsReceived
    numberTxsSent
    priceInUsd
    pubKey
    totalAmountReceived
    totalAmountSent
    txsReceived {
      data {
        gasLimit
        logs
        gasUsed
        nonce
        total
        blockHash
        index
        txType
        publicKey
        contractFrom
        root
        logsBloom
        status
        gasPrice
        raw
        fees
        contractAddress
        contractTo
        input
        r
        blockHeight
        inputPlain
        standardV
        hash
        creates
        size
        s
        cumulativeGasUsed
        priceInUsd
        time
        v
        contractValue
        historyPrice
        to {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        parent {
          difficulty
          extraData
          extraDataPlain
          fees
          gasLimit
          gasUsed
          hash
          height
          logsBloom
          mixHash
          nonce
          numberTxs
          preHash
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
          miner {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
        }
        from {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
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
        gasLimit
        logs
        gasUsed
        nonce
        total
        blockHash
        index
        txType
        publicKey
        contractFrom
        root
        logsBloom
        status
        gasPrice
        raw
        fees
        contractAddress
        contractTo
        input
        r
        blockHeight
        inputPlain
        standardV
        hash
        creates
        size
        s
        cumulativeGasUsed
        priceInUsd
        time
        v
        contractValue
        historyPrice
        to {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        parent {
          difficulty
          extraData
          extraDataPlain
          fees
          gasLimit
          gasUsed
          hash
          height
          logsBloom
          mixHash
          nonce
          numberTxs
          preHash
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
          miner {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
        }
        from {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
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
    extraData
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    logsBloom
    mixHash
    nonce
    numberTxs
    preHash
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
    miner {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        gasLimit
        logs
        gasUsed
        nonce
        total
        blockHash
        index
        txType
        publicKey
        contractFrom
        root
        logsBloom
        status
        gasPrice
        raw
        fees
        contractAddress
        contractTo
        input
        r
        blockHeight
        inputPlain
        standardV
        hash
        creates
        size
        s
        cumulativeGasUsed
        priceInUsd
        time
        v
        contractValue
        historyPrice
        to {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        from {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
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
    extraData
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    logsBloom
    mixHash
    nonce
    numberTxs
    preHash
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
    miner {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        gasLimit
        logs
        gasUsed
        nonce
        total
        blockHash
        index
        txType
        publicKey
        contractFrom
        root
        logsBloom
        status
        gasPrice
        raw
        fees
        contractAddress
        contractTo
        input
        r
        blockHeight
        inputPlain
        standardV
        hash
        creates
        size
        s
        cumulativeGasUsed
        priceInUsd
        time
        v
        contractValue
        historyPrice
        to {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        from {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
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
        extraData
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        logsBloom
        mixHash
        nonce
        numberTxs
        preHash
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
        miner {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        transactions {
          data {
            gasLimit
            logs
            gasUsed
            nonce
            total
            blockHash
            index
            txType
            publicKey
            contractFrom
            root
            logsBloom
            status
            gasPrice
            raw
            fees
            contractAddress
            contractTo
            input
            r
            blockHeight
            inputPlain
            standardV
            hash
            creates
            size
            s
            cumulativeGasUsed
            priceInUsd
            time
            v
            contractValue
            historyPrice
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
      difficulty
      extraData
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      logsBloom
      mixHash
      nonce
      numberTxs
      preHash
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
      miner {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      transactions {
        data {
          gasLimit
          logs
          gasUsed
          nonce
          total
          blockHash
          index
          txType
          publicKey
          contractFrom
          root
          logsBloom
          status
          gasPrice
          raw
          fees
          contractAddress
          contractTo
          input
          r
          blockHeight
          inputPlain
          standardV
          hash
          creates
          size
          s
          cumulativeGasUsed
          priceInUsd
          time
          v
          contractValue
          historyPrice
          to {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
          from {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
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
      extraData
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      logsBloom
      mixHash
      nonce
      numberTxs
      preHash
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
      miner {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      transactions {
        data {
          gasLimit
          logs
          gasUsed
          nonce
          total
          blockHash
          index
          txType
          publicKey
          contractFrom
          root
          logsBloom
          status
          gasPrice
          raw
          fees
          contractAddress
          contractTo
          input
          r
          blockHeight
          inputPlain
          standardV
          hash
          creates
          size
          s
          cumulativeGasUsed
          priceInUsd
          time
          v
          contractValue
          historyPrice
          to {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
          from {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
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

### erc20Tokens

#### 参数列表

* **address**, 可选, the address of the token
* **token**, 可选, the name of the token

#### 查询串

```graphql
{
  erc20Tokens {
    data {
      address
      name
      symbol
      totalSupply
      website
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
    extraData
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    logsBloom
    mixHash
    nonce
    numberTxs
    preHash
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
    miner {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        gasLimit
        logs
        gasUsed
        nonce
        total
        blockHash
        index
        txType
        publicKey
        contractFrom
        root
        logsBloom
        status
        gasPrice
        raw
        fees
        contractAddress
        contractTo
        input
        r
        blockHeight
        inputPlain
        standardV
        hash
        creates
        size
        s
        cumulativeGasUsed
        priceInUsd
        time
        v
        contractValue
        historyPrice
        to {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        from {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
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
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
      txsReceived {
        data {
          gasLimit
          logs
          gasUsed
          nonce
          total
          blockHash
          index
          txType
          publicKey
          contractFrom
          root
          logsBloom
          status
          gasPrice
          raw
          fees
          contractAddress
          contractTo
          input
          r
          blockHeight
          inputPlain
          standardV
          hash
          creates
          size
          s
          cumulativeGasUsed
          priceInUsd
          time
          v
          contractValue
          historyPrice
          to {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
          from {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
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
          gasLimit
          logs
          gasUsed
          nonce
          total
          blockHash
          index
          txType
          publicKey
          contractFrom
          root
          logsBloom
          status
          gasPrice
          raw
          fees
          contractAddress
          contractTo
          input
          r
          blockHeight
          inputPlain
          standardV
          hash
          creates
          size
          s
          cumulativeGasUsed
          priceInUsd
          time
          v
          contractValue
          historyPrice
          to {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
          from {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
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
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
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
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
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
      gasLimit
      logs
      gasUsed
      nonce
      total
      blockHash
      index
      txType
      publicKey
      contractFrom
      root
      logsBloom
      status
      gasPrice
      raw
      fees
      contractAddress
      contractTo
      input
      r
      blockHeight
      inputPlain
      standardV
      hash
      creates
      size
      s
      cumulativeGasUsed
      priceInUsd
      time
      v
      contractValue
      historyPrice
      to {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      parent {
        difficulty
        extraData
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        logsBloom
        mixHash
        nonce
        numberTxs
        preHash
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
        miner {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
      }
      from {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
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

### transactionsByToken

#### 参数列表

* **from**, 可选, from address
* **paging**, 可选, Describes which page of data to return.
* **to**, 可选, to address
* **token**, **必须**, The token name of the transaction to return.

#### 查询串

```graphql
{
  transactionsByToken(token: "abc") {
    data {
      gasLimit
      logs
      gasUsed
      nonce
      total
      blockHash
      index
      txType
      publicKey
      contractFrom
      root
      logsBloom
      status
      gasPrice
      raw
      fees
      contractAddress
      contractTo
      input
      r
      blockHeight
      inputPlain
      standardV
      hash
      creates
      size
      s
      cumulativeGasUsed
      priceInUsd
      time
      v
      contractValue
      historyPrice
      to {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      parent {
        difficulty
        extraData
        extraDataPlain
        fees
        gasLimit
        gasUsed
        hash
        height
        logsBloom
        mixHash
        nonce
        numberTxs
        preHash
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
        miner {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
      }
      from {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
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
      extraData
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      logsBloom
      mixHash
      nonce
      numberTxs
      preHash
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
      miner {
        address
        balance
        isContract
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
      }
      transactions {
        data {
          gasLimit
          logs
          gasUsed
          nonce
          total
          blockHash
          index
          txType
          publicKey
          contractFrom
          root
          logsBloom
          status
          gasPrice
          raw
          fees
          contractAddress
          contractTo
          input
          r
          blockHeight
          inputPlain
          standardV
          hash
          creates
          size
          s
          cumulativeGasUsed
          priceInUsd
          time
          v
          contractValue
          historyPrice
          to {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
          }
          from {
            address
            balance
            isContract
            numberTxsReceived
            numberTxsSent
            priceInUsd
            pubKey
            totalAmountReceived
            totalAmountSent
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

* **token**, **必须**, could be "normal", "abt" or a token address.

#### 查询串

```graphql
subscription {
  bigTransactionExecuted(token: "abc") {
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
  }
}
```

### contractExecuted

#### 参数列表

* **address**, **必须**, The contract address to listen.

#### 查询串

```graphql
subscription {
  contractExecuted(address: "abc") {
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
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
    extraData
    extraDataPlain
    fees
    gasLimit
    gasUsed
    hash
    height
    logsBloom
    mixHash
    nonce
    numberTxs
    preHash
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
    miner {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    transactions {
      data {
        gasLimit
        logs
        gasUsed
        nonce
        total
        blockHash
        index
        txType
        publicKey
        contractFrom
        root
        logsBloom
        status
        gasPrice
        raw
        fees
        contractAddress
        contractTo
        input
        r
        blockHeight
        inputPlain
        standardV
        hash
        creates
        size
        s
        cumulativeGasUsed
        priceInUsd
        time
        v
        contractValue
        historyPrice
        to {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
        }
        from {
          address
          balance
          isContract
          numberTxsReceived
          numberTxsSent
          priceInUsd
          pubKey
          totalAmountReceived
          totalAmountSent
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
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
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
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
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
    gasLimit
    logs
    gasUsed
    nonce
    total
    blockHash
    index
    txType
    publicKey
    contractFrom
    root
    logsBloom
    status
    gasPrice
    raw
    fees
    contractAddress
    contractTo
    input
    r
    blockHeight
    inputPlain
    standardV
    hash
    creates
    size
    s
    cumulativeGasUsed
    priceInUsd
    time
    v
    contractValue
    historyPrice
    to {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
    }
    from {
      address
      balance
      isContract
      numberTxsReceived
      numberTxsSent
      priceInUsd
      pubKey
      totalAmountReceived
      totalAmountSent
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
