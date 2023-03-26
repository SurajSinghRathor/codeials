const express = require('express');
const route = express.Router();
const Users_controller = require('../controller/Users_controller');
const passport = require("passport");

route.get('/profile' , Users_controller.profile);
route.get('/signin' , Users_controller.signin);
route.get('/signup' , Users_controller.signup);


//this is henadling /user/create route
route.post('/create' , Users_controller.create );
// route.post('/CreateSession' , Users_controller.CreateSession);

//use passport as middleware to authenticate
route.post('/CreateSession' , passport.authenticate(
    'local',
    {failureRedirect : "/user/signin"}
) , Users_controller.CreateSession);


module.exports = route;