const User = require('../models/User')
const Appartment = require('../models/Appartment')
const Expense = require('../models/Expense')
const RecordPayment = require('../models/RecordPayment')

const userAnlytics = async (req, res) => {
    const count = await User.find()

}

const appartmentAnlytics = async (req, res) => {
    const count = await Appartment.find()
    const active = await Appartment.find({ active: true })

    res.status(200).json({ total: count.length, active: active.length })
}