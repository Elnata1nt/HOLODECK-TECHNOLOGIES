import express from 'express';
import imageController from '../controllers/imageController.js';
import upload from '../middlewares/multerConfig.js';
import authMiddleware from './../middlewares/authMiddleware.js';

const router = express.Router();


// Rota para criar ou atualizar uma imagem
router.post('/upload', upload.single('image'), authMiddleware, imageController.createImage);

// deletar a imagem do usuário
router.delete('/delete', authMiddleware,imageController.deleteImage);

export default router;
