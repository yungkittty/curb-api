const chai = require('chai');
const mongoose = require('mongoose');
const contentCreate = require('../../../src/services/content-create');

const { expect } = chai;

describe('Test service create', () => {
  before((done) => {
    mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase();
      done();
    });
  });

  describe('Create new content with valid parameters', () => {
    it('should respond with an object', async () => {
      const response = await contentCreate(
        'image',
        '5cb1a7acc7cec6001e0d236c',
        '5cb198cec0c026001e784472',
        'test'
      );
      expect(response).to.be.an('object');
    });
  });

  describe('Create new content without parameters', () => {
    it('should throw an error', async () => {
      try {
        await contentCreate();
        expect.fail();
      } catch (error) {
        expect(error).to.be.instanceOf(Error);
      }
    });
  });

  describe('Create new content without data provided', () => {
    it('should throw an error', async () => {
      try {
        await contentCreate('image', '5cb1a7acc7cec6001e0d236c', '5cb198cec0c026001e784472');
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
