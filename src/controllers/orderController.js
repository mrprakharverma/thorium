const orderModel = require("../models/orederModel");
const productModel = require("../models/productModel");
const userModel = require("../models/userModel")

const createOrder = async function (req, res) {
    let userId = req.body.user;
    let userDetails = await userModel.findById(userId)
    if(!userDetails) return res.send("This userId is invalid")

    let productId = req.body.product;
    let productDetails = await productModel.findById(productId)
    if (!productDetails) return res.send("This productId is invalid")
    
    let header = req.headers.isfreeappuser
    if (header != 'ture') {
        const productPrice = productDetails.price
        const userBalance = userDetails.balance

        if (userBalance < productPrice) {
            res.send("User's doesn't have sufficient balance")
        } else {
            let data = req.body
            const updateUser = await userModel.updateOne({_id: userId}, {$set: {balnce: 350}})
            let savedData = await orderModel.create(updateUser)

            res.send({msg: savedData})
        }
    } else {
        let data = req.body
        let savedData = await orderModel.crete(data)
        res.send({msg: savedData})
    }
}

module.exports.createOrder = createOrder