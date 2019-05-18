const chai = require('chai');
const mongoose = require('mongoose');
const Account = require('../../../src/models/account');
const logout = require('../../../src/services/account/logout');

const { expect } = chai;

describe('Test service logout', () => {
  before(async () => {
    const newAccount = new Account({
      _id: mongoose.Types.ObjectId('5cb1a7acc7cec6001e0d236c'),
      email: 'testlogout@gmail.com',
      password: 'AAAA',
      active: true,
      dateCreation: new Date()
    });
    await newAccount.save();
  });

  describe('Logout from existing account', () => {
    it('should respond with an object', async () => {
      const response = await logout('5cb1a7acc7cec6001e0d236c');
      expect(response).to.be.an('object');
    });
  });

  describe('Logout from inexisting account', () => {
    it('should throw an error', async () => {
      try {
        await logout('5cb198cec0c026001e784472');
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  describe('Logout from invalid format id', () => {
    it('should throw an error', async () => {
      try {
        await logout('11111');
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
