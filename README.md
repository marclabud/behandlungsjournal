# Behandlungsjournal

Ein [Online-Behandlungsjournal](https://github.com/marclabud/behandlungsjournal/wiki) für kranke Tiere.

## Technology stack
Behandlungsjournal is generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ongoose.js](http://www.mongoosejs.com) ([MongoDB](http://www.mongodb.com)): database
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): to generate the project
* [Typescript](https://github.com/Microsoft/TypeScript): client and node-server: Both with same typescript version. 
* [SASS](http://sass-lang.com/libsass): to process SASS-Sources in global framework and Angular-Components
* [Bootstrap Version 4 alpha 5](https://v4-alpha.getbootstrap.com/getting-started/introduction/): SASS-sources as base for layout and styles
* [Font Awesome](http://fontawesome.io): icons


## Prerequisites
1. Install [**N**ode.js](https://nodejs.org) and [MongoDB](http://www.mongodb.com)
2. Install Angular CLI: `npm i @angular/cli@1.0.0-rc.2 -g` : Install global and local.
3. From project root folder install all the dependencies: `npm i`

## Run
1. Command window 1: 
 <br/>Windows: `mongod`: run MongoDB
 <br/>Mac OS X: `mongod --config /usr/local/etc/mongod.conf`: run MongoDB
 <br/>Mac OS X homebrew: `brew info mongo`: How to run mongoDB 
2. Command window 2: `ng build -w`: build the project and keep watching the files for changes
3. Command window 3: `npm start`: run Express server
4. Go to [localhost:3000](http://localhost:3000)

## Production
1. Command window 1: 
 <br/>Windows: `mongod`: run MongoDB
 <br/>Mac OS X: `mongod --config /usr/local/etc/mongod.conf`: run MongoDB
 <br/>Mac OS X homebrew: `brew info mongo`: How to run mongoDB 
2. Command window 2: 
   <br/>a) `npm run init` : SASS-build, client-build for production, server-build
   <br/>b) `npm start` : run Express server
3. Go to [localhost:3000](http://localhost:3000) 

## Docker
* <code>docker.compose.yml</code> for production build
* <code>docker.compose-dev.yml</code> for development build
* [Docker Hub](https://hub.docker.com/r/mlabud/behandlungsjournal/)
     
## Project is live
[Behandlungsjournal live](http://behandlungsjournal.sloppy.zone/)

## Documentation
1. [Online-Behandlungsjournal](https://github.com/marclabud/behandlungsjournal/wiki)
2. [REST-API](https://marclabud.github.io/behandlungsjournal-api-docs/)
3. [Special Features](https://github.com/marclabud/behandlungsjournal/wiki/Special-Features)

## Authors
* [Marc Labud](https://github.com/marclabud)
* [Michel Rimbeaux](https://github.com/mrimbeau)
