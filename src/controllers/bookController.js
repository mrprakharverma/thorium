const { count } = require("console")
const res = require("express/lib/response")
const newAuthor = require("../models/newAuthor")
const newBook = require("../models/newBook")
const newPublisher = require("../models/newPublisher")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthor.create(author)
    res.send({data: authorCreated})                                          
}

const createPublisher= async function (req, res) {
    let Publisher = req.body
    let PublisherCreated = await newPublisher.create(Publisher)
    res.send({data: PublisherCreated})
}

const createBook1 = async function (req, res) {
    let book = req.body
    let bookCreated = await newBook.create(book)
    res.send({data: bookCreated})
}

const createBook = async function(req,res) {
    let book = req.body
    if (book.Author) {
        if (book.Publisher) {
            Publisher_id = book.Publisher
            Authorid_id = book.Author
            const define1 = await newAuthor.find({_id:Author_id})
            const define2 = await newPublisher.find({_id:Publisher_id})
            if (define1.length == 0) {
                res.send("This Author is not present.")
            }
            if (define2.length == 0) {
                res.send("This Publisher is not present.")
            }
            let bookCreated = await newBook.create(book)
            res.send({data: bookCreated})
        }
            res.send("Details Required")
    }
            res.send("Details Required")
}       

const getBooks = async function (req, res) {
    let Book = await newBook.find().populate('Author_id')
    res.send({data: Book})
}

module.exports.createBook1= createBook1
module.exports.createPublisher= createPublisher
module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.getBooks = getBooks



