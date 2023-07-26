const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userController = require("../controllers/userController");

router.get("/all", (req, res) => userController.getAll(req, res));

router.post("/new", bodyParser.json(), (req, res) => userController.create(req, res));


module.exports = router;