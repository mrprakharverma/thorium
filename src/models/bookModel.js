const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required: true,
        unique: true
    }, 
    authorName: {
        type: String,
        required: true,
        unique: true
    }, 
    tags: [String],
    year: {
        type: Number,
        default: 2022
    },
    isStockAvailable: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalPages : Number,
    default: false
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users


