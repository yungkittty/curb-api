const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing DELETE user', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb1a7acc7cec6001e0d236c'),
      name: 'TestDelete',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('delete an existing user', () => {
    it('should responds with status 200', async () => {
      const response = await chai.request(app).delete('/5cb1a7acc7cec6001e0d236c');
      expect(response).to.have.status(200);
    });
  });

  describe('delete again the same user', () => {
    it('should responds with status 400', async () => {
      const response = await chai.request(app).delete('/5cb1a7acc7cec6001e0d236c');
      expect(response).to.have.status(400);
    });
  });

  describe('delete an inexisting user', () => {
    it('should responds with status 400', async () => {
      const response = await chai.request(app).delete('/5cb187fec46d01001ec8646f');
      expect(response).to.have.status(400);
    });
  });

  describe('delete an invalid format id', () => {
    it('should responds with status 500', async () => {
      const response = await chai.request(app).delete('/111111');
      expect(response).to.have.status(500);
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
