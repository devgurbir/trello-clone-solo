/** @format */

const mongoose = require("mongoose");

const rowSchema = new mongoose.Schema(
  {
    boardId: { type: String, required: true },
    columnId: { type: String, required: true },
    cover: { type: String },
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const Row = mongoose.model("row", rowSchema);

module.exports = Row;
