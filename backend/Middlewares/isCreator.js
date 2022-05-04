const mongoose = require('mongoose');
const Card = require('../Models/card.model')

const isCreator = async (req, res, next) => {
    const isAuth = req.isAuthenticated()
    
    if(!isAuth){
       return res.status(401).send({msg:"Sorry, please authenticate yourself"});
    }
    
    const card_id = req.params.card_id;
    try {
        const card = await Card.findById(card_id);
        if(!card){
            return res.status(400).send({msg:"Sorry, could not find the card you are looking for"});
        }

        if(card.author != req.user._id){
            return res.status(403).send({msg:"Sorry, you arent authorized to perform this action"});
        }

        next()
    
    } catch (error) {
        return res.status(500).send({msg:"Something went wrong"});
    }




}

module.exports = isCreator