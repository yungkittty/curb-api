const axios = require('axios');

async function optionalUserId(req, res, next) {
  try {
    const response = await axios({
      method: 'post',
      withCredentials: true,
      headers: { Cookie: `token=${req.cookies.token}` },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) {
      return next();
    }
    req.authId = response.data.id;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = optionalUserId;
