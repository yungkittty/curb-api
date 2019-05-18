const chai = require('chai');
const mongoose = require('mongoose');
const Account = require('../../../src/models/account');
const read = require('../../../src/services/account/read');

const { expect } = chai;

describe('Test service read', () => {
  before(async () => {
    const newAccount = new Account({
      _id: mongoose.Types.ObjectId('5cb1a7acc7cec6001e0d236c'),
      email: 'testRead@gmail.com',
      password: 'AAAA',
      active: true,
      dateCreation: new Date()
    });
    await newAccount.save();
  });

  describe('Read info from existing account', () => {
    it('should respond with an object', async () => {
      const response = await read('5cb1a7acc7cec6001e0d236c');
      expect(response).to.be.an('object');
    });
  });

  describe('Read info from inexisting account', () => {
    it('should throw an error', async () => {
      try {
        await read('5cb198cec0c026001e784472');
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  describe('Read info from invalid format id', () => {
    it('should throw an error', async () => {
      try {
        await read('11111');
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
