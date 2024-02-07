const User = require('../models/DomainModels/userModel')
const sequelize = require("../db")
class UserDao {
    async findAllUsers() {
        let users = await User.findAll()
        users = JSON.stringify(users, null, 2)
        users = JSON.parse(users)
        return users
    }

    async GetInformationAboutMe(id) {
        let user = await User.findOne({ where: {
            id: id
            }
        })
        user = JSON.stringify(user, null, 2)
        user = JSON.parse(user)
        return user
    }

    async CreateUser(createUserDTO) {
        let newUser = await User.create({
            username: createUserDTO.username,
            surname: createUserDTO.surname,
            email: createUserDTO.email,
            password: createUserDTO.password,
            role: createUserDTO.role
        })
        newUser = JSON.stringify(newUser, null, 2)
        newUser = JSON.parse(newUser)
        return newUser
    }

    async login(loginUserDTO) {
        let user = await User.findOne({ where: {
                email: loginUserDTO.email,
                password: loginUserDTO.password
            }
        })
        user = JSON.stringify(user, null, 2)
        user = JSON.parse(user)
        return user
    }

    async addFav(addFavDtoModel) {
        let user = await User.update(
            {
                'like_courses' : sequelize.fn('array_append', sequelize.col('like_courses'), addFavDtoModel.course_id)
            },
            {
                'where' : {'id' : addFavDtoModel.user_id}
            }
        )
        return user
    }

    async delFav(delFavDtoModel) {
        let user = await User.update(
            {
                'like_courses' : sequelize.fn('array_remove', sequelize.col('like_courses'), delFavDtoModel.course_id)
            },
            {
                'where' : {'id' : delFavDtoModel.user_id}
            }
        )
        return user
    }

    async getInformationById(id) {
        let user = await User.findOne({ where: {
                id: id
            }
        })
        user = JSON.stringify(user, null, 2)
        user = JSON.parse(user)
        return user
    }
}

module.exports = new UserDao()