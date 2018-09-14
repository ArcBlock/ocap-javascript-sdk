/* eslint no-console:"off" */
const fs = require('fs');
const path = require('path');
const { request } = require('graphql-request');
const { introspectionQuery } = require('graphql');
const httpEndpoint = ds => `https://ocap.arcblock.io/api/${ds}`;

const dataSources = ['btc', 'eth'];
dataSources.map(async dataSource => {
  try {
    const result = await request(httpEndpoint(dataSource), introspectionQuery);
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
