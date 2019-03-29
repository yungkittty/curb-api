const update = require('../services/account/update');
const { ApiError } = require('../configurations/error');

async function accountUpdate(req, res, next) {
  if (!req.body) return next(new ApiError('BAD_PARAMETER'));
  if (!req.params.id) return next(new ApiError('BAD_PARAMETER'));
  if (!req.body.email && !req.body.password) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
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
