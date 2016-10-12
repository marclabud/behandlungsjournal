const request = require('supertest');
const express = require('express');


const app = express();
app.use(require('./userRoutes.js'));

app.get('/users/count', function(req, res){
  res.send(200, { name: 'tobi' });
});

describe('GET /users/count', function(){
  it('respond with json', function(done){
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done.fail);
  })
});
