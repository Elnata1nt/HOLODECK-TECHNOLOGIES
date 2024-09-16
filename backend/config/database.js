import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const testConnection = async () => {
  try {
    await prisma.$connect();
    console.log('Conexão com o banco de dados bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
};


