const {verifyToken} = require("../Utils/token")
const User = require("../Models/user.model")
const checkAuthenticated = async (req, res, next) => {
    try {
      let isAuth = req.isAuthenticated();
      if(isAuth){
        next();
      }
      else{
        return res.status(401).send({msg: "You aren't authenticated: ", err});
      }   
    }
             
      catch (err) {
      return res.status(500).send({msg: "Something went wrong: ", err});
  }   
}

  module.exports = checkAuthenticated