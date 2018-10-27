FROM node:10.12.0

# Globale Installation vom Angular Cli und gulp
RUN npm install -g @angular/cli@7.0.3  && npm install -g gulp@3.9.1 && npm cache verify

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# npm install from package.json (will be cached, until package.json is changed)
COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app/
RUN gulp sass && gulp build_server && ng build --prod  --optimization=false

CMD npm run loaddemodata; node dist/server.js
