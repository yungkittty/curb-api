// const chai = require('chai');
// const mongoose = require('mongoose');
// const addPost = require('../../../src/services/add-post');

// const { expect } = chai;

// describe('Test service remove', () => {
//   before((done) => {
//     mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true }, () => {
//       mongoose.connection.db.dropDatabase();
//       done();
//     });
//   });

//   describe('Create group', () => {
//     it('should respond with an object', async () => {
//       const response = await addPost('5cb198cec0c026001e784472');
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
