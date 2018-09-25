# ETH API List

> 中文版文档请猛击 [eth.cn.md](./eth.cn.md)
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

#### Arguments

* **address**, **required**, The address generated based on the public key of the account.

#### Raw Query

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

#### Arguments

* **hash**, **required**, The hash of the block.

#### Raw Query

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

#### Arguments

* **height**, **required**, The number of blocks ahead of this block.

#### Raw Query

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

#### Arguments

* **instance**, **required**, The name of the blockchain instance.

#### Raw Query

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

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Raw Query

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

#### Arguments

* **address**, optional, the address of the token
* **token**, optional, the name of the token

#### Raw Query

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

#### Arguments

No arguments

#### Raw Query

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

#### Arguments

* **paging**, optional, Describes which page of data to return.

#### Raw Query

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

#### Arguments

* **hash**, **required**, The hash of the transaction to return.

#### Raw Query

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

#### Arguments

* **blockHash**, optional, The hash of the block containing the target transaction.
* **blockHeight**, optional, The height of the block containing the target transaction.
* **index**, **required**, The index of the transaction insdie the block.

#### Raw Query

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

#### Arguments

* **from**, optional, from address
* **paging**, optional, Describes which page of data to return.
* **to**, optional, to address
* **token**, **required**, The token name of the transaction to return.

#### Raw Query

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

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Raw Query

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

#### Arguments

* **token**, **required**, could be "normal", "abt" or a token address.

#### Raw Query

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

#### Arguments

* **address**, **required**, The contract address to listen.

#### Raw Query

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

#### Arguments

No arguments

#### Raw Query

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

#### Arguments

No arguments

#### Raw Query

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

#### Arguments

* **address**, **required**, must be a normal wallet address.

#### Raw Query

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

#### Arguments

* **address**, **required**, must be a normal wallet address.

#### Raw Query

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
