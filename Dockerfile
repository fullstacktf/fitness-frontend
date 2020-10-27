FROM node:12.19.0 as build
WORKDIR /app
COPY * .
RUN apt-get update &&\
    npm install &&\
    npm install -g parcel-bundler &&\
    parcel build src/index.html -d dist &&\
    cd src/ &&\
    npm run test &&\
    npm run eslint &&\
    npm run stylelint &&\
    rm -rf /var/lib/apt/lists/* 

FROM nginx:1.19.2
EXPOSE 80
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
