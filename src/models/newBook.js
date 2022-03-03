const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    name: String,
    author:String,
    price: Number,
    ratings: Number,
    publisher:String
}, 

{ timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
