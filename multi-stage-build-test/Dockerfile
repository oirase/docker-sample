FROM alpine:latest AS builder
WORKDIR /work
ENV DIRPATH /path
ADD test2.txt .
RUN pwd && echo DIRPATH

FROM builder AS build1
COPY --from=0 test2.txt .
RUN ls
