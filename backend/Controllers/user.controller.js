const mongoose = require("mongoose");
const User = require("../Models/user.model");
const { generateToken } = require("../Utils/token");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

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

    const token = await generateToken(user);

    return res.status(201).send({ msg: "Signup successful", user, token });
  } catch (error) {
    res.status(500).send({ msg: "Something went wrong", error });
  }
};

const signIn = async (req, res) => {
  // let user;
  // console.log("...checking user");
  // try {
  //   user = await User.find({ email: req.body.email });
  //   if (!user) return res.status(401).send({ msg: "User not found" });
  // } catch (error) {
  //   res.status(500).send({ msg: "Something went wrong", error });
  // }
  // console.log("...checking passord");
  // // If it does, check if passwords match - Use the method checkPass set on userSchema, which
  // //  -- utilizes bcrypt.compare
  // try {
  //   const isMatch = bcrypt.compareSync(req.body.password, user.password);
  //   console.log("isMatch: ", isMatch);
  //   // if passwords don't match, return error.
  //   if (!isMatch) {
  //     return res
  //       .status(400)
  //       .send({ status: "failed", msg: "Invalid email/password" });
  //   }
  // } catch (error) {
  //   return res
  //     .status(500)
  //     .send({ status: "failed", msg: "something went wrong: " + err });
  // }
  // console.log("...all good");
  // // generate token and send it as response
  // const token = await generateToken(user);
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  const isMatch = await bcrypt.compare(password, user.password);
  res.status(200).send({ status: "success", isMatch });
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

module.exports = { createUser, signIn, getUserData };
