FROM node:14-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 8080

CMD ["npm", "run", "serve"]
