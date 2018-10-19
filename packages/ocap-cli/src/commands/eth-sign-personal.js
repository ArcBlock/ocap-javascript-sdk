const fs = require('fs');
const EthUtil = require('ethereumjs-util');
const SigUtil = require('eth-sig-util');
const { ensureWallet } = require('../util');

module.exports = program => {
  program
    .command(
      'eth-sign-personal [message]',
      'Sign message with an ethereum wallet and produce a MetaMask like signature'
    )
    .action(async (_, message) => {
      const wallet = await ensureWallet();

      let msg;
      try {
	msg = fs.readFileSync(message);
      } catch (e) {
	msg = EthUtil.toBuffer(message);
      }

      const msgHex = EthUtil.bufferToHex(msg);
      console.log('Input message: ' + msg);
      console.log('Input message (hex): ' + msgHex);

      const privateKey = EthUtil.stripHexPrefix(wallet.getPrivateKey());
      const signature = SigUtil.personalSign(Buffer.from(privateKey, 'hex'), { data: msgHex });

      console.log('Signature: ', signature);

      process.exit(0);
    });
};
