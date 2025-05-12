#Sample Dockerfile for NodeJS Apps

FROM node:22

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 7000

CMD [ "node", "src/index.js" ]