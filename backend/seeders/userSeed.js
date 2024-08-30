const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//pra popular os seeds no banco de dados use o comando
//entre na pasta do backend e execute o comando a baixo
//node seeders/userSeed.js
//apos executar o comando o banco de dados estará com os seeds de 3 usuários

async function main() {
  // Criar três usuários com os campos obrigatórios
  await prisma.user.createMany({
    data: [
      {
        name: 'Elnata',
        username: 'patrao',
        email: 'patraozinho@gmail.com',
        cpf: '83479408001',
        password: 'admin123',
      },
      {
        name: 'lino',
        username: 'linoxxx',
        email: 'linoxxx@gmail.com',
        cpf: '98644043005',
        password: 'password123',
      },
      {
        name: 'papaleguas',
        username: 'papaleguas',
        email: 'papaleguas@gmail.com',
        cpf: '44539447050',
        password: 'password456',
      },
    ],
  });

  // Verificar se os dados foram inseridos corretamente
  const users = await prisma.user.findMany();
  console.log('Usuários criados com sucesso:', users);
}

main()
  .catch(e => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = main;