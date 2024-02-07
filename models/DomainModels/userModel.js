const { DataTypes } = require('sequelize')
const sequelize = require("../../db")

const User = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.INTEGER,
        },
        like_courses: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },
    },
    {
        timestamps: false
    })
module.exports = User

