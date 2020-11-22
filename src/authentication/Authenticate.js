const jwt = require('jsonwebtoken')
const { createAuthToken } = require('../utils')


const AuthenticateTokens = async (req, res, next) => {
    try {
        const token = req.headers['x-token'] || req.body.token

        if(!token)
            return res.status(401).json({ error: 'Token não foi informado' })

        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decoded) => {
        if(err)
            return res.status(401).json({ error: 'Token invalido'})

        if (decoded) {
            res.locals.userId = decoded.id
            const token = await createAuthToken({ id: decoded.id }, 172800)
            res.setHeader('x-token', token)
            return next()
        }

        return res.status(401).json({ error: 'Erro ao validar token ou token malformado'})
        })
    }
    catch (err) {
        return res.status(500).json(err)
    }
}


module.exports = AuthenticateTokens
