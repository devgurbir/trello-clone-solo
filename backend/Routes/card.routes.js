const express = require("express");
const {
  updateLabels,
  toggleChecklistItemStatus,
  updateCover,
  createCard,
  getById,
  updateDescription,
  updateTitle,
  addChecklist,
  addItemInChecklist,
  getChecklist,
  deleteChecklist,
  updateChecklistItem,
  fileUpload,
} = require("../Controllers/card.controller");
const router = express.Router();
const checkAuthenticated = require("../Middlewares/checkAuthenticated");
const isCreator = require("../Middlewares/isCreator");

router.get("/:card_id", getById);
router.post("/create", checkAuthenticated, createCard);
router.patch("/:card_id/title", updateTitle);
router.patch("/:card_id/description", updateDescription);
router.patch("/:card_id/cover", updateCover);
router.patch("/:card_id/labels", updateLabels);

// Checklist
router.post("/:card_id/add-checklist",checkAuthenticated, addChecklist);
router.post("/:card_id/checklist/addItem", checkAuthenticated, addItemInChecklist);
router.patch("/:card_id/toggleItem", checkAuthenticated, toggleChecklistItemStatus);
router.get("/:card_id/getChecklist", getChecklist);
router.delete("/:card_id/deleteChecklist", isCreator, deleteChecklist);
router.patch("/:card_id/checklist/update-item",checkAuthenticated, updateChecklistItem);
router.post("/fileUpload", fileUpload);
module.exports = router;
