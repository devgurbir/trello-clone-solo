/** @format */

const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();

const User = require("./Models/user.model");
const mongoose = require("mongoose");
const cardRouter = require("./Routes/card.routes");
const boardRouter = require("./Routes/board.routes");

const passport = require("./Utils/passport");
const authRouter = require("./Routes/auth.routes");
const userRouter = require("./Routes/user.routes");
const workspaceRouter = require("./Routes/workspace.routes");
const listRouter = require("./Routes/list.routes");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: process.env.DATABASE_URL,
    }),
  })
);

app.use(cookieParser());

// app.options("*", cors(corsOptions));
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "trello-clone.com");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

// app.set("trust proxy", 1);

app.use("/card", cardRouter);
app.use("/board", boardRouter);

// app.use((req, res, next, error) => {
//   console.log(error);
//   res.send(error);
// });
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user._id });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

app.use("/auth", authRouter);
app.use("/card", cardRouter);
app.use("/user", userRouter);
app.use("/workspace", workspaceRouter);
app.use("/list", listRouter);

const start = async () => {
  await connect();

  app.listen(process.env.PORT || 5000, () => {
    console.log("listening");
  });
};

module.exports = start;
