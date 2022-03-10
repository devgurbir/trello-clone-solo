const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema({
    title: {type: String, required: true, maxlength: 100, minlength: 1},
    boards: [{ type: mongoose.Schema.Types.ObjectId, }], // Add ref: "Board"
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

const Workspace = mongoose.model("Workspace", workspaceSchema)

module.exports = Workspace