const MongoError = require('mongoose').Error;
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
    case MongoError:
      if (err.name === 'CastError' && err.path === '_id') {
        return res
          .status(errors.CONTENTS_INVALID_ID)
          .json({
            service: process.env.SERVICE_NAME,
            code: 'INVALID_ID'
          })
          .end();
      }
      return res
        .status(errors.CONTENTS_DATABASE_ERROR)
        .json({ service: process.env.SERVICE_NAME, error: 'DATABASE_ERROR' })
        .end();
    default:
      return res
        .status(500)
        .json({ service: process.env.SERVICE_NAME, error: 'UNDEFINED' })
        .end();
  }
}

module.exports = error;
