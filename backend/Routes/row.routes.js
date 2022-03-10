/** @format */

const express = require("express");
const { createRow } = require("../Controllers/row.controller");
const router = express.Router();

router.post("/", createRow);

module.exports = router;
