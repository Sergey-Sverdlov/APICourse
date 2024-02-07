const Router = require('express')
const router = new Router()
const userController = require('../controller/user_controller')
const {check} = require("express-validator")
const authMiddleWare = require('../middlewaree/authMiddleware')
const roleMiddleWare = require('../middlewaree/roleMiddleWare')

router.post('/user/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль не может быть пустым").notEmpty()
], userController.registration)
router.post('/user/login', userController.login)
router.get('/user/fav/:id', authMiddleWare, userController.addFav)
router.delete('/user/fav/:id', authMiddleWare, userController.delFav)
router.get('/user/:id', roleMiddleWare, userController.getInformationById)
router.get('/user', authMiddleWare, userController.getInformationAboutMe)
router.get('/users', roleMiddleWare, userController.getAllUsers)
module.exports = router