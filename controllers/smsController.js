const Sms = require('../models/Sms')
const { sendSMS } = require('../utils/sms');


const sendMessage = async (req, res) => {
    const { recipient, message, sender } = req.body;
    try {
        const sms = await Sms.create({ recipient, message, sender });
        if (sms) {
            const sendIt = await sendSMS(recipient, message)

            if (sendIt) {
                res.status(201).json({ sendIt })
            }
        }
    } catch (err) {
        console.error(err);
    }
}

const getMessages = async (req, res) => {
    const messages = await Sms.find();
    res.status(200).json({ messages })
}

module.exports = { sendMessage, getMessages }