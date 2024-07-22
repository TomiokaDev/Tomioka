const mongoose = require('mongoose');

const commandPrefixSchema = mongoose.Schema({
    //ID de la Guild
    _id: {
        type: String,
        required: true
    },

    prefix: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('guild-prefixes', commandPrefixSchema)
