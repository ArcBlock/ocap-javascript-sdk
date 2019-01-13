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
  * [contractTransferByHash](#contracttransferbyhash)
  * [cryptoHistoryPrice](#cryptohistoryprice)
  * [emptyBlocks](#emptyblocks)
  * [erc20TokenBalance](#erc20tokenbalance)
  * [erc20Tokens](#erc20tokens)
  * [erc20TokensByAddress](#erc20tokensbyaddress)
  * [etherTransfersByAddress](#ethertransfersbyaddress)
  * [genesisBlock](#genesisblock)
  * [listBlocks](#listblocks)
  * [listContractTransfers](#listcontracttransfers)
  * [listTransactions](#listtransactions)
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
  * [etherReceived](#etherreceived)
  * [etherSent](#ethersent)
  * [newBlockMined](#newblockmined)
  * [newContractCreated](#newcontractcreated)
  * [tokenReceived](#tokenreceived)
  * [tokenSent](#tokensent)
  * [tokenTransferred](#tokentransferred)
* [Mutations](#mutations)
  * [sendRawTransaction](#sendrawtransaction)
  * [sendTransaction](#sendtransaction)


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

### contractTransferByHash

#### 参数列表

* **traceAddress**, 可选, The position graph of how traces were called.
* **transactionHash**, **必须**, The hash of the contract transfer to return.

#### 查询串

```graphql
{
  contractTransferByHash(transactionHash: "abc") {
    blockHash
    blockHeight
    caller
    callType
    contractAddress
    erc20HistoryPrice
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    historyPrice
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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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

### cryptoHistoryPrice

#### 参数列表

* **endDate**, **必须**, the end_date of the interval
* **paging**, 可选, Describes which page of data to return.
* **startDate**, **必须**, the start_date of the interval
* **token**, **必须**, the name of the token

#### 查询串

```graphql
{
  cryptoHistoryPrice(endDate: "2019-01-12T23:57:51.038Z", startDate: "2019-01-12T23:57:51.038Z", token: "abc") {
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

* **paging**, 可选, Describes which page of data to return.
* **timeFilter**, 可选, Filters the records by block height or time.

#### 查询串

```graphql
{
  emptyBlocks {
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
    priceInUsd
    symbol
    totalSupply
    website
    transfers {
      data {
        blockHash
        blockHeight
        caller
        callType
        contractAddress
        erc20HistoryPrice
        error
        functionInput
        functionSignature
        gasLimit
        gasPrice
        gasUsed
        historyPrice
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
      priceInUsd
      symbol
      totalSupply
      website
      transfers {
        data {
          blockHash
          blockHeight
          caller
          callType
          contractAddress
          erc20HistoryPrice
          error
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          historyPrice
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

#### 参数列表

* **accountAddress**, **必须**, the account address

#### 查询串

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
      transfers {
        data {
          blockHash
          blockHeight
          caller
          callType
          contractAddress
          erc20HistoryPrice
          error
          functionInput
          functionSignature
          gasLimit
          gasPrice
          gasUsed
          historyPrice
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

#### 参数列表

* **paging**, 可选, Describes which page of data to return.
* **receiver**, 可选, Specifies the receiver's address.
* **sender**, 可选, Specifies the sender's address.

#### 查询串

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

### listBlocks

#### 参数列表

* **paging**, 可选, Describes which page of data to return.
* **timeFilter**, 可选, Filters the records by block height or time.

#### 查询串

```graphql
{
  listBlocks {
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

### listContractTransfers

#### 参数列表

* **addressFilter**, 可选, Filters the transfer records by sender's and/or receiver's addresses.
* **contractAddress**, 可选, The address of the contract to query.
* **paging**, 可选, Describes which page of data to return.
* **symbol**, 可选, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.
* **timeFilter**, 可选, Filters the records by block height or time.
* **transactionHash**, 可选, The hash of the transaction.

#### 查询串

```graphql
{
  listContractTransfers {
    data {
      blockHash
      blockHeight
      caller
      callType
      contractAddress
      erc20HistoryPrice
      error
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      historyPrice
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
      }
      to {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
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

### listTransactions

#### 参数列表

* **addressFilter**, 可选, Filters the transaction records by sender's and/or receiver's addresses.
* **etherOnly**, 可选, If ture, then only the transactions in which there are Ether transacted will be return, otherwise all transactions will be returned.
* **paging**, 可选, Describes which page of data to return.
* **timeFilter**, 可选, Filters the records by block height or time.

#### 查询串

```graphql
{
  listTransactions {
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

### transactionByHash

#### 参数列表

* **hash**, **必须**, The hash of the transaction to return.

#### 查询串

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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
* **symbol**, 可选, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.
* **to**, 可选, The address to which the token is transacted.

#### 查询串

```graphql
{
  transfersInContract {
    data {
      blockHash
      blockHeight
      caller
      callType
      contractAddress
      erc20HistoryPrice
      error
      functionInput
      functionSignature
      gasLimit
      gasPrice
      gasUsed
      historyPrice
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
      }
      to {
        address
        balance
        isContract
        numberTxsSent
        priceInUsd
        pubKey
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

* **paging**, 可选, Describes which page of data to return.
* **timeFilter**, 可选, Filters the records by block height or time.

#### 查询串

```graphql
{
  zeroFeesBlocks {
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

#### 参数列表

无需参数

#### 查询串

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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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

### contractExecuted

#### 参数列表

* **contractAddress**, 可选, The contract address to listen.
* **symbol**, 可选, The contract symbol, such as ABT for ArcBlock, BNB for Binance and so on.

#### 查询串

```graphql
subscription {
  contractExecuted {
    blockHash
    blockHeight
    caller
    callType
    contractAddress
    erc20HistoryPrice
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    historyPrice
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

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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

### etherSent

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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
    blockHeight
    caller
    callType
    contractAddress
    erc20HistoryPrice
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    historyPrice
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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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

### tokenSent

#### 参数列表

* **address**, **必须**, must be a normal wallet address.

#### 查询串

```graphql
subscription {
  tokenSent(address: "abc") {
    blockHash
    blockHeight
    caller
    callType
    contractAddress
    erc20HistoryPrice
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    historyPrice
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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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

### tokenTransferred

#### 参数列表

* **contractAddress**, 可选, Must be an contract address.
* **symbol**, 可选, The contract symbol,, such as ABT for ArcBlock, BNB for Binance and so on.

#### 查询串

```graphql
subscription {
  tokenTransferred {
    blockHash
    blockHeight
    caller
    callType
    contractAddress
    erc20HistoryPrice
    error
    functionInput
    functionSignature
    gasLimit
    gasPrice
    gasUsed
    historyPrice
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
    to {
      address
      balance
      isContract
      numberTxsSent
      priceInUsd
      pubKey
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

### sendTransaction

#### 参数列表

* **assetPassword**, **必须**, The user's encrypted asset password.
* **gasLimit**, **必须**, A scalar value equal to the maximum amount of gas that should be used in executing this transaction.
* **gasPrice**, **必须**, A scalar value equal to the number of Wei to be paid per unit of gas for all computation costs incurred as a result of the execution of this transaction.
* **input**, 可选, A byte array specifying the EVM-code for the account initialisation procedure or the input data of the message call.
* **nonce**, 可选, The transaction nonce. The user's current nonce will be used if the input value is null.
* **to**, 可选, The 160-bit address of the message call’s recipient, for a contract creation transaction, use null.
* **value**, 可选, A scalar value equal to the number of Wei to be transferred to the message call’s recipient.

#### 查询串

```graphql
mutation {
  sendTransaction(assetPassword: "abc", gasLimit: 123, gasPrice: 123)
}
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
