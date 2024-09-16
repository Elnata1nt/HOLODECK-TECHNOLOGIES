// src/controllers/userController.js
import userService from "../services/userService.js";
import utils  from "../utils/hashPassword.js";

// Lista todos os usuários
const listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers();
    
    res.status(200).json({ success: true, users });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Lista um usuário específico pelo ID
const listUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    if (isNaN(userId) || userId <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "ID inválido fornecido!" });
    }

    const user = await userService.findUserById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Usuário não encontrado!" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Deleta um usuário pelo ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);

  if (isNaN(userId) || userId <= 0 ) {
    return res
      .status(400)
      .json({ success: false, message: "erro ao deletar o usuário" });
  }

  if (userId !== req.userId ) {
    return res
      .status(403)
      .json({
        success: false,
        message: "Você não tem permissão para deletar este usuário!",
      });
  }

  try {
    await userService.deleteUser(userId);
    res
      .status(200)
      .json({
        success: true,
        message: "Usuário e artigos deletados com sucesso!",
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Lista todos os usuários
const createUser = async (req, res) => {
  const { name, email, password, cpf } = req.body;
  const cpfFormatted = cpf.replace(/\D/g, '');

  try {
    const user = await userService.createUser({
      name,
      email,
      password,
      cpf:cpfFormatted,
    });

    if (!user) {
      return res
        .status(500)
        .json({
          success: false,
          message:
            "Não foi possível criar o usuário. Verifique os dados e tente novamente.",
        });
    }

    res
      .status(201)
      .json({
        success: true,
        message: `Usuário ${name.split(" ")[0]} criado com sucesso!`,
        user,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Atualiza um usuário pelo ID
const updateUser = async (req, res) => {
  const { name, email, password, cpf } = req.body;
  const cpfFormatted = cpf.replace(/\D/g, '');

  const { id } = req.params;
  const userId = parseInt(id, 10);

  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ success: false, message: "ID inválido fornecido!" });
  }
  
  if (userId !== req.userId) {
    return res.status(403).json({
      success: false,
      message: "Você não tem permissão para atualizar este usuário!",
    });
  }

  try {
    // Verifica se o usuário existe
    const existingUser = await userService.findUserById(userId);
    if (!existingUser) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
    }

    // Verifica se o CPF foi alterado e se já está em uso
    if (cpfFormatted && cpfFormatted !== existingUser.cpf) {
      const cpfExists = await userService.findUserByCpf(cpfFormatted);
      if (cpfExists) {
        return res.status(409).json({ success: false, message: "CPF já está em uso!" });
      }
    }

    // Atualiza a senha se fornecida
    const hashedPassword = password
      ? await utils.hashPassword(password)
      : existingUser.password;

    // Atualiza o usuário com todos os campos, considerando os opcionais
    const updatedUser = await userService.updateUser(userId, {
      name,
      email,
      password: hashedPassword,
      cpf: cpfFormatted,
      updatedAt: new Date(),
    });

    res.status(200).json({
      success: true,
      message: "Usuário atualizado com sucesso!",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

export default {
  listUsers,
  listUserById,
  deleteUser,
  createUser,
  updateUser,
};
