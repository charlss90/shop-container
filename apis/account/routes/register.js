const appConfig = require('../config/app-config')
const { Account } = require('../../../common')

let account = Account(appConfig.connecitonString)


module.exports = (app) => {
  
  app.post('/', (req, res, next) => {
    account.save(req.body)
      .then((userCredentials) => {
        res.send(userCredentials)
      })
      .catch((err) => {
        next(err)
      })
  })
}
