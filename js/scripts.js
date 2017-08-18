//Business Logic
var arrayOfNumbers = [];
var countTill = function(number){
    for(var i = 1; i <= number; i++) {
      arrayOfNumbers.push(i);
    }
  return arrayOfNumbers;
}
var pingpong = function(array){
  for (var i = 1; i < array.length; i++) {
    if (array[i] % 15 == 0) {
      array[i] = "pingpong";
    }
    else if(array[i] % 5 == 0){
      array[i] = "pong";
    }
    else if(array[i] % 3 == 0){
      array[i] = "ping";
    }
  }
  return array;
}
var display = function(number){
  var numberArray = countTill(number);
  return pingpong(numberArray);
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
      result = display(numberInput);
    }
    $("#result").text(result);
    
  });
});