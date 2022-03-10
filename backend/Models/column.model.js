/** @format */

const mongoose = require("mongoose");

const columnSchema = new mongoose.Schema(
  {
    boardId: { type: String, required: true },
    title: { type: String, required: true },
    cardOrder: { type: [mongoose.Schema.Types.ObjectId], required: true },
  },
  { timestamps: true }
);

const Column = mongoose.model("column", columnSchema);

module.exports = Column;
