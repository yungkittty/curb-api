const axios = require('axios');
const { OtherServiceError, ApiError } = require('../configurations/error');

function getToken(headers) {
  const find = 'token=';
  const tokenString = headers[0].split(';')[0];
  return tokenString.slice(tokenString.indexOf(find) + find.length - tokenString.length);
}

async function authentication(req, res, next) {
  try {
    if (req.authId || req.token) {
      return next(new ApiError('USERS_BAD_PARAMETER'));
    }
    const response = await axios({
      method: 'post',
      withCredentials: true,
      headers: { Cookie: `token=${req.cookies.token}` },
      url: 'http://curb-accounts:4000/validate',
      validateStatus: undefined
    });
    if (response.status !== 200) {
      throw new OtherServiceError(response);
    }
    if (response.headers['set-cookie']) {
      res.cookie('token', getToken(response.headers['set-cookie']), {
        httpOnly: true,
        secure: true,
        maxAge: 31536000
      });
    }
    req.authId = response.data.id;
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = authentication;
