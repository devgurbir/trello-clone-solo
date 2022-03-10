/** @format */

const Board = require("../Models/board.model");
const { ObjectId } = require("mongoose");
const { default: mongoose } = require("mongoose");

// Create
const createBoard = async (req, res) => {
  try {
    const board = await Board.create({
      title: req.body.title,
    });

    if (board) return res.status(201).send({ msg: "column created", board });
    return res.status(404).json({ message: "column not found" });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const getAllBoard = async (req, res) => {
  try {
    const board = await Board.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
      { $addFields: { _idTest: { $toString: "$_id" } } },
      {
        $lookup: {
          from: "columns",
          localField: "_idTest",
          foreignField: "boardId",
          as: "columns",
        },
      },
      {
        $lookup: {
          from: "rows",
          localField: "_idTest",
          foreignField: "boardId",
          as: "row",
        },
      },
    ]);

    board[0].columns.forEach((column) => {
      column.row = board[0].row.filter(
        (c) => c.columnId === String(column._id)
      );
    });
    delete board[0].row;

    if (board) return res.status(200).json({ results: board });
    return res.status(404).json({ message: "board not found" });
  } catch (error) {
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

module.exports = { createBoard, getAllBoard };
