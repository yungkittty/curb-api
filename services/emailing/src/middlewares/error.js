const errors = require('../configurations/error');

// eslint-disable-next-line
function error(err, req, res, next) {
  console.log('MIDDLEWARE ERROR:', err);
  switch (err.constructor) {
    case errors.ApiError:
      return res
        .status(err.status)
        .json({ service: err.service, code: err.code })
        .end();
    case errors.OtherServiceError:
      return res
        .status(err.status)
        .json({ service: err.service, code: err.code, from: err.from })
        .end();
    default:
      return res
        .status(500)
        .json({ service: process.env.SERVICE_NAME, error: 'UNDEFINED' })
        .end();
  }
}

module.exports = error;
