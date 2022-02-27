const UserModel= require("../models/userModel")
const route = require('../Routes/route');

const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allbook= await UserModel.find()
    res.send({msg: allbook})
}

module.exports.createNewBook= createNewBook
module.exports.getBookData= getBookData

