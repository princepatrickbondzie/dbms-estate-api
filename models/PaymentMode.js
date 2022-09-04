const { Schema, model } = require('mongoose')

const paymentModeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = model('PaymentMode', paymentModeSchema)