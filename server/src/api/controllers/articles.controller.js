const articlesService = require('../../shared/services/articles.service');

module.exports.get = () => {
    articlesService.get();
}