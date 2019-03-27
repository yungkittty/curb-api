const readByEmail = require('../services/account/read-by-email');
const { ApiError } = require('../configurations/error');

async function accountReadByEmail(req, res, next) {
  if (!req.body.email) return next(new ApiError('BAD_PARAMETER'));
  try {
    const account = await readByEmail(req.body.email);
    return res
      .status(200)
      .json(account)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountReadByEmail;
