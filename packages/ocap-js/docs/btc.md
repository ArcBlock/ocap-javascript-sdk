# BTC API List
 
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
    numberTxsReceived
    numberTxsSent
    priceInUsd
    pubKey
    scriptType
    subKeys
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
    bits
    fees
    hash
    height
    medianTime
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

#### Arguments

* **height**, **required**, The number of blocks ahead of this block.

#### Result Format

```graphql
{
  blockByHeight(height: 123) {
    bits
    fees
    hash
    height
    medianTime
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

#### Arguments

* **instance**, **required**, The name of the blockchain instance.

#### Result Format

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

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Result Format

```graphql
{
  blocksByHeight(fromHeight: 123) {
    data {
      bits
      fees
      hash
      height
      medianTime
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
      bits
      fees
      hash
      height
      medianTime
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

#### Arguments

No arguments

#### Result Format

```graphql
{
  genesisBlock {
    bits
    fees
    hash
    height
    medianTime
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

#### Arguments

* **paging**, optional, Describes which page of data to return.

#### Result Format

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

#### Arguments

* **hash**, **required**, The hash of the transaction to return.

#### Result Format

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

#### Arguments

* **paging**, optional, Describes which page of data to return.
* **receiver**, optional, Specifies the receiver's address.
* **sender**, optional, Specifies the sender's address.

#### Result Format

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

#### Arguments

* **fromHeight**, **required**, The height of block from which to return.
* **paging**, optional, Describes which page of data to return.
* **toHeight**, optional, The height of block to which to return.

#### Result Format

```graphql
{
  zeroFeesBlocks(fromHeight: 123) {
    data {
      bits
      fees
      hash
      height
      medianTime
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

#### Arguments

No arguments

#### Result Format

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

#### Arguments

* **address**, **required**, 

#### Result Format

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

#### Arguments

* **address**, **required**, 

#### Result Format

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

#### Arguments

No arguments

#### Result Format

```graphql
subscription {
  newBlockMined {
    bits
    fees
    hash
    height
    medianTime
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
