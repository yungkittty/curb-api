const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const { expect } = chai;
chai.use(chaiHttp);

describe('managing accounts', () => {
  describe('create a new account', () => {
    it('should responds with status 200', async () => {
      try {
        const response = await chai
          .request(app)
          .post('/sign-up')
          // .type('json')
          .set('content-type', 'application/json')
          .send({ email: 'test111@gmail.com', password: 'AA', name: 'Test11' })
          .end((error, res) => {
            console.log(error);
            expect(res).to.have.status(200);
            // done();
          });
      } catch (error) {
        console.log(error);
      }
    });
  });
});

// describe('create an account with same email as a registered user', () => {
//   it('should responds with status 400', (done) => {
//     chai
//       .request(app)
//       .post('/sign-up')
//       .set('content-type', 'application/json')
//       .send({ email: 'test111@gmail.com', password: 'AA', name: 'Test11' })
//       .end((error, res) => {
//         console.log(error);
//         expect(res).to.have.status(400);
//         done();
//       });
//   });
// });
