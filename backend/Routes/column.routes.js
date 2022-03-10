/** @format */

const express = require("express");
const {
  createColumn,
  columnUpdate,
  deleteColumn,
} = require("../Controllers/column.controller");
const router = express.Router();

router.post("/", createColumn);
router.put("/:id", columnUpdate);
router.delete("/:id", deleteColumn);

module.exports = router;
