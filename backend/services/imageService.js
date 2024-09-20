import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

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

export default {
    deleteImageFile,
    updateUserProfilePicture,
};
