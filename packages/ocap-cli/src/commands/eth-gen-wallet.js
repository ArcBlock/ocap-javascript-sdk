const fs = require('fs');
const inquirer = require('inquirer');
const EthWallet = require('ethereumjs-wallet');
const { debug, printWallet, passwordValidator, saveKeystore } = require('../util');

const action = async () => {
  const TYPE_KEY_PAIR = 'Public/private key pair';
  const TYPE_KEY_STORE = 'Keystore';

  const prompts = [
    {
      type: 'list',
      name: 'type',
      default: TYPE_KEY_PAIR,
      message: 'Which kind of wallet do you want to generate',
      choices: [TYPE_KEY_PAIR, TYPE_KEY_STORE],
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

  const wallet = EthWallet.generate();
  if (args.type === TYPE_KEY_PAIR) {
    printWallet(wallet, true);
  }
  if (args.type === TYPE_KEY_STORE) {
    saveKeystore(wallet, args.password);
  }

  process.exit(0);
};

module.exports = program => {
  program
    .command('eth:genWallet')
    .description('Generate an ethereum wallet (public/private key pair, keystore)')
    .action(action);
};
