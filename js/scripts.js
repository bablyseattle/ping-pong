//Business Logic
var arrayOfNumbers = []; 
// function to count from 1 to given number
var countTill = function(number){
    for (var i = 1; i <= number; i++) {
      arrayOfNumbers.push(i);
    }
  return arrayOfNumbers;
}
// function to replace number divisible by 3,5,15 from ping,pong,pingpong respectively
var pingPong = function(array){
  for (var i = 1; i < array.length; i++) {
    if ((array[i] % 5 == 0) && (array[i] % 3 == 0)) {
      array[i] = "pingpong";
    }
    else if (array[i] % 5 == 0){
      array[i] = "pong";
    }
    else if (array[i] % 3 == 0){
      array[i] = "ping";
    }
  }
  return array;
}
//function to display output
var display = function(userInput){
  if(isNaN(userInput)){
      return "please enter a number";
    } else if (userInput <= 0) {
      return "Please enter number greator than or equal to 1";
    } else {
      var numberArray = countTill(userInput);
      var pingPongArray = pingPong(numberArray);
      return pingPongArray;
      
    }
}

// User Interface Logic
$(document).ready(function() {
  $("form.form-inline").submit(function(event) {
    $(".result").empty();
    
    
    var results;
    var numberInput = parseInt($("input#number").val());
    results = display(numberInput);
    
    if (results instanceof Array) {
      
       results.forEach(function(result) {
      $(".result").append("<li>" + result + "</li>");
        });
      }
      else {
        $("#errorMsg").text(results);
        $("#errorMsg").show();
      }
      event.preventDefault();
    });
});