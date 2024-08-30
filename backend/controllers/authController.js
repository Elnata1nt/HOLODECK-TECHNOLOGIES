const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// Configurações do PostgreSQL
const pool = new Pool({
    user: 'seu_usuario',
    host: 'localhost',
    database: 'holodeck',
    password: 'sua_senha',
    port: 5432,
});

// Rota de Registro de Usuário
app.post('/register', async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        const result = await pool.query(
            'INSERT INTO users (nome, email, senha_hash) VALUES ($1, $2, $3) RETURNING id',
            [nome, email, hashedPassword]
        );
        res.status(201).json({ id: result.rows[0].id });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
});

// Rota de Login
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        if (user && await bcrypt.compare(senha, user.senha_hash)) {
            const token = jwt.sign({ userId: user.id }, 'secreta', { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

// Rota de Perfil do Usuário (exige autenticação)
app.get('/profile', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token não fornecido' });

    try {
        const decoded = jwt.verify(token, 'secreta');
        const result = await pool.query('SELECT * FROM profiles WHERE usuario_id = $1', [decoded.userId]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(401).json({ error: 'Token inválido ou expirado' });
    }
});

// Iniciar o Servidor
app.listen(1862, () => {
    console.log('Servidor rodando na porta 3000');
});
