const axios = require('axios');
const Account = require('../../models/account');

async function remove(id, token) {
  const account = await Account.findById(id);
  if (!account) throw new Error('Inexistent resource');
  await Account.deleteOne({ _id: id });
  // TODO
  // const response = await axios({
  //   method: 'delete',
  //   url: 'http://localhost:3000/users',
  //   params: {
  //     id
  //   },
  //   headers: { Authorization: `Bearer ${token}` },
  //   validateStatus: undefined
  // });
  // if (response.status !== 200) return null;
  return account;
}

module.exports = remove;
