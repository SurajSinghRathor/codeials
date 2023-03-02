module.exports.Home = function(req , res){
   //setting up cookie in the browsser whenver refresh it comes with req header to server

    // console.log(req.cookies);
    //now sending back the cookies with change value
    // res.cookie('user_id' , 21);
    res.render('Home' , {title : "my website"});
}
