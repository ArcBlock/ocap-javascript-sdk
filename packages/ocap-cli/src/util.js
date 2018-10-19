const fs = require('fs');
const inquirer = require('inquirer');
const EthWallet = require('ethereumjs-wallet');
const EthUtil = require('ethereumjs-util');
const SigUtil = require('eth-sig-util');

const debug = require('debug')(require('../package.json').name);

const TYPE_PRIVATE_KEY = 'Private Key';
const TYPE_KEY_STORE = 'Key Store File';
const TYPE_HD_WALLET = 'HD Wallet Mnemonic';

async function ensureWallet() {
  const prompts = [
    {
      type: 'list',
      name: 'type',
      default: TYPE_PRIVATE_KEY,
      message: 'How to unlock the ethereum wallet',
      choices: [TYPE_PRIVATE_KEY, TYPE_KEY_STORE, TYPE_HD_WALLET],
    },
    {
      type: 'password',
      name: 'privateKey',
      message: 'Please enter the privateKey',
      filter: x => x.trim(),
      when: args => args.type === TYPE_PRIVATE_KEY,
      validate: x => !!x,
    },
    {
      type: 'password',
      name: 'mnemonic',
      message: 'Please enter the mnemonic',
      when: args => args.type === TYPE_HD_WALLET,
      validate: x => !!x,
    },
    {
      type: 'input',
      name: 'keyFile',
      message: 'Please enter the file path of key store file',
      when: args => args.type === TYPE_KEY_STORE,
      filter: x => x.trim(),
      validate: x => !!x,
    },
    {
      type: 'password',
      name: 'keyFilePassword',
      message: 'Please enter key store file password',
      when: args => args.type === TYPE_KEY_STORE,
      filter: x => x.trim(),
      validate: x => !!x,
    },
  ];

  const args = await inquirer.prompt(prompts);
  debug('signMessage.args', args);

  let wallet = null;
  if (args.type === TYPE_PRIVATE_KEY) {
    try {
      wallet = EthWallet.fromExtendedPrivateKey(args.privateKey);
    } catch (e) {
      wallet = EthWallet.fromPrivateKey(EthUtil.toBuffer(args.privateKey));
    }
  }
  if (args.type === TYPE_KEY_STORE) {
    const keyFile = fs.readFileSync(args.keyFile).toString();
    wallet = EthWallet.fromV3(keyFile, password, true);
  }

  return wallet;
}

module.exports = {
  ensureWallet,
};
