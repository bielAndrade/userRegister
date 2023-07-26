const Sequelize = require("sequelize");
const db = require("../db/conn");

const User = db.define('usersRegister', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDay: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.sync();

module.exports = User;