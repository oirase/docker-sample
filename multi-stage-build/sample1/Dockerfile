FROM node:latest AS fronted_stage
RUN build_fronted_package

FROM python:latest AS backend_stage
RUN build_backend_package

FROM alpine:latest AS final_stage
COPY --from 0 fronted_package
COPY --from 1 backend_package
RUN build_production fronted_package backend_package
