const axios = require('axios');
const Account = require('../../models/account');
const { ApiError, OtherServiceError } = require('../../configurations/error');

async function remove(id, token) {
  const account = await Account.findById(id);
  if (!account) throw new ApiError('ACCOUNTS_NOT_FOUND');
  const response = await axios({
    method: 'delete',
    url: `http://curb-users:4000/${id}`,
    withCredentials: true,
    headers: { Cookie: `token=${token}` },
    validateStatus: undefined
  });
  if (response.status !== 200) {
    throw new OtherServiceError(response);
  }
  await Account.deleteOne({ _id: id });
  return account;
}

module.exports = remove;
