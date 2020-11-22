const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes.js')
const cors = require('cors')

const corsOptions = {
    exposedHeaders: 'x-token, error',
  }

const app = express()

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(routes)

module.exports = app