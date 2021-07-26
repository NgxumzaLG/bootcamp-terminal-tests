let findItemsOver20 = require("../findItemsOver20");
let assert = require("assert");

// console.log(findItemsOver20( [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]));

describe('this findItemsOver20' , function(){
    var itemList = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    var itemList1 = [{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}]

    it('should return 2 items(qty) which a over "20" in the array passed.' , function(){
      
        assert.deepEqual(findItemsOver20(itemList), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });

    it('should return 0 items(qty) which a over "20" in the array passed.' , function(){
        
        assert.deepEqual(findItemsOver20(itemList1), []);
    });
});