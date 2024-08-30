const express = require('express');
const authMiddleware = require('./../middlewares/authMiddleware');
const router = express.Router();
const userController = require('../controllers/userController.js');
const validations = require('../middlewares/validations.js');
const verifyExistUser = require('../middlewares/verifyExistUser.js');
const validatePasswordVerification = require('../middlewares/passwordVerify.js');


// Rota para listar todos os usuários
router.get('/list-users', userController.listUsers);

// Rota para listar um usuário específico pelo ID
router.get('/list-users/:id', userController.listUserById);

// Rota para deletar um usuário pelo ID
router.delete('/delete-user/:id',authMiddleware, userController.deleteUser);

// Rota para atualizar um usuário existente
router.put('/update-user/:id', authMiddleware, validations, verifyExistUser.verifyConflictOnUpdate, userController.updateUser);

// Rota para criar um novo usuário
router.post('/create-user', validations, validatePasswordVerification, verifyExistUser.verifyExistUser, userController.createUser);

module.exports = router;
