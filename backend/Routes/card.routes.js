const express = require('express');
const {updateLabels, toggleChecklistItemStatus, updateCover, createCard, getById, updateDescription, updateTitle, addChecklist,addItemInChecklist, getChecklist, deleteChecklist } = require('../Controllers/card.controller');
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated")

router.get("/:card_id", getById)
router.post("/create", checkAuthenticated, createCard)
router.patch("/:card_id/title", updateTitle)
router.patch("/:card_id/description", updateDescription)
router.patch("/:card_id/cover", updateCover)
router.patch("/:card_id/labels", updateLabels)

// Checklist
router.post("/:card_id/add-checklist", addChecklist)
router.post("/:card_id/checklist/addItem", addItemInChecklist)
router.patch("/:card_id/toggleItem", toggleChecklistItemStatus)
router.get("/:card_id/getChecklist", getChecklist)
router.delete("/:card_id/deleteChecklist", deleteChecklist)
module.exports = router