$(document).ready(function(){
  const age = parseInt(prompt("How old are you?"));
  
  if (age < 18) {
    $('#notoldenough').show();
  } else {
    $('#oldenough').show();
  }

});