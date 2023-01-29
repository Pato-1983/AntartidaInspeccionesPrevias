//const bcrypt = require('bcryptjs');
//const session = require('express-session');
//const fs = require('fs');
const path = require('path');
const db = require('../database/models')
//const nodemailer = require('nodemailer');
//const { userInfo } = require('os');


const usersController = {

    register: async (req,res) => {
		
        res.render('users/register')
	
	},

    login: async (req,res) => {

        res.render('users/login')

    },

    

}

module.exports = usersController;