const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.use(routes)

app.listen(process.env.PORT)

module.exports = app