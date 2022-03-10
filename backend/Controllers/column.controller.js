/** @format */

const mongoose = require("mongoose");
const Column = require("../Models/column.model");
const Board = require("../Models/board.model");

// Create
const createColumn = async (req, res) => {
  try {
    const column = await Column.create({
      boardId: req.body.boardId,
      title: req.body.title,
      cardOrder: req.body.cardOrder,
    });

    const result = await Board.findByIdAndUpdate(
      { _id: column.boardId },
      { $push: { columnOrder: column._id } },
      { returnOriginal: false }
    );

    if (column) return res.status(201).send({ msg: "column created", result });
    return res.status(404).json({ message: "column not found" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

//update
const columnUpdate = async (req, res) => {
  try {
    console.log(req.body);
    const column = await Column.findByIdAndUpdate(
      { _id: req.params.id },
      { title: req.body.title }
    );
    if (column) return res.status(201).send({ msg: "column created", column });
    return res.status(404).json({ message: "column not created" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};
const deleteColumn = async (req, res) => {
  try {
    console.log(req.params);
    const column = await Column.findByIdAndRemove({ _id: req.params.id });
    if (column) return res.status(201).send({ msg: "column deleted" });
    return res.status(404).json({ message: "column not deleted" });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = { createColumn, columnUpdate, deleteColumn };
