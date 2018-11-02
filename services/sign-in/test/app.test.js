require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe(`${process.env.SERVICE_NAME} service`, () => {
  describe('Basic test', () => {
    it('should responds with status 200', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should responds with the service name', (done) => {
      chai
        .request(app)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal(`${process.env.SERVICE_NAME} endpoint`);
          done();
        });
    });
  });
});
