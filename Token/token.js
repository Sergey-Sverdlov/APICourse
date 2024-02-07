const jwt = require('jsonwebtoken')
const {secret} = require("../config")

const generateToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, secret)
}

module.exports = generateToken