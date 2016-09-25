# Behandlungsjournal

Ein online-Behandlungsjournal für kranke Tiere.

## Technology stack
Behandlungsjournal is generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](http://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 2](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): to generate the project
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons


## Prerequisites
1. Install [**N**ode.js](https://nodejs.org) and [MongoDB](http://www.mongodb.com)
2. Install Angular CLI: `npm i angular-cli -g`
3. From project root folder install all the dependencies: `npm i`

## Run
1. Command window 1: Windows: `mongod`: run MongoDB
                     Mac OS X: `mongod --config /usr/local/etc/mongod.conf`: run MongoDB (homebrew) 
2. Command window 2: `ng build -w`: build the project and keep watching the files for changes
3. Command window 3: `npm start`: run Express server
4. Go to [localhost:3000](http://localhost:3000)

## Production
Run `ng build --prod` to create a production ready bundle.

[Build Details](/docs/build.md) 


## Authors
* [Marc Labud](https://github.com/marclabud)
* [Michel Rimbeaux](https://github.com/mrimbeau)
