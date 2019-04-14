const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
const User = require('../../../src/models/user');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing avatar users', () => {
  before(async () => {
    const newUser = new User({
      _id: mongoose.Types.ObjectId('5cb198cec0c026001e784472'),
      name: 'TestAvatar',
      dateCreation: new Date()
    });
    await newUser.save();
  });

  describe('posting an new avatar on existing user', () => {
    it('should responds with status 200', async () => {
      const response = await chai
        .request(app)
        .post('/avatars/5cb198cec0c026001e784472')
        .set('content-type', 'application/json')
        .send({ avatarUrl: '/contents/default/avatars/users/medium.png' });
      expect(response).to.have.status(200);
    });
  });

  describe('posting an new avatar on inexisting user', () => {
    it('should responds with status 400', async () => {
      const response = await chai
        .request(app)
        .post('/avatars/5ca05ec3befef6001ff308f5')
        .set('content-type', 'application/json')
        .send({ avatarUrl: '/contents/default/avatars/users/medium.png' });
      expect(response).to.have.status(400);
    });
  });

  describe('posting an new avatar without avatarUrl', () => {
    it('should responds with status 400', async () => {
      const response = await chai.request(app).post('/avatars/5cb187fec46d01001ec8646f');
      expect(response).to.have.status(400);
    });
  });

  describe('posting on valid route but without providing id', () => {
    it('should responds with status 404', async () => {
      const response = await chai.request(app).post('/avatars/');
      expect(response).to.have.status(404);
    });
  });

  describe('posting with an invalid format id', () => {
    it('should responds with status 500', async () => {
      const response = await chai
        .request(app)
        .post('/avatars/111111')
        .set('content-type', 'application/json')
        .send({ avatarUrl: '/contents/default/avatars/users/medium.png' });
      expect(response).to.have.status(500);
    });
  });
  after((done) => {
    mongoose.connection.db.dropDatabase();
    done();
  });
});
