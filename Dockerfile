FROM node:12.19.0 as build
WORKDIR /app
COPY * ./
RUN apt-get update &&\
    npm install &&\
    npm run test &&\
    npm run eslint &&\
    npm run build &&\
    rm -rf /var/lib/apt/lists/* 

FROM nginx:1.19.2
EXPOSE 80
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
