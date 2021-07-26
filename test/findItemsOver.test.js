let findItemsOver = require("../findItemsOver");
let assert = require("assert");

// console.log(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}], 20));

describe('this findItemsOver' , function(){
    var itemList = [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];

    it('should return 2 items(qty) which a over "20" in the array passed.' , function(){
        
        assert.deepEqual(findItemsOver(itemList, 20), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });

    it('should return 3 items(qty) which a over "10" in the array passed.' , function(){
        
        assert.deepEqual(findItemsOver(itemList, 10), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });

    it('should return 1 items(qty) which a over "30" in the array passed.' , function(){
        
        assert.deepEqual(findItemsOver(itemList, 30), [{"name":"pears","qty":37}]);
    });
});