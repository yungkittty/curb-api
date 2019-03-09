const axios = require('axios');
const { OtherServiceError } = require('../configurations/error');

async function authentication(req, res, next) {
  try {
    const response = await axios({
      method: 'post',
      headers: { Authorization: req.headers.authorization },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) {
      throw new OtherServiceError(
        response.data.service,
        response.data.code,
        response.status
      );
    }
    req.authId = response.data.id;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = authentication;
