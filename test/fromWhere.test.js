let fromWhere = require("../fromWhere");
let assert = require("assert");

// console.log(fromWhere('CY 123'));

describe('this fromWhere' , function(){
    it('should return Bellville if the registration number passed in the parameter is from Bellville.' , function(){
        
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });

    it('should return Cape Town if the registration number passed in the parameter is from Cape Town.' , function(){
        
        assert.equal(fromWhere('CA 456'),'Cape Town');
    });

    it('should return "Some other place!" if the registration number passed in the parameter is not from Bellville, Paarl, or Cape Town.' , function(){
       
        assert.equal(fromWhere('CC 789'),'Some other place!');
    });
});