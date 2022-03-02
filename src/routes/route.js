const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const bookList = require('../models/bookModel')
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/getbookList", bookController.getbookList)
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.post('/year-books', bookController.getBooksInYear)
router.post('/get-Particular', bookController.getParticularBook)
router.get('/get-inr', bookController.getXINRBook)
router.get('/get-random', bookController.getRandomBook)

module.exports = router;