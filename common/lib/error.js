const { HttpCode } = require('./http')

class HttpException extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}



class ArgumentException extends HttpException {
  
  constructor(message) {
    super(message, HttpCode.BadRequest)
  }
}


module.exports = {
  ArgumentException
}
