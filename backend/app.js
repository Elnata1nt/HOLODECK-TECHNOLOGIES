import express from 'express';
import cors from 'cors';
import articleRoutes from './routes/articleRoutes.js';
import collaboratorRoutes from './routes/collaboratorRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import profileImageRoutes from './routes/profileImageRoutes.js';
import userRoutes from './routes/userRoutes.js';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { config } from 'dotenv';
import { testConnection } from './config/database.js';
config();

const app = express();

app.use(cors());
testConnection();

// Carregar o arquivo de documentação Swagger
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

// Configurar o Swagger UI
app.use('/api-docs/users', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use('/collaborators', collaboratorRoutes);
app.use('/login', loginRoutes);

app.use('/users', userRoutes);
app.use('/profile-images', profileImageRoutes);
app.use('/articles', articleRoutes);
app.use('/images', express.static('uploads'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
