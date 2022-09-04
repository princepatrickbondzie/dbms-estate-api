const router = require('express').Router();
const { isAdminOrSuperAdmin, verifyToken, isSuperAdmin } = require('../middleware/authorize')
const { getBlocks, getBlock, createBlock, updateBlock, deleteBlock } = require('../controllers/blockController');

router.get('/all', verifyToken, getBlocks);
router.get('/:id', verifyToken, getBlock);
router.post('/create', isAdminOrSuperAdmin, createBlock);
router.patch('/:id', isAdminOrSuperAdmin, updateBlock);
router.delete('/:id', isSuperAdmin, deleteBlock);

module.exports = router;