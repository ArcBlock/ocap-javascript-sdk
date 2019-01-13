/* eslint no-console:"off" */
const BIP39 = require('bip39');
const chalk = require('chalk');
const inquirer = require('inquirer');
const EthWallet = require('ethereumjs-wallet');
const { debug, printWallet, passwordValidator, saveKeystore, types } = require('../util');

const action = async () => {
  const prompts = [
    {
      type: 'list',
      name: 'type',
      default: types.PRIVATE_KEY,
      message: 'Which kind of wallet do you want to generate',
      choices: [types.PRIVATE_KEY, types.KEY_STORE, types.HD_WALLET],
    },
    {
      type: 'password',
      name: 'password',
      message: 'Please enter the password for keystore',
      filter: x => x.trim(),
      when: args => args.type === types.KEY_STORE,
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
    {
      type: 'list',
      name: 'entropyLength',
      message: 'Select a mnemonic length',
      default: '12',
      filter: x => (x / 3) * 32,
      when: args => args.type === types.HD_WALLET,
      choices: [12, 15, 18, 21, 24].map(x => x.toString()),
    },
  ];

  const args = await inquirer.prompt(prompts);
  debug('genWallet.args', args);

  if (args.type === types.HD_WALLET) {
    const mnemonic = BIP39.generateMnemonic(Number(args.entropyLength));
    console.log('');
    console.log(chalk.red('Please keep the following mnemonic words to somewhere safe'));
    console.log('='.repeat(80));
    console.log(mnemonic);
    console.log('='.repeat(80));
    console.log('');
  } else {
    const wallet = EthWallet.generate();
    if (args.type === types.PRIVATE_KEY) {
      printWallet(wallet, true);
    }
    if (args.type === types.KEY_STORE) {
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
