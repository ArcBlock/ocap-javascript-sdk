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
  * [erc20TokenBalance](#erc20tokenbalance)
  * [erc20Tokens](#erc20tokens)
  * [genesisBlock](#genesisblock)
  * [richestAccounts](#richestaccounts)
  * [transactionByHash](#transactionbyhash)
  * [transactionByIndex](#transactionbyindex)
  * [transactionsByAddress](#transactionsbyaddress)
  * [transactionsByIndex](#transactionsbyindex)
  * [transfersInContract](#transfersincontract)
  * [zeroFeesBlocks](#zerofeesblocks)
* [Subscriptions](#subscriptions)
  * [bigTransactionExecuted](#bigtransactionexecuted)
  * [contractExecuted](#contractexecuted)
  * [newBlockMined](#newblockmined)
  * [newContractCreated](#newcontractcreated)
  * [tokenReceived](#tokenreceived)
  * [tokenSent](#tokensent)
  * [tokenTransferred](#tokentransferred)
* [Mutations](#mutations)
  * [sendRawTransaction](#sendrawtransaction)


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
    numberTxsSent
    priceInUsd
    pubKey
    txsReceived {
      data {
        functionSignature
        publicKey
        gasPrice
        gasLimit
        hash
        priceInUsd
        fees
        functionInput
        s
        cumulativeGasUsed
        size
        time
        historyPrice
        standardV
        r
        gasUsed
        v
        txType
        nonce
        index
        total
        blockHeight
        input
        receiptStatus
        blockHash
        creates {
          data {
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
          page {
            cursor
            next
            total
          }
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
          extraData
          preHash
          priceInUsd
          receiptsRoot
          reward
          sealFields
          sha3Uncles
          size
          time
          total
          totalDifficulty
          transactionsRoot
          numberTxs
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
          }
        }
        traces {
          data {
            actionAddress
            actionBalance
            actionCallType
            actionFrom
            actionFunctionInput
            actionFunctionSignature
            actionGasLimit
            actionInit
            actionInput
            actionMiner
            actionRefundAddress
            actionRewardType
            actionTo
            actionValue
            blockHash
            blockHeight
            error
            receiptStatus
            resultAddress
            resultCode
            resultGasUsed
            resultOutput
            subTraces
            time
            transactionHash
            transactionIndex
            type
          }
          page {
            cursor
            next
            total
          }
        }
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
        functionSignature
        publicKey
        gasPrice
        gasLimit
        hash
        priceInUsd
        fees
        functionInput
        s
        cumulativeGasUsed
        size
        time
        historyPrice
        standardV
        r
        gasUsed
        v
        txType
        nonce
        index
        total
        blockHeight
        input
        receiptStatus
        blockHash
        creates {
          data {
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
          page {
            cursor
            next
            total
          }
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
          extraData
          preHash
          priceInUsd
          receiptsRoot
          reward
          sealFields
          sha3Uncles
          size
          time
          total
          totalDifficulty
          transactionsRoot
          numberTxs
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
          }
        }
        traces {
          data {
            actionAddress
            actionBalance
            actionCallType
            actionFrom
            actionFunctionInput
            actionFunctionSignature
            actionGasLimit
            actionInit
            actionInput
            actionMiner
            actionRefundAddress
            actionRewardType
            actionTo
            actionValue
            blockHash
            blockHeight
            error
            receiptStatus
            resultAddress
            resultCode
            resultGasUsed
            resultOutput
            subTraces
            time
            transactionHash
            transactionIndex
            type
          }
          page {
            cursor
            next
            total
          }
        }
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

#### Arguments

* **hash**, **required**, The hash of the block.

#### Raw Query

```graphql
{
  blockByHash(hash: "abc") {
    difficulty
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
    extraData
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    time
    total
    totalDifficulty
    transactionsRoot
    numberTxs
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
        functionSignature
        publicKey
        gasPrice
        gasLimit
        hash
        priceInUsd
        fees
        functionInput
        s
        cumulativeGasUsed
        size
        time
        historyPrice
        standardV
        r
        gasUsed
        v
        txType
        nonce
        index
        total
        blockHeight
        input
        receiptStatus
        blockHash
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

#### Arguments

* **height**, **required**, The number of blocks ahead of this block.

#### Raw Query

```graphql
{
  blockByHeight(height: 123) {
    difficulty
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
    extraData
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    time
    total
    totalDifficulty
    transactionsRoot
    numberTxs
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
        functionSignature
        publicKey
        gasPrice
        gasLimit
        hash
        priceInUsd
        fees
        functionInput
        s
        cumulativeGasUsed
        size
        time
        historyPrice
        standardV
        r
        gasUsed
        v
        txType
        nonce
        index
        total
        blockHeight
        input
        receiptStatus
        blockHash
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
        extraData
        preHash
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        time
        total
        totalDifficulty
        transactionsRoot
        numberTxs
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
            functionSignature
            standardV
            gasPrice
            gasLimit
            hash
            priceInUsd
            fees
            functionInput
            s
            cumulativeGasUsed
            size
            time
            historyPrice
            blockHash
            r
            gasUsed
            v
            txType
            nonce
            index
            total
            blockHeight
            input
            receiptStatus
            publicKey
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
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      historyPrice
      mixHash
      nonce
      extraData
      preHash
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      time
      total
      totalDifficulty
      transactionsRoot
      numberTxs
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
          functionSignature
          publicKey
          gasPrice
          gasLimit
          hash
          priceInUsd
          fees
          functionInput
          s
          cumulativeGasUsed
          size
          time
          historyPrice
          standardV
          r
          gasUsed
          v
          txType
          nonce
          index
          total
          blockHeight
          input
          receiptStatus
          blockHash
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
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      historyPrice
      mixHash
      nonce
      extraData
      preHash
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      time
      total
      totalDifficulty
      transactionsRoot
      numberTxs
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
          functionSignature
          publicKey
          gasPrice
          gasLimit
          hash
          priceInUsd
          fees
          functionInput
          s
          cumulativeGasUsed
          size
          time
          historyPrice
          standardV
          r
          gasUsed
          v
          txType
          nonce
          index
          total
          blockHeight
          input
          receiptStatus
          blockHash
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

#### Arguments

* **accountAddress**, optional, the address of the token
* **contractAddress**, optional, The address of the ERC20 contract.
* **symbol**, optional, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.

#### Raw Query

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
  }
}
```

### erc20Tokens

#### Arguments

* **address**, optional, the address of the token
* **symbol**, optional, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.

#### Raw Query

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
    extraData
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    time
    total
    totalDifficulty
    transactionsRoot
    numberTxs
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
        functionSignature
        publicKey
        gasPrice
        gasLimit
        hash
        priceInUsd
        fees
        functionInput
        s
        cumulativeGasUsed
        size
        time
        historyPrice
        standardV
        r
        gasUsed
        v
        txType
        nonce
        index
        total
        blockHeight
        input
        receiptStatus
        blockHash
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
      numberTxsSent
      priceInUsd
      pubKey
      txsReceived {
        data {
          functionSignature
          publicKey
          gasPrice
          gasLimit
          hash
          priceInUsd
          fees
          functionInput
          s
          cumulativeGasUsed
          size
          time
          historyPrice
          standardV
          r
          gasUsed
          v
          txType
          nonce
          index
          total
          blockHeight
          input
          receiptStatus
          blockHash
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
          functionSignature
          publicKey
          gasPrice
          gasLimit
          hash
          priceInUsd
          fees
          functionInput
          s
          cumulativeGasUsed
          size
          time
          historyPrice
          standardV
          r
          gasUsed
          v
          txType
          nonce
          index
          total
          blockHeight
          input
          receiptStatus
          blockHash
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

#### Arguments

* **hash**, **required**, The hash of the transaction to return.

#### Raw Query

```graphql
{
  transactionByHash(hash: "abc") {
    publicKey
    gasPrice
    gasLimit
    hash
    priceInUsd
    fees
    s
    cumulativeGasUsed
    size
    time
    historyPrice
    standardV
    r
    logsBloom
    raw
    gasUsed
    v
    txType
    nonce
    index
    total
    blockHeight
    input
    blockHash
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

#### Arguments

* **blockHash**, optional, The hash of the block containing the target transaction.
* **blockHeight**, optional, The height of the block containing the target transaction.
* **index**, **required**, The index of the transaction insdie the block.

#### Raw Query

```graphql
{
  transactionByIndex(index: 123) {
    publicKey
    gasPrice
    gasLimit
    hash
    priceInUsd
    fees
    s
    cumulativeGasUsed
    size
    time
    historyPrice
    standardV
    r
    logsBloom
    raw
    gasUsed
    v
    txType
    nonce
    index
    total
    blockHeight
    input
    blockHash
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

#### Arguments

* **paging**, optional, Describes which page of data to return.
* **receiver**, optional, Specifies the receiver's address.
* **sender**, optional, Specifies the sender's address.

#### Raw Query

```graphql
{
  transactionsByAddress {
    data {
      publicKey
      gasPrice
      gasLimit
      hash
      priceInUsd
      fees
      s
      cumulativeGasUsed
      size
      time
      historyPrice
      standardV
      r
      gasUsed
      v
      txType
      nonce
      index
      total
      blockHeight
      input
      blockHash
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
        extraData
        preHash
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        time
        total
        totalDifficulty
        transactionsRoot
        numberTxs
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
      publicKey
      gasPrice
      gasLimit
      hash
      priceInUsd
      fees
      s
      cumulativeGasUsed
      size
      time
      historyPrice
      standardV
      r
      gasUsed
      v
      txType
      nonce
      index
      total
      blockHeight
      input
      blockHash
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
        extraData
        preHash
        priceInUsd
        receiptsRoot
        reward
        sealFields
        sha3Uncles
        size
        time
        total
        totalDifficulty
        transactionsRoot
        numberTxs
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
```

### transfersInContract

#### Arguments

* **contractAddress**, optional, The address of the contract to query.
* **from**, optional, The address from which the token is transacted.
* **paging**, optional, Describes which page of data to return.
* **symbol**, optional, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.
* **to**, optional, The address to which the token is transacted.

#### Raw Query

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
      gasLimit
      blockHeight
      input
      output
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
      extraDataPlain
      fees
      gasLimit
      gasUsed
      hash
      height
      historyPrice
      mixHash
      nonce
      extraData
      preHash
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      time
      total
      totalDifficulty
      transactionsRoot
      numberTxs
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
          functionSignature
          publicKey
          gasPrice
          gasLimit
          hash
          priceInUsd
          fees
          functionInput
          s
          cumulativeGasUsed
          size
          time
          historyPrice
          standardV
          r
          gasUsed
          v
          txType
          nonce
          index
          total
          blockHeight
          input
          receiptStatus
          blockHash
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

#### Arguments

No arguments

#### Raw Query

```graphql
subscription {
  bigTransactionExecuted {
    publicKey
    gasPrice
    gasLimit
    hash
    priceInUsd
    fees
    s
    cumulativeGasUsed
    size
    time
    historyPrice
    standardV
    r
    logsBloom
    raw
    gasUsed
    v
    txType
    nonce
    index
    total
    blockHeight
    input
    blockHash
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

#### Arguments

* **contractAddress**, optional, The contract address to listen.
* **symbol**, optional, The contract symbol, such as ABT for ArcBlock, BNB for Binance and so on.

#### Raw Query

```graphql
subscription {
  contractExecuted {
    blockHash
    transactionIndex
    callType
    caller
    contractAddress
    error
    blockHeight
    gasUsed
    input
    output
    subTraces
    time
    transactionHash
    gasLimit
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
    extraData
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    time
    total
    totalDifficulty
    transactionsRoot
    numberTxs
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
        functionSignature
        publicKey
        gasPrice
        gasLimit
        hash
        priceInUsd
        fees
        functionInput
        s
        cumulativeGasUsed
        size
        time
        historyPrice
        standardV
        r
        gasUsed
        v
        txType
        nonce
        index
        total
        blockHeight
        input
        receiptStatus
        blockHash
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

#### Arguments

No arguments

#### Raw Query

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

#### Arguments

* **address**, **required**, must be a normal wallet address.

#### Raw Query

```graphql
subscription {
  tokenReceived(address: "abc") {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    gasLimit
    blockHeight
    input
    output
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

#### Arguments

* **address**, **required**, must be a normal wallet address.

#### Raw Query

```graphql
subscription {
  tokenSent(address: "abc") {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    gasLimit
    blockHeight
    input
    output
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

#### Arguments

* **contractAddress**, optional, Must be an contract address.
* **symbol**, optional, The contract symbol,, such as ABT for ArcBlock, BNB for Binance and so on.

#### Raw Query

```graphql
subscription {
  tokenTransferred {
    blockHash
    value
    callType
    caller
    contractAddress
    error
    gasLimit
    blockHeight
    input
    output
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

#### Arguments

* **data**, **required**, The signed transaction data.

#### Raw Query

```graphql
mutation {
  sendRawTransaction(data: "abc")
}
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
