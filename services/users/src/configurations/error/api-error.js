const codes = require('./codes');

class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.code = message;
    this.status = codes[message] || 'CODE_MISSING';
    this.service = process.env.SERVICE_NAME;
  }
}

module.exports = ApiError;
