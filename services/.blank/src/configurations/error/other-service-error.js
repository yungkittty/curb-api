const ApiError = require('./api-error');

class OtherServiceError extends ApiError {
  constructor(from, code, status) {
    super('OTHER_SERVICE');
    this.name = this.constructor.name;
    this.from = from;
    this.code = code;
    this.status = status;
  }
}

module.exports = OtherServiceError;
