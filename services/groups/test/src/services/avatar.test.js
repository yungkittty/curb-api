const chai = require('chai');
const mongoose = require('mongoose');
const avatar = require('../../../src/services/avatar');
const Group = require('../../../src/models/group');

const { expect } = chai;

describe('Test service avatar', () => {
  before(async () => {
    const newGroup = new Group({
      _id: '5cb1a7acc7cec6001e0d236c',
      creatorId: '5cb410289f3320002071e3ca',
      name: 'SERVICE_AVATAR_GROUP',
      status: 'public',
      theme: 'test',
      mediaTypes: 'image'
    });
    await newGroup.save();
  });

  describe('Chaging avatarUrl of an existing user', () => {
    it('should respond with an object', async () => {
      const response = await avatar('5cb1a7acc7cec6001e0d236c', 'fake/url/but/service/works');
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
