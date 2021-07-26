module.exports = function(regNumber){
    var regString = regNumber.split(', ');
    var totalReg = 0;
    
    for (var i = 0; i < regString.length; i++){
      if (regString[i].startsWith('CJ')){
        totalReg ++;

      }
    }

    return totalReg;
}