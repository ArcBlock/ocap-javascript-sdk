/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const { parse, print } = require('graphql');
const OCAPClient = require('../src/node');

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

  // console.log(map.Queries.map(m => ({ name: m, args: client[m].args }))[0]);

  const paging = { size: 10 };
  const getResultFormat = m => {
    const args = client[m].args;
    const argValues = Object.values(args)
      .filter(x => x.type.kind === 'NON_NULL')
      .reduce((obj, x) => {
        if (x.name === 'paging') {
          obj.paging = paging;
        } else {
          obj[x.name] = x.type.ofType.name.indexOf('String') > -1 ? 'abc' : 123;
        }

        return obj;
      }, {});

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
