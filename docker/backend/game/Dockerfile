FROM node:14-alpine

WORKDIR /backend/game

COPY package*.json ./
#COPY tsconfig.json ./

RUN npm install

COPY . .
EXPOSE 3001

CMD ["npm", "run", "start-gameserver", "--resolveJsonModule"]
