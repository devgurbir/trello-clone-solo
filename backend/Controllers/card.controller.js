/** @format */

const Card = require("../Models/card.model");
const mongoose = require("mongoose");
const Column = require("../Models/column.model");
const List = require("../Models/list.model");

// Create
const createCard = async (req, res) => {
  try {
    const card = await Card.create({
      ...req.body,
      author: req.user._id,
    });

    console.log(card);
    const list = await List.findByIdAndUpdate(
      req.body.list,
      {
        $push: { cards: { _id: card._id, title: card.title } },
      },
      { returnOriginal: false }
    );

    if (!card) return res.status(401).send({ msg: "Card not created" });
    return res.status(201).json({ message: "Card created", card, list });
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

// Patch

const updateTitle = async (req, res) => {
  try {
    const id = req.params.card_id;
    const data = await Card.findByIdAndUpdate(
      id,
      { title: req.body.title },
      { returnDocument: "after" }
    );
    if (!data) {
      return res.status(404).send({ msg: "Card not found, please check ID" });
    }
    res.status(201).send({ msg: "Title updated successfully", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const updateDescription = async (req, res) => {
  try {
    const id = req.params.card_id;
    const data = await Card.findByIdAndUpdate(
      id,
      { description: req.body.description },
      { returnDocument: "after" }
    );
    if (!data) {
      return res.status(404).send({ msg: "Card not found, please check ID" });
    }
    res
      .status(201)
      .send({ msg: "Description updated successfully", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

// Patch

const updateCover = async (req, res) => {
  try {
    const id = req.params.card_id;
    const data = await Card.findByIdAndUpdate(
      id,
      { cover: req.body.cover },
      { returnDocument: "after" }
    );
    if (!data) {
      return res.status(404).send({ msg: "Card not found, please check ID" });
    }
    res.status(201).send({ msg: "Title updated successfully", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const updateLabels = async (req, res) => {
  try {
    const id = req.params.card_id;
    const data = await Card.findByIdAndUpdate(
      id,
      { labels: req.body.labels },
      { returnDocument: "after" }
    );
    if (!data) {
      return res.status(404).send({ msg: "Card not found, please check ID" });
    }
    res.status(201).send({ msg: "Labels updated successfully", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};
// New Features

// Checklist

const addChecklist = async (req, res) => {
  // needs card_id, title of checklist
  // req.params.card_id, req.body.title
  let checklist = {
    id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    items: [],
  };
  try {
    const data = await Card.findByIdAndUpdate(
      req.params.card_id,
      { $push: { checklist: checklist } },
      { returnDocument: "after" }
    );

    if (!data) {
      return res.status(400).send({ msg: "Something went wrong, try again" });
    }

    res.status(201).send({ msg: "Checklist added successfully", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const addItemInChecklist = async (req, res) => {
  // need: card_id, Array index of checklist being updated (checklist is an array of objects)
  const item = {
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    complete: false,
  };

  try {
    console.log(req.body.id);
    let id = new mongoose.Types.ObjectId(req.body.id);

    const data = await Card.updateOne(
      { "checklist.id": id },
      { $push: { "checklist.$.items": item } }
    );

    if (!data) {
      return res.status(400).send({ msg: "Something went wrong, try again" });
    }

    res.status(201).send({ msg: "Wut is going on", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const toggleChecklistItemStatus = async (req, res) => {
  try {
    let id = new mongoose.Types.ObjectId(req.body.id);
    const data = await Card.updateOne(
      { "checklist.items._id": id },
      { $set: { "checklist.$.items.$.complete": req.body.complete } }
    );

    res.status(201).send({ msg: "Wut is going on", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

// get checklist
const getChecklist = async (req, res) => {
  // need: card_id, Array index of checklist being updated (checklist is an array of objects)

  try {
    const data = await Card.findOne(
      // {_id: req.params.card_id, "checklist._id": req.body.checklistId},
      // {$push: {"checklist.$.items": item} }
      { _id: req.params.card_id, "checklist.title": "A new checkliszzzzt" }
    );

    if (!data) {
      return res.status(400).send({ msg: "Something went wrong, try again" });
    }

    res.status(201).send({ msg: "Item added successfully", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

// delete checklist
const deleteChecklist = async (req, res) => {
  try {
    let id = new mongoose.Types.ObjectId(req.body.id);
    const data = await Card.deleteOne({ "checklist.id": id });

    if (!data) {
      return res.status(400).send({ msg: "Something went wrong, try again" });
    }

    res.status(201).send({ msg: "deleted", card: data });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = {
  updateLabels,
  toggleChecklistItemStatus,
  createCard,
  getById,
  updateTitle,
  updateDescription,
  updateCover,
  addChecklist,
  addItemInChecklist,
  getChecklist,
  deleteChecklist,
};
