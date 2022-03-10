const {verifyToken} = require("../Utils/token")
const User = require("../Models/user.model")
const checkAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization?.split("Bearer ")[1];
    if(!token){
      return res.status(400).send({msg: "Invalid token / token not present"});
    }
    console.log(token)
     
     try {
      const payload = await verifyToken(token);
      const user = await User.findById(payload.id)
      if(!user) return res.status(401).send({status: "failure", msg: "User does not exist"})

      req.user = user;
      
      next()
  } catch (err) {
      return res.status(500).send({msg: "Something went wrong: ", err});
  }   
  }

  module.exports = checkAuthenticated