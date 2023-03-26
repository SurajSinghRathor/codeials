const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const ejs = require('ejs');
const router = express.Router();
const indexRouter = require('./routes/index');
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");

//used for session cookie
const session = require("express-session");
const passportLocal = require("./config/passport-local-strategy");
const passport = require("passport");
 
// /middleware

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true}));

app.set('view engine' , 'ejs');
app.set('views' , './views');

app.use(session({
    name : "codeial",
    secret : "blahsomething", //this is key used to encrypt the user_id in cookie
    saveUninitialized : false,
    resave: false,
    cookie :{
        maxAge : (1000 * 60 * 100)
    }


}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/' , indexRouter );




app.listen(port , function(err){
if(err)
{
console.log(`error is running : ${err}`);
}else
{
    console.log(`server up and running on port : ${port}`);
}
})  

