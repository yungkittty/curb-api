const codes = require('./codes');
const ApiError = require('./api-error');
const OtherServiceError = require('./other-service-error');

module.exports = {
  ApiError,
  OtherServiceError,
  ...codes
};
