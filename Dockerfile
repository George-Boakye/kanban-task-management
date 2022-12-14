FROM node:18.12.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/app/
RUN npm install
RUN npm run build

CMD [ "npm", "run", "dev" ]