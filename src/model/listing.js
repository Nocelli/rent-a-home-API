const mongoose = require('../database')

const ListingSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [2, 'O título do anúncio é muito curto'],
        maxlength: [30, 'O título do anúncio é muito longo'],
        required: [true, 'O título do anúncio é obrigatório']
    },
    description: {
        type: String,
        minlength: [2, 'A descrição do anúncio é muito curta'],
        maxlength: [300, 'A descrição do anúncio é muito longa'],
        required: [true, 'A descrição do anúncio é obrigatória']
    },
    price: {
        type: Number,
        required: [true, 'O preço do anúncio é obrigatório']
    },
    available: {
        type: Date,
        required: [true, 'A disponibilidade do anúncio é obrigatória'],
        default: Date.now
    },
    listingType: {
        type: String,
        required: [true, 'O tipo do anúncio é obrigatório'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    whatsapp: {
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