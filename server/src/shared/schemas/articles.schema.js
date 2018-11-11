const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    imageUrl: String,
    excerpt: String,
    body: String
});

module.exports = articleSchema;