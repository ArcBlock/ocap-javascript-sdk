/* eslint no-console:"off" */
const BIP39 = require('bip39');
const chalk = require('chalk');
const inquirer = require('inquirer');
const EthWallet = require('ethereumjs-wallet');
const { debug, printWallet, passwordValidator, saveKeystore } = require('../util');

const action = async () => {
  const TYPE_PRIVATE_KEY = 'Private Key';
  const TYPE_KEY_STORE = 'Key Store File';
  const TYPE_HD_WALLET = 'HD Wallet';

  const prompts = [
    {
      type: 'list',
      name: 'type',
      default: TYPE_PRIVATE_KEY,
      message: 'Which kind of wallet do you want to generate',
      choices: [TYPE_PRIVATE_KEY, TYPE_KEY_STORE, TYPE_HD_WALLET],
    },
    {
      type: 'password',
      name: 'password',
      message: 'Please enter the password for keystore',
      filter: x => x.trim(),
      when: args => args.type === TYPE_KEY_STORE,
      validate: x => {
        if (!x) {
          return 'password should not be empty';
        }
        if (!passwordValidator.validate(x)) {
          return 'password should be 8~20 chars long, and must contain at least one uppercase/lowercase/digit';
        }

        return true;
      },
    },
  ];

  const args = await inquirer.prompt(prompts);
  debug('genWallet.args', args);

  if (args.type === TYPE_HD_WALLET) {
    const mnemonic = BIP39.generateMnemonic(128);
    console.log('');
    console.log(chalk.red('Please keep the following mnemonic words to somewhere safe'));
    console.log('='.repeat(80));
    console.log(mnemonic);
    console.log('='.repeat(80));
    console.log('');
  } else {
    const wallet = EthWallet.generate();
    if (args.type === TYPE_PRIVATE_KEY) {
      printWallet(wallet, true);
    }
    if (args.type === TYPE_KEY_STORE) {
      saveKeystore(wallet, args.password);
    }
  }

  process.exit(0);
};

module.exports = program => {
  program
    .command('eth:genWallet')
    .description('Generate an ethereum wallet (public/private key pair, keystore, HD Wallet)')
    .action(action);
};
