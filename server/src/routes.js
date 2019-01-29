const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

const Article = require("./models/article.model");

const MIME_TYPE_MAP = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValidMimeType = MIME_TYPE_MAP[file.mimetype];
        error = isValidMimeType ? null : 'Invalid mime type';
        cb(null, "../public/images");
    },
    filename: (req, file, callback) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE_MAP[file.mimetype];
        callback(null, name + '-' + Date.now() + '.' + extension);
    }
})

mongoose
    .connect(
        "mongodb://database/starter"
    )
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
mongoose.set("debug", true);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/articles", (req, res, next) => {
    const article = new Article({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        excerpt: req.body.excerpt,
        body: req.body.body
    });
    article.save().then(createdDocument => {
        res.status(201).json(createdDocument);
    });
});

app.get("/articles", (req, res, next) => {
    Article.find().then(documents => {
        res.status(200).json(documents);
    });
});

app.put('/articles/:id', multer(storage).single('image'), (req, res, rext) => {
    Article.findByIdAndUpdate(req.params.id, req.body)
        .then((document) => {
            res.status(201).json(document);
        });
});

app.delete("/articles/:id", (req, res, next) => {
    Article.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json(req.params.id);
    });
});

module.exports = app;
