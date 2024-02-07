const jwt = require('jsonwebtoken')
const {secret} = require('../config')
module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message : "Пользователь не авторизован"})
        }
        const decodedData = jwt.verify(token, secret)
        if (decodedData.role === 2) {
            req.user = decodedData;
            next();
        }
        else {
            return res.status(401).json({message : "Такая возможность есть только у администратора"})
        }
    } catch (e) {
        return res.status(500).json({message : "Ошибка сервера"})
    }
}