const fs = require('fs');
const EthUtil = require('ethereumjs-util');
const SigUtil = require('eth-sig-util');
const { ensureWallet, debug } = require('../util');

const action = async message => {
  const wallet = await ensureWallet();
  const msg = Buffer.from(fs.existsSync(message) ? fs.readFileSync(message) : message, 'utf8');
  const msgHex = EthUtil.bufferToHex(msg);
  console.log('Input message: ' + message);
  console.log('Input message (hex): ' + msgHex);

  const privateKey = EthUtil.stripHexPrefix(wallet.getPrivateKey());
  const signature = SigUtil.personalSign(Buffer.from(privateKey, 'hex'), { data: msgHex });

  console.log('Signature: ', signature);

  process.exit(0);
};

module.exports = program => {
  program
    .command('eth:signPersonal [message]')
    .description('Sign message with an ethereum wallet key to get a MetaMask compatible signature')
    .action(action);
};
