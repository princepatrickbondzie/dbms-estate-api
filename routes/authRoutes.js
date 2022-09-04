const router = require('express').Router();
const { signin, signup, signout, refreshToken } = require('../controllers/authController');

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/signout', signout);
router.post('/refresh-token', refreshToken);

module.exports = router;