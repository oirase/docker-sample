FROM node:alpine
WORKDIR /usr/src/app
COPY server.js .
RUN npm init -y && npm i express
RUN adduser -D myuser
USER myuser
CMD node server.js $PORT

