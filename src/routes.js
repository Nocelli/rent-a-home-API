const express = require('express')

const routers = express.Router()


routers.get('/', (req, res)=>{

    return res.json("HOLLE MOENDO!!")
})

module.exports = routers