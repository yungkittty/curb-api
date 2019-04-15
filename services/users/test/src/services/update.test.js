const chai = require('chai');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const update = require('../../../src/services/update');

const { expect } = chai;

const updateField = { password: '12345', email: 'fail@gmail.com' };

describe('Test service update', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TEST_SERVICE_UPDATE',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Updating field of an existing user', () => {
    it('should respond with an object', async () => {
      const response = await update('5cb198cec0c026001e784472', updateField);
      expect(response).to.be.an('object');
    });
  });

  describe('Update field of an inexisting user', () => {
    it('should throw an error', async () => {
      try {
        await update('5cb198cec0c026001e784470', updateField);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
        // expect(error.name).to.match('ApiError');
        // expect(error.code).to.match('USERS_NOT_FOUND');
      }
    });
  });

  describe('Update field existing user but no json data', () => {
    it('should throw an error', async () => {
      try {
        await update('5cb198cec0c026001e784472');
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
