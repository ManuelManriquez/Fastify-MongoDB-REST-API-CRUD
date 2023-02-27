FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install mogoose
RUN npm install fastify

EXPOSE 3000

CMD ["cd", "/app"]
CMD ["npm install", "mongoose"]
CMD ["npm install", "fastify"] 
CMD ["node", "/app/src/index.js"]

COPY . .
