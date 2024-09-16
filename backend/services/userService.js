import { PrismaClient } from "@prisma/client";
import utils from "../utils/hashPassword.js";
const prisma = new PrismaClient();

// Lista todos os usuários
const listUsers = async () => {
  try {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        createdAt: true,
        updatedAt: true,
      }
    });
  } catch (error) {
    console.error("Error listing users:", error);
    throw new Error("Failed to list users.");
  }
};

// Cria um novo usuário
const createUser = async (data) => {
  const { name, email, password, cpf } = data;
  try {
    const passwordHash = await utils.hashPassword(password);
    const cpfFormatted = cpf.replace(/\D/g, '');


    return await prisma.user.create({
      data: { 
        name, 
        email, 
        password: passwordHash,
        cpf:cpfFormatted, 
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
};

// Atualiza um usuário pelo ID
const updateUser = async (userId, data) => {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user.");
  }
};

// Deleta um usuário pelo ID
const deleteUser = async (userId) => {
  try {
    await prisma.user.findUnique({
      where: { id: userId },
      include: { articles: true },
    });

    return await prisma.$transaction([
      prisma.article.deleteMany({ where: {authorId: userId} }),
      prisma.user.delete({ where: { id: userId } }),
    ]);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user.");
  }
};

// Lista um usuário específico pelo ID
const findUserById = async (userId) => {
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  } catch (error) {
    console.error("Error finding user by ID:", error);
    throw new Error("Failed to find user by ID.");
  }
};

// Verifica se o CPF já está em uso
const findUserByCpf = async (cpf) => {
  try {
    return await prisma.user.findUnique({ where: { cpf: cpf } });
  } catch (error) {
    console.error("Error finding user by CPF:", error);
    throw new Error("Failed to find user by CPF.");
  }
};

// Verifica se o email já está em uso
const findUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      include: {
        roles: {
          include: {
            role: {
              select: {
                nameRole: true 
              }
            }
          }
        }
      }
    });
    console.log('User found:', user);
    return user;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw new Error("Failed to find user by email.");
  }
};


const findUserByEmailOnly = async (email) => {

    return await prisma.user.findUnique({
      where: { email },
    });

};


const verifyConflictOnUpdate = async (id, email, cpf) => {
  try {
    const conflicts = await prisma.user.findMany({
      where: {
        AND: [
          { id: { not: parseInt(id) } }, // Ignora o usuário atual
          {
            OR: [
              { email: email },
              { cpf: cpf },
            ],
          },
        ],
      },
    });
    return conflicts;
  } catch (error) {
    console.error("Erro ao verificar conflitos de atualização:", error);
    throw new Error("Erro ao verificar conflitos de atualização");
  }
};


export default {
  listUsers,
  findUserById,
  findUserByCpf,
  findUserByEmail,
  findUserByEmailOnly,
  verifyConflictOnUpdate,
  createUser,
  updateUser,
  deleteUser,
};