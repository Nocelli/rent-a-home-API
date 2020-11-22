const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, 'O nome do usuário é muito curto'],
        maxlength: [30, 'O nome do usuário é muito longo'],
        required: [true, 'O nome do usuário é obrigatório']
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        select: false,
        minlength: [2, 'A senha do usuário é muito curta'],
        maxlength: [30, 'A senha do usuário é muito longa'],
        required: [true, 'A senha do usuário é obrigatória']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
})

const User = mongoose.model('User',UserSchema)

module.exports = User