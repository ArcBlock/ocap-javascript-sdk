const fs = require('fs');
const EthUtil = require('ethereumjs-util');
const SigUtil = require('eth-sig-util');

const action = async (message, signature) => {
  const msg = Buffer.from(fs.existsSync(message) ? fs.readFileSync(message) : message, 'utf8');
  const msgHex = EthUtil.bufferToHex(msg);
  console.log('Input message: ', msg);
  console.log('Input message (hex): ', msgHex);
  console.log('Input signature: ', signature);

  var msgParams = { data: msgHex, sig: signature };
  var recovered = SigUtil.recoverPersonalSignature(msgParams);
  var publicKey = SigUtil.extractPublicKey(msgParams);

  console.log('Signed by publicKey: ' + publicKey);
  console.log('Signed by address: ' + recovered);

  process.exit(0);
};

module.exports = program => {
  program
    .command('eth:verifyPersonal [message] [signature]')
    .description('Verify a signature produced from eth:signPersonal')
    .action(action);
};
