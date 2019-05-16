const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing to create accounts', () => {
  before((done) => {
    mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase();
      done();
    });
  });

  describe('create a new account', () => {
    it('should responds with status 200', async () => {
      const response = await chai
        .request(app)
        .post('/sign-up')
        .set('content-type', 'application/json')
        .send({ email: 'test@gmail.com', password: 'AA', name: 'Test' });
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('id');
    });
  });

  describe('create an account with same email as a registered user', async () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/sign-up')
        .set('content-type', 'application/json')
        .send({ email: 'test@gmail.com', password: 'AA', name: 'Test11' });
      expect(response).to.have.status(400);
    });
  });

  describe('create another new account', () => {
    it('should responds with status 200', async () => {
      const response = await chai
        .request(app)
        .post('/sign-up')
        .set('content-type', 'application/json')
        .send({ email: 'secondAccount@gmail.com', password: 'AA', name: 'SecondAccount' });
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('id');
    });
  });

  describe('create an account without email provided', async () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/sign-up')
        .set('content-type', 'application/json')
        .send({ password: 'AA', name: 'Test' });
      expect(response).to.have.status(400);
    });
  });
  describe('create an account without password provided', async () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/sign-up')
        .set('content-type', 'application/json')
        .send({ email: 'test@gmail.com', name: 'Test' });
      expect(response).to.have.status(400);
    });
  });
  describe('create an account without name provided', async () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/sign-up')
        .set('content-type', 'application/json')
        .send({ email: 'test@gmail.com', password: 'AA' });
      expect(response).to.have.status(400);
    });
  });
});
