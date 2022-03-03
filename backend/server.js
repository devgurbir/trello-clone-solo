const express = require('express');
const cors = require('cors')
const connect = require("./config/db")
const app = express();

const PORT = process.env.PORT || "8000"

app.use(cors());
app.use(express.json());

const start = async () => {
    await connect()

    app.listen(PORT, () => {
        console.log("listening on port 6000")
    })
}

module.exports = start

