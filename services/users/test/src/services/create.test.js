const chai = require('chai');
const mongoose = require('mongoose');
const Create = require('../../../src/services/create');

const validUser = { id: '5cb1a7acc7cec6001e0d236c', name: 'TEST_SERVICE_CREATE' };
const sameIdNotName = { id: '5cb1a7acc7cec6001e0d236c', name: 'ANOTHER_NAME' };
const userWithoutName = { id: '5cb198cec0c026001e784472' };
const { expect } = chai;

describe('Test service create', () => {
  before((done) => {
    mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase();
      done();
    });
  });

  describe('Create new user with valid parameters', () => {
    it('should respond with an object', async () => {
      const response = await Create(validUser);
      expect(response).to.be.an('object');
    });
  });

  describe('Create new user with existing id new name', () => {
    it('should throw an error', async () => {
      try {
        await Create(sameIdNotName);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  describe('Create new user without name provided', () => {
    it('should throw an error', async () => {
      try {
        await Create(userWithoutName);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
