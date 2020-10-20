const Ajv = require('ajv');
const { schema } = require('@uniswap/token-lists');

const data = require('../zapper.tokenlist.json');

const ajv = new Ajv();
const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.log('Invalid schema!\n', validate.errors)
  process.exit(1);
}