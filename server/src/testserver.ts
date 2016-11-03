'use strict';

// Swagger Backend Mock-Server
const  swagger  = require('swagger-server');
const  Server   = swagger.Server;
const  Resource = swagger.Resource;


const port = process.env.PORT || 5000;

// Create a Swagger Server from the swagger.yaml file
var server = new Server();
//
server.parse('api/swagger/swagger.yaml');

// Mockdaten für api /users laden
server.dataStore.save(
    new Resource('/api/users/Lassie', {name: 'Lassie', email: 'lassie@gmail', password: 'white'}),
    new Resource('/api/users/Clifford', {name: 'Clifford', email: 'BigC@gmail.com', password:'red'}),
    new Resource('/api/users/Garfield', {name: 'Garfield', email: 'garfield@gmail.com', password: 'orange'}),
    new Resource('/api/users/Snoopy', {name: 'Snoopy', email: 'Snoopy@gmail.com', password: 'black'}),
    new Resource('/api/users/Hello%20Kitty', {name: 'Hello Kitty', email: 'cat@gmail.com', password:'white'})
);


// Mockdaten für api/patients laden



// Mockdaten für api/journals laden


server.listen(port, () => {
    console.log('The Swagger Server is know running at  http://127.0.0.1:' + port)
});

