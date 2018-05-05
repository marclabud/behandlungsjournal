FROM node:6.10.2

# Globale Installation vom Angular Cli und gulp
RUN npm install -g @angular/cli@1.7.4  && npm install -g gulp@3.9.1 && npm cache clean

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# npm install from package.json (will be cached, until package.json is changed)
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/
RUN gulp sass && gulp build_server && ng build -prod

CMD npm run loaddemodata; node dist/server.js
