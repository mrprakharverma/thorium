const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController= require("../controllers/productController")
const middleware = require("../middleware/createmiddleware")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", middleware.mid, UserController.createUser  )

router.post("/createProduct", productController.createProduct  )

router.post("/createOrder", middleware.mid, orderController.createOrder)

module.exports = router;