const mongoose = require('mongoose');
//ES6 promises
mongoose.Promise = global.Promise;

//connect to the db before tests runs
before(function(done){
  //connect to mongodb
  mongoose.connect('mongodb://localhost/testdb');
  mongoose.connection.once('open', function(){
    console.log('connection has been made');
    done();
  }).on('error', function(error){
    console.log('Connection error: ' + error);
  });
});
