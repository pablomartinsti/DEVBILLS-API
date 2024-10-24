FROM node:18-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm i

EXPOSE 3333

CMD ["npm", "run", "dev"]
