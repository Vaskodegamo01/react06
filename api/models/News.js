const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NewsSchema = new Schema({

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

const News = mongoose.model("News", NewsSchema);

module.exports = News;