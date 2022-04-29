const express = require("express");
const router = express.Router();
const passport = require("passport");
const { generateToken } = require("../Utils/token");
require("dotenv").config();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    'session': true
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.FRONTEND_ROOT}`,
    failureRedirect: "/login",
    'session': true
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log("REQ SESSION line 26 auth route", req.session)
    if (req.user.workspaces.length > 0) {

      res
        .status(200)
        .send({msg:"Successful"})
        // .cookie("access_token", "Bearer " + token, {
        //   expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
        // })
        // .json({ msg: req.session });
        // .redirect(
        //   301,
        //   process.env.FRONTEND_ROOT + `/workspace/${req.user.workspaces[0]}`
        // );
    } else {
      console.log("REQ SESSION line 41 auth route")
      res
        .status(200)
        .send({msg:"Successful"})
        // .cookie("access_token", "Bearer " + token, {
        //   expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
        // })
        // .json({ msg: req.session });
        // .redirect(301, process.env.FRONTEND_ROOT + `/create-first-workspace`);
    }
  }
);

module.exports = router;
