const update = require('../services/account/update');
const getTokenFromHeader = require('../utils/request/get-token-from-header');
const { ApiError } = require('../configurations/error');

async function accountUpdate(req, res, next) {
  if (!req.body) res.status(400).end();
  if (!req.params.id) return next(new ApiError('BAD_PARAMETER'));
  if (!req.body.email && !req.body.password) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const token = getTokenFromHeader(req.headers.authorization);
    if (!token) return next(new ApiError('INVALID_TOKEN'));
    const account = await update(
      req.params.id,
      req.body.email,
      req.body.password
    );
    return res
      .status(200)
      .json({ ...account })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountUpdate;
