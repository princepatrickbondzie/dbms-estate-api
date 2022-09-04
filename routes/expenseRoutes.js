const router = require('express').Router();
const {verifyToken, isSuperAdmin } = require('../middleware/authorize')
const { getExpenses, getExpense, createExpense, updateExpense, deleteExpense } = require('../controllers/expenseController');

router.get('/all', verifyToken, getExpenses);
router.get('/:id', verifyToken, getExpense);
router.post('/create', verifyToken, createExpense);
router.patch('/:id', verifyToken, updateExpense);
router.delete('/:id', isSuperAdmin, deleteExpense);

module.exports = router;