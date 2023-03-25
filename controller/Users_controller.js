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


module.exports.create = async function(req, res) {
  try {
    // Check if the passwords match
    if (req.body.password !== req.body.cpassword) {
      // If passwords do not match, redirect back to the previous page
      return res.redirect("back");
    }

    // Check if the user already exists with the given email
    const existingUser = await user.findOne({ email: req.body.email });

    if (existingUser) {
      // If user with this email already exists, redirect back to the previous page
      return res.redirect("back");
    }

    // Create a new user
    const newUser = await user.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    });

    // If the user is created successfully, log the user object to the console
    console.log("User created successfully:", newUser);

    // Redirect to the signin page
    return res.render("signin");
  } catch (err) {
    // If there is any error, log the error object to the console and redirect back to the previous page
    console.error("Error creating user:", err);
    return res.redirect("back");
  }
};



//login page mechanism
module.exports.CreateSession = function(req , res){
   
    //find the user
    user.findOne({email : req.body.email})
    .then((user)=> {
         //handle user found
         if(user){

            if(user.password != req.body.password)
            {
                return res.redirect("back");
            }
            
            return res.render("success");


         }



    })
    .catch((error)=> {
        console.log("error is there");
        return res.redirect("back");

    })

   

}

