const express = require('express');
const { createUser, getById } = require('../Controllers/card.controller');
const router = express.Router();

router.post("/create", createUser)

router.get("/:card_id", getById)

module.exports = router