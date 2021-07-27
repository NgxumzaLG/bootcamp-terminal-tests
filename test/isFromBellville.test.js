let isFromBellville = require("../isFromBellville");
let assert = require("assert");

// console.log(isFromBellville('CY 123'));

describe('this isFromBellville' , function(){
    it('should returns true if a registration number is from Bellville' , function(){
       
        assert.equal(isFromBellville('CY 123'),true);
    });

    it('should returns false if a registration number is not from Bellville' , function(){
        
        assert.equal(isFromBellville('CJ 123'),false);
    });
});