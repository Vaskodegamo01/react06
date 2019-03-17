const express = require("express");
const multer = require("multer");
const path = require("path");
const nanoid = require("nanoid");


const config = require("../config");

const Home = require("../models/Home");
const About = require("../models/About");
const News = require("../models/News");
const Blogs = require("../models/Blogs");
const Contacts = require("../models/Contacts");

const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, config.uploadPath)
    },
    filename(req, file, cd){
        cd(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});


const router = express.Router();

router.get("/:name", (req, res) => {
    switch (req.params.name) {
        case 'home':
            Home.find()
                .then( (results) => res.send(results))
                .catch((e) => res.send(e).status(500));
            break;
        case 'about':
            About.find()
            .then( (results) => res.send(results))
            .catch((e) => res.send(e).status(500));
            break;
        case 'news':
            News.find()
            .then( (results) => res.send(results))
            .catch((e) => res.send(e).status(500));
            break;
        case 'blogs':
            Blogs.find()
            .then( (results) => res.send(results))
            .catch((e) => res.send(e).status(500));
            break;
        case 'contacts':
            Contacts.find()
            .then( (results) => res.send(results))
            .catch((e) => res.send(e).status(500));
            break;
        default:
            console.log("не передан параметр")
    }
});

router.post("/:name", upload.single("image"), (req, res) => {
    const ContentData = req.body;
    // console.log(ContentData);
    if (req.file) ContentData.image = req.file.filename;
    switch (req.params.name) {
        case 'home':
            Home.updateOne({_id : "5c8cf1b8d9a75a20ebc2b0e2"}, req.body)
                .then(() => res.send(ContentData))
                .catch((e) => res.send(e).status(500));
            break;
        case 'about':
            About.updateOne({_id : "5c8cf1b8d9a75a20ebc2b0e3"}, req.body)
                .then(() => res.send(ContentData))
                .catch((e) => res.send(e).status(500));
            break;
        case 'news':
            News.updateOne({_id : "5c8cf1b8d9a75a20ebc2b0e4"}, req.body)
                .then(() => res.send(ContentData))
                .catch((e) => res.send(e).status(500));
            break;
        case 'blogs':
            Blogs.updateOne({_id : "5c8cf1b8d9a75a20ebc2b0e5"}, req.body)
                .then(() => res.send(ContentData))
                .catch((e) => res.send(e).status(500));
            break;
        case 'contacts':
            Contacts.updateOne({_id : "5c8cf1b8d9a75a20ebc2b0e6"}, req.body)
                .then(() => res.send(ContentData))
                .catch((e) => res.send(e).status(500));
            break;
        default:
            console.log("не передан параметр")
    }
});

module.exports = router;