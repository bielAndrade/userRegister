const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");

router.get("/all", (req, res) => userController.getAll(req, res));

router.get("/user/:id", (req, res) => userController.getOne(req, res));

router.post("/new", bodyParser.json(), (req, res) => userController.create(req, res));

router.delete("/delete/:id", (req, res) => userController.delete(req, res));

router.patch("/edit/:id", bodyParser.json(), (req, res) => userController.edit(req, res));

module.exports = router;