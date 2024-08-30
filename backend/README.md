# User API

## Descrição

Este é um projeto para gerenciamento de usuários com uma API RESTful. A API permite listar, atualizar, deletar e criar usuários, além de fornecer autenticação JWT para proteger os endpoints.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar APIs RESTful.
- **Swagger**: Para documentação e testes da API.
- **PostgreSQL**: Banco de dados relacional (ou outro banco de dados conforme sua escolha).
- **jsonwebtoken**: Para geração e verificação de tokens JWT.

## Requisitos

- Node.js v14 ou superior
- PostgreSQL ou outro banco de dados relacional

## Configuração do Ambiente

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/Elnata1nt/Site-Holodeck
   cd holodeck-backend
   npm install
   npm run start

   ```

2. **_crie o arquivo .env na raiz do projeto com o seguinte conteúdo, ajustando os valores conforme necessário:_**

```bash 
    # porta do servidor
    PORT=3000

    # Connect to Supabase via connection pooling with Supavisor.

    DATABASE_URL="postgresql://postgres.tuxyswjyilejbjiudqia:espaco2501@$@aws-0-us-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

    # Direct connection to the database. Used for migrations.

    DIRECT_URL="postgresql://postgres.tuxyswjyilejbjiudqia:espaco2501@$@aws-0-us-east-1.pooler.supabase.com:5432/postgres"

    # segredo do JWT

    JWT_SECRET=&dHVu^g9!n&iVoQUnLke4Qw$^holodeckcommunity^&dHVu^g9!n&iVoQUnLke4Qw$

```
3. **Inicie o Banco de Dados**

```bash
#Para garantir que o banco de dados esteja atualizado com as últimas alterações no esquema, aplique as migrações com o seguinte comando:
npx prisma migrate deploy

#Caso o Prisma Client não tenha sido gerado automaticamente, execute o seguinte comando para gerá-lo:
npx prisma generate
```

4. **Inicie o Servidor**

```bash
   npm run start
```  

5. **Documentação da API**

```bash

**é necessario iniciar o servidor antes de acessar a documentação da API.**

A documentação da API está disponível através do Swagger UI. Acesse [http://localhost:3000/api-docs](http://localhost:3000/api-docs/users) para interagir com a API e testar os endpoints.

## Endpoints

Aqui estão alguns dos principais endpoints da API:

- `GET /users/list-user`: Lista todos os usuários.
- `GET /users/list-users/{id}`: Lista um usuário específico pelo ID.
- `DELETE /users/delete-user/{id}`: Deleta um usuário pelo ID.
- `PUT /users/update-user/{id}`: Atualiza um usuário existente.
- `POST /users/create-user`: Cria um novo usuário.

```