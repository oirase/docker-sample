FROM node:latest
WORKDIR /usr/src/app
COPY server.js .
RUN npm init -y && npm i express
CMD ["node", "server.js", "8080"]

