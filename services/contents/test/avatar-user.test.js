const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs-extra');
const app = require('../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('managing avatars', () => {
  describe('upload user avatar', () => {
    it('should responds with status 200', (done) => {
      chai
        .request(app)
        .put('https://localhost:4000/contents/users/:userid') // to do remplacer userid
        .attach('imageField', fs.readFile('./test-img/monkas.jpg'), 'monkas.jpg')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('upload group avatar', () => {
    it('has to change group avatar', () => {});
  });
});
