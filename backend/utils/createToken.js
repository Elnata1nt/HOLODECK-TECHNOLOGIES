const jwt = require('jsonwebtoken');

// Função para gerar um token JWT
const generateToken = async(user, expireIn = 1) => {

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const payload = { 
    id: user.id,
    nome: user.name,
  };
  const options = { 
    expiresIn: `${expireIn}h`,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

module.exports = generateToken; 
