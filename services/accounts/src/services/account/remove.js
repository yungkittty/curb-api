const axios = require('axios');
const Account = require('../../models/account');

async function remove(ip, id, token) {
  const account = await Account.findById(id);
  if (!account) throw new Error('Inexistent resource');
  const response = await axios({
    method: 'delete',
    url: `http://${ip}:4000/users/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    validateStatus: undefined
  });
  if (response.status !== 200) return null;
  await Account.deleteOne({ _id: id });
  return account;
}

module.exports = remove;
