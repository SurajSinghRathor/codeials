const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const ejs = require('ejs');
const router = express.Router();
const indexRouter = require('./routes/index');
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");

// /middleware

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/' , indexRouter );

app.set('view engine' , 'ejs');
app.set('views' , './views');


app.listen(port , function(err){
if(err)
{
console.log(`error is running : ${err}`);
}else
{
    console.log(`server up and running on port : ${port}`);
}
})  

