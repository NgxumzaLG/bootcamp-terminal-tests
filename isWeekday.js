module.exports = function(inWeekday){
    var notWeekday = inWeekday.startsWith("M") || inWeekday.startsWith("T") || inWeekday.startsWith("W") || inWeekday.startsWith("F");
    
    return notWeekday;
}