FROM alpine:latest AS builder
WORKDIR /work
ENV DIRPATH /path
RUN pwd && echo DIRPATH

FROM builder AS build1
COPY --from=0 /test.txt .
RUN ls
