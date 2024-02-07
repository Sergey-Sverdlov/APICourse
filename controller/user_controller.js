const { validationResult } = require('express-validator')
const userServices = require("../services/usersServices")
const DTO = require("../models/DtoModels/UserDtoModel")


class userController {
    async registration(req, res)  {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации"})
            }
            const CreateUserDto = DTO.CreateNewUser.convertReqToDTO(req)
            const code = await userServices.createUser(CreateUserDto)
            res.send(code)
        }
        catch (e)
        {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async login(req, res) {
        try {
            const LoginUserDTO = DTO.Login.convertReqToDTO(req.body)
            const token = await userServices.login(LoginUserDTO)
            return res.send(token)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async addFav(req, res) {
        try {
            const addFavDTOModel = DTO.FavDTO.convertReqToDTO(req)
            const result = userServices.addFav(addFavDTOModel)
            res.send(result)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async delFav(req, res) {
        try {
            const delFavDTOModel = DTO.FavDTO.convertReqToDTO(req)
            const result = userServices.delFav(delFavDTOModel)
            res.send(result)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async getInformationById(req, res) {
        try {
            const user_id = req.params.id;
            const userDTOModel = await userServices.getInformationByID(user_id)
            res.send(userDTOModel)
        }
        catch (e) {
            res.send(404).json({message: "Ошибка 404"})
        }
    }

    async getAllUsers(req, res) {
        const usersDTOModel = await userServices.getAllUsers();
        res.send(usersDTOModel)
    }

    async getInformationAboutMe(req, res) {
        try {
            const user_id = req.user.id;
            const UserDTOModel = await userServices.getInformationAboutMe({ id : user_id })
            res.send(UserDTOModel);
        } catch (e) {
            res.send(407)
        }
    }
}

module.exports = new userController()