const verifyEmail = require('../utils/email/verify-email');
const create = require('../services/account/create');
const { ApiError } = require('../configurations/error');
const authService = require('../services/account');

async function signUp(req, res, next) {
  if (!req.body) return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  if (!req.body.name || !req.body.email || !req.body.password) {
    return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  }
  // TODO add validate email(renew regex)
  // TODO add validate password
  // TODO add validate name in /users
  if (!verifyEmail(req.body.email)) {
    return next(new ApiError('ACCOUNTS_EMAIL_FORMAT'));
  }
  try {
    const id = await create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    const signed = await authService.authenticate({
      email: req.body.email,
      password: req.body.password
    });
    return res
      .status(200)
      .cookie('token', signed.token, { httpOnly: true, secure: true })
      .json({ id })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signUp;
