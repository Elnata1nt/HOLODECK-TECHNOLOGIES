import userService from "../services/userService.js";


// Função para verificar se um usuário já existe
const verifyExistUser = async (req, res, next) => {
  const { email, cpf } = req.body;
  const cpfFormatted = cpf.replace(/\D/g, '');
  try {
    // Executa as duas consultas em paralelo usando Promise.all
    const [cpfVerify, emailVerify] = await Promise.all([
      userService.findUserByCpf(cpfFormatted),
      userService.findUserByEmail(email),
    ]);

    // Cria um objeto para armazenar os erros
    const errors = {};

    // Verifica se algum dos usuários existentes já corresponde ao email ou cpf
    if (emailVerify) {
      errors.email = "Email já cadastrado";
    }
    if (cpfVerify) {
      errors.cpf = "CPF já cadastrado";
    }

    // Se houver erros, retorna uma resposta com status 400 e o objeto de erros
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, message: errors });
    }

    // Se não houver conflitos, continua com a requisição
    return next();
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error);
    return res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
};




const verifyConflictOnUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { email, cpf } = req.body;

  try {
    // Encontra o usuário atual
    const currentUser = await userService.findUserById(parseInt(id));

    if (!currentUser) {
      return res.status(404).json({
        success: false,
        errors: {
          general: "Usuário não encontrado."
        }
      });
    }

    // Verifica se outro usuário já possui os mesmos dados
    const conflicts = await userService.verifyConflictOnUpdate(id, email, cpf);
    console.log(conflicts)

    const errors = {};

    if (conflicts.some(conflict => conflict.email === email)) {
      errors.email = "Email já cadastrado.";
    }
    if (conflicts.some(conflict => conflict.cpf === cpf)) {
      errors.cpf = "CPF já cadastrado.";
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    next();
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
};

export default { verifyExistUser, verifyConflictOnUpdate };
