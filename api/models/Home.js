const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HomeSchema = new Schema({

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

const Home = mongoose.model("Home", HomeSchema);

module.exports = Home;