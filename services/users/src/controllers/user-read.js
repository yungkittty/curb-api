const read = require('../services/read');

async function userRead(req, res, next) {
  if (!req.params.id) {
    return next(new Error('BAD_PARAMETER'));
  }
  try {
    const user = await read(req.params.id, req.headers.authorization);
    return res.status(200).json({
      ...user
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = userRead;
