const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(path.join(__dirname, '../packages'));
const packageList = packages.map(x => {
  const packageJson = require(path.join(__dirname, '../packages', x, 'package.json'));
  return `- [${packageJson.name} v${packageJson.version}](./packages/${x})`;
});

const readmeFile = path.join(__dirname, '../README.md');
const readmeContent = `![ocap-javascript-sdk](https://www.arcblock.io/.netlify/functions/badge/?text=ocap-javascript-sdk)

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

> Javascript SDK for OCAP service for Node.js, Browser(ES6+ or ES5) and ReactNative, latest release at ${new Date().toLocaleString()}

## Packages Included

${packageList.join('\n')}

## Starter Templates

**Start building OCAP DApp with just one command**.

- [ocap-vue-starter](https://github.com/ArcBlock/ocap-vue-starter)
- [ocap-react-starter](https://github.com/ArcBlock/ocap-react-starter)
- [ocap-react-native-starter](https://github.com/ArcBlock/ocap-react-native-starter)

## CodeSandbox Projects

**Start building OCAP DApp without setting up environment.**

- [arcblock/ocap-react-starter](https://codesandbox.io/s/lppjkmov49)
- [arcblock/ocap-vue-starter](https://codesandbox.io/s/o4q563jvv6)

## OCAP Service CheatSheet

- [Bitcoin CheatSheet](./docs/cheatsheet.bitcoin.png)
- [Ethereum CheatSheet](./docs/cheatsheet.bitcoin.png)
`;

fs.writeFileSync(readmeFile, readmeContent);
console.log('README.md upated');
