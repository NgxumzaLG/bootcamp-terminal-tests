module.exports = function(getYear){
    var year = new Date().getFullYear();

    return year - getYear;
}