/* eslint no-console:"off" */
const { spawn } = require('child_process');

const { cross, ensurePackageJson } = require('../util');

const action = async () => {
  const json = await ensurePackageJson();
  if (!json) {
    return;
  }

  const scripts = Object.keys(json.scripts);
  let command = '';
  if (scripts.includes('start')) {
    command = 'npm run start';
  }
  if (scripts.includes('serve')) {
    command = 'npm run serve';
  }
  if (scripts.includes('dev')) {
    command = 'npm run dev';
  }

  if (!command) {
    console.log(`${cross} start command not found in package.json`);
    console.log('');
    process.exit(0);
    return;
  }

  const spawnOptions = {
    cwd: process.cwd(),
    detached: false,
    stdio: 'inherit',
  };

  const parts = command.split(/\s+/);
  spawn(parts.shift(), parts, spawnOptions);
};

module.exports = program => {
  program
    .command('dapp:start')
    .description('Start an DApp bootstrapped with `ocap dapp:create`')
    .action(action);
};
