//in here routes we will handle all routes request and then forwared that 
//request to controller for appropriate action for that routes

const express = require('express');
const router = express.Router();
const Home_controller = require('../controller/Home_controller')

//this will handle /home route and action will be done by approprite controller
//defined for that route
router.get('/' ,Home_controller.Home );
// router.get('/users' , Users_controller.users);
router.use('/user' , require('./user') );


module.exports = router