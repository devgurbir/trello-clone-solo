const Board = require("../Models/board.model");
const List = require("../Models/list.model");

// create list
const createList = async (req, res) => {
  try {
    const list = await List.create({
      owner: req.user._id,
      title: req.body.title,
      board: req.body.board,
    });

    if (!list) return res.status(404).json({ message: "List not created" });

    const board = await Board.findOneAndUpdate(
      {
        _id: req.body.board,
      },
      {
        $push: { lists: list._id },
      },
      { returnDocument: "after" }
    );

    return res.status(201).send({ msg: "List created", list, board });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

// Get lists by board id
const getListsByBoardId = async (req, res) => {
  console.log("Board: ", req.body.board);
  try {
    const lists = await List.find({
      board: req.body.board,
    });

    return res.status(200).send({ msg: "Lists found", lists });
  } catch (error) {
    return res.status(500).send({ msg: "Something went wrong" });
  }
};

module.exports = { createList, getListsByBoardId };
