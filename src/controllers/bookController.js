const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel = require('../models/authorModel')

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createsNewAuthor = async function (req,res) {
    const reqAuthor = req.body;
    const SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
}


const allBook = async function(req, res) {
    const authorDetail = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetail[0].author_id
    const booksName = await BookModel.find({author_id: id}).select({name:1})
    res.send( {msg:booksName})
}


const upadatedBooksPrice = async function (req, res) {
    const bookDetails = await BookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    
    const bookName = bookDetails[0].name
    const updatedPrice = await BookModel.findOneAndUpdate({name:bookName}, {price:100},{new:true}).select({price:1, _id:0})

    res.send({msg:authorN, updatedPrice})

}

    const authorsName = async function (req,res) {
    const bookId= await BookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = bookId.map(inp => inp.author_id)
    // const allAuthorNames= id.map(x => {return authorModel.find({author_id:x}).select({author_name:1, _id:0})
    // })
    // res.send({msg:allAuthorNames})
    let temp =[]
    for(let i=0; i<id.length; i++) {
        let x = id[i]
        const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
        temp.push(author)
    }
    const authorName = temp.flat()

    res.send({msg:authorName})
}

    module.exports.createsNewAuthor =createsNewAuthor
    module.exports.createBook = createBook
    module.exports.allBook = allBook
    module.exports.upadatedBooksPrice = upadatedBooksPrice
    module.exports.authorsName = authorsName
