const read = require('../services/account/read');
const { ApiError } = require('../configurations/error');

async function accountRead(req, res, next) {
  if (!req.params.id) return next(new ApiError('ACCOUNTS_BAD_PARAMETER'));
  try {
    const account = await read(req.params.id);
    return res
      .status(200)
      .json(account)
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = accountRead;
