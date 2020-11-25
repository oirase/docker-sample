FROM alpine:latest
WORKDIR /opt/webapp
RUN apk add npm \
&& npm init -y \
&& npm i express redis
CMD node server.js
