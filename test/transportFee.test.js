let transportFee = require("../transportFee");

// console.log(transportFee('morning'));

describe('this transportFee' , function(){
    it('should return the right price of R20 if it was an Morning shift.' , function(){
       
        assert.equal(transportFee('morning'),'R20');
    });

    it('should return the right price of R10 if was an Afternoon shift.' , function(){
      
        assert.equal(transportFee('afternoon'),'R10');
    });

    it('should return "free" if it was an Nightshift.' , function(){
       
        assert.equal(transportFee('nigthshift'),'free');
    });
});