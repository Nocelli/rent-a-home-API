const express = require('express')
const authenticate = require('./authentication/Authenticate')
const { registerUser, logUser } = require('./controllers/AuthController')
const { createListing } = require('./controllers/ListingController')

const routers = express.Router()


//Rotas de autenticação
routers.post('/register', registerUser)
routers.post('/login', logUser)

//Rotas CRUD
routers.get('/listings/:id?', authenticate, createListing)
routers.post('/listings', authenticate)
routers.put('/listings', authenticate)
routers.delete('/listings', authenticate)

module.exports = routers