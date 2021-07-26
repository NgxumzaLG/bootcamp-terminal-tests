module.exports = function(sentBill){
    var billMade = sentBill.split(', ');
    var totalCall = 0;
    var totalSms = 0;
    var perCall = 2.75; 
    var perSms = 0.65; 
    
    for (var i = 0; i < billMade.length; i++){
      if (billMade[i].startsWith("call")){
       totalCall++;
      
      } else if (billMade[i].startsWith("sms")){
        totalSms++;
        
      }
    }
    
    perCall *= totalCall;
    perSms *= totalSms;
    var totalBill = perCall + perSms;
    
    return "R" + totalBill.toFixed(2);   
}