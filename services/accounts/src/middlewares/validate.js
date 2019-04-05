const tokens = require('../services/tokens');
const { ApiError } = require('../configurations/error');
const { refresh } = require('../services/tokens');

async function validate(req, res, next) {
  try {
    console.log('middleware validate');
    if (req.authId || req.token) {
      return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
    }
    const { token } = req.cookies;
    if (!token) {
      return next(new ApiError('ACCOUNTS_TOKEN_DISCONNECTED'));
    }
    const id = await tokens.verify(token, 'token');
    if (!id) {
      return next(new ApiError('ACCOUNTS_INVALID_TOKEN'));
    }
    req.authId = id;
    req.token = token;
    return next();
  } catch (error) {
    if (error.code === 'ACCOUNTS_TOKEN_EXPIRED') {
      try {
        const payload = await refresh(req.cookies.token);
        req.authId = payload.id;
        req.token = payload.token;
        res.cookie('token', payload.token, { httpOnly: true, secure: true });
        return next();
      } catch (refreshError) {
        return next(refreshError);
      }
    }
    return next(error);
  }
}

module.exports = validate;
