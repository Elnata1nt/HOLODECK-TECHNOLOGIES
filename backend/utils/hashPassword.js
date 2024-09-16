import bcrypt from 'bcrypt';
// função para criptografar a senha

const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt); 
    return hashedPassword; 
  } catch (error) {
    console.error("Erro ao criar o hash da senha:", error);
    throw new Error("Erro interno ao criar a senha"); 
  }
};


// Função para verificar a senha do usuário
const checkPassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword); 
  return match; 
};

export default { hashPassword, checkPassword};
