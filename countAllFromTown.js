module.exports = function(regNumber, regTown){
    var regString = regNumber.split(',');
    var totalReg = 0;
    
    for (var i = 0; i < regString.length; i++){
      if (regString[i].trim().startsWith(regTown)){
        totalReg++;

      }
    }

    return totalReg;
} 