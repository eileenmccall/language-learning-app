const express = require("express");
const Article = require("../models/article.model");
const auth = require('../middleware/auth.middleware');

const router = express.Router();

router.get("",
    auth.require_auth,
    (req, res, next) => {
        // const pageSize = +req.query.pageSize;
        // const currentPage = +req.query.currentPage;
        const postQuery = Article.find();
        // let documents;

        // if (pageSize && currentPage) {
        //     postQuery
        //     .skip(pageSize * (currentPage - 1))
        //     .limit(pageSize);
        // }

        postQuery
            .then(result => {
                res.status(200).json(result);
            })
            // .then(result => {
            //     documents = result;
            //     return Article.count();
            // })
            // .then(count => {
            //     res.status(200).json({
            //         articles: documents,
            //         collectionSize: count
            //     });
            // });
    }
);

router.post("",
    auth.require_auth,
    (req, res, next) => {
        const article = new Article({
            title: req.body.title,
            imageUrl: req.body.imageUrl,
            excerpt: req.body.excerpt,
            body: req.body.body
        });
        article.save().then(createdDocument => {
            res.status(201).json(createdDocument);
        });
    }
);

router.put("/:id", 
    auth.require_auth, 
    (req, res, rext) => {
        Article.findByIdAndUpdate(req.params.id, req.body)
            .then((document) => {
                res.status(201).json(document);
            });
    }
);

router.delete("/:id", 
    auth.require_auth, 
    auth.require_role(auth.roles.admin), 
    (req, res, next) => {
        Article.deleteOne({ _id: req.params.id }).then(result => {
            res.status(200).json(req.params.id);
        });
    }
);

module.exports = router;