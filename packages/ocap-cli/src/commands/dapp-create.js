/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const inquirer = require('inquirer');
const { spawn } = require('child_process');

const { debug, check, cross, ensureCommand } = require('../util');

const action = async () => {
  const TYPE_REACT = 'React';
  const TYPE_VUE = 'Vue.js';
  const TYPE_NODE = 'Node.js';

  const prompts = [
    {
      name: 'type',
      type: 'list',
      default: TYPE_REACT,
      message: 'Choose the starter template you are familiar with',
      choices: [TYPE_REACT, TYPE_VUE, TYPE_NODE],
    },
    {
      name: 'name',
      type: 'text',
      default: 'hello-ocap',
      message: 'Please enter the name of the dapp',
      filter: x => x.trim(),
      validate: x => {
        if (!x) {
          return 'app name must not be empty';
        }
        return true;
      },
    },
  ];

  const args = await inquirer.prompt(prompts);
  debug('dappCreate.args', args);

  const spawnOptions = {
    cwd: process.cwd(),
    detached: false,
    stdio: 'inherit',
  };

  const folder = path.join(process.cwd(), args.name);
  if (fs.existsSync(folder)) {
    console.log(
      `${cross} Folder ${chalk.cyan(
        folder
      )} already exist! Remove the directory or choose another name!`
    );
    process.exit(0);
    return;
  }

  if (args.type === TYPE_REACT) {
    await ensureCommand('create-react-app', 'npm install -g create-react-app', {
      forceLatest: true,
    });
    const child = spawn(
      'create-react-app',
      `${args.name} --scripts-version @arcblock/react-scripts`.split(/\s+/),
      spawnOptions
    );

    child.on('close', () => {
      console.log('');
      console.log(
        `${check} DApp initialized successfully! Visit http://ocap-docs.arcblock.io for docs!`
      );
      console.log('');
      process.exit(0);
    });

    return;
  }

  if (args.type === TYPE_VUE) {
    await ensureCommand('vue', 'npm install -g @vue/cli', { forceLatest: true });
    const child = spawn(
      'vue',
      `create --preset Arcblock/ocap-vue-starter ${args.name}`.split(/\s+/),
      spawnOptions
    );

    child.on('close', () => {
      console.log('');
      console.log(
        `${check} DApp initialized successfully! Visit http://ocap-docs.arcblock.io for docs!`
      );
      console.log('');
      process.exit(0);
    });

    return;
  }
};

module.exports = program => {
  program
    .command('dapp:create')
    .description('Bootstrap a new DAPP that have OCAP service SDK integrated')
    .action(action);
};
