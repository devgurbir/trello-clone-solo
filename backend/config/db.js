const mongoose = require('mongoose')
require("dotenv").config()


const connect = () => {
    try {
        // Connect to the MongoDB cluster
        return mongoose.connect(
        process.env.DB_URL,
          { useNewUrlParser: true, useUnifiedTopology: true },
          () => console.log(" Mongoose is connected")
        );
    
      } catch (e) {
        console.log("could not connect");
      }
}

module.exports = connect