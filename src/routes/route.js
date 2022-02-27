const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController.js")


router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/creatNewBook", UserController.createNewBook)

router.get("/getBookData", UserController.getBookData)

module.exports = router;