const { print, parse } = require('graphql');

/**
 * Make a field filter fn
 *
 * @param {*} kind
 */
const getTypeFilter = kinds => x => {
  if (x.type.ofType) {
    return kinds.includes(x.type.ofType.kind);
  }
  return kinds.includes(x.type.kind);
};

/**
 * get fields and its dependencies based on schema
 *
 * @param {*} type
 * @param {*} depth
 * @param {*} map
 * @returns
 */
const resolveFieldTree = (type, depth, map, maxDepth) => {
  const { fields } = type;
  const scalarFields = (fields || [])
    .filter(getTypeFilter(['SCALAR', 'ENUM']))
    .map(x => ({ name: x.name, kind: x.kind }));

  if (depth >= maxDepth) {
    return { scalar: scalarFields.filter(x => Boolean(x.name)) };
  }

  const objectFields = (fields || []).filter(getTypeFilter(['OBJECT'])).map(x => {
    const subType = x.type.ofType ? x.type.ofType.name : x.type.name;
    return {
      type: x.type.kind,
      name: x.name,
      args: (x.args || []).reduce((args, arg) => {
        args[arg.name] = arg;
        return args;
      }, {}),
      fields: resolveFieldTree(map[subType], depth + 1, map, maxDepth),
    };
  });

  const unionFields = (fields || []).filter(getTypeFilter(['UNION'])).map(x => {
    const subType = x.type.ofType ? x.type.ofType.name : x.type.name;
    return {
      type: x.type.kind,
      name: x.name,
      possibleTypes: map[subType].possibleTypes.map(t => ({
        name: t.name,
        fields: resolveFieldTree(map[t.name], depth + 1, map, maxDepth),
      })),
    };
  });

  scalarFields.sort((a, b) => a.name - b.name);
  objectFields.sort((a, b) => a.name - b.name);
  unionFields.sort((a, b) => a.name - b.name);

  return {
    scalar: scalarFields,
    object: objectFields,
    union: unionFields,
  };
};

/**
 * make graphql query string based on field list
 *
 * @param {*} fields
 * @param {*} ignoreFields
 * @returns string
 */
/* eslint-disable indent */
const makeQuery = (fields, ignoreFields, argValues = {}) => `
  ${fields.scalar
    .filter(x => !ignoreFields.some(y => (y instanceof RegExp ? y.test(x.path) : y === x.path)))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(x => x.name)
    .join('\n')}
  ${
    Array.isArray(fields.object)
      ? fields.object
          .filter(
            x =>
              (x.fields.scalar || []).length ||
              (x.fields.object || []).length ||
              (x.fields.union || []).length
          )
          .filter(x => ignoreFields.includes(x.path) === false)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(x => {
            const argStr = Object.keys(x.args).length
              ? `${formatArgs(argValues[x.path] || {}, x.args)}`
              : '';
            const selection = makeQuery(x.fields, ignoreFields, argValues).trim();
            const subQueryStr = `${x.name} ${argStr ? `(${argStr})` : ''} ${
              selection ? `{${selection}}` : ''
            }`;

            return subQueryStr;
          })
          .join('\n')
      : ''
  }
  ${
    Array.isArray(fields.union) && fields.union.filter(x => x.possibleTypes.length).length
      ? fields.union
          .filter(x => x.possibleTypes.length)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(x => {
            const subQueryStr = `${x.name} {
              __typename
              ${x.possibleTypes.map(
                t => `... on ${t.name} {
                ${makeQuery(t.fields, ignoreFields, argValues).trim()}
              }`
              )}
            }`;

            return subQueryStr;
          })
          .join('\n')
      : ''
  }
  `;
/* eslint-enable indent */

/**
 * assemble graphql params
 *
 * FIXME: the specs used here is not a full set of possible specs in keys contained in values
 *
 * @param {*} values
 * @param {*} specs
 * @returns string
 */
const formatArgs = (values, specs = {}) => {
  if (!values) {
    throw new Error('Empty args when generating graphql query');
  }

  const missingArgs = [];
  const isRequiredMissing = Object.keys(specs).some(x => {
    const isMissing = specs[x].type.kind === 'NON_NULL' && typeof values[x] === 'undefined';
    if (isMissing) {
      missingArgs.push(x);
    }

    return isMissing;
  });
  if (isRequiredMissing) {
    const message = `Missing required args {${missingArgs.toString()}} when generating query`;
    // console.error(message, values, specs); // eslint-disable-line
    throw new Error(message);
  }

  const formatArgValue = v => {
    if (Array.isArray(v)) {
      return `[${v.map(x => formatArgValue(x)).join(', ')}]`;
    }

    if (typeof v === 'number') {
      return v;
    }

    // TODO: enum types not supported yet
    return `"${v}"`;
  };

  const formatScalarArg = (type, value) => {
    if (['String', 'DateTime', 'ID', 'HexString'].includes(type)) {
      return `"${value.toString()}"`;
    } else {
      return value.toString();
    }
  };

  const formatObjectArg = arg => {
    return `{ ${Object.keys(arg)
      .map(key => `${key}: ${formatArgValue(arg[key])}`)
      .join(', ')} }`;
  };

  return Object.keys(values || {})
    .filter(x => specs[x])
    .map(x => {
      const spec = specs[x];
      const type = spec.type.ofType ? spec.type.ofType.name : spec.type.name;
      const kind = spec.type.ofType ? spec.type.ofType.kind : spec.type.kind;
      let value = '';
      if (spec.kind === 'LIST' && Array.isArray(values[x])) {
        value = `[${values[x]
          .map(v => {
            if (typeof v === 'object') {
              return formatObjectArg(v);
            }
            return formatArgValue(v);
          })
          .join(',')}]`;
      } else if (kind === 'SCALAR') {
        value = formatScalarArg(type, values[x]);
      } else {
        value = formatObjectArg(values[x]);
      }

      return `${x}: ${value}`;
    })
    .join(', ');
};

/**
 * Add path for nested objects
 *
 * @param {*} fields
 * @param {string} [prefix='']
 */
const addFieldsPath = (fields, prefix = '') => {
  if (Array.isArray(fields.scalar)) {
    fields.scalar.forEach(x => {
      x.path = [prefix, x.name].filter(Boolean).join('.');
    });
  }

  if (Array.isArray(fields.object)) {
    fields.object.forEach(x => {
      x.path = [prefix, x.name].filter(Boolean).join('.');
      addFieldsPath(x.fields, x.path);
    });
  }
};

/**
 * generate methods for all queries found on RootQueryType
 *
 * @param {*} { types, rootName, ignoreFields, type }
 * @returns <queryName => queryGeneratorFn>
 */
const getGraphQLBuilders = ({ types, rootName, ignoreFields, type, maxDepth = 4 }) => {
  const map = types.reduce((map, x) => {
    if (x.name.startsWith('__') === false) {
      map[x.name] = x;
    }
    return map;
  }, {});

  const prefix = {
    query: '',
    mutation: 'mutation',
    subscription: 'subscription',
  }[type];

  return map[rootName].fields.reduce((fns, x) => {
    const fields = resolveFieldTree(map[x.type.name], 0, map, maxDepth || 4);

    addFieldsPath(fields);

    const argSpecs = x.args.reduce((obj, a) => {
      obj[a.name] = a;
      return obj;
    }, {});

    const globalIgnore = typeof ignoreFields === 'function' ? ignoreFields(x) : ignoreFields || [];

    /* eslint-disable indent */
    const fn = (argValues = {}, _ignoreFields = []) => {
      const argStr = x.args.length ? `${formatArgs(argValues, argSpecs)}` : '';
      const selection = makeQuery(
        fields,
        [].concat(_ignoreFields || []).concat(globalIgnore),
        argValues
      ).trim();

      const queryStr = `${prefix}{${x.name}${argStr ? `(${argStr})` : ''}${
        selection ? `{${selection}}` : ''
      }}`;

      try {
        return print(parse(queryStr));
      } catch (err) {
        // eslint-disable-next-line
        console.error('GraphQLBuilder Error:', queryStr);
        throw err;
      }
    };
    /* eslint-enable indent */

    fn.args = argSpecs;
    fns[x.name] = fn;
    return fns;
  }, {});
};

const getQueryBuilders = ({ types, rootName, ignoreFields, maxDepth }) =>
  getGraphQLBuilders({ types, rootName, ignoreFields, maxDepth, type: 'query' });

const getMutationBuilders = ({ types, rootName, ignoreFields, maxDepth }) =>
  getGraphQLBuilders({ types, rootName, ignoreFields, maxDepth, type: 'mutation' });

const getSubscriptionBuilders = ({ types, rootName, ignoreFields, maxDepth }) =>
  getGraphQLBuilders({ types, rootName, ignoreFields, maxDepth, type: 'subscription' });

const randomArgs = (spec, types) => {
  const args = {};
  spec.inputFields.forEach(x => {
    // If list, we do not force it to be NON_NULL
    if (x.type.kind === 'LIST') {
      args[x.name] = [randomArgs(types[x.type.ofType.name], types)];
    }

    // NULLABLE fields
    if (x.type.kind === 'SCALAR') {
      args[x.name] = randomArg(x.type, types);
    }

    // NON_NULLABLE fields
    if (x.type.kind === 'NON_NULL') {
      args[x.name] = randomArg(x.type.ofType, types);
    }
  });

  // HACK: required here for single list
  const keys = Object.keys(args);
  if (keys.length === 1 && Array.isArray(args[keys[0]])) {
    return args[keys[0]];
  }

  return args;
};

const randomArg = (field, types) => {
  if (['String', 'HexString'].includes(field.name)) {
    return 'abc';
  }
  if (field.name === 'Boolean') {
    return true;
  }
  if (field.name === 'DateTime') {
    return new Date().toISOString();
  }
  if (['BigNumber', 'Int', 'Float', 'Long'].includes(field.name)) {
    return 123;
  }
  if (field.kind === 'INPUT_OBJECT') {
    return randomArgs(types[field.name], types);
  }
};

module.exports = {
  getQueryBuilders,
  getMutationBuilders,
  getSubscriptionBuilders,
  getGraphQLBuilders,
  getTypeFilter,
  resolveFieldTree,
  makeQuery,
  formatArgs,
  randomArgs,
  randomArg,
};
