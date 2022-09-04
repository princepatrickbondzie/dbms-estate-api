const router = require('express').Router();
const { getUser, getUsers, deleteUser, updateUser } = require('../controllers/userController');
const { isAdminOrSuperAdmin, verifyToken, isSuperAdmin } = require('../middleware/authorize')

router.get('/all', isAdminOrSuperAdmin, getUsers);
router.get('/:id', isAdminOrSuperAdmin, getUser);
router.patch('/:id', verifyToken, updateUser);
router.delete('/:id', isAdminOrSuperAdmin, deleteUser);

module.exports = router;