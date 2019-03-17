const mongoose = require('mongoose');
const config = require('./config');

const Home = require("../api/models/Home");
const About = require("../api/models/About");
const News = require("../api/models/News");
const Blogs = require("../api/models/Blogs");
const Contacts = require("../api/models/Contacts");

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
    try {
        await db.dropCollection('homes');
        await db.dropCollection('abouts');
        await db.dropCollection('news');
        await db.dropCollection('blogs');
        await db.dropCollection('contacts');

    } catch (e) {
        console.log('Collections were not present, skipping drop...');
    }

    console.log('collection is dropped');

    const WebHome = await Home.create({
        title: "Что там",
        content: "Много ха ха ха ха ха",
        description: "ничего не придумал",
        image: "0DJVbzgEZnNgJwl7Kxy7q.jpeg"
    });

    console.log("Home created");

    const WebAbout = await About.create({
        title: "Что там",
        content: "Много ха ха ха ха ха",
        description: "ничего не придумал",
        image: "0DJVbzgEZnNgJwl7Kxy7q.jpeg"
    });

    console.log("About created");

    const WebNews = await News.create({
        title: "Что там",
        content: "Много ха ха ха ха ха",
        description: "ничего не придумал",
        image: "0DJVbzgEZnNgJwl7Kxy7q.jpeg"
    });

    console.log("News created");

    const WebBlogs = await Blogs.create({
        title: "Что там",
        content: "Много ха ха ха ха ха",
        description: "ничего не придумал",
        image: "0DJVbzgEZnNgJwl7Kxy7q.jpeg"
    });

    console.log("Blogs created");

    const WebContacts = await Contacts.create({
        title: "Что там",
        content: "Много ха ха ха ха ха",
        description: "ничего не придумал",
        image: "0DJVbzgEZnNgJwl7Kxy7q.jpeg"
    });

    console.log("Contacts created");

    db.close();
});