/** @format */

const express = require("express");
const {
  createBoard,
  getBoardById,
} = require("../Controllers/board.controller");
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated");

router.post("/create", createBoard);
router.get("/:id", getBoardById);

module.exports = router;
