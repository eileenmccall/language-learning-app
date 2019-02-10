const articlesController = require('./articles.controller');
const filesController = require('./files.controller');
const authController = require('./auth.controller');

module.exports = function (app) {
    app.use('/auth', authController);
    app.use('/articles', articlesController);
    app.use('/files', filesController);
}