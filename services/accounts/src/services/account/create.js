const axios = require('axios');
const Account = require('../../models/account');

async function create(account) {
  const newAccount = new Account({
    name: account.name,
    email: account.email,
    password: account.password
  });
  const response = await axios({
    method: 'post',
    url: `http://curb-users:4000/`,
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      name: account.name,
      id: newAccount._id.toString()
    }
  });
  if (response.status !== 200) return null;
  const saved = await newAccount.save();
  if (!saved) return null;
  return response.data.id;
}

module.exports = create;
