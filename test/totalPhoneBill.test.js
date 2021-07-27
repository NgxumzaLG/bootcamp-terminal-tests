let totalPhoneBill = require("../totalPhoneBill");
let assert = require("assert");

// console.log(totalPhoneBill('call, sms, call, sms, sms'));

describe('this totalPhoneBill' , function(){
    var sentBill = "call, sms, call, sms, sms";
    var sentBill1 = "call, sms";
    var sentBill2 = "sms, sms";

    it('should return "R7.45" as the total bill for the data provided in the parameter.' , function(){
    
        assert.equal(totalPhoneBill(sentBill),"R7.45");
    });

    it('should return "R3.40" as the total bill for the data provided in the parameter.' , function(){
    
        assert.equal(totalPhoneBill(sentBill1),"R3.40");
    });

    it('should return "R1.30" as the total bill for the data provided in the parameter.' , function(){
        
        assert.equal(totalPhoneBill(sentBill2),"R1.30");
    });
});