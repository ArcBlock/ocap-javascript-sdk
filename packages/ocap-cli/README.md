# OCAP CLI

> Command Line Tools to use together with OCAP, most are related to blockchain.

## Installation

```shell
npm install -g @arcblock/ocap-cli
```

## Usage

### Help

```shell
Usage: ocap [options] [command]

Options:
  -V, --version                             output the version number
  -h, --help                                output usage information

Commands:
  eth:debugWallet                           Print wallet info detail such as type, address, privateKey, publicKey
  eth:genWallet                             Generate an ethereum wallet (public/private key pair, keystore)
  eth:signPersonal [message]                Sign message with an ethereum wallet key to get a MetaMask compatible signature
  eth:verifyPersonal [message] [signature]  Verify a signature produced from eth:signPersonal
```

### Sign personal message

> Used when verify wallet address in [OCAP Developer Console](https://developer.ocap.io)

```shell
ocap eth:signPersonal 'hello ocap'
```

### Debug wallet info

```shell
ocap eth:debugWallet
```
