import express from 'express';
import authMiddleware from './../middlewares/authMiddleware.js';
import collaboratorController from '../controllers/collaboratorController.js';
const router = express.Router();

router.get('/collaborator',authMiddleware, collaboratorController.listProjectCollaborators);

export default router;
  