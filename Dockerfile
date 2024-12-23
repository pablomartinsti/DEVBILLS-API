# Use uma imagem base leve do Node.js
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /home/app

# Copia apenas os arquivos necessários
COPY package*.json ./

# Instala as dependências apenas para produção
RUN npm ci --only=production

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta 3333
EXPOSE 3333

# Define o comando para rodar a aplicação em produção
CMD ["npm", "run", "start"]
