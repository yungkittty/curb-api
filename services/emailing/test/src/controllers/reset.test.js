const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing EMAILING reset', () => {
  describe('Reseting password', () => {
    it('should responds with status 200', async () => {
      const response = await chai
        .request(app)
        .post('/reset')
        .set('content-type', 'application/json')
        .send({ email: 'resetPassword@gmail.com' });
      expect(response).to.have.status(200);
    });
  });
});
