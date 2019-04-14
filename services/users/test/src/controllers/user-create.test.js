const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing create users', () => {
  before((done) => {
    mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
      mongoose.connection.db.dropDatabase();
      done();
    });
  });

  describe('create a new user', () => {
    it('should responds with status 200', async () => {
      const response = await chai
        .request(app)
        .post('/')
        .set('content-type', 'application/json')
        .send({ id: '5ca05ec3befef6001ff308f5', name: 'Test' });
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('id');
    });
  });

  describe('create a new user with an invalid ID', () => {
    it('should responds with status 500', async () => {
      const response = await chai
        .request(app)
        .post('/')
        .set('content-type', 'application/json')
        .send({ id: '11111', name: 'Test' });
      expect(response).to.have.status(500);
    });
  });

  describe('create a new user without ID', () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/')
        .set('content-type', 'application/json')
        .send({ name: 'Test' });
      expect(response).to.have.status(400);
    });
  });

  describe('create a new user without name', () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/')
        .set('content-type', 'application/json')
        .send({ id: '5ca05ec3befef6001ff308f5' });
      expect(response).to.have.status(400);
    });
  });

  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
