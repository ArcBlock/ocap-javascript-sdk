/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const { request } = require('graphql-request');
const { introspectionQuery } = require('graphql');
const httpEndpoint = ds => `https://ocap.arcblock.io/api/${ds}`;

const dataSources = ['btc', 'eth'];
dataSources.map(async ds => {
  try {
    const result = await request(httpEndpoint(ds), introspectionQuery);
    if (result.__schema) {
      const schemaFile = path.join(__dirname, '../src/schema', `${ds}.json`);
      const schemaJson = JSON.stringify(result.__schema, true, '  ');
      fs.writeFileSync(schemaFile, schemaJson);
      console.log(`${ds} schema update success`, schemaFile);
    } else {
      console.log(`${ds} schema fetch failure`);
    }
  } catch (err) {
    console.error(err);
    console.log(`${ds} schema update error`);
  }
});

// update index.js file
const entryFile = path.join(__dirname, '../src/index.js');
const updatedAt = new Date().toISOString();
fs.writeFileSync(
  entryFile,
  `// Last updated at ${updatedAt}

module.exports = {
${dataSources.map(ds => `  ${ds}: require('./schema/${ds}.json'),`).join('\n')}
};
`
);
