const chai = require('chai');
const create = require('../../../src/services/account/create');

const newAccount = {
  _id: '5cb1a7acc7cec6001e0d236c',
  name: 'TEST_SERVICE_CREATE',
  email: 'accountsCreate@gmail.com',
  password: 'AAAA'
};
const { expect } = chai;

describe('Test service create', () => {
  describe('Create new user with valid parameters', () => {
    it('should respond with an object', async () => {
      const response = await create(newAccount);
      expect(response).to.be.an('string');
    });
  });

  describe('Create same user', () => {
    it('should throw an error', async () => {
      try {
        await create(newAccount);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });
});
