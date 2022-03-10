/** @format */

const Card = require("../Models/card.model");

// Create
const createUser = async (req, res) => {
  try {
    const card = await Card.create({
      title: req.body.title,
      author: "Gurbir Singh",
    });

    res.status(201).send({ msg: "User created", card });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

// Read
const getById = async (req, res) => {
  try {
    const id = req.params.card_id;
    console.log(id);
    const card = await Card.findById(id);

    if (!card) {
      return res.status(404).send({ msg: "Card not found", card: {} });
    }

    res.status(200).send({ msg: "Card found", card });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = { createUser, getById };
