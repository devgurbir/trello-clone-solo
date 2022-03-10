/** @format */

const mongoose = require("mongoose");
const Row = require("../Models/row.model");
const Column = require("../Models/column.model");

// Create
const createRow = async (req, res) => {
  try {
    const row = await Row.create({
      boardId: req.body.boardId,
      columnId: req.body.columnId,
      title: req.body.title,
      cover: req.body.cover,
    });

    const result = await Column.findByIdAndUpdate(
      { _id: row.columnId },
      { $push: { cardOrder: row._id } },
      { returnOriginal: false }
    );

    if (row) return res.status(201).send({ msg: "column created", result });
    return res.status(404).json({ message: "column not found" });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

module.exports = { createRow };
