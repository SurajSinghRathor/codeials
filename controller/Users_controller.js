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

module.exports.create = function(req , res){
    ///user/create post request will come here
    
    if(req.body.password != req.body.cpassword)
    {
        return res.redirect("back");
    }
    //creating user
    user.create({
        email : req.body.email,
        password : req.body.password,
        name : req.body.name
    } ) 
    .then((newuser) => {
        res.render("signin");
        console.log('User created successfully:', newuser);
      })
      .catch((err) => {
        console.error('Error creating user:', err);
      });

      
}

module.exports.CreateSession = function(req , res){
   //signin data be post here
     user.find(
    {

       $and : [
        {email : req.body.email},
        { password : req.body.password}
       ]
    }

        ).then((users) => {
            console.log("user found");
            res.render("success");
        })
        .catch(() => {
            console.log("error ");
        })


}

