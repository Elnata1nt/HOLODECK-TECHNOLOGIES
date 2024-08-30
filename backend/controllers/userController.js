// src/controllers/userController.js
const userService = require('../services/userService');
const { hashPassword } = require('../utils/hashPassword');

// Lista todos os usuários
const listUsers = async (req, res) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Lista um usuário específico pelo ID
const listUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    if (isNaN(userId) || userId <= 0) {
      return res.status(400).json({ success: false, message: "ID inválido fornecido!" });
    }

    const user = await userService.findUserById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Deleta um usuário pelo ID
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id, 10);
  const userName = req.userName;

  if (isNaN(userId) || userId <= 0 || userName !== req.userName) {
    return res.status(400).json({ success: false, message: "erro ao deletar o usuário" });
  }

  if (userId !== req.userId || userName !== req.userName) {
    return res.status(403).json({ success: false, message: "Você não tem permissão para deletar este usuário!" });
  }

  try {
    await userService.deleteUser(userId);
    res.status(200).json({ success: true, message: "Usuário e artigos deletados com sucesso!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Lista todos os usuários
const createUser = async (req, res) => {
  const { name, email, password, cpf, username } = req.body;

  try {
    const existingUser = await userService.findUserByCpf(cpf);

    if (existingUser) {
      return res.status(409).json({ success: false, message: "Usuário com esse CPF já existe!" });
    }

    const user = await userService.createUser({ name, email, password, cpf, username });

    if(!user){ return res.status(409).json({ success: false, message: "Usuário com esse CPF já existe!" }); }


    res.status(201).json({ success: true, message: `Usuário ${name.split(' ')[0]} criado com sucesso!`, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

// Atualiza um usuário pelo ID
const updateUser = async (req, res) => {
  const { name, email, password, cpf, username, bio, website, github, linkedin, twitter } = req.body;
  const { id } = req.params;
  const userId = parseInt(id, 10);

  if (isNaN(userId) || userId <= 0) {
    return res.status(400).json({ success: false, message: "ID inválido fornecido!" });
  }
  if (userId !== req.userId) {
    return res.status(403).json({ success: false, message: "Você não tem permissão para atualizar este usuário!" });
  }

  try {
    const existingUser = await userService.findUserById(userId);

    if (!existingUser) {
      return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
    }

    // Verifica se o CPF foi alterado
    if (cpf && cpf !== existingUser.cpf) {
      const cpfExists = await userService.findUserByCpf(cpf);
      if (cpfExists) {
        return res.status(409).json({ success: false, message: "CPF já está em uso!" });
      }
    }

    // Atualiza a senha se fornecida
    const hashedPassword = password ? await hashPassword(password) : existingUser.password;



    // Atualiza o usuário com todos os campos, considerando os opcionais
    const updatedUser = await userService.updateUser(userId, {
      name,
      email,
      password: hashedPassword,
      cpf,
      username,
      bio,
      profilePicture: req.file ? req.file.filename : existingUser.profilePicture,
      website,
      github,
      linkedin,
      twitter,
      updatedAt: new Date()
    });

    res.status(200).json({ success: true, message: "Usuário atualizado com sucesso!", updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "Erro interno do servidor" });
    console.error(error.message);
  }
};

module.exports = {
  listUsers,
  listUserById,
  deleteUser,
  createUser,
  updateUser,
};
