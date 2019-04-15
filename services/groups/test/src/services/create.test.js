const chai = require('chai');
const mongoose = require('mongoose');
const create = require('../../../src/services/create');

const { expect } = chai;

const newGroup = {
  creatorId: '5cb410289f3320002071e3ca',
  name: 'SERVICE_CREATE_GROUP',
  status: 'public',
  theme: 'test',
  mediaTypes: 'image'
};

const noNameGroup = {
  creatorId: '5cb410289f3320002071e3ca',
  status: 'public',
  theme: 'test',
  mediaTypes: 'image'
};
const noTypeGroup = {
  creatorId: '5cb410289f3320002071e3ca',
  name: 'SERVICE_CREATE_GROUP',
  status: 'public',
  theme: 'test'
};

const noStatusGroup = {
  creatorId: '5cb410289f3320002071e3ca',
  name: 'SERVICE_CREATE_GROUP',
  theme: 'test',
  mediaTypes: 'image'
};

describe('Test service Create', () => {
  before((done) => {
    mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase();
      done();
    });
  });

  describe('Create group', () => {
    it('should respond with an string', async () => {
      const response = await create(newGroup);
      expect(response).to.be.an('object');
    });
  });

  describe('Create a dupplicate group', () => {
    it('should respond with an string', async () => {
      try {
        await create(newGroup);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  describe('Create group with no name', () => {
    it('should throw error', async () => {
      try {
        await create(noNameGroup);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  describe('Create group without status', () => {
    it('should throw error', async () => {
      try {
        await create(noStatusGroup);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceof(Error);
      }
    });
  });

  describe('Create group without type define', () => {
    it('should throw error', async () => {
      try {
        await create(noTypeGroup);
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
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
