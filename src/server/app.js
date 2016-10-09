var express = require('express');
var path = require('path');
var _    = require('lodash');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

// Models
var User = require('./user.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

  // APIs
  // select all
  app.get('/users', function(req, res) {
    User.find({}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    });
  });

  // count all
  app.get('/users/count', function(req, res) {
    User.count(function(err, count) {
      if(err) return console.error(err);
      res.json(count);
    });
  });

  // create
  app.post('/user', function(req, res) {
    var obj = new User(req.body);
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  // find by id
  app.get('/user/:id', function(req, res) {
    User.findOne({_id: req.params.id}, function(err, docs) {
      if(err) return console.error(err);
      res.json(docs);
    })
  });

  // update by id
  app.put('/user/:id', function(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

  // delete by id
  app.delete('/user/:id', function(req, res) {
    User.findOneAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });

  // // find by email
  // app.get('/user/:email/:password', function(req, res) {
  //   var email=req.params.email;
  //   console.log('email',email);
  //   var password=req.params.password;
  //   console.log('password',password);
  //   User.find({email:email,password: password}, function(err, docs) {
  //     if(err) return console.error(err);
  //     res.json(docs);
  //     console.log(docs);
  //   })
  // });

  // loginUser
  app.post('/user/login', function(req, res) {
    console.log ('1', 'req.body',req.body);
    var email=req.body.email;
    console.log('2','email',email);
    var password=req.body.password;
    console.log('3','password',password);

    if (email==="" || !password==="") {
      return res.status(400).send("You must send the username and the password");
    }
    //mongodbquery
    User.find({email:email,password: password}, function(err,docs) {
      if(err) return console.error(err);
      console.log ('4', docs);
      if (!(_.isEmpty(docs))) {
        //1 User wurde gefunden; Token wird zurückgesendet
        var token='123';
        res.status(201).send({id_token: token});
        console.log('5','if, docs nicht leer');
      }
      else {    //keinen User mit diesem Passwort gefunden
        return res.status(401).send({message:"The username or password don't match", email: email});
      }
    })
  });

  // // all other routes are handled by Angular
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname,'/../../dist/index.html'));
  });

  app.listen(app.get('port'), function() {
    console.log('Behandlungsjournal listening on port '+app.get('port'));
  });
});

module.exports = app;
