FROM alpine:latest
COPY ./src /app

FROM alpine:latest
COPY --from=0 /app .
FROM alpine:latest
