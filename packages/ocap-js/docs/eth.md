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
  * [contractTransferByHash](#contracttransferbyhash)
  * [cryptoHistoryPrice](#cryptohistoryprice)
  * [emptyBlocks](#emptyblocks)
  * [erc20TokenBalance](#erc20tokenbalance)
  * [erc20Tokens](#erc20tokens)
  * [erc20TokensByAddress](#erc20tokensbyaddress)
  * [etherTransfersByAddress](#ethertransfersbyaddress)
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
        blockHash
        blockHeight
        cumulativeGasUsed
        fees
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        hash
        historyPrice
        index
        input
        nonce
        priceInUsd
        publicKey
        r
        receiptStatus
        s
        size
        standardV
        time
        total
        txType
        v
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
    txsSent {
      data {
        blockHash
        blockHeight
        cumulativeGasUsed
        fees
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        hash
        historyPrice
        index
        input
        nonce
        priceInUsd
        publicKey
        r
        receiptStatus
        s
        size
        standardV
        time
        total
        txType
        v
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
    historyPrice
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
    uncleReward
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
        blockHash
        blockHeight
        cumulativeGasUsed
        fees
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        hash
        historyPrice
        index
        input
        nonce
        priceInUsd
        publicKey
        r
        receiptStatus
        s
        size
        standardV
        time
        total
        txType
        v
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
    historyPrice
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
    uncleReward
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
        blockHash
        blockHeight
        cumulativeGasUsed
        fees
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        hash
        historyPrice
        index
        input
        nonce
        priceInUsd
        publicKey
        r
        receiptStatus
        s
        size
        standardV
        time
        total
        txType
        v
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
        historyPrice
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
        uncleReward
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
            blockHash
            blockHeight
            cumulativeGasUsed
            fees
            functionInput
            functionSignature
            gasLimit
            gasPrice
            gasUsed
            hash
            historyPrice
            index
            input
            nonce
            priceInUsd
            publicKey
            r
            receiptStatus
            s
            size
            standardV
            time
            total
            txType
            v
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
      extraData
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
      uncleReward
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
          blockHash
          blockHeight
          cumulativeGasUsed
          fees
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          hash
          historyPrice
          index
          input
          nonce
          priceInUsd
          publicKey
          r
          receiptStatus
          s
          size
          standardV
          time
          total
          txType
          v
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
    page {
      cursor
      next
      total
    }
  }
}
```

### contractTransferByHash

#### Arguments

* **transactionHash**, **required**, The hash of the contract transfer to return.

#### Raw Query

```graphql
{
  contractTransferByHash(transactionHash: "abc") {
    blockHash
    blockHeight
    caller
    callType
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    value
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

#### Arguments

* **endDate**, **required**, the end_date of the interval
* **paging**, optional, Describes which page of data to return.
* **startDate**, **required**, the start_date of the interval
* **token**, **required**, the name of the token

#### Raw Query

```graphql
{
  cryptoHistoryPrice(endDate: "2018-12-19T07:23:59.873Z", startDate: "2018-12-19T07:23:59.873Z", token: "abc") {
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
      historyPrice
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
      uncleReward
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
          blockHash
          blockHeight
          cumulativeGasUsed
          fees
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          hash
          historyPrice
          index
          input
          nonce
          priceInUsd
          publicKey
          r
          receiptStatus
          s
          size
          standardV
          time
          total
          txType
          v
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
    priceInUsd
    symbol
    totalSupply
    website
    transfersInContract {
      data {
        blockHash
        blockHeight
        caller
        callType
        contractAddress
        error
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        input
        output
        receiptStatus
        subTraces
        time
        transactionHash
        transactionIndex
        value
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
      priceInUsd
      symbol
      totalSupply
      website
      transfersInContract {
        data {
          blockHash
          blockHeight
          caller
          callType
          contractAddress
          error
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          input
          output
          receiptStatus
          subTraces
          time
          transactionHash
          transactionIndex
          value
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

### erc20TokensByAddress

#### Arguments

* **accountAddress**, **required**, the account address

#### Raw Query

```graphql
{
  erc20TokensByAddress(accountAddress: "abc") {
    data {
      contractAddress
      decimals
      name
      priceInUsd
      symbol
      totalSupply
      website
      transfersInContract {
        data {
          blockHash
          blockHeight
          caller
          callType
          contractAddress
          error
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          input
          output
          receiptStatus
          subTraces
          time
          transactionHash
          transactionIndex
          value
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

### etherTransfersByAddress

#### Arguments

* **paging**, optional, Describes which page of data to return.
* **receiver**, optional, Specifies the receiver's address.
* **sender**, optional, Specifies the sender's address.

#### Raw Query

```graphql
{
  etherTransfersByAddress {
    data {
      blockHash
      blockHeight
      cumulativeGasUsed
      fees
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      hash
      historyPrice
      index
      input
      nonce
      priceInUsd
      publicKey
      r
      receiptStatus
      s
      size
      standardV
      time
      total
      txType
      v
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
        extraData
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
        uncleReward
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
    difficulty
    extraData
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
    uncleReward
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
        blockHash
        blockHeight
        cumulativeGasUsed
        fees
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        hash
        historyPrice
        index
        input
        nonce
        priceInUsd
        publicKey
        r
        receiptStatus
        s
        size
        standardV
        time
        total
        txType
        v
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
          blockHash
          blockHeight
          cumulativeGasUsed
          fees
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          hash
          historyPrice
          index
          input
          nonce
          priceInUsd
          publicKey
          r
          receiptStatus
          s
          size
          standardV
          time
          total
          txType
          v
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
      txsSent {
        data {
          blockHash
          blockHeight
          cumulativeGasUsed
          fees
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          hash
          historyPrice
          index
          input
          nonce
          priceInUsd
          publicKey
          r
          receiptStatus
          s
          size
          standardV
          time
          total
          txType
          v
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
    cumulativeGasUsed
    fees
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    hash
    historyPrice
    index
    input
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    receiptStatus
    s
    size
    standardV
    time
    total
    txType
    v
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
    cumulativeGasUsed
    fees
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    hash
    historyPrice
    index
    input
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    receiptStatus
    s
    size
    standardV
    time
    total
    txType
    v
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
      cumulativeGasUsed
      fees
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      hash
      historyPrice
      index
      input
      nonce
      priceInUsd
      publicKey
      r
      receiptStatus
      s
      size
      standardV
      time
      total
      txType
      v
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
        extraData
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
        uncleReward
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
      cumulativeGasUsed
      fees
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      hash
      historyPrice
      index
      input
      nonce
      priceInUsd
      publicKey
      r
      receiptStatus
      s
      size
      standardV
      time
      total
      txType
      v
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
        extraData
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
        uncleReward
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

#### Arguments

* **days**, optional, days shift from start time. Negative value is accepted. Default is 7.
* **paging**, optional, Describes which page of data to return.
* **startTime**, **required**, beginning time, in ISO format.

#### Raw Query

```graphql
{
  transactionsByTime(startTime: "abc") {
    data {
      blockHash
      blockHeight
      cumulativeGasUsed
      fees
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      hash
      historyPrice
      index
      input
      nonce
      priceInUsd
      publicKey
      r
      receiptStatus
      s
      size
      standardV
      time
      total
      txType
      v
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
        extraData
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
        uncleReward
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
      blockHeight
      caller
      callType
      contractAddress
      error
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      input
      output
      receiptStatus
      subTraces
      time
      transactionHash
      transactionIndex
      value
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
      extraData
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
      uncleReward
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
          blockHash
          blockHeight
          cumulativeGasUsed
          fees
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          hash
          historyPrice
          index
          input
          nonce
          priceInUsd
          publicKey
          r
          receiptStatus
          s
          size
          standardV
          time
          total
          txType
          v
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
    cumulativeGasUsed
    fees
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    hash
    historyPrice
    index
    input
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    receiptStatus
    s
    size
    standardV
    time
    total
    txType
    v
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

### contractExecuted

#### Arguments

* **contractAddress**, optional, The contract address to listen.
* **symbol**, optional, The contract symbol, such as ABT for ArcBlock, BNB for Binance and so on.

#### Raw Query

```graphql
subscription {
  contractExecuted {
    blockHash
    blockHeight
    caller
    callType
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
  }
}
```

### etherReceived

#### Arguments

* **address**, **required**, must be a normal wallet address.

#### Raw Query

```graphql
subscription {
  etherReceived(address: "abc") {
    blockHash
    blockHeight
    cumulativeGasUsed
    fees
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    hash
    historyPrice
    index
    input
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    receiptStatus
    s
    size
    standardV
    time
    total
    txType
    v
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

### etherSent

#### Arguments

* **address**, **required**, must be a normal wallet address.

#### Raw Query

```graphql
subscription {
  etherSent(address: "abc") {
    blockHash
    blockHeight
    cumulativeGasUsed
    fees
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    hash
    historyPrice
    index
    input
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    receiptStatus
    s
    size
    standardV
    time
    total
    txType
    v
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
    historyPrice
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
    uncleReward
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
        blockHash
        blockHeight
        cumulativeGasUsed
        fees
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        hash
        historyPrice
        index
        input
        nonce
        priceInUsd
        publicKey
        r
        receiptStatus
        s
        size
        standardV
        time
        total
        txType
        v
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
    blockHeight
    caller
    callType
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    value
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
    blockHeight
    caller
    callType
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    value
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
    blockHeight
    caller
    callType
    contractAddress
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    input
    output
    receiptStatus
    subTraces
    time
    transactionHash
    transactionIndex
    value
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
