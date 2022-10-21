const router = require('express').Router();
const { sendMessage, getMessages } = require('../controllers/smsController');
const { verifyToken } = require('../middleware/authorize')

router.post('/create', verifyToken, sendMessage);
router.post('/all', verifyToken, getMessages);

module.exports = router;