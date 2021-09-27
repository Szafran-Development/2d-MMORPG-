FROM node:14-alpine

WORKDIR /frontend

COPY package*.json ./frontend
COPY tsconfig*.json ./

RUN npm install

COPY . .
EXPOSE 8080



CMD ["npm", "run", "serve"]
