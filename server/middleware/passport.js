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
  })
  console.log(username, password)


  // User.findOne({ email: email })
  // .exec(function(err, user) {
  //   if(err) done(err);
  //   if(!user) return done(null, false);
  //   if(user.verifyPassword(password)) return done(null, user);
  //   return done(null, false);
  // });
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});
passport.deserializeUser(function(_id, done) {
  // User.findById(_id, function(err, user) {
  //   done(err, user);
  // });
});

module.exports = passport;
