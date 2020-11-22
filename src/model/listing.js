const mongoose = require('../database')

const ListingSchema = new mongoose.Schema({
    Title: {
        type: String,
        minlength: [2, 'O título do anúncio é muito curto'],
        maxlength: [30, 'O título do anúncio é muito longo'],
        required: [true, 'O título do anúncio é obrigatório']
    },
    Description: {
        type: String,
        minlength: [2, 'A descrição do anúncio é muito curta'],
        maxlength: [300, 'A descrição do anúncio é muito longa'],
        required: [true, 'A descrição do anúncio é obrigatória']
    },
    Price: {
        type: Number,
        required: true
    },
    Available: {
        type: Date,
        required: true,
        default: Date.now
    },
    Type: {
        Type: String,
        required: true,
    },
    User: {
        Type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    Whatsapp: {
        type: String,
        require: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Listing = mongoose.model('Listing',ListingSchema)

module.exports = Listing