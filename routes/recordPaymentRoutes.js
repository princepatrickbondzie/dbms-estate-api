const router = require('express').Router();
const { verifyToken, isSuperAdmin } = require('../middleware/authorize')
const { getRecordPayments, getRecordPayment, createRecordPayment, updateRecordPayment, deleteRecordPayment } = require('../controllers/recordePaymentController');

router.get('/all', verifyToken, getRecordPayments);
router.get('/:id', verifyToken, getRecordPayment);
router.post('/create', verifyToken, createRecordPayment);
router.patch('/:id', verifyToken, updateRecordPayment);
router.delete('/:id', isSuperAdmin, deleteRecordPayment);

module.exports = router;