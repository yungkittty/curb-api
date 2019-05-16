const chai = require('chai');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const read = require('../../../src/services/read');

const { expect } = chai;

describe('Test service read', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb1a7acc7cec6001e0d236c'),
      name: 'TEST_Service_Read',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Read info from existing user', () => {
    it('should respond with an object', async () => {
      const response = await read('5cb1a7acc7cec6001e0d236c');
      expect(response).to.be.an('object');
    });
  });

  describe('Read info from inexisting user', () => {
    it('should throw an error', async () => {
      try {
        await read('5cb198cec0c026001e784472');
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
