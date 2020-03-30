## 0.26.0 (March 30, 2020)
  - update readme

## 0.25.0 (January 14, 2020)
  - feat: support batch query
  - update readme

## 0.24.0 (August 27, 2019)

- fix: support ignore union type
- update readme

## 0.23.0 (July 22, 2019)

- chore: allow exclude union type by name when make query
- update readme

## 0.22.0 (July 15, 2019)

- chore: update readme with new badge

## 0.21.2 (July 15, 2019)

- chore: trigger cnpm sync on npm publish

## 0.21.1 (June 18, 2019)

- chore: update debug dependency version
- update readme

## 0.21.0 (May 31, 2019)

- chore: upgrade axios to fix security risk
- update readme

## 0.20.0 (May 16, 2019)

- chore: donot include deprecated fields in generated query
- update readme

## 0.19.7 (May 08, 2019)

- chore: update license
- update readme

## 0.19.6 (April 29, 2019)

- fix: fakeMessage not handling list of scalar types correctly
- update readme

## 0.19.5 (April 29, 2019)

- chore: update randomArgs usage
- feat: support fakeMessage for both arguments and responses
- feat: try to implement random result feature
- v0.19.4

## 0.19.4 (March 20, 2019)

- chore: reduce bundle size
- update readme

## 0.19.3 (March 01, 2019)

## 0.19.2 (March 01, 2019)

- fix: better support to format arbitary arguments
- chore: try to support union type
- update readme

## 0.19.1 (February 23, 2019)

- fix: list scalar args are not properly formatted
- update readme

## 0.19.0 (February 22, 2019)

- chore: upgrade graphql from v0.13.2 to v14.1.1
- update readme

## 0.18.2 (February 20, 2019)

- feat: support custom maxQueryDepth when generate query
- update readme

## 0.18.1 (February 19, 2019)

## 0.18.0 (February 19, 2019)

- chore: add more test case, sdk-util branch coverage upto 65.45%
- feat: support union types when generate grapqhl query
- update readme

## 0.17.0 (February 18, 2019)

- feat: wrap query response to save developers a few keys strokes
- update readme

## 0.16.4 (February 15, 2019)

- chore: update schema and default ignore
- update readme

## 0.16.3 (January 28, 2019)

- fix: array fields should be processed first when formatArgs
- update readme

## 0.16.2 (January 28, 2019)

- support asset password when do `sendTransaction`

## 0.16.1 (January 28, 2019)

- feat: move arg random related fns to sdk-util
- chore: add starter kit url
- update readme

## 0.16.0 (January 13, 2019)

- chore: upgrade to latest ocap schema [**Breaking Change**]
- fix: test case
- fix: doc generating script

## 0.15.4 (December 19, 2018)

- (chore): upgrade ocap schema
- update readme

## 0.15.3 (December 17, 2018)

- (feat): wipe xpriv when export xpriv key
- update readme

## 0.15.2 (December 17, 2018)

- (feat): add new command export extended keys from mnemonic
- update readme

## 0.15.1 (December 03, 2018)

- (fix): support complex query variable generating and format
- update readme

## 0.15.0 (November 30, 2018)

- (chore): upgrade ocap schema
- update readme

## 0.14.0 (November 30, 2018)

## 0.13.0 (November 29, 2018)

- (feat): force using latest cli tools
- (feat): add dapp create command
- (chore): format and add hd wallet in genWallet
- update readme

## 0.12.0 (November 13, 2018)

- (chore): upgrade ocap-schema with eth-v2
- (feat): add local env endpoint in schema updating script
- (feat): add local env endpoint in test script
- update readme

## 0.11.1 (November 01, 2018)

- (feat): support new hmac signature spec
- update readme

## 0.11.0 (October 31, 2018)

- (feat): support custom ignoreFields on shortcut methods
- update readme

## 0.10.0 (October 22, 2018)

- (feat): support signed requests with hmac-sha256
- update readme

## 0.9.1 (October 19, 2018)

- (fix): fix ocap-cli release
- update readme

## 0.9.0 (October 19, 2018)

- (feat): add ocap-cli package

## 0.8.5 (October 15, 2018)

- (feat): support custome axios options in \_doRequest methods
- update readme

## 0.8.4 (October 11, 2018)

- (feat): add error handling for graphql response
- update readme

## 0.8.3 (September 27, 2018)

- update docs
- update schema json: new api supported on eth
- make fields sort stable in docs
- update readme

## 0.8.2 (September 25, 2018)

- support regexp in ignoreFields
- update schema
- update docs

## 0.8.1 (September 25, 2018)

- update docs since schema update
- update schema
- update readme

## 0.8.0 (September 15, 2018)

- (chore): update documentation and code samples for ocap-js
- (feature): update ocap-schema to support tokenHistoryPrice api

## 0.7.10 (September 13, 2018)

## 0.7.9 (September 13, 2018)

- (bugfix): code example file error handling
- update readme

## 0.7.8 (September 12, 2018)

- (bugfix): DateTime and ID type not encoded as string in params

## 0.7.7 (September 11, 2018)

- add chinese version for generated docs

## 0.7.6 (September 11, 2018)

- add chinese documentation for ocap js sdk
- remove toc for readme file (#43)
- update readme

## 0.7.5 (September 10, 2018)

- (chore): update bitcoin example file
- (chore): add ignore fields
- (chore): update eth example files
- (bugfix): required arg checking for falsy value
- (bugfix): set default value to empty object for args
- (improve): output missing arg name when required arg missing

## 0.7.4 (September 07, 2018)

- fix folder name for node.js and browser builds
- update readme

## 0.7.3 (September 06, 2018)

- fix prefix arg for subquery pagination
- update readme

## 0.7.2 (September 05, 2018)

- support uppercase eth address
- update readme

## 0.7.1 (September 04, 2018)

- revert ignored fields on `accountByAdderss`
- update readme

## 0.7.0 (September 03, 2018)

- update documentation and code samples for paged subquery
- feature: support paginated query on nested fields
- make watch and rebuild work
- update schema

## 0.6.4 (August 30, 2018)

- fix npm install twice during travis-ci
- update readme

## 0.6.3 (August 30, 2018)

- refactor: make sdk endpoints more flexiable

## 0.6.2 (August 29, 2018)

- fix publish script
- update readme

## 0.6.1 (August 29, 2018)

- remove analytics sdk from public repo
- update readme

## 0.6.0 (August 28, 2018)

- strip 0x from eth params
- fix broken code sample from readme
- update readme

## 0.5.4 (August 28, 2018)

- fix repo url in package.json
- update readme

## 0.5.3 (August 27, 2018)

- update readme with paged queries
- add pagination for shortcut queries
- update readme

## 0.5.2 (August 26, 2018)

- fix license in readme
- update readme

## 0.5.1 (August 26, 2018)

- update ocap-js-sdk readme

## 0.5.0 (August 26, 2018)

- add doRawSubscription support
- update schema
- update readme

## 0.4.0 (August 25, 2018)

- fix example files
- fix schema update script
- update schema
- update readme

> Older versions does not work with latest ocap service schema, please use latest version.

## 0.3.12 (August 23, 2018)

- udpate licence files #18
- update readme

## 0.3.11 (August 23, 2018)

- update readme and updating scripts

## 0.3.10 (August 22, 2018)

- fix socket in react-native
- update readme

## 0.3.9 (August 22, 2018)

- fix sdk subscription
- update documentation
- update readme

## 0.3.8 (August 20, 2018)

## 0.3.7 (August 20, 2018)

- add script to update readme automatically

## 0.3.6 (August 20, 2018)

- fix webpack library target

## 0.3.5 (August 20, 2018)

- make browser bundle umd format

## 0.3.4 (August 20, 2018)

- add browser generation before publish

## 0.3.3 (August 20, 2018)

- use yarn packages to manage monorep dependencies
- cleanup eslint config and gitignore file

## 0.3.2 (August 19, 2018)

- format docs
- analytics api
- bugfix: fix empty selection query
- update docs
- cleanup dependencies
- bugfix: edge case
- remove useless files
- move base client to util

## 0.3.1 (August 18, 2018)

- update docs for ocap-js

## 0.3.0 (August 18, 2018)

- package renaming
- add browser implem for ocap-js
- update gitignore
- refactor build

## 0.2.7 (August 18, 2018)

- use ocap-schema in ocap-node
- add ocap-schema package
- refactor build

## 0.2.6 (August 18, 2018)

## 0.2.2 (August 18, 2018)

## 0.2.1 (August 18, 2018)

- fix ci

## 0.2.0 (August 18, 2018)

- make ci work
