const Listing = require('../model/listing')

module.exports = {
    async createListing(req, res) {
        const { userId } = res.locals
        try {
            const listing = await Listing.create({ ...req.body, user: userId })

            return res.send({ listing })
        }
        catch (err) {
            return res.status(400).send({ error: 'Falha na criação do anúncio' })
        }
    },

    async indexListings(req, res) {
        const { userId } = res.locals
        const owned = req.params.owned

        try {
            const listing = await Listing.find(owned ? { user: userId } : undefined).populate('user')

            return res.send({ listing })
        }
        catch (err) {
            return res.status(400).send({ error: 'Falha na busca' })
        }
    },

    async updateListing(req, res) {
        const { userId } = res.locals
        const { projectId } = req.params

        try {
            const listingOld = await Listing.findById(projectId)
            if (!listingOld.user == userId)
                return res.status(403).send({ error: 'Não pode atualizar esse anúncio' })

            const listing = await Listing.findByIdAndUpdate(projectId, req.body, { new: true })
            return res.send({ listing })
        }
        catch (err) {
            return res.status(400).send({ error: 'Falha na atualização do anúncio' })
        }
    },

    async deleteListing(req, res) {
        const { userId } = res.locals
        const { projectId } = req.params

        try {
            const listing = await Listing.findById(projectId)
            if (!listing.user == userId)
                return res.status(403).send({ error: 'Não pode deletar esse anúncio' })

            await Listing.findByIdAndRemove(projectId)
            return res.send()
        }
        catch (err) {
            return res.status(400).send({ error: 'Falha na deleção do anúncio' })
        }
    },
}