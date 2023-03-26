const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

const user = require("../models/user");

//Telling passport to use this strategy
//authenticate using passport
passport.use(new LocalStrategy(
    {
      usernameField : 'email'

} ,  function(email , password , done){
    //find a user and authenticate

    user.findOne({email : email})
    .then((user) => {
        
        //promise is fullfiled here
     if(!user || user.password != password){
        return done(null , false);
     }

     //if user found 
      return done(null , user);

    })
    .catch((err) => {
       return done(err);
    })
}

))

//serilization and desearilization

passport.serializeUser(function(user , done){
   
    done(null , user.id);  //serilizing the user id in cookie after
    // authentication and then sending it to the browser (user.id) is the id of the user

})

//deserilizing the user from the key in the cookie
passport.deserializeUser(function(id , done){
   
    //deserilizng the user id from the broswer to authenticate

    user.findById(id)
    .then((user)=> {
        return done(null , user);

    })
    .catch((err) => {
        console.log("error finding the user");
        return done(err);
    })

})

module.exports = passport;