const express = require("express");
const router = express.Router();
const cors = require("cors");
const checkAuthenticated = require("../Middlewares/checkAuthenticated");
const {
  createUser,
  signIn,
  getUserData,
} = require("../Controllers/user.controller");

router.post("/create", createUser);
router.get("/", getUserData);
router.post("/signin", signIn);
module.exports = router;
