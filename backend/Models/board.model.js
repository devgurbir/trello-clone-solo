/** @format */

const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    workspace: { type: String },
    lists: { type: [mongoose.Schema.Types.ObjectId], default: [] },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true },
    members: { type: [mongoose.Schema.Types.ObjectId], default: [] },
    background: { type: String, default: null },
  },
  { timestamps: true }
);

const Board = mongoose.model("boards", boardSchema);

module.exports = Board;
