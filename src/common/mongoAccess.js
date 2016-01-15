'use strict';
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var ObjectId = require('mongodb').ObjectID;

var config = require('./../config/config');
MongoClient.connect(`mongodb://${config.mongodbAddress}/test`, (err, db) => {
  if(err){
    return console.log(err);
  }
  console.log('Connected correctly to server.');
  db.collection('aa').insertOne({a:'x'});
  db.close();
});

module.exports = {

};