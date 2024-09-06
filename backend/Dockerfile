# Use uma imagem base oficial do Node.js
FROM node:18

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Compile o projeto (se necessário)
RUN npm run build

# Exponha a porta que o aplicativo usará
EXPOSE 5173

# Comando para iniciar o aplicativo
CMD ["npm","run", "dev"]