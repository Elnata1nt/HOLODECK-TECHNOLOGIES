const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const profileImageRoutes = require('./routes/profileImageRoutes');
const articleRoutes = require('./routes/articleRoutes');
const loginRoutes = require('./routes/loginRoutes');
const collaboratorRoutes = require('./routes/collaboratorRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

require('dotenv').config();

const app = express();

// Carregar o arquivo de documentação Swagger
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

// Configurar o Swagger UI
app.use('/api-docs/users', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());
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
