![ocap-cli](https://www.arcblock.io/.netlify/functions/badge/?text=ocap-cli)

> Command line tools to ease development for ArcBlock Developers

## Installation

```shell
npm install -g @arcblock/ocap-cli
```

## Usage

### Available Commands

```shell
❯ ocap
Usage: ocap [options] [command]

Options:
  -V, --version                             output the version number
  -h, --help                                output usage information

Commands:
  dapp:create                               Bootstrap a new DAPP that have OCAP service SDK integrated
  dapp:start                                Start an DApp bootstrapped with `ocap dapp:create`
  dapp:build                                Build an DApp bootstrapped with `ocap dapp:create`
  eth:debugWallet                           Print wallet info detail such as type, address, privateKey, publicKey
  eth:genWallet                             Generate an ethereum wallet (public/private key pair, keystore, HD Wallet)
  eth:signPersonal [message]                Sign message with an ethereum wallet key to get a MetaMask compatible signature
  eth:verifyPersonal [message] [signature]  Verify a signature produced from eth:signPersonal
  hd:exportXKeys                            Export extended keys from hd wallet mnemonic
```

### Bootstrap an DAPP

> Used when bootstrap an DApp with our starter projects: [ocap-react-starter](https://github.com/ArcBlock/ocap-react-starter), [ocap-vue-starter](https://github.com/ArcBlock/ocap-vue-starter)

```shell
ocap dapp:create
```

Then you can start the DApp with:

```shell
ocap dapp:start
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
