const request = require('supertest');
const express = require('express');

// Pure Supertest without testframework

const app = express();
app.use(require('./userRoutes.js'));

app.get('/users/count', function(req, res){
  res.send(200);
});

request(app)
  .get('/users/count')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
