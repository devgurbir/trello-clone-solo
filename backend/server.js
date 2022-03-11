/** @format */

const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();

const User = require("./Models/user.model");
const PORT = process.env.PORT || "8000";
const mongoose = require("mongoose");
const cardRouter = require("./Routes/card.routes");
const boardRouter = require("./Routes/board.routes");
const columnRouter = require("./Routes/column.routes");
const rowRouter = require("./Routes/row.routes");
const passport = require('./Utils/passport');
const authRouter = require("./Routes/auth.routes")
const userRouter = require("./Routes/user.routes")
const workspaceRouter = require('./Routes/workspace.routes')
const session = require('express-session')
const MongoStore = require("connect-mongo")
require("dotenv").config()

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: process.env.DB_URL,
    }),
  })
);

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/card", cardRouter);
app.use("/board", boardRouter);
app.use("/column", columnRouter);
app.use("/row", rowRouter);
app.use((req, res, next, error) => {
  console.log(error);
  res.send(error);
});
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

app.use("/auth", authRouter);
app.use("/card", cardRouter);
app.use("/user", userRouter);
app.use("/workspace", workspaceRouter);

const start = async () => {
  await connect();

  app.listen(PORT, () => {
    console.log("listening on port 8000");
  });
};

module.exports = start;
