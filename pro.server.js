const express = require('express')
const app = express()
const router = express.Router()
const apiRoutes = express.Router()
const port = '8800'

router.get('/', function (req, res, next) {
  req.url = 'index.html'
  next()
})

app.use(router)
app.use(apiRoutes)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return false
  }
})
