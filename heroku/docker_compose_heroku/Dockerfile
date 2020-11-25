FROM alpine:latest
WORKDIR /opt/webapp
RUN apk add npm \
&& npm i express redis
CMD node server.js
