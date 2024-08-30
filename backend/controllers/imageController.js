const path = require('path');
const imageService = require('../services/imageService');
const userService = require('../services/userService');

const createImage = async (req, res) => {
    const id = req.userId;
    const userId = parseInt(id, 10);

    if (!userId) {
        if (req.file) {
            await imageService.deleteImageFile(path.join('uploads', req.file.filename));
        }
        return res.status(400).json({ success: false, message: "ID do usuário não fornecido." });
    }

    try {
        const existingUser = await userService.findUserById(userId);

        if (!existingUser) {
            if (req.file) {
                await imageService.deleteImageFile(path.join('uploads', req.file.filename));
            }
            return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
        }

        if (req.file && existingUser.profilePicture) {
            await imageService.deleteImageFile(path.join('uploads', existingUser.profilePicture));
        }

        const updatedUser = await imageService.updateUserProfilePicture(userId, req.file ? req.file.filename : existingUser.profilePicture);

        res.status(200).json({ success: true, message: "Imagem atualizada com sucesso!", updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro interno do servidor" });
        console.error(error.message);
    }
};

const deleteImage = async (req, res) => {
    const id = req.userId;
    const userId = parseInt(id, 10);

    try {
        const existingUser = await imageService.findUserById(userId);

        if (!existingUser) {
            return res.status(404).json({ success: false, message: "Usuário não encontrado!" });
        }

        if (existingUser.profilePicture) {
            await imageService.deleteImageFile(path.join('uploads', existingUser.profilePicture));
        } else {
            return res.status(404).json({ success: false, message: "O usuário não possui uma imagem de perfil!" });
        }

        const updatedUser = await imageService.updateUserProfilePicture(userId, null);

        res.status(200).json({ success: true, message: "Imagem deletada com sucesso!", updatedUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro interno do servidor" });
        console.error(error.message);
    }
};

module.exports = {
    createImage,
    deleteImage,
};
