FROM node:12.19.0
WORKDIR /app
COPY .*[rc$] ./
COPY src/ ./src/
COPY package.json ./
COPY entrypoint.sh ./
RUN apt-get update && npm install && rm -rf /var/lib/apt/lists/*
ENTRYPOINT [ "bash", "./entrypoint.sh" ]