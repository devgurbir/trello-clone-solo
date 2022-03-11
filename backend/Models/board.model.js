/** @format */

const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    workspace: {type: String},
    columnOrder: { type: [mongoose.Schema.Types.ObjectId], default: [] },
  },
  { timestamps: true }
);

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
