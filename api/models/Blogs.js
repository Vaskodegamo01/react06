const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogsSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    description: String,

    image: String,
});

const Blogs = mongoose.model("Blogs", BlogsSchema);

module.exports = Blogs;