const common = require('../../common')

common.express.startApi((app) => {

  app.get('/', (req, res) => {
    res.send('OK')
  })
})
