const mongoose = require("mongoose");

const checklistSchema = new mongoose.Schema({
  card_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  items: { type: Array, required: true, default: [] },
});

const Checklist = mongoose.model("Checklist", checklistSchema);

module.exports = Checklist;
