const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.login);

router.get('/login', usersController.login);

router.get('/register', usersController.register);

//router.get('/contact', mainController.contact);

//router.get('/help', mainController.help);

//router.get('/about', mainController.about);

module.exports = router;