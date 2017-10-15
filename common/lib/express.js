const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000 

exports.startApi = (injector) => {

  var app = express()

  app.set('port', PORT)
  app.use(bodyParser.json())
  
  injector(app)

  return app.listen(PORT, (err) => {
    if (err) throw err

    console.log(`Server started at ${PORT}`)
  })
}
