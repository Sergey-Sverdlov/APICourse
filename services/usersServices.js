const userDao = require("../dao/userDao")
const DTO = require("../models/DtoModels/UserDtoModel")
const generateToken = require("../Token/token")
class UsersServices {
    async getInformationAboutMe(UserDtoModel) {
        const User = await userDao.GetInformationAboutMe(UserDtoModel.id)
        const UserDTO = DTO.OneUserDTO.convertOneUserDomainToDTO(User)
        return UserDTO
    }

    async getAllUsers() {
        const allUsers = await userDao.findAllUsers()
        let allUsersToDTO = []
        for (let i = 0; i < allUsers.length; i++) {
            const User = allUsers[i]
            const ModelUserDTO = DTO.AllUsersDto.convertUserDomainToDTO(User)
            const objDTO = Object.assign({}, ModelUserDTO)
            allUsersToDTO.push(objDTO)
        }
        return allUsersToDTO
    }

    async createUser(CreateUserDtoModel) {
        const newUser = await userDao.CreateUser(CreateUserDtoModel)
        if (newUser) {
            return 200
        }
        else {
            return 401
        }
    }

    async login(LoginUserDtoModel) {
        const user = await userDao.login(LoginUserDtoModel)
        if (user === null) {
            return 401
        }
        const token = generateToken(user.id, user.email)
        return token
    }

    async addFav(addFavDtoModel) {
        const result = await userDao.addFav(addFavDtoModel)
        return result
    }

    async delFav(delFavDtoModel) {
        const result = await userDao.delFav(delFavDtoModel)
        return result
    }

    async getInformationByID(id) {
        const user = await userDao.getInformationById(id);
        if (user === null) {
            return 400
        }
        const userInformationDTO = DTO.InformationByID.convertInfoIDUserDomainToDTO(user)
        return userInformationDTO
    }
}

module.exports = new UsersServices()