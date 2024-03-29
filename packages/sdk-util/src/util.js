const isNull = require('lodash.isnull');
const { parse } = require('graphql/language/parser');
const { print } = require('graphql/language/printer');

const getTypeField = (root, key) => {
  if (root.type.ofType) {
    if (root.type.ofType.ofType) {
      if (root.type.ofType.ofType[key]) {
        return root.type.ofType.ofType[key];
      }
    }

    if (root.type.ofType[key]) {
      return root.type.ofType[key];
    }
  }

  return root.type[key] || root[key];
};

/**
 * Make a field filter fn
 *
 * @param {*} kind
 */
const getTypeFilter = kinds => x => {
  if (x.isDeprecated) {
    return false;
  }

  const kind = getTypeField(x, 'kind');
  return kinds.includes(kind);
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
    const subType = getTypeField(x, 'name');
    const kind = getTypeField(x, 'kind');
    return {
      type: kind,
      name: x.name,
      args: (x.args || []).reduce((args, arg) => {
        args[arg.name] = arg;
        return args;
      }, {}),
      fields: resolveFieldTree(map[subType], depth + 1, map, maxDepth),
    };
  });

  const unionFields = (fields || []).filter(getTypeFilter(['UNION'])).map(x => {
    const subType = getTypeField(x, 'name');
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

const shouldIgnore = (fieldPath, blackList) => {
  return blackList.some(x => (x instanceof RegExp ? x.test(fieldPath) : x === fieldPath));
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
    .filter(x => shouldIgnore(x.path, ignoreFields) === false)
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
          .filter(x => shouldIgnore(x.path, ignoreFields) === false)
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
          .filter(x => shouldIgnore(x.path, ignoreFields) === false)
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(x => {
            const subQueryStr = `${x.name} {
              __typename
              ${x.possibleTypes.filter(t => !ignoreFields.includes(t.name)).map(
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
    const isMissing =
      getTypeField(specs[x], 'kind') === 'NON_NULL' && typeof values[x] === 'undefined';
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

  const formatScalarArg = (type, value) => {
    // console.log('formatScalarArg', { type, value });
    if (Array.isArray(value)) {
      return `[${value.map(v => formatScalarArg(type, v)).join(',')}]`;
    }

    // escape slash(\) and double quotes (")
    if ('String' === type) {
      const container = isNull(value) ? null : String(value).includes('\n') ? '"""' : '"';

      return isNull(value) ? null : `${container}${value
        .toString()
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')}${container}`;
    }

    if (['DateTime', 'ID', 'HexString'].includes(type)) {
      return isNull(value) ? null : `"${value.toString()}"`;
    }

    if (['BigNumber', 'Int', 'Float', 'Long', 'Boolean'].includes(type)) {
      return value;
    }

    return isNull(value) ? value : value.toString();
  };

  const ensureList = v => (Array.isArray(v) ? v : [v]);

  const formatArg = (value, spec) => {
    const type = getTypeField(spec, 'name');
    const kind = getTypeField(spec, 'kind');
    const fields = getTypeField(spec, 'fields');

    let result = '';
    if (spec.kind === 'LIST') {
      result = `[${ensureList(value)
        .map(v => {
          if (kind === 'SCALAR') {
            return formatScalarArg(type, v);
          }
          if (fields) {
            return `{${formatArgs(v, fields)}}`;
          }

          // eslint-disable-next-line
          console.error('formatArgs: unrecognized type in list', {
            value,
            spec,
            type,
            kind,
            fields,
          });
        })
        .join(',')}]`;
    } else if (spec.type.kind === 'LIST') {
      result = `[${ensureList(value)
        .map(v => {
          if (spec.type.ofType.kind === 'SCALAR') {
            return formatScalarArg(spec.type.ofType.name, v);
          }
          if (spec.type.ofType.fields) {
            return `{${formatArgs(v, spec.type.ofType.fields)}}`;
          }

          if (kind === 'SCALAR') {
            return formatScalarArg(type, v);
          }
          if (fields) {
            return `{${formatArgs(v, fields)}}`;
          }

          // eslint-disable-next-line
          console.error('formatArgs: unrecognized type in list', {
            value,
            spec,
            type,
            kind,
            fields,
          });
        })
        .join(',')}]`;
    } else if (kind === 'SCALAR') {
      result = formatScalarArg(type, value);
    } else if (kind === 'ENUM') {
      result = value;
    } else if (kind === 'INPUT_OBJECT') {
      result = `{${formatArgs(value, fields)}}`;
    }

    return result;
  };

  return Object.keys(values || {})
    .filter(x => specs[x])
    .map(x => `${x}: ${formatArg(values[x], specs[x])}`)
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

  if (Array.isArray(fields.union)) {
    fields.union.forEach(x => {
      x.path = [prefix, x.name].filter(Boolean).join('.');
    });
  }
};

/**
 * Extract nested argument specs, that can be used when formatting arguments
 *
 * @param {*} args
 * @param {*} types
 * @returns Object
 */
const extractArgSpecs = (args, types) => {
  return args.reduce((obj, x) => {
    obj[x.name] = x;
    const name = getTypeField(x, 'name');
    const kind = getTypeField(x, 'kind');

    if (kind === 'INPUT_OBJECT' && Array.isArray(types[name].inputFields)) {
      x.fields = types[name].inputFields.reduce((acc, f) => {
        acc[f.name] = f;
        const subName = getTypeField(f, 'name');
        const subKind = getTypeField(f, 'kind');

        if (subKind === 'INPUT_OBJECT') {
          const subSpecs = extractArgSpecs(types[subName].inputFields, types);
          if (f.type.kind === 'LIST') {
            acc[f.name].type.ofType.fields = subSpecs;
          } else {
            acc[f.name].type.fields = subSpecs;
          }
        }

        return acc;
      }, {});
    }
    return obj;
  }, {});
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

    const argSpecs = extractArgSpecs(x.args, map);
    const globalIgnore = typeof ignoreFields === 'function' ? ignoreFields(x) : ignoreFields || [];

    /* eslint-disable indent */
    const fn = (argValues = {}, _ignoreFields = []) => {
      // console.log(require('util').inspect(argSpecs, { depth: 8 }));

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

/**
 * Generate a fake query arg object, or fake response object
 *
 * @param {object} spec - the spec of the object to fake
 * @param {object} types - the whole type tree from graphql schema
 * @param {string} [fieldSource='inputFields']
 * @returns {object} the fake message
 */
const fakeMessage = (spec, types, fieldSource = 'inputFields') => {
  const args = {};
  if (!Array.isArray(spec[fieldSource])) {
    return fakeField(spec, types, fieldSource);
  }

  spec[fieldSource].forEach(x => {
    // If list, we do not force it to be NON_NULL
    // prettier-ignore
    switch (x.type.kind) {
    case 'LIST':
      args[x.name] = [fakeMessage(types[x.type.ofType.name], types, fieldSource)];
      break;
    case 'SCALAR':
      args[x.name] = fakeField(x.type, types, fieldSource);
      break;
    case 'NON_NULL':
      args[x.name] = fakeField(x.type.ofType, types, fieldSource);
      break;
    case 'OBJECT':
      args[x.name] = fakeField(types[x.type.name], types, fieldSource);
      break;
    case 'ENUM':
      args[x.name] = fakeField(types[x.type.name], types, fieldSource);
      break;
    default:
      break;
    }
  });

  // HACK: required here for single list
  const keys = Object.keys(args);
  if (keys.length === 1 && Array.isArray(args[keys[0]])) {
    return args[keys[0]];
  }

  return args;
};

const fakeField = (field, types, fieldSource) => {
  if (['String', 'HexString'].includes(field.name)) {
    return 'abc';
  }
  if (field.name === 'Boolean') {
    return true;
  }
  if (field.name === 'DateTime') {
    return new Date('2019-04-29').toISOString();
  }
  if (['BigNumber', 'Int', 'Float', 'Long'].includes(field.name)) {
    return 123;
  }
  if (field.kind === 'ENUM') {
    return field.enumValues[0].name;
  }
  if (['INPUT_OBJECT', 'OBJECT'].includes(field.kind)) {
    return fakeMessage(types[field.name], types, fieldSource);
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
  extractArgSpecs,
  formatArgs,
  fakeMessage,
  fakeField,
};
