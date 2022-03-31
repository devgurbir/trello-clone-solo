const express = require("express");
const {
  createWorkspace,
  getWorkspaceById,
  fetchUsers,
} = require("../Controllers/workspace.controller");
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated");

router.post("/create", checkAuthenticated, createWorkspace);
router.get("/:workspace_id", getWorkspaceById);
router.post("/fetchUsers", fetchUsers);
module.exports = router;
