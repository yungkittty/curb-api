const chai = require('chai');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const avatar = require('../../../src/services/avatar');

const { expect } = chai;

describe('Test service avatar', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TEST_SERVICE_AVATAR',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Chaging avatarUrl of an existing user', () => {
    it('should respond with an object', async () => {
      const response = await avatar('5cb198cec0c026001e784472', 'fake/url/but/service/works');
      expect(response).to.be.an('object');
    });
  });

  describe('Providing inexistant id', () => {
    it('should throw an error', async () => {
      try {
        await avatar('5cb1a7acc7cec6001e0d236c', 'must fail');
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceof(Error);
      }
    });
  });

  describe('Providing bad parameters on existant id', () => {
    it('should throw an error', async () => {
      try {
        await avatar('5cb198cec0c026001e784472');
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceof(Error);
      }
    });
  });

  describe('Providing bad format id', () => {
    it('should throw an error', async () => {
      try {
        await avatar('11111');
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceof(Error);
      }
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
