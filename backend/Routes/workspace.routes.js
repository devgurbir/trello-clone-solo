const express = require('express');
const { createWorkspace, getWorkspaceById } = require('../Controllers/workspace.controller');
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated")

router.post("/create", checkAuthenticated, createWorkspace)
router.get("/:workspace_id", getWorkspaceById)
module.exports = router