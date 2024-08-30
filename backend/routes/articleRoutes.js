const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.listArticles);
router.post('/', articleController.createArticle);

module.exports = router;
