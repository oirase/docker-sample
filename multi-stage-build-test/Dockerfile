FROM alpine:latest AS builder
ENV DIRPATH /path
WORKDIR /work
ADD test2.txt .
RUN pwd && echo DIRPATH

FROM builder AS build1
COPY --from=0 test2.txt .
RUN ls
