const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContactsSchema = new Schema({

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

const Contacts = mongoose.model("Contacts", ContactsSchema);

module.exports = Contacts;