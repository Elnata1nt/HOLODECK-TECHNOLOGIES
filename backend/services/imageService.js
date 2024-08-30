const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs');

const deleteImageFile = async (filePath) => {
    try {
        await fs.promises.unlink(filePath);
    } catch (err) {
        console.error('Erro ao deletar a imagem:', err);
    }
};


const updateUserProfilePicture = async (userId, newProfilePicture) => {
    return await prisma.user.update({
        where: { id: userId },
        data: { profilePicture: newProfilePicture },
    });
};

module.exports = {
    deleteImageFile,
    updateUserProfilePicture,
};
