import  utils  from '../utils/hashPassword.js'; 
import  userService  from "../services/userService.js";
import generateToken from "../utils/createToken.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await userService.findUserByEmail(email);
  
    if (!user || user === null) {
      return res.status(401).json({ success: false, message: 'Usuário sem cadastro' });
    }
    
    // Verifique a senha
    const isMatch = await utils.checkPassword(password, user.password);
    
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'senha inválida!' });
    }
    // Gere um token JWT
    const token = await generateToken(user, 1);

    
    const {roles, ...userResponseToken } = user; // Remover roles
    res.status(200).json({
      success: true,
      user:userResponseToken,
      token,
    })  } catch (error) {
    console.error('Erro ao tentar fazer login:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
};

export default { login };
