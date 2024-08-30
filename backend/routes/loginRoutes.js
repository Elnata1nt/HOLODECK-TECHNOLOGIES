const express = require('express');
const router = express.Router();
const  loginController  = require('../controllers/loginController');

// Rota para login
router.post('/logar', loginController.login);

module.exports = router;
