const mongoose = require("mongoose");
const User = require("../Models/user.model");
const { generateToken } = require("../Utils/token");
const cookieParser = require("cookie-parser");

const createUser = async (req, res) => {
  let user;
  try {
    let email = req.body.email;

    user = await User.findOne({ email: email });

    if (user) {
      return res.status(403).send({ msg: "User already exists" });
    }

    user = await User.create({
      _id: new mongoose.Types.ObjectId(),
      username: email.split("@")[0],
      email: email,
      password: req.body.password,
    });

    const token = generateToken(user);

    return res.status(201).send({ msg: "Signup successful", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const getUserData = async (req, res) => {
  let token = req.session.token;
  res.status(200).send({ token: req.cookies, rand: "1", msg: "token aaya?" });
  // if(req.user){
  //     return res.status(200).send({user: req.user})
  // }
  // else{
  //     res.status(403).send({msg: "Didnt detect user"})
  // }
};

// const loginUser

module.exports = { createUser, getUserData };
