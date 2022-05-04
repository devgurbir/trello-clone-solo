const express = require("express");
const router = express.Router();
const cors = require("cors");
const checkAuthenticated = require("../Middlewares/checkAuthenticated");
const passport = require('passport')
const {
  createUser,
  signIn,
  getUserData,
} = require("../Controllers/user.controller");
require('dotenv').config()

router.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.end();
});

router.post("/create", createUser);
router.get("/", getUserData);
router.post("/signin", 
passport.authenticate('local'),
function(req, res) {
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_ROOT);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.redirect("http://localhost:3000")
  let isAuth = req.isAuthenticated();
  res.send({user: req.user, isAuth})

})
module.exports = router;
