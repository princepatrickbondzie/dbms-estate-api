const RecordPayment = require('../models/RecordPayment')

const getRecordPayments = async (req, res, next) => {
    const recordPayments = await RecordPayment.find()
    res.status(200).json({ recordPayments })
}

const getRecordPayment = async (req, res) => {
    const id = req.params.id;
    const recordPayment = await RecordPayment.findById(id)
    res.status(200).json({ recordPayment })
}

const createRecordPayment = async (req, res) => {
    try {
        const { appartment, amount, paymentMode, accountNumber, paidBy, monthDue, recordedBy } = req.body;
        const recordPayment = await RecordPayment.create({
            appartment,
            amount,
            paymentMode,
            accountNumber,
            paidBy,
            monthDue,
            recordedBy
        });
        if (recordPayment) {
            res.status(201).json({ data: recordPayment })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateRecordPayment = async (req, res) => {
    try {
        const id = req.params.id;
        const recordPayment = await RecordPayment.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ recordPayment })
    } catch (error) {
        console.log(error)
    }
}

const deleteRecordPayment = async (req, res) => {
    try {
        const id = req.params.id;
        await RecordPayment.findByIdAndDelete(id)
        res.status(200).json({ error: null, msg: 'Payment Record deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getRecordPayments, getRecordPayment, createRecordPayment, updateRecordPayment, deleteRecordPayment }