let regCheck = require("../regCheck");
let assert = require("assert");

// console.log(regCheck('DC 55 YU GP','GP'));

describe('this regCheck' , function(){
    it('should return true if the registration number passed is from Gauteng.' , function(){
        
        assert.equal(regCheck('DC 55 YU GP','GP'),true);
    });

    it('should return true if the registration number passed is from Eastern Cape' , function(){
        
        assert.equal(regCheck('ERT 123 EC','EC'),true);
    });
    
    it('should return false if the registration number passed is not from Gauteng' , function(){
       
        assert.equal(regCheck('ERT 123 EC','GP'),false);
    });
});