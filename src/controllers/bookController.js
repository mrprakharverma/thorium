const { count } = require("console")
const BookModel= require("../models/bookModel")

// ------1------

    const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//=====2======

    const getBooksData= async function (req, res) {
    let allBooks = await BookModel.find()
    res.send({msg: allBooks})

}
//-----------3-------

    const getbookList=async function (req, res) {
    let allBooks = await BookModel.find().select( { bookName: 1, authorName: 1, _id : 0})
    res.send({msg: allBooks})
}
//---------4-------
    const getBooksInYear = async function (req, res) {
    let BooksInYear = await BookModel.find( { year: req.body.year } )
    res.send({msg: BooksInYear})
}

//  --------5-------
    const getParticularBook = async function (req, res) {
    let ParticularBook = await BookModel.find(req.body)
    res.send({ msg: ParticularBook })
}

//   --------6------------    

const getRandomBook = async function(req, res) {
    let allBooks = await BookModel.find( {$or : [ { isStockAvailable : true}, {totalPages: {$gt : 500}}]})
    res.send ( {msg : allBooks} )
}

// =============7------------

const getXINRBook = async function (req, res) {
    let allBooks = await BookModel.find({ 'prices.indianPrice' : {$in: ["500 INR", "270 INR", "500 INR"] } } )
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getbookList= getbookList
module.exports.getRandomBook= getRandomBook
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBook = getParticularBook
module.exports.getXINRBook = getXINRBook

