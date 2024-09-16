import express from 'express';
import authMiddleware from './../middlewares/authMiddleware.js';
import userController from '../controllers/userController.js';
import validations from '../middlewares/validations.js';
import verifyExistUser from '../middlewares/verifyExistUser.js';
import validatePasswordVerification from '../middlewares/passwordVerify.js';
import authMiddlewareAdmin from '../middlewares/authMiddlewareAdmin.js';

const router = express.Router();
// Rota para listar todos os usuários
router.get('/list-users',authMiddlewareAdmin, userController.listUsers);

// Rota para listar um usuário específico pelo ID
router.get('/list-users/:id',authMiddlewareAdmin, userController.listUserById);

// Rota para deletar um usuário pelo ID
router.delete('/delete-user/:id',authMiddleware, userController.deleteUser);

// Rota para atualizar um usuário existente
router.put('/update-user/:id', authMiddleware, validations, verifyExistUser.verifyExistUser, verifyExistUser.verifyConflictOnUpdate, userController.updateUser);

// Rota para criar um novo usuário
router.post('/create-user', validations, validatePasswordVerification, verifyExistUser.verifyExistUser, userController.createUser);

export default router;
