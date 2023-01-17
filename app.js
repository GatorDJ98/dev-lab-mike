const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World. This is David.')
})

app.listen(3000)