let isWeekday = require("../isWeekday");

// console.log(isWeekday('Saturday'));

describe('this isWeekday' , function(){
    it('should returns false if a  string parameter (day) passed in is not a day of the week' , function(){
     
        assert.equal(isWeekday('Saturday'),false);
    });

    it('should returns true if a  string parameter (day) passed in is a day of the week' , function(){
        
        assert.equal(isWeekday('Monday'),true);
    });
});