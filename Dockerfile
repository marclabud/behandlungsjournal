FROM node:6.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install && npm i @angular/cli@1.0.0 -g &&  npm i gulp -g && gulp sass && gulp build_server && ng build

CMD npm run loaddemodata; node dist/server.js
