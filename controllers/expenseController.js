const Expense = require('../models/Expense')

const getExpenses = async (req, res, next) => {
    const expenses = await Expense.find()
    res.status(200).json({ expenses })
}

const getExpense = async (req, res) => {
    const id = req.params.id;
    const expense = await Expense.findById(id)
    res.status(200).json({ expense })
}

const createExpense = async (req, res) => {
    try {
        const { item, quantity, amount, user } = req.body;
        const expense = await Expense.create({
            item,
            quantity,
            amount,
            user
        });
        if (expense) {
            // console.log(expense)
            res.status(201).json({ expense })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateExpense = async (req, res) => {
    try {
        const id = req.params.id;
        const expense = await Expense.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ expense })
    } catch (error) {
        console.log(error)
    }
}

const deleteExpense = async (req, res) => {
    try {
        const id = req.params.id;
        await Expense.findByIdAndDelete(id)
        res.status(200).json({ error: null, msg: 'Expense deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getExpenses, getExpense, createExpense, updateExpense, deleteExpense }