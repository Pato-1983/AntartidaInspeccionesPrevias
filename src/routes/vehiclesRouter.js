const express = require('express');

const router = express.Router();

const vehiclesController = require('../controllers/vehiclesController');

router.get('/create', vehiclesController.create);

//router.get('/contact', mainController.contact);

//router.get('/help', mainController.help);

//router.get('/about', mainController.about);

module.exports = router;