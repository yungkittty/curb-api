const chai = require('chai');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const remove = require('../../../src/services/remove');

const { expect } = chai;

describe('Test service remove', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TEST_SERVICE_REMOVE',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Remove an existing user', () => {
    it('should respond with an object', async () => {
      const response = await remove('5cb198cec0c026001e784472');
      expect(response).to.be.an('object');
    });
  });

  describe('Remove an inexisting user', () => {
    it('should throw an error', async () => {
      try {
        await remove('5cb410289f3320002071e3ca');
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
