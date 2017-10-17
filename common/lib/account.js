const { ArgumentException } = require('../../common').Errors
const { validateEmail } = require('../../common').Utils

module.exports = ({
  connectionString
}) => {

  const save = (user) => new Promise((resolve, reject) => {
    if (!validateUser(user)) {
      throw ArgumentException('User not valid')
    }



  })

  const validateUser = (user) => {
    return user && user.name && user.surname && validateEmail(user.email) && user.password && user.password.length > 3
  }

  return {
    save
  }
}
