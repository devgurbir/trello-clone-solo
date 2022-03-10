const express = require('express');
const { createWorkspace } = require('../Controllers/workspace.controller');
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated")

router.post("/create", checkAuthenticated, createWorkspace)

module.exports = router