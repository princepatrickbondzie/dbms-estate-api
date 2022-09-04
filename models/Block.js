const { Schema, model } = require('mongoose')

const blockSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = model('Block', blockSchema)