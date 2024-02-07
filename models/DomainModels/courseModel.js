const { DataTypes } = require('sequelize')
const sequelize = require("../../db")

const Course = sequelize.define('course', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        },
        short_info: {
            type: DataTypes.STRING,
        },
        full_info: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    })
module.exports = Course

