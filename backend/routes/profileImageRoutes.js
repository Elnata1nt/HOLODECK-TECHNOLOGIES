const express = require( 'express');
const imageController = require( '../controllers/imageController.js');
const upload = require( '../middlewares/multerConfig.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const router = express.Router();

// Rota para criar ou atualizar uma imagem
router.post('/upload', upload.single('image'), authMiddleware, imageController.createImage);

// deletar a imagem do usuário
router.delete('/delete', authMiddleware,imageController.deleteImage);

module.exports = router;
