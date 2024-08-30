const { checkPassword } = require('../utils/hashPassword');
const { findUserByUsername } = require("../services/userService");
const generateToken = require("../utils/createToken");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Encontre o usuário pelo nome de usuário
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Nome de usuário ou senha inválidos' });
    }

    // Verifique a senha
    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Nome de usuário ou senha inválidos' });
    }

    // Gere um token JWT
    const token = await generateToken(user, 1);

    res.json({ success: true, token });
  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
};

module.exports = { login };
