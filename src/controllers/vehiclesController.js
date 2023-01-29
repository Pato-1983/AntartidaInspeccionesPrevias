//const bcrypt = require('bcryptjs');
const session = require('express-session');
//const fs = require('fs');
const path = require('path');
const db = require('../database/models')
//const nodemailer = require('nodemailer');
//const { userInfo } = require('os');


const vehiclesController = {

    create: async (req,res) => {
		
        res.render('vehicles/vehicleCreate',)
	
	},

    

}

module.exports = vehiclesController;