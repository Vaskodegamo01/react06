const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');


const info = require("./app/info");
const config =  require("./config");

const port = 8000;


mongoose.connect(config.db.url + '/' + config.db.name, {useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const db = mongoose.connection;


app.use(cors());
app.use(express.static('public'));
app.use(express.json());

db.once('open', () => {
    app.use('/info', info);
    app.listen(port, () => console.log(`Server started on ${port}`));
});




