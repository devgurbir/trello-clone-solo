/** @format */

const Board = require("../Models/board.model");
const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");
const Workspace = require("../Models/workspace.model");
const List = require("../Models/list.model");

// Create
const createBoard = async (req, res) => {
  if(!req.isAuthenticated()){
    return res.status(401).send({"msg": "Not authorized" })
  }
  try {
    const board = await Board.create({
      title: req.body.title,
      workspace: req.body.workspace,
      background: req.body.background,
      owner: req.user._id,
    });

    if (!board) return res.status(404).json({ message: "Board not created" });

    const workspace = await Workspace.updateOne(
      { _id: board.workspace },
      {
        $push: {
          boards: {
            _id: board._id,
            title: board.title,
            background: board.background,
          },
        },
      }
    );

    return res.status(201).send({ msg: "Board created", board, workspace });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const getBoardById = async (req, res) => {
  let boardId = req.params.id;
  console.log(boardId);
  try {
    const board = await Board.findOne({
      _id: boardId,
    });

    if (!board) {
      return res.status(404).send({ msg: "Board not found" });
    }

    let listData = [];

    for (let i = 0; i < board.lists.length; i++) {
      const listFromDb = await List.findById(board.lists[i]);
      console.log(listFromDb);
      listData.push(listFromDb);
    }

    return res.status(200).send({ msg: "Board found", board, listData });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

// const getAllBoard = async (req, res) => {
//   try {
//     const board = await Board.aggregate([
//       { $match: { _id: mongoose.Types.ObjectId(req.params.id) } },
//       { $addFields: { _idTest: { $toString: "$_id" } } },
//       {
//         $lookup: {
//           from: "columns",
//           localField: "_idTest",
//           foreignField: "boardId",
//           as: "columns",
//         },
//       },
//       {
//         $lookup: {
//           from: "cards",
//           localField: "_idTest",
//           foreignField: "boardId",
//           as: "row",
//         },
//       },
//     ]);

//     board[0].columns.forEach((column) => {
//       column.row = board[0].row.filter(
//         (c) => c.columnId === String(column._id)
//       );
//     });
//     delete board[0].row;

//     if (board) return res.status(200).json({ results: board });
//     return res.status(404).json({ message: "board not found" });
//   } catch (error) {
//     res.status(500).json({ msg: "Something went wrong", error });
//   }
// };

module.exports = { createBoard, getBoardById };
