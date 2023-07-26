const Sequelize = require("sequelize");

const db = new Sequelize('users', 'root', 'rootPass', {
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
.then( () => {
    console.log("DB Connected!");
}).catch( () => {
    console.log("Erro!");
})

module.exports = db;