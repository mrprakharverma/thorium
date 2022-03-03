const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const PublisherSchema = new mongoose.Schema({

    name:String,
    headQuarter:String,
})
module.exports = mongoose.model('newAuthor', PublisherSchema)