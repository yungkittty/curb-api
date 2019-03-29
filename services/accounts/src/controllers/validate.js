const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');
const isAccountValid = require('../services/account/is-account-valid');

async function validate(req, res, next) {
  try {
    // const token = getTokenFromHeader(req.headers.authorization);
    // if (!token) return next(new ApiError('INVALID_TOKEN'));
    const { token } = req.cookies;
    if (!token) return next(new ApiError('NOT_CONNECTED'));
    console.log('token=>', token);
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return next(new ApiError('INVALID_TOKEN'));
    }
    if (req.body && req.body.active) {
      const isValid = await isAccountValid(id);
      if (!isValid) return next(new ApiError('ACCOUNT_NOT_ACTIVATE'));
    }
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = validate;
