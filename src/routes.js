const express = require('express')
const authenticate = require('./authentication/Authenticate')
const { registerUser, logUser } = require('./controllers/AuthController')
const { createListing, indexListings, deleteListing, updateListing } = require('./controllers/ListingController')

const routers = express.Router()


//Rotas de autenticação
routers.post('/register', registerUser)
routers.post('/login', logUser)

//Rotas CRUD
routers.get('/listings/:owned?', authenticate, indexListings)
routers.post('/listings', authenticate, createListing)
routers.put('/listings/:projectId', authenticate, updateListing)
routers.delete('/listings/:projectId', authenticate, deleteListing)

module.exports = routers