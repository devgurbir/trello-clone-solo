const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect("mongodb://localhost:5000/dbName")
}

module.exports = connect