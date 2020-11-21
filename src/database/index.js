const mongoose = require('mongoose')

mongoose.connect('mongoose://localhost/uhuu_api', { useMongoClient: true })
mongoose.Promise = global.Promise

module.exports = mongoose