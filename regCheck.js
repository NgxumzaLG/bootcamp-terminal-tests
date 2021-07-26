module.exports = function(regNumber, regLocation){
    var result = regNumber.endsWith(regLocation);

    return result;
}