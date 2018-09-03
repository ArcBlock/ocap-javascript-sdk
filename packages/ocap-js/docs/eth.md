# ETH API List
 
## Queries

### accountByAddress

#### Arguments

* **address**, **required**, The address generated based on the public key of the account.

#### Result Format

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
  }
}

```

### blockByHash

#### Arguments

* **hash**, **required**, The hash of the block.

#### Result Format

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
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
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
        total
        logsBloom
        index
        publicKey
        logs
        gasPrice
        root
        status
        creates
        hash
        raw
        contractFrom
        nonce
        contractTo
        standardV
        gasLimit
        v
        input
        fees
        inputPlain
        blockHeight
        contractAddress
        cumulativeGasUsed
        gasUsed
        blockHash
        contractValue
        size
        s
        priceInUsd
        r
        time
        txType
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

#### Result Format

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
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
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
        total
        logsBloom
        index
        publicKey
        logs
        gasPrice
        root
        status
        creates
        hash
        raw
        contractFrom
        nonce
        contractTo
        standardV
        gasLimit
        v
        input
        fees
        inputPlain
        blockHeight
        contractAddress
        cumulativeGasUsed
        gasUsed
        blockHash
        contractValue
        size
        s
        priceInUsd
        r
        time
        txType
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

#### Result Format

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
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
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

#### Result Format

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
      preHash
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      stateRoot
      time
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
          total
          logsBloom
          index
          publicKey
          logs
          gasPrice
          root
          status
          creates
          hash
          raw
          contractFrom
          nonce
          contractTo
          standardV
          gasLimit
          v
          input
          fees
          inputPlain
          blockHeight
          contractAddress
          cumulativeGasUsed
          gasUsed
          blockHash
          contractValue
          size
          s
          priceInUsd
          r
          time
          txType
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

### emptyBlocks

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Result Format

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
      preHash
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      stateRoot
      time
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
          total
          logsBloom
          index
          publicKey
          logs
          gasPrice
          root
          status
          creates
          hash
          raw
          contractFrom
          nonce
          contractTo
          standardV
          gasLimit
          v
          input
          fees
          inputPlain
          blockHeight
          contractAddress
          cumulativeGasUsed
          gasUsed
          blockHash
          contractValue
          size
          s
          priceInUsd
          r
          time
          txType
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

#### Result Format

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

#### Result Format

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
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
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
        total
        logsBloom
        index
        publicKey
        logs
        gasPrice
        root
        status
        creates
        hash
        raw
        contractFrom
        nonce
        contractTo
        standardV
        gasLimit
        v
        input
        fees
        inputPlain
        blockHeight
        contractAddress
        cumulativeGasUsed
        gasUsed
        blockHash
        contractValue
        size
        s
        priceInUsd
        r
        time
        txType
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

#### Result Format

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
          total
          logsBloom
          index
          publicKey
          logs
          gasPrice
          root
          status
          creates
          hash
          raw
          contractFrom
          nonce
          contractTo
          standardV
          gasLimit
          v
          input
          fees
          inputPlain
          blockHeight
          contractAddress
          cumulativeGasUsed
          gasUsed
          blockHash
          contractValue
          size
          s
          priceInUsd
          r
          time
          txType
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
          total
          logsBloom
          index
          publicKey
          logs
          gasPrice
          root
          status
          creates
          hash
          raw
          contractFrom
          nonce
          contractTo
          standardV
          gasLimit
          v
          input
          fees
          inputPlain
          blockHeight
          contractAddress
          cumulativeGasUsed
          gasUsed
          blockHash
          contractValue
          size
          s
          priceInUsd
          r
          time
          txType
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

#### Result Format

```graphql
{
  transactionByHash(hash: "abc") {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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

#### Result Format

```graphql
{
  transactionByIndex(index: 123) {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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

#### Result Format

```graphql
{
  transactionsByIndex {
    data {
      total
      logsBloom
      index
      publicKey
      logs
      gasPrice
      root
      status
      creates
      hash
      raw
      contractFrom
      nonce
      contractTo
      standardV
      gasLimit
      v
      input
      fees
      inputPlain
      blockHeight
      contractAddress
      cumulativeGasUsed
      gasUsed
      blockHash
      contractValue
      size
      s
      priceInUsd
      r
      time
      txType
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
        txsReceived {
          data {
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
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
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
          }
          page {
            cursor
            next
            total
          }
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
        txsSent {
          data {
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
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

### transactionsByToken

#### Arguments

* **from**, optional, from address
* **paging**, optional, Describes which page of data to return.
* **to**, optional, to address
* **token**, **required**, The token name of the transaction to return.

#### Result Format

```graphql
{
  transactionsByToken(token: "abc") {
    data {
      total
      logsBloom
      index
      publicKey
      logs
      gasPrice
      root
      status
      creates
      hash
      raw
      contractFrom
      nonce
      contractTo
      standardV
      gasLimit
      v
      input
      fees
      inputPlain
      blockHeight
      contractAddress
      cumulativeGasUsed
      gasUsed
      blockHash
      contractValue
      size
      s
      priceInUsd
      r
      time
      txType
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
        txsReceived {
          data {
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
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
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
          }
          page {
            cursor
            next
            total
          }
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
        txsSent {
          data {
            total
            logsBloom
            index
            publicKey
            logs
            gasPrice
            root
            status
            creates
            hash
            raw
            contractFrom
            nonce
            contractTo
            standardV
            gasLimit
            v
            input
            fees
            inputPlain
            blockHeight
            contractAddress
            cumulativeGasUsed
            gasUsed
            blockHash
            contractValue
            size
            s
            priceInUsd
            r
            time
            txType
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

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Result Format

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
      preHash
      priceInUsd
      receiptsRoot
      reward
      sealFields
      sha3Uncles
      size
      stateRoot
      time
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
          total
          logsBloom
          index
          publicKey
          logs
          gasPrice
          root
          status
          creates
          hash
          raw
          contractFrom
          nonce
          contractTo
          standardV
          gasLimit
          v
          input
          fees
          inputPlain
          blockHeight
          contractAddress
          cumulativeGasUsed
          gasUsed
          blockHash
          contractValue
          size
          s
          priceInUsd
          r
          time
          txType
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

#### Result Format

```graphql
subscription {
  bigTransactionExecuted(token: "abc") {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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

#### Result Format

```graphql
subscription {
  contractExecuted(address: "abc") {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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

#### Result Format

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
    preHash
    priceInUsd
    receiptsRoot
    reward
    sealFields
    sha3Uncles
    size
    stateRoot
    time
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
        total
        logsBloom
        index
        publicKey
        logs
        gasPrice
        root
        status
        creates
        hash
        raw
        contractFrom
        nonce
        contractTo
        standardV
        gasLimit
        v
        input
        fees
        inputPlain
        blockHeight
        contractAddress
        cumulativeGasUsed
        gasUsed
        blockHash
        contractValue
        size
        s
        priceInUsd
        r
        time
        txType
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

#### Result Format

```graphql
subscription {
  newContractCreated {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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

#### Result Format

```graphql
subscription {
  tokenReceived(address: "abc") {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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

#### Result Format

```graphql
subscription {
  tokenSent(address: "abc") {
    total
    logsBloom
    index
    publicKey
    logs
    gasPrice
    root
    status
    creates
    hash
    raw
    contractFrom
    nonce
    contractTo
    standardV
    gasLimit
    v
    input
    fees
    inputPlain
    blockHeight
    contractAddress
    cumulativeGasUsed
    gasUsed
    blockHash
    contractValue
    size
    s
    priceInUsd
    r
    time
    txType
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
