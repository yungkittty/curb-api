const authService = require('../services/account');
const verifyEmail = require('../utils/email/verify-email');
const { ApiError } = require('../configurations/error');

async function signIn(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  if (!verifyEmail(email)) return next(new ApiError('ACCOUNTS_EMAIL_FORMAT'));
  try {
    const signed = await authService.authenticate({ email, password });
    return res
      .status(200)
      .cookie('token', signed.token, { httpOnly: true, secure: true })
      .json({
        id: signed.id
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signIn;
