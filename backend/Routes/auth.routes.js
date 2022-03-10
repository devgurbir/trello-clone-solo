const express = require('express')
const router = express.Router()
const passport = require("passport")
const {generateToken} = require("../Utils/token")

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    const token = generateToken(req.user)

    if(req.user.workspaces.length > 0){
      res.status(200).cookie('access_token', 'Bearer ' + token, {
        expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
      }).redirect(301, 'http://localhost:3000')
    }
    else{
      res.status(200).cookie('access_token', 'Bearer ' + token, {
        expires: new Date(Date.now() + 8 * 3600000) // cookie will be removed after 8 hours
      }).redirect(301, 'http://localhost:3000/create-first-workspace')
    }
    
    
  });

module.exports = router