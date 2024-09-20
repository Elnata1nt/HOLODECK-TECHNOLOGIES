import jwt from 'jsonwebtoken';
// Função para gerar um token JWT
const generateToken = async(user, expireIn = 1) => {

  const roles = user.roles.map(userRole => userRole.role.nameRole)[0];

  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const payload = { 
    id: user.id,
    nome: user.name,
    email: user.email,
    role: roles,
  };


  const options = { 
    expiresIn: `${expireIn}d`,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

export default generateToken; 
