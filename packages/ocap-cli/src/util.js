/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const chalk = require('chalk');
const EthWallet = require('ethereumjs-wallet');
const HDWallet = require('ethereumjs-wallet/hdkey');
const EthUtil = require('ethereumjs-util');
const BIP39 = require('bip39');
const PasswordValidator = require('password-validator');
const { exec, spawn } = require('child_process');

const debug = require('debug')(require('../package.json').name);
const cross = chalk.red('✘');
const check = chalk.green('✔︎');

const passwordValidator = new PasswordValidator();
passwordValidator
  .is()
  .min(8)
  .is()
  .max(20)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();

const delay = (timeout = 1000) => new Promise(resolve => setTimeout(resolve, timeout));

function ensurePackageJson() {
  const filePath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(filePath) === false) {
    console.log(`${cross} Oops package.json file not found on this directory`);
    process.exit(0);
  }

  return JSON.parse(fs.readFileSync(filePath));
}

function ensureCommand(commandName, installCommand, { forceLatest = false } = {}) {
  return new Promise((resolve, reject) => {
    exec(`which ${commandName}`, {}, async (err, stdout, stderr) => {
      if (err || forceLatest) {
        if (err) {
          console.log(`${cross} ${commandName} not found, installing with: ${installCommand}...`);
        }
        if (forceLatest) {
          console.log(`⏳ installing latest ${commandName}: ${installCommand}...`);
        }
        if (!installCommand) {
          return reject(err);
        }

        const parts = installCommand.split(' ');
        const child = spawn(parts.shift(), parts, {
          cwd: process.cwd(),
          detached: false,
          stdio: 'inherit',
        });

        child.on('close', () => {
          exec(`which ${commandName}`, {}, async (__err, __stdout, __stderr) => {
            if (__stderr) {
              console.error(__stderr);
              return reject(__stderr);
            }

            console.log(`${check} ${commandName} is installed successfully!`);
            await delay(2000);
            resolve();
          });
        });

        child.on('error', reject);
        return;
      }

      debug('ensureCommand', { stdout, stderr, commandName, installCommand });
      if (stderr) {
        console.error(stderr);
        return reject(stderr);
      }

      console.log(`${check} ${commandName} is already installed!`);
      await delay(2000);
      resolve();
    });
  });
}

async function ensureWallet() {
  const TYPE_PRIVATE_KEY = 'Private Key';
  const TYPE_KEY_STORE = 'Key Store File';
  const TYPE_HD_WALLET = 'HD Wallet';

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
      validate: x => {
        if (!x) {
          return 'privateKey should not be empty';
        }
        if (!EthUtil.isValidPrivate(Buffer.from(EthUtil.stripHexPrefix(x), 'hex'))) {
          return 'privateKey should be valid `0x` prefixed hex format';
        }

        return true;
      },
    },
    {
      type: 'password',
      name: 'mnemonic',
      message: 'Please enter the mnemonic for HD Wallet',
      when: args => args.type === TYPE_HD_WALLET,
      filter: x => x.trim(),
      validate: x => !!x,
    },
    {
      type: 'input',
      name: 'keystoreFile',
      message: 'Please enter the file path of key store file',
      when: args => args.type === TYPE_KEY_STORE,
      filter: x => x.trim(),
      validate: x => !!x && fs.existsSync(x),
    },
    {
      type: 'password',
      name: 'keystorePassword',
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
    const keystoreFile = fs.readFileSync(args.keystoreFile).toString();
    wallet = EthWallet.fromV3(keystoreFile, args.keystorePassword, true);
  }

  if (args.type === TYPE_HD_WALLET) {
    const parentWallet = HDWallet.fromMasterSeed(BIP39.mnemonicToSeed(args.mnemonic));
    const wallets = {};
    const choices = [];
    for (let i = 0; i < 20; i++) {
      const path = `m/44'/60'/0'/0/${i}`;
      const childWallet = EthWallet.fromExtendedPrivateKey(
        parentWallet.derivePath(path).privateExtendedKey()
      );
      const address = childWallet.getAddressString();
      wallets[address] = childWallet;
      choices.push({ name: `${i} - ${address}`, value: address });
    }

    const choice = await inquirer.prompt([
      {
        type: 'list',
        name: 'address',
        default: TYPE_PRIVATE_KEY,
        message: 'Choose wallet address from the list',
        choices,
      },
    ]);

    wallet = wallets[choice.address];
  }

  if (wallet) {
    wallet.__type = args.type;
  }

  return wallet;
}

function printWallet(wallet, showPrivate) {
  if (wallet.__type) {
    console.log('Wallet Type: ', wallet.__type);
  }
  printAddress(wallet.getAddressString());
  console.log('Public key: ', wallet.getPublicKeyString());
  if (showPrivate) {
    console.log('Private key: ', wallet.getPrivateKeyString());
  }
}

function printAddress(address) {
  console.log('Address: ' + address);
  console.log('Address (checksum): ', EthUtil.toChecksumAddress(address));
}

function saveKeystore(wallet, password) {
  const v3String = wallet.toV3String(password);
  const filename = wallet.getV3Filename();

  fs.writeFileSync(filename, new Buffer(v3String));
  console.log('Key store file saved as:', filename);
}

module.exports = {
  ensurePackageJson,
  ensureCommand,
  ensureWallet,
  printWallet,
  printAddress,
  saveKeystore,
  passwordValidator,
  debug,
  cross,
  check,
  delay,
};
