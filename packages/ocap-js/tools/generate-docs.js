/* eslint no-console:"off" */
/* eslint indent:"off" */
const fs = require('fs');
const path = require('path');
const OCAPClient = require('../');

const genSectionDoc = (title, methods) => {
  return `
## ${title}
${
    methods.length > 0
      ? methods
          .map(
            method => `
### ${method.name}

#### Arguments

${
              Object.values(method.args).length
                ? Object.values(method.args)
                    .map(
                      arg =>
                        `* **${arg.name}**, ${
                          arg.type.kind === 'NON_NULL' ? '**required**' : 'optional'
                        }, ${arg.description}`
                    )
                    .join('\n')
                : 'No arguments'
            }

#### Result Format

\`\`\`graphql
${method.result}
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
          obj[x.name] = x.type.ofType.name === 'String' ? 'abc' : 123;
        }

        return obj;
      }, {});

    return client[m].builder(argValues);
  };

  const docs = Object.keys(map).map(x =>
    genSectionDoc(
      x,
      map[x].map(m => ({ name: m, args: client[m].args || {}, result: getResultFormat(m) }))
    )
  );

  const docFile = path.join(__dirname, '../docs', `${dataSource}.md`);
  fs.writeFileSync(docFile, `# ${dataSource.toUpperCase()} API List\n ${docs.join('\n')}`);
  console.log('generated docs: ', docFile);
});
