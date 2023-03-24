const user = require("../models/user");

module.exports.profile = function(req , res){
    res.send("this is users profile");
}

module.exports.signin = function(req , res){
    res.render('signin');
}

module.exports.signup = function(req , res){
   res.render('signup');
}

//Sign up page mechanism
module.exports.create = function(req , res){
    ///user/create post request will come here
    

      
}


//login page mechanism
module.exports.CreateSession = function(req , res){
   //signin data be post here
    


}

