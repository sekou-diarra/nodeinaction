//
//
//var express = require('express'),
//  config = require('./config/config');
//
//var app = express();
//
//require('./config/express')(app, config);
//
//app.listen(config.port, function () {
//  console.log('Express server listening on port ' + config.port);
//});
//
"use strict";
function doSomeThing(callback){
  var value = 42;
  callback(value)
}

function doSomeThing2(){
  return {
    then : function (callback) {
      var value = 42;
      callback(value)
    }
  }
}


//doSomeThing(function (value){
//
//  console.log('Got a value :' + value)
//});
//
//doSomeThing2().then(function(value){
//  console.log('Got a value:' +value)
//})

function Promise(fn) {
  var callback = null;
  this.then = function (cb) {
    callback = cb;
  };

  function resolve(value){
    console.log('resolve call');
    callback(value);

  }
fn(resolve);
};

function doSomething3(){
  return new Promise(function(resolve){
    var value = 42;
    resolve(value);
  });
};

doSomething3().then(function(value){
  console.log('Got a value:' +value)
})
