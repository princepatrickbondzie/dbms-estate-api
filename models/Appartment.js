const { Schema, model } = require('mongoose')

const appartmentSchema = new Schema({
    houseNumber: {
        type: String,
        required: true,
    },
    type: {
        type: String,
    },
    block: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    ownerEmail: {
        type: String,
        required: true,
    },
    ownerNumber: {
        type: String,
        required: true,
    },
    recordPayments: {
        type: Array,
        default: [],
    }
}, { timestamps: true })

module.exports = model('Appartment', appartmentSchema)