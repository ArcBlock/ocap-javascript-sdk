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

### contractTransferByHash

#### Arguments

* **traceAddress**, optional, The position graph of how traces were called.
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

#### Arguments

* **endDate**, **required**, the end_date of the interval
* **paging**, optional, Describes which page of data to return.
* **startDate**, **required**, the start_date of the interval
* **token**, **required**, the name of the token

#### Raw Query

```graphql
{
  cryptoHistoryPrice(endDate: "2019-01-13T00:29:11.844Z", startDate: "2019-01-13T00:29:11.844Z", token: "abc") {
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

* **paging**, optional, Describes which page of data to return.
* **timeFilter**, optional, Filters the records by block height or time.

#### Raw Query

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

#### Arguments

* **paging**, optional, Describes which page of data to return.
* **timeFilter**, optional, Filters the records by block height or time.

#### Raw Query

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

#### Arguments

* **addressFilter**, optional, Filters the transfer records by sender's and/or receiver's addresses.
* **contractAddress**, optional, The address of the contract to query.
* **paging**, optional, Describes which page of data to return.
* **symbol**, optional, The symbol of the token, such as ABT for ArcBlock, BNB for Binance and so on.
* **timeFilter**, optional, Filters the records by block height or time.
* **transactionHash**, optional, The hash of the transaction.

#### Raw Query

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

#### Arguments

* **addressFilter**, optional, Filters the transaction records by sender's and/or receiver's addresses.
* **etherOnly**, optional, If ture, then only the transactions in which there are Ether transacted will be return, otherwise all transactions will be returned.
* **paging**, optional, Describes which page of data to return.
* **timeFilter**, optional, Filters the records by block height or time.

#### Raw Query

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

#### Arguments

* **contractAddress**, optional, The address of the contract to query.
* **from**, optional, The address from which the token is transacted.
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

#### Arguments

* **paging**, optional, Describes which page of data to return.
* **timeFilter**, optional, Filters the records by block height or time.

#### Raw Query

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

#### Arguments

* **data**, **required**, The signed transaction data.

#### Raw Query

```graphql
mutation {
  sendRawTransaction(data: "abc")
}
```

### sendTransaction

#### Arguments

* **assetPassword**, **required**, The user's encrypted asset password.
* **gasLimit**, **required**, A scalar value equal to the maximum amount of gas that should be used in executing this transaction.
* **gasPrice**, **required**, A scalar value equal to the number of Wei to be paid per unit of gas for all computation costs incurred as a result of the execution of this transaction.
* **input**, optional, A byte array specifying the EVM-code for the account initialisation procedure or the input data of the message call.
* **nonce**, optional, The transaction nonce. The user's current nonce will be used if the input value is null.
* **to**, optional, The 160-bit address of the message call’s recipient, for a contract creation transaction, use null.
* **value**, optional, A scalar value equal to the number of Wei to be transferred to the message call’s recipient.

#### Raw Query

```graphql
mutation {
  sendTransaction(assetPassword: "abc", gasLimit: 123, gasPrice: 123)
}
```


## Contributors

| Name           | Website                    |
| -------------- | -------------------------- |
| **wangshijun** | <https://ocap.arcblock.io> |
