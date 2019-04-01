const verifyEmail = require('../utils/email/verify-email');
const create = require('../services/account/create');
const { ApiError } = require('../configurations/error');

async function signUp(req, res, next) {
  if (!req.body) return next(new ApiError('BAD_PARAMETER'));
  if (!req.body.name || !req.body.email || !req.body.password) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  if (!verifyEmail(req.body.email)) {
    return next(new ApiError('BAD_EMAIL_FORMAT'));
  }
  try {
    const id = await create({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password
    });
    return res
      .status(200)
      .json({ id })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = signUp;
