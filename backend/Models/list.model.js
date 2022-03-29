const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    cards: { type: [], default: [] },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    board: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const List = mongoose.model("lists", listSchema);

module.exports = List;
