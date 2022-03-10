/** @format */

const express = require("express");
const { createBoard, getAllBoard } = require("../Controllers/board.controller");
const router = express.Router();

router.post("/", createBoard);
router.get("/:id", getAllBoard);

module.exports = router;
