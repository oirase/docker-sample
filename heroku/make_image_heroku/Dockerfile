FROM alpine:latest
RUN apk add bash curl npm docker docker-compose --no-cache \
&& curl https://cli-assets.heroku.com/install.sh | sh \
&& apk del curl
COPY startup.sh .
CMD ["/startup.sh"]
