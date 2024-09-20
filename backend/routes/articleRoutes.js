import express from 'express';
import articleController from '../controllers/articleController.js';    

const router = express.Router();

router.get('/', articleController.listArticles);
router.post('/', articleController.createArticle);

export default router;
