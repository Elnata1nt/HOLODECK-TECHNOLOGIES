const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Função para verificar se um usuário já existe
const verifyExistUser = async (req, res, next) => {
  const { username, email, cpf } = req.body;

  try {
    // Inicia uma transação para buscar os usuários
    const [userByUsername, userByEmail, userByCpf] = await prisma.$transaction([
      prisma.user.findUnique({ where: { username } }),
      prisma.user.findUnique({ where: { email } }),
      prisma.user.findUnique({ where: { cpf } }),
    ]);

    // Cria um objeto para armazenar erros com mensagens padronizadas
    const errors = {};

    // Verifica se já existe um usuário com o mesmo username, email ou cpf
    if (userByUsername) {
      errors.username = "Nome de usuário indisponível.";
    }
    if (userByEmail) {
      errors.email = "Email já cadastrado.";
    }
    if (userByCpf) {
      errors.cpf = "CPF já cadastrado.";
    }

    // Se houver erros, retorna uma resposta com status 400 e o objeto de erros
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Se não houver conflitos, continua com a requisição
    next();
  } catch (error) {
    console.error("Erro ao verificar existência do usuário:", error);
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
  }
};

const verifyConflictOnUpdate = async (req, res, next) => {
  const { id } = req.params;
  const { username, email, cpf } = req.body;

  try {
    // Encontra o usuário atual
    const currentUser = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!currentUser) {
      return res.status(404).json({
        success: false,
        errors: {
          general: "Usuário não encontrado."
        }
      });
    }

    // Verifica se outro usuário já possui os mesmos dados
    const conflicts = await prisma.user.findMany({
      where: {
        AND: [
          { id: { not: parseInt(id) } }, // Ignora o usuário atual
          {
            OR: [
              { username },
              { email },
              { cpf },
            ],
          },
        ],
      },
    });

    const errors = {};

    if (conflicts.some(conflict => conflict.username === username)) {
      errors.username = "Nome de usuário já existe.";
    }
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

module.exports = { verifyExistUser, verifyConflictOnUpdate };
