FROM node:6.5.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install && npm i angular-cli@1.0.0-beta.21 -g &&  npm i gulp -g && gulp sass && gulp build_server && ng build --prod 

CMD npm run loaddemodata; node dist/server.js