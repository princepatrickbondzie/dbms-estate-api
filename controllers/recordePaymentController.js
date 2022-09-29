const RecordPayment = require('../models/RecordPayment')
const Appartment = require('../models/Appartment')

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
            await Appartment.findOneAndUpdate(appartment, {
                $push: {
                    recordPayments: {
                        $each: [recordPayment],
                        $position: 0
                    }
                }
            }, { new: true })
        }
        res.status(201).json({ data: recordPayment })
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
        const rp = await RecordPayment.findById(id)
        if (rp) {
            const appt = await Appartment.findOne({ houseNumber: rp.appartment })
            await Appartment.updateOne({ _id: appt._id }, { $pull: { recordPayments: { _id: id } } })
            await RecordPayment.findByIdAndDelete(id)
        }

        res.status(200).json({ error: null, msg: 'Payment Record deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getRecordPayments, getRecordPayment, createRecordPayment, updateRecordPayment, deleteRecordPayment }