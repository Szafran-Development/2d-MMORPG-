FROM node:14-alpine

WORKDIR /backend/www

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "run", "start-www"]
