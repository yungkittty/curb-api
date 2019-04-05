const axios = require('axios');
const Account = require('../../models/account');
const { OtherServiceError } = require('../../configurations/error');

async function callUserCreate(name, id) {
  const response = await axios({
    method: 'post',
    withCredentials: true,
    url: 'http://curb-users:4000/',
    validateStatus: undefined,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name,
      id
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
}

async function callEmailVerification(id) {
  const response = await axios({
    method: 'post',
    url: 'http://curb-emailing:4000/verification',
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      id
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
}

async function create(account) {
  const newAccount = new Account({
    name: account.name,
    email: account.email,
    password: account.password
  });
  await callUserCreate(account.name, newAccount._id.toString());
  await newAccount.save();
  await callEmailVerification(newAccount._id.toString());
  return newAccount._id.toString();
}

module.exports = create;
