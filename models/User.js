const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    fullname: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['frontDesk', 'admin', 'superAdmin'],
        default: 'frontDesk',
    },
}, { timestamps: true })

module.exports = model('User', userSchema)