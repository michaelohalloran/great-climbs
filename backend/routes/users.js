const express = require('express');
const userController = require('../controllers/users');
const router = express.Router();
const { checkAuth } = require('../controllers/auth');
const {body} = require('express-validator');

router.get('/', userController.getAllUsers);
router.get('/me', checkAuth, userController.getOwnProfile);
// TODO: router.post('/signup', body('email').isEmail(), userController.signup);
// https://express-validator.github.io/docs/custom-validators-sanitizers.html
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/logout', checkAuth, userController.logout);
router.post('/logoutAll', checkAuth, userController.logoutAll);
router.delete('/:id', userController.deleteUser);
module.exports = router;