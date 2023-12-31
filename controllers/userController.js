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

            const id = req.params.id
            
            const response = await User.findByPk(id);
            
            res.status(200).json(response);
            
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

            const response = await User.create(user);

            res.status(201).json({msg: "User created succesfully!"});
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const response = await User.findByPk(id);
              
              if (response) {
                await response.destroy();
              }

            res.status(200).json({msg: "User deleted succesfully!"});            
        } catch (error) {
            console.log(error);
        }
    },

    edit: async (req, res) => {
        try {
            const id = req.params.id;

            const user = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                birthDay: req.body.birthDay
            }
            
            const response = await User.findByPk(id);

            await response.set(user);

            await response.save();

                res.status(200).json({msg: "User updated succesfully!"});
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = userRegister;