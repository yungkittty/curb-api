const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing to activate accounts', () => {
  describe('activating an new account', async () => {
    it('should response with status 200', async () => {
      const response = await chai
        .request(app)
        .post('/activate/id')
        .set('content-type', 'application/json');
      expect(response).to.have.status(200);
    });
  });
});
