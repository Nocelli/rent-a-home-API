const jwt = require('jsonwebtoken')

module.exports = {
    async createAuthToken(param, expiration){
        return await jwt.sign(param, process.env.TOKEN_SECRET, { expiresIn: expiration })
    },
}