const express = require("express");
const router = express.Router();
const passport = require("passport");
const { generateToken } = require("../Utils/token");
require("dotenv").config();

router.get("/login/success", (req, res) => {
  req.session.name = "Hello";
  localStorage.setItem('token', 50)
  if (req.user) {
    const token = generateToken(req.user);
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      cookies: req.cookies,
      jwt: token
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${process.env.FRONTEND_ROOT}`,
    failureRedirect: "/login",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    const token = generateToken(req.user);
    localStorage.setItem('token', token)
    req.session.token = token;
    req.session.name = "Hello";
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
