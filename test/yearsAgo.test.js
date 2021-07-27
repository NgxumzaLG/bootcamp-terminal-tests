let yearsAgo = require("../yearsAgo");
let assert = require("assert");

// console.log(yearsAgo('1999'));

describe('this yearsAgo' , function(){
    it('should return "47" as the difference between the year passed in the parameter and the current year.' , function(){
       
        assert.equal(yearsAgo('1974'),47);
    });

    it('should return "21" as the difference between the year passed in the parameter and the current year.' , function(){
       
        assert.equal(yearsAgo('2000'),21);
    });
});