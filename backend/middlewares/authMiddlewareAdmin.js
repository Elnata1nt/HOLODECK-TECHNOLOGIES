import jwt from 'jsonwebtoken';

const authMiddlewareAdmin = async (req, res, next) => {
  // Obtém o token do cabeçalho Authorization
  const token = req.headers['authorization']?.split(' ')[1];

  // Se o token não for fornecido
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token não fornecido.',
    });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    req.userName = decoded.nome;
    req.userEmail = decoded.email;
    req.userRole = decoded.role;

    // Verifica se o usuário é um admin
    if (req.userRole !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Acesso negado. Somente administradores podem acessar esta rota.',
      });
    }

    next();
  } catch (error) {
    // Se o token for inválido
    res.status(401).json({
      success: false,
      message: 'Token inválido.',
    });
  }
};

export default authMiddlewareAdmin;
