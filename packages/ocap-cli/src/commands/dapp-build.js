/* eslint no-console:"off" */
const { spawn } = require('child_process');

const { cross, ensurePackageJson } = require('../util');

const action = async () => {
  const json = await ensurePackageJson();
  if (!json) {
    return;
  }

  const scripts = Object.keys(json.scripts);
  const command = scripts.build;
  if (!command) {
    console.log(`${cross} build command not found in package.json`);
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
    .command('dapp:build')
    .description('Build an DApp bootstrapped with `ocap dapp:create`')
    .action(action);
};
