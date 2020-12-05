FROM alpine:latest
COPY ./src /app
COPY ./public /public

FROM alpine:latest
COPY --from=0 /app .
FROM alpine:latest
