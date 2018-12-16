const axios = require('axios');
const Account = require('../../models/account');

async function create(account) {
  const newAccount = new Account({
    name: account.name,
    email: account.email,
    password: account.password
  });
  const saved = await newAccount.save();
  if (!saved) return null;
  const response = await axios({
    method: 'post',
    url: 'http://172.18.0.6:3000/users',
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      name: account.name,
      id: saved._id.toString()
    }
  });
  if (response.status !== 200) return null;
  return response.data.id;
}

module.exports = create;
