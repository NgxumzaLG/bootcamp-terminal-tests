let assert = require("assert");
let greet = require("../greet");

// console.log(greet('Lusanda'));

describe('this greet' , function(){
    it('should returns a greeting message "Hello, Vasco".' , function(){
        assert.equal(greet('Vasco'), 'Hello, Vasco');
    });
    it('should returns a greeting message "Hello, Lusanda".' , function(){
        assert.equal(greet('Lusanda'), 'Hello, Lusanda');
    });

});