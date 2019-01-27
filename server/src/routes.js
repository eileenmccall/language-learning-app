const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Article = require("./models/article.model");

const app = express();

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
        "GET, POST, PATCH, DELETE, OPTIONS"
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

app.delete("/articles/:id", (req, res, next) => {
    const articleToDelete = Article.find({_id: req.params.id});
    Article.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json(articleToDelete);
    });
});

module.exports = app;
