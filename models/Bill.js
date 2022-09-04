const { Schema, model } = require('mongoose')

const billSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    receipt: {
        type: String,
        required: true,
    },
    receiptId: {
        type: String,
        required: true,
    },
    paidBy: {
        type: String,
        required: true,
    },
    monthDue: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = model('Bill', billSchema)