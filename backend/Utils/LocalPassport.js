const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../Models/user.model");
var LocalStrategy = require("passport-local").Strategy;
require("dotenv").config();

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
  },
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.checkPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

//   module.exports = passport;
