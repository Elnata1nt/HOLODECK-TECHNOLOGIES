import express from 'express';
import loginController from '../controllers/loginController.js';
const router = express.Router();

// Rota para login
router.post('/logar', loginController.login);

export default router;
