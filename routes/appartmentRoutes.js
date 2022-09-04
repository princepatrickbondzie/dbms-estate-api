const router = require('express').Router();
const { isAdminOrSuperAdmin, verifyToken, isSuperAdmin } = require('../middleware/authorize')
const { getAppartments, getAppartment, createAppartment, updateAppartment, deleteAppartment } = require('../controllers/appartmentController');

router.get('/all', verifyToken, getAppartments);
router.get('/:id', verifyToken, getAppartment);
router.post('/create', isAdminOrSuperAdmin, createAppartment);
router.patch('/:id', isAdminOrSuperAdmin, updateAppartment);
router.delete('/:id', isSuperAdmin, deleteAppartment);

module.exports = router;