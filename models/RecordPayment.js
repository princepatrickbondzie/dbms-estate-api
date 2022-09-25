const { Schema, model } = require('mongoose')

const recordPaymentSchema = new Schema({
    appartment: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentMode: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
    },
    paidBy: {
        type: String,
        required: true,
    },
    monthDue: {
        type: Array,
        required: true,
        default: [],
    },
    recordedBy: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = model('RecordPayment', recordPaymentSchema)