// const chai = require('chai');
// const mongoose = require('mongoose');
// const Read = require('../../../src/services/read');

// const { expect } = chai;

// const validUser = { id: '5cb1a7acc7cec6001e0d236c', name: 'TEST_Service_Create' };

// describe('Test service read', () => {
//   before((done) => {
//     mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
//       mongoose.connection.db.dropDatabase();
//       done();
//     });
//   });

//   describe('Read info from existing user', () => {
//     it('should respond with an object', async () => {
//       const response = await Read(validUser);
//       expect(response).to.be.an('object');
//     });
//   });

//   //   describe('Create new user with existing id new name', () => {
//   //     it('should throw an error', async () => {
//   //       expect(Create.bind(Create, sameIdNotName)).to.throw(Error);
//   //     });
//   //   });

//   //   describe('Create new user without name provided', () => {
//   //     it('should throw an error', async () => {
//   //       expect(Create.bind(Create, userWithoutName)).to.throw(Error);
//   //     });
//   //   });

//   after((done) => {
//     mongoose.connection.db.dropDatabase();
//     done();
//   });
// });
