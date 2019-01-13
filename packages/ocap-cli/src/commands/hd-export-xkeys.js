/* eslint no-console:"off" */
const BIP39 = require('bip39');
const inquirer = require('inquirer');
const HDKey = require('hdkey');
const { debug } = require('../util');

const action = async () => {
  const prompts = [
    {
      type: 'password',
      name: 'mnemonic',
      message: 'Please enter the mnemonic for the hdwallet',
      filter: x => x.trim(),
      validate: x => {
        if (!x) {
          return 'mnemonic should not be empty';
        }
        if (!BIP39.validateMnemonic(x)) {
          return 'mnemonic is invalid';
        }

        return true;
      },
    },
    {
      type: 'text',
      name: 'derivePath',
      message: 'Please enter the path of the node you want to export extended keys',
      // eslint-disable-next-line
      default: `m/44'/60'/0'/0`,
      filter: x => x.trim(),
    },
  ];

  const args = await inquirer.prompt(prompts);
  debug('exportXKeys.args', args);

  const master = HDKey.fromMasterSeed(BIP39.mnemonicToSeed(args.mnemonic));
  const child = master.derive(args.derivePath);
  child.wipePrivateData();
  console.log(child.toJSON());

  process.exit(0);
};

module.exports = program => {
  program
    .command('hd:exportXKeys')
    .description('Export extended keys from hd wallet mnemonic')
    .action(action);
};
