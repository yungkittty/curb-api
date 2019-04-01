const read = require('../services/read');
const { ApiError } = require('../configurations/error');

async function userRead(req, res, next) {
  if (!req.params.id) {
    return next(new ApiError('BAD_PARAMETER'));
  }
  try {
    const user = await read(req.params.id, req.headers.authorization);
    return res
      .status(200)
      .json({
        ...user
      })
      .end();
  } catch (error) {
    return next(error);
  }
}

module.exports = userRead;
