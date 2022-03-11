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

const getWorkspaceById = async (req, res) => {
    try {
        const id = req.params.workspace_id;
        console.log(id)
        const workspace = await Workspace.findOne({_id: id});

        if(!workspace){
            return res.status(404).send({msg:"Workspace not found", workspace: {} })
        }

        res.status(200).send({msg:"Workspace found", workspace  })
    } catch (error) {
        res.status(500).send({msg:"Something went wrong", error})
    }
}


module.exports = {createWorkspace, getWorkspaceById}