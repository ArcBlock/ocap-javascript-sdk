/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const OCAPClient = require('../../ocap-js/src/node');
const { introspectionQuery } = require('graphql');

const dataSources = ['btc', 'eth'];
dataSources.map(async dataSource => {
  const client = new OCAPClient({ dataSource });
  try {
    const result = await client.doRawQuery(introspectionQuery);
    if (result.__schema) {
      const schemaFile = path.join(__dirname, '../src/schema', `${dataSource}.json`);
      const schemaJson = JSON.stringify(result.__schema, true, '  ');
      fs.writeFileSync(schemaFile, schemaJson);
      console.log(`${dataSource} schema update success`, schemaFile);
    } else {
      console.log(`${dataSource} schema fetch failure`);
    }
  } catch (err) {
    console.error(err);
    console.log(`${dataSource} schema update error`);
  }
});
