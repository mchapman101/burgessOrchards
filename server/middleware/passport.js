var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var Massive = require('massive');
var db = Massive.connectSync({
    db: 'burgessorchards'
});


// var User = require('../models/userSchema');


passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password, done) {

  db.users.findOne({username: username}, function(err, user){
    if (err)
      return done(err);
    console.log(user, "loging user?");
      if(!user) return done(null, false);
        if(user.password === password) return done(null, user);
      return done(null, false);


  });


  // User.findOne({ email: email })
  // .exec(function(err, user) {
  //   if(err) done(err);
  //   if(!user) return done(null, false);
  //   if(user.verifyPassword(password)) return done(null, user);
  //   return done(null, false);
  // });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  db.users.findOne({id: id}, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
