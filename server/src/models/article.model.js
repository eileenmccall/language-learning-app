const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: String,
    imageUrl: String,
    excerpt: String,
    body: String
}, { collection: 'articles'});

module.exports = mongoose.model('Article', articleSchema);
