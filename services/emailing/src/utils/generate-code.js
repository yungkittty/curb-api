const randtoken = require('rand-token');
const generatorConfig = require('../configurations/token');

// Code generation for reseting password and email verification
async function generateCode() {
  const code = await randtoken.generator(generatorConfig).generate(6);
  return code;
}

module.exports = generateCode;
