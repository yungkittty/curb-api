const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('managing users', () => {
  describe('create a new user', () => {
    it('should responds with status 200', (done) => {
      chai
        .request(app)
        .post('/')
        .type('json')
        // .set('content-type', 'application/json')
        .send({ id: 'userId', name: 'userName' }) // to do remplacer userId & userName
        .end((err, res) => {
          console.log(err);
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
