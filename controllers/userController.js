const User = require("../models/User");

const userRegister = {

    getAll: async (req, res) => {
        try {

            const response = await User.findAll();
            
            res.status(200).json(response);
        } catch (error) {
            console.log(erro);
        }
    },

    getOne: async (req, res) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    },

    create: async (req, res) => {
        try {

            const user = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                birthDay: req.body.birthDay
            }

            console.log(user);

            const response = await User.create(user);

            res.status(201).json({msg: "User created succesfully!"})
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userRegister;