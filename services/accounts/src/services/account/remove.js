const axios = require('axios');
const Account = require('../../models/account');
const { ApiError, OtherServiceError } = require('../../configurations/error');

async function remove(id, token) {
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNT_NOT_FOUND');
  const response = await axios({
    method: 'delete',
    url: `http://curb-users:4000/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    validateStatus: undefined
  });
  if (response.status !== 200) throw new OtherServiceError('OTHER_SERVICE');
  await Account.deleteOne({ _id: id });
  return account;
}

module.exports = remove;
