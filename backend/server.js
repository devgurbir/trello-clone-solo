const express = require('express');
const cors = require('cors')
const connect = require("./config/db")
const app = express();
const User = require("./Models/user.model")
const PORT = process.env.PORT || "8000"
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());


const start = async () => {
    await connect()

    app.listen(PORT, () => {
        console.log("listening on port 8000")
    })
}

module.exports = start

