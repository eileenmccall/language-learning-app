const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000
const db = 'mongodb://database/starter';

// const controllers = require('./api/controllers/controllers');

mongoose.connect(db);
mongoose.set("debug", true);

const ArticleSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    excerpt: String,
    body: String
}, { collection: 'articles'});

const Article = mongoose.model('Article', ArticleSchema);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, PUT, OPTIONS'
    )
    next();
})

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/articles', (req, res) => {
    // res.send(controllers.articlesController.get());

    Article.find()
        .then(documents => {
            console.log(documents);
            res.status(200).json(documents);
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))