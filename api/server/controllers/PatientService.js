'use strict';

exports.addPatient = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Patient)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getAllPatients = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "rasse" : "aeiou",
  "name" : "aeiou",
  "_id" : "aeiou",
  "eigentuemer_nachname" : "aeiou",
  "eigentuemer_vorname" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

