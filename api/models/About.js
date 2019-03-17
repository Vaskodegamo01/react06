const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AboutSchema = new Schema({

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

const About = mongoose.model("About", AboutSchema);

module.exports = About;