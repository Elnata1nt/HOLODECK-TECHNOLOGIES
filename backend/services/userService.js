const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashPassword} = require("../utils/hashPassword");

// Lista todos os usuários
const listUsers = async () => {
  return await prisma.user.findMany();
};

// Lista um usuário específico pelo ID
const findUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    include: { articles: true },
  });
};

const findUserByUsername = async (username) => {
  return await prisma.user.findUnique({ where: { username } });
};

// Cria um novo usuário
const createUser = async (data) => {
  const { name, email, password, cpf, username } = data;

 const passwordHash = await hashPassword(password);

  return await prisma.user.create({
    data: { 
      name, 
      email, 
      password: passwordHash,
      cpf, 
      username, 
      profilePicture: null 
    },
  });
};

// Atualiza um usuário pelo ID
const updateUser = async (userId, data) => {
  return await prisma.user.update({
    where: { id: userId },
    data,
  });
};

// Deleta um usuário pelo ID
const deleteUser = async (userId) => {
  await prisma.user.findUnique({
    where: { id: userId },
    include: { articles: true },
  });

  return await prisma.$transaction([
    prisma.article.deleteMany({ where: { userId } }),
    prisma.user.delete({ where: { id: userId } }),
  ]);
};

// Verifica se o CPF já está em uso
const findUserByCpf = async (cpf) => {
  return await prisma.user.findUnique({ where: { cpf } });
};

module.exports = {
  listUsers,
  findUserById,
  findUserByUsername,
  findUserByCpf,
  createUser,
  updateUser,
  deleteUser,
};
