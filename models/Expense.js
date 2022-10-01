const { Schema, model } = require('mongoose')

const expenseSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    user: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = model('Expense', expenseSchema)

