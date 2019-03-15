const emailVerification = require('../services/email-verification');
const { ApiError } = require('../configurations/error');

async function verification(req, res, next) {
  if (!req.body.name || !req.body.email || !req.body.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    await emailVerification(req.body);
    return res.status(200).end();
  } catch (error) {
    return next(error);
  }
}

module.exports = verification;
