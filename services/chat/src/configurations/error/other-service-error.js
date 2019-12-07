const ApiError = require('./api-error');

class OtherServiceError extends ApiError {
  constructor(response) {
    super('OTHER_SERVICE');
    this.name = this.constructor.name;
    this.from = response.data.service;
    this.code = response.data.code;
    this.status = response.status;
  }
}

module.exports = OtherServiceError;
