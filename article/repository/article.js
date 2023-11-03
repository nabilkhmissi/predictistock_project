const { ArticleModel } = require("../models");
const article = require("../models/article");


class ArticleRepository {

    async findAll() {
        const articles = await ArticleModel.find({});
        return articles;
    }

    async findByCompanyId(id) {
        const articles = await ArticleModel.find({ companyId: id });
        return articles;
    }

    async findArticleNumbersByCompanyId(id) {
        const articles = await ArticleModel.find({ companyId: id });
        return articles.length;
    }




    async findById(id) {
        const article = await ArticleModel.findById(id);
        return article;
    }

    async create(article) {
        const new_article = await ArticleModel.create(article);
        return new_article;
    }

    async deleteById(id) {
        return await ArticleModel.deleteOne({ _id: id });
    }
}

module.exports = ArticleRepository