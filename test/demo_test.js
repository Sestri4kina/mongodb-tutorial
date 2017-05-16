const assert = require('assert');
const MarioChar = require('../models/mariochar.js');

describe("saving records", function(){
  it('saves a record to the db', function(done){
    var char = new MarioChar({
      name: 'Mario'
    });
    char.save().then(function(){
      assert(char.isNew === false); // returns false if an obj is stored to the db
      done();
    });

  });
});
