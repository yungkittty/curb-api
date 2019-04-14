const chai = require('chai');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const Remove = require('../../../src/services/remove');

const { expect } = chai;

describe('Test service remove', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TestRemove',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Remove an existing user', () => {
    it('should respond with an object', async () => {
      const response = await Remove('5cb198cec0c026001e784472');
      expect(response).to.be.an('object');
    });
  });

  //   describe('Create new user with existing id new name', () => {
  //     it('should throw an error', async () => {
  //       expect(Create.bind(Create, sameIdNotName)).to.throw(Error);
  //     });
  //   });

  //   describe('Create new user without name provided', () => {
  //     it('should throw an error', async () => {
  //       expect(Create.bind(Create, userWithoutName)).to.throw(Error);
  //     });
  //   });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
