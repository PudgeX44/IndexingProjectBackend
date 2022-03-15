const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class BadError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadError;
