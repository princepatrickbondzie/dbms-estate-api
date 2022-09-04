const Appartment = require('../models/Appartment')

const getAppartments = async (req, res, next) => {
    const appartments = await Appartment.find()
    // console.log(appartments)
    res.status(200).json({ appartments })
}

const getAppartment = async (req, res) => {
    const id = req.params.id;
    const appartments = await Appartment.findById(id)
    res.status(200).json({ appartments })
}

const createAppartment = async (req, res) => {
    try {
        const { type, houseNumber, block, ownerName, ownerEmail, ownerNumber } = req.body;
        const appartment = await Appartment.create({
            type,
            houseNumber,
            block,
            ownerName,
            ownerEmail,
            ownerNumber
        });
        if (appartment) {
            console.log(appartment)
            res.status(201).json({ appartment })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateAppartment = async (req, res) => {
    try {
        const id = req.params.id;
        const appartment = await Appartment.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ appartment })
    } catch (error) {
        console.log(error)
    }
}

const deleteAppartment = async (req, res) => {
    try {
        const id = req.params.id;
        await Appartment.findByIdAndDelete(id)
        res.status(200).json({ error: null, msg: 'Appartment deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAppartments, getAppartment, createAppartment, updateAppartment, deleteAppartment }