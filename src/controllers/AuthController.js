const User = require('../model/user')
const bcrypt = require("bcryptjs")
const { createAuthToken } = require('../utils')

module.exports = {
    async registerUser(req, res) {
        const { email } = req.body

        try {
            if (await User.findOne({ email }))
                return res.status(400).send({ error: 'Email já em uso' })

            const user = await User.create(req.body)
            user.password = undefined

            const token = await createAuthToken({ id: user.id }, 172800)
            res.setHeader('x-token', token)

            return res.send({ user })
        }
        catch (err) {
            console.log(err);
            return res.status(400).send({ error: 'Falha no registro' })
        }
    },

    async logUser(req, res) {
        const { email, password } = req.body

        try {
            user = await User.findOne({ email }).select('+password')

            if (!user)
                return res.status(404).send({ error: 'Usuário não encontrado' })

            if (!await bcrypt.compare(password, user.password))
                return res.status(404).send({ error: 'Senha incorreta' })

            user.password = undefined
            const token = await createAuthToken({ id: user.id }, 172800)
            res.setHeader('x-token', token)

            return res.send({ user })

        }
        catch (err) {
            return res.status(400).send({ error: 'Falha no login' })
        }

    }

}