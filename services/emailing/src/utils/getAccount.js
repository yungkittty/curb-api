const axios = require('axios');
const { OtherServiceError } = require('../configurations/error');

async function getUser(id) {
  const response = await axios({
    method: 'get',
    url: `http://curb-users:4000/${id}`,
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
  return response.data;
}

async function getAccountById(id) {
  const response = await axios({
    method: 'get',
    url: `http://curb-accounts:4000/${id}`,
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
  const user = await getUser(id);
  return { ...response.data, ...user };
}

async function getAccountByEmail(email) {
  const response = await axios({
    method: 'post',
    url: 'http://curb-accounts:4000/email',
    validateStatus: undefined,
    headers: { 'Content-Type': 'application/json' },
    data: {
      email
    }
  });
  if (response.status !== 200) {
    throw new OtherServiceError(
      response.data.service,
      response.data.code,
      response.status
    );
  }
  const user = await getUser(response.data.id);
  return { ...response.data, ...user };
}

module.exports = { getAccountByEmail, getAccountById };
