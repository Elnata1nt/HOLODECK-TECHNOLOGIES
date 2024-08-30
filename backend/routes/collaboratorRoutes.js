const express = require('express');
const collaboratorController = require('../controllers/collaboratorController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/collaborator',authMiddleware, collaboratorController.listProjectCollaborators);

module.exports = router;
  