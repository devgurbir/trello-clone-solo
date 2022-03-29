/** @format */

const mongoose = require("mongoose");

const defaultColors = [
  { name: "green", color: "#61bd4f", selected: false },
  { name: "yellow", color: "#f2d600", selected: false },
  { name: "orange", color: "#ff9f1a", selected: false },
  { name: "red", color: "#eb5a46", selected: false },
  { name: "purple", color: "#c377e0", selected: false },
  { name: "blue", color: "#0079bf", selected: false },
  { name: "lightblue", color: "#00c2e0", selected: false },
  { name: "lightgreen", color: "#51e898", selected: false },
  { name: "pink", color: "#ff78cb", selected: false },
  { name: "black", color: "#344563", selected: false },
];

const cardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    list: { type: String, required: true },
    isPrivate: { type: Boolean, default: true },
    members: { type: Array, default: [] },
    board: { type: String }, // needs to be required
    description: { type: String, default: "" },
    activity: { type: Array, default: [] },
    labels: { type: Array, default: defaultColors },
    checklist: { type: Array, default: [] },
    dueDate: { type: Date, default: null },
    attachments: { type: String, default: null },
    cover: { type: String, default: null },
  },
  { timestamps: true }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
