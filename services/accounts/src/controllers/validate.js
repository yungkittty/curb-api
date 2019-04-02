const tokens = require('../services/tokens');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');
const isAccountValid = require('../services/account/is-account-valid');
const { refresh } = require('../services/tokens');

async function validate(req, res, next) {
  if (req.authId || req.token) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  const token = getTokenFromHeader(req.headers.authorization);
  if (!token) return next(new ApiError('DISCONNECTED'));
  try {
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
    if (error.code === 'TOKEN_EXPIRED') {
      try {
        const payload = await refresh(token);
        req.authId = payload.id;
        req.token = payload.token;
        return res
          .status(200)
          .cookie('token', payload.token, { httpOnly: true })
          .json({ id: req.authId })
          .end();
      } catch (refreshError) {
        return next(refreshError);
      }
    }
    return next(error);
  }
}

module.exports = validate;
