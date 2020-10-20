const _ = require('lodash');
const stringify = require('fast-json-stable-stringify');
const fs = require('fs');

const json = require('../zapper.tokenlist.json');

// Sorts the tokens by name, and stabilizes the JSON key order
const process = async () => {
  const tokens = json.tokens;
  const sorted = _.sortBy(tokens, t => t.name);
  fs.writeFileSync('./zapper.tokenlist.json', stringify({ ...json, tokens: sorted }), 'utf-8');
};

process().catch(err => {
  // eslint-disable-next-line no-console
  console.log('process.js - Failed: ', err.message);
});
