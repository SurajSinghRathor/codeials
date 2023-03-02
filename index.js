const express = require('express');
const app = express();
const port = 8000;

app.listen(port , function(err){
if(err)
{
console.log(`error is running : ${err}`);
}else
{
    console.log(`server up and running on port : ${port}`);
}
})  

app.get('/' , function(req , res){

    res.sendFile(__dirname + "")
})
