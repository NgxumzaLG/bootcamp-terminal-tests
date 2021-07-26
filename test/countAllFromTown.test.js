let countAllFromTown = require("../countAllFromTown");
let assert = require("assert");

// console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));

describe('this countAllFromTown' , function(){
    var regNumber = "CL 124,CY 567,CL 345, CJ 456,CL 341"
    it('should return 3 which represent only the number of registration from Paarl.' , function(){
        assert.equal(countAllFromTown(regNumber,'CL'),3);
    });
    it('should return 1 which represent only the number of registration from Bellville.' , function(){
        assert.equal(countAllFromTown(regNumber,'CY'),1);
    });
});