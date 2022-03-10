const User = require("../Models/user.model")
const Workspace = require("../Models/workspace.model")


const createWorkspace = async (req, res) => {
    try {
        const workspace = await Workspace.create({
            title: req.body.title,
            creator: req.user._id,
            members: req.body.members || [],
            boards: []
        })

        const data = await User.updateOne(
            {_id: req.user._id },
            {$push: {workspaces: workspace._id} }
        )

        return res.status(201).send({msg:"Workspace created", workspace, data})
    } catch (error) {
        res.status(500).send({msg:"Something went wrong", error})
    }
}

module.exports = {createWorkspace}