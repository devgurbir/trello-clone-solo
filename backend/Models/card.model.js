const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    isPrivate: {type: Boolean, default: true},
    members: {type: Array, default: [] },
    lists: {type: String}, // needs to be required
    board: {type: String}, // needs to be required
    description: {type: String, default: ""},
    activity: {type: Array, default: []},
    labels: {type: Array, default: []},
    checklist: {type: Array, default: []},
    dueDate: {type: Date, default: null},
    attachments: {type: String, default: null},
    cover: {type: String, default: null}
}, {timestamps: true})

const Card = mongoose.model("Card", cardSchema);

module.exports = Card