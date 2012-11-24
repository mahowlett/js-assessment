if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided

      if (isNaN(num)) {
        //not a number
        return false;
      } else {
        var divFive = false;
        var divThree = false;
        if (0 === num % 3) {
          divThree = true;
        }
        if (0 === num % 5) {
          divFive = true;
        }
        if(divFive && divThree){
          return 'fizzbuzz';  
        } else {
          if(divFive){
            return 'buzz';  
          }
          if(divThree){
            return 'fizz';  
          }
        }
      }
      return num;
    }
  };
});
