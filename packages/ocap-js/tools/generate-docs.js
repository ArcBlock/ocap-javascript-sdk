/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
// const util = require('util');
const { parse, print } = require('graphql');
const { fakeField, fakeMessage } = require('@arcblock/sdk-util/lib/util');
const OCAPClient = require('../src/node');
// const $inspect = data => util.inspect(data, { depth: 8 });

const genSectionDoc = (title, methods, lang = 'en') => {
  return `
## ${title}
${
    methods.length > 0
      ? methods
          .map(
            method => `
### ${method.name}

#### ${lang === 'en' ? 'Arguments' : '参数列表'}

${
              Object.values(method.args).length
                ? Object.values(method.args)
                    .map(
                      arg =>
                        `* **${arg.name}**, ${
                          arg.type.kind === 'NON_NULL'
                            ? lang === 'en'
                              ? '**required**'
                              : '**必须**'
                            : lang === 'en'
                              ? 'optional'
                              : '可选'
                        }, ${arg.description}`
                    )
                    .join('\n')
                : lang === 'en'
                  ? 'No arguments'
                  : '无需参数'
            }

#### ${lang === 'en' ? 'Raw Query' : '查询串'}

\`\`\`graphql
${print(parse(method.rawQuery))}
\`\`\``
          )
          .join('\n')
      : `\nNo ${title} supported yet.\n`
  }`;
};

const dataSources = ['btc', 'eth'];
dataSources.map(dataSource => {
  const client = new OCAPClient({ dataSource });
  const map = {
    Queries: client.getQueries(),
    Subscriptions: client.getSubscriptions(),
    Mutations: client.getMutations(),
  };

  const { types } = client._getSchema(dataSource);
  const typesMap = types.reduce((map, x) => {
    map[x.name] = x;
    return map;
  }, {});

  const getResultFormat = m => {
    const args = client[m].args;
    const argValues = Object.values(args)
      .filter(x => x.type.kind === 'NON_NULL')
      .reduce((obj, x) => {
        if (x.name === 'paging') {
          obj.paging = { size: 10 };
        }

        if (x.type.ofType.kind === 'SCALAR') {
          obj[x.name] = fakeField(x.type.ofType, typesMap);
        }

        // process input_object
        if (x.type.ofType.kind === 'INPUT_OBJECT') {
          obj[x.name] = fakeMessage(typesMap[x.type.ofType.name], typesMap);
        }

        return obj;
      }, {});
    // if (m === 'sendTransaction') {
    //   $inspect({ m, args, argValues }, { depth: 5 });
    // }

    return client[m].builder(argValues);
  };

  const docs = Object.keys(map).map(x =>
    genSectionDoc(
      x,
      map[x].map(m => ({ name: m, args: client[m].args || {}, rawQuery: getResultFormat(m) }))
    )
  );

  const docsCN = Object.keys(map).map(x =>
    genSectionDoc(
      x,
      map[x].map(m => ({ name: m, args: client[m].args || {}, rawQuery: getResultFormat(m) })),
      'cn'
    )
  );

  const docFile = path.join(__dirname, '../docs', `${dataSource}.md`);
  fs.writeFileSync(
    docFile,
    `# ${dataSource.toUpperCase()} API List

> 中文版文档请猛击 [${dataSource}.cn.md](./${dataSource}.cn.md)

> Raw Query also tells us the shape of the response

## Table of Contents
${docs.join('\n')}`
  );
  console.log('generated docs: ', docFile);

  const docFileCN = path.join(__dirname, '../docs', `${dataSource}.cn.md`);
  fs.writeFileSync(
    docFileCN,
    `# ${dataSource.toUpperCase()} API 列表

> For English documentation please checkout [${dataSource}.md](./${dataSource}.md)

> 查询串其实已经定义了查询结果的数据结构

## Table of Contents

${docsCN.join('\n')}`
  );
  console.log('generated docs: ', docFileCN);
});
