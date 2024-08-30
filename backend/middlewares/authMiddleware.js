const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Obtém o token do cabeçalho Authorization
  const token = req.headers['authorization']?.split(' ')[1];

  // Se o token não for fornecido
   if(!token){ 
    return res.status(401).json({ 
      success: false, 
      error: { 
        code: 'TOKEN_NOT_PROVIDED', 
        message: 'Token não fornecido.' 
      }     
    })
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userName = decoded.nome;
    next();
  } catch (error) {
    // Se o token for inválido
    res.status(401).json({
      success: false,
      error: {
        code: 'INVALID_TOKEN',
        message: 'Token inválido.'
      }
    });
  }
}


module.exports = authMiddleware;
