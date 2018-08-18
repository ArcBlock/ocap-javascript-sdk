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
    sha3Uncles
    size
    stateRoot
    time
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
        blockHash
        blockHeight
        condition
        contractFrom
        contractTo
        contractValue
        creates
        fees
        gasLimit
        gasPrice
        gasUsed
        hash
        index
        input
        inputPlain
        logsBloom
        nonce
        priceInUsd
        publicKey
        r
        raw
        size
        standardV
        status
        total
        txType
        v
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
    sha3Uncles
    size
    stateRoot
    time
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
        blockHash
        blockHeight
        condition
        contractFrom
        contractTo
        contractValue
        creates
        fees
        gasLimit
        gasPrice
        gasUsed
        hash
        index
        input
        inputPlain
        logsBloom
        nonce
        priceInUsd
        publicKey
        r
        raw
        size
        standardV
        status
        total
        txType
        v
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
      sha3Uncles
      size
      stateRoot
      time
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
          blockHash
          blockHeight
          condition
          contractFrom
          contractTo
          contractValue
          creates
          fees
          gasLimit
          gasPrice
          gasUsed
          hash
          index
          input
          inputPlain
          logsBloom
          nonce
          priceInUsd
          publicKey
          r
          raw
          size
          standardV
          status
          total
          txType
          v
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
      blockHash
      blockHeight
      condition
      contractFrom
      contractTo
      contractValue
      creates
      fees
      gasLimit
      gasPrice
      gasUsed
      hash
      index
      input
      inputPlain
      logsBloom
      nonce
      priceInUsd
      publicKey
      r
      raw
      size
      standardV
      status
      total
      txType
      v
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
            blockHash
            blockHeight
            condition
            contractFrom
            contractTo
            contractValue
            creates
            fees
            gasLimit
            gasPrice
            gasUsed
            hash
            index
            input
            inputPlain
            logsBloom
            nonce
            priceInUsd
            publicKey
            r
            raw
            size
            standardV
            status
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
        logsBloom
        merkleRoot
        mixHash
        nonce
        numberTxs
        preHash
        priceInUsd
        receiptsRoot
        reward
        sha3Uncles
        size
        stateRoot
        time
        total
        author {
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
            blockHash
            blockHeight
            condition
            contractFrom
            contractTo
            contractValue
            creates
            fees
            gasLimit
            gasPrice
            gasUsed
            hash
            index
            input
            inputPlain
            logsBloom
            nonce
            priceInUsd
            publicKey
            r
            raw
            size
            standardV
            status
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
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
        txsReceived {
          data {
            blockHash
            blockHeight
            condition
            contractFrom
            contractTo
            contractValue
            creates
            fees
            gasLimit
            gasPrice
            gasUsed
            hash
            index
            input
            inputPlain
            logsBloom
            nonce
            priceInUsd
            publicKey
            r
            raw
            size
            standardV
            status
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

### transactionsByToken

#### Arguments

* **blockOffset**, **required**, Number of blocks to skip
* **from**, optional, from address
* **numBlocks**, optional, Number of blocks to scan for transactions.
* **to**, optional, to address
* **token**, **required**, The token name of the transaction to return.

#### Result Format

```graphql
{
  transactionsByToken(blockOffset: 123, token: "abc") {
    data {
      blockHash
      blockHeight
      condition
      contractFrom
      contractTo
      contractValue
      creates
      fees
      gasLimit
      gasPrice
      gasUsed
      hash
      index
      input
      inputPlain
      logsBloom
      nonce
      priceInUsd
      publicKey
      r
      raw
      size
      standardV
      status
      total
      txType
      v
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
            blockHash
            blockHeight
            condition
            contractFrom
            contractTo
            contractValue
            creates
            fees
            gasLimit
            gasPrice
            gasUsed
            hash
            index
            input
            inputPlain
            logsBloom
            nonce
            priceInUsd
            publicKey
            r
            raw
            size
            standardV
            status
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
        logsBloom
        merkleRoot
        mixHash
        nonce
        numberTxs
        preHash
        priceInUsd
        receiptsRoot
        reward
        sha3Uncles
        size
        stateRoot
        time
        total
        author {
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
            blockHash
            blockHeight
            condition
            contractFrom
            contractTo
            contractValue
            creates
            fees
            gasLimit
            gasPrice
            gasUsed
            hash
            index
            input
            inputPlain
            logsBloom
            nonce
            priceInUsd
            publicKey
            r
            raw
            size
            standardV
            status
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
        numberTxsReceived
        numberTxsSent
        priceInUsd
        pubKey
        totalAmountReceived
        totalAmountSent
        txsReceived {
          data {
            blockHash
            blockHeight
            condition
            contractFrom
            contractTo
            contractValue
            creates
            fees
            gasLimit
            gasPrice
            gasUsed
            hash
            index
            input
            inputPlain
            logsBloom
            nonce
            priceInUsd
            publicKey
            r
            raw
            size
            standardV
            status
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
    sha3Uncles
    size
    stateRoot
    time
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
        blockHash
        blockHeight
        condition
        contractFrom
        contractTo
        contractValue
        creates
        fees
        gasLimit
        gasPrice
        gasUsed
        hash
        index
        input
        inputPlain
        logsBloom
        nonce
        priceInUsd
        publicKey
        r
        raw
        size
        standardV
        status
        total
        txType
        v
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
    blockHash
    blockHeight
    condition
    contractFrom
    contractTo
    contractValue
    creates
    fees
    gasLimit
    gasPrice
    gasUsed
    hash
    index
    input
    inputPlain
    logsBloom
    nonce
    priceInUsd
    publicKey
    r
    raw
    size
    standardV
    status
    total
    txType
    v
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
  }
}

```

## Mutations

No Mutations supported yet.
