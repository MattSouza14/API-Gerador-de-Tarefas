const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')
const Usuario = sequelize.define('users', { 

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

   password: {
        type: DataTypes.STRING,
        allowNull: false,
     
    }

})

module.exports = Usuario