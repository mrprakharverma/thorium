const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: {
        type: String,
        enum: ["Poetry", "Novel", "Prayer", "Anthology", "Alternate history", "Crime", "Comic Book", "Journal", "Horror", "Mystery"]
    },
    year: Number,
}, { timestamps: true});

module.exports = mongoose.model("Book", bookSchema) //users