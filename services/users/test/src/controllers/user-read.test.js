const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing GET users', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TestRead',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('Operation must succeed, getting information on existing user', () => {
    it('should respond with status 200', async () => {
      const response = await chai.request(app).get('/5cb198cec0c026001e784472');
      expect(response).to.have.status(200);
    });
  });

  describe('Operation must fail, inexisting user', () => {
    it('should respond with status 400', async () => {
      const response = await chai.request(app).get('/5cb1a7acc7cec6001e0d236c');
      expect(response).to.have.status(400);
    });
  });

  describe('Operation must fail, invalid id format', () => {
    it('should respond with status 500', async () => {
      const response = await chai.request(app).get('/11111');
      expect(response).to.have.status(500);
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
