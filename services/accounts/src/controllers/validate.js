const tokens = require('../services/tokens');
const { ApiError } = require('../configurations/error');
const isAccountValid = require('../services/account/is-account-valid');
const { refresh } = require('../services/tokens');

async function validate(req, res, next) {
  if (req.authId || req.token) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  const { token } = req.cookies;
  if (!token) return next(new ApiError('ACCOUNTS_TOKEN_DISCONNECTED'));
  try {
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return next(new ApiError('ACCOUNTS_INVALID_TOKEN'));
    }
    if (req.body && req.body.active) {
      const isValid = await isAccountValid(id);
      if (!isValid) return next(new ApiError('ACCOUNTS_NOT_ACTIVATE'));
    }
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    if (error.code === 'ACCOUNTS_TOKEN_EXPIRED') {
      try {
        const payload = await refresh(token);
        return res
          .status(200)
          .cookie('token', payload.token, { httpOnly: true, secure: true })
          .json({ id: payload.id })
          .end();
      } catch (refreshError) {
        return next(refreshError);
      }
    }
    return next(error);
  }
}

module.exports = validate;
