const fs = require('fs');
const { ensureWallet, printWallet } = require('../util');

const action = async () => {
  const wallet = await ensureWallet();
  printWallet(wallet, true);
  process.exit(0);
};

module.exports = program => {
  program
    .command('eth:debugWallet')
    .description('Print wallet info detail such as type, address, privateKey, publicKey')
    .action(action);
};
