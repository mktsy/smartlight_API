const models = require('../models/schema.js')

module.exports = {
    readAllData: async (req, res) => {
        const { schema } = req.params
        // return res.status(200).send({message:'is work',schema})
        if(models[schema] === undefined) {
            return res.status(404).send({error: {message: 'Not Found Schema'}})
        }
        // return res.status(200).send({message:'is work',schema})

        const result = await models[schema].find({})
        res.status(200).send(result)
    }
}