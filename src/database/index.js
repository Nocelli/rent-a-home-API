const mongoose = require('mongoose')

const connectionString = `${process.env.DATABASE_URL}`

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
mongoose.Promise = global.Promise

module.exports = mongoose