const express = require("express");
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated");
const { createUser, getUserData } = require("../Controllers/user.controller");

router.post("/create", createUser);
router.get("/", getUserData);

module.exports = router;
