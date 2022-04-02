const passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../Models/user.model");
require("dotenv").config();
// API_ROOT =>
// FRONTEND_ROOT => xyz.heroku.app

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.BACKEND_ROOT + `/auth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      const userEmail = profile?._json?.email;

      const user = User.findOne({ email: userEmail }, function (err, user) {
        if (err) {
          return cb(err);
        }

        if (!user) {
          User.create(
            {
              _id: new mongoose.Types.ObjectId(),
              googleId: profile.id,
              name: profile?._json?.name,
              email: profile?._json?.email,
              isGoogle: true,
            },
            function (err, user) {
              return cb(err, user);
            }
          );
        } else {
          return cb(err, user);
        }
      });
    }
  )
);

module.exports = passport;
