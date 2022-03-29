const express = require("express");
const router = express.Router();
const {
  createList,
  getListsByBoardId,
} = require("../Controllers/list.controller");
const checkAuthenticated = require("../Middlewares/checkAuthenticated");

router.post("/create", checkAuthenticated, createList);
router.get("/", getListsByBoardId);

module.exports = router;
