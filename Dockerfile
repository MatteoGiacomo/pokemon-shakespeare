# syntax=docker/dockerfile:1

FROM node:14.16.0
ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "docker:dev" ]