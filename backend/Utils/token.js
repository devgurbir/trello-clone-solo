const jwt = require('jsonwebtoken')
require("dotenv").config()

const generateToken = (user) => {
    return jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY,
    {expiresIn: '1h' }  )
}

const verifyToken = (token) => {
    return new Promise( (resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
            if(err) return reject(err)

            resolve(payload)
        })
    })
}

module.exports = {generateToken, verifyToken}