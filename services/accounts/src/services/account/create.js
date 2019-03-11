const axios = require('axios');
const Account = require('../../models/account');
const { OtherServiceError } = require('../../configurations/error');

async function create(account) {
  const newAccount = new Account({
    name: account.name,
    email: account.email,
    password: account.password
  });
  await newAccount.save();
  const response = await axios({
    method: 'post',
    url: 'http://curb-users:4000/',
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      name: account.name,
      id: newAccount._id.toString()
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
  return response.data.id;
}

module.exports = create;
