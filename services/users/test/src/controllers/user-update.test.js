const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing PATCH users', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TestUpdate',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Operation must succeed, chaging password', () => {
    it('should respond with status 200', async () => {
      const response = await chai
        .request(app)
        .patch('/5cb198cec0c026001e784472')
        .set('content-type', 'application/json')
        .send({ password: '12345' });
      expect(response).to.have.status(200);
    });
  });

  describe('Operation must fail, inexisting user', () => {
    it('should respond with status 400', async () => {
      const response = await chai
        .request(app)
        .patch('/5cb1a7acc7cec6001e0d236c')
        .set('content-type', 'application/json')
        .send({ password: '12345' });
      expect(response).to.have.status(400);
    });
  });

  describe('Operation must fail, bad format id', () => {
    it('should respond with status 500', async () => {
      const response = await chai
        .request(app)
        .patch('/11111')
        .set('content-type', 'application/json')
        .send({ password: '12345' });
      expect(response).to.have.status(500);
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
