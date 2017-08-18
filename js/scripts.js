//Business Logic
var numArray = [];
var countTill = function(number){
    for(var i = 1; i <= number; i++) {
      numArray.push(i);
    }
  return numArray;
}




// User Interface Logic
$(document).ready(function() {
  $("form.form-inline").submit(function(event) {
    event.preventDefault();
    var result;
    var numberInput = parseInt($("input#number").val());
    alert(numberInput);
    if(isNaN(numberInput)){
      result = "please enter a number";
    }else {
      result = countTill(numberInput);
    }
    $("#result").text(result);
    
  });
});