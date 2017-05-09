'use strict';

module.exports = {
  
  findMinMax : (arrayOfNumbers) => {
      
      let minMax = [];

      if(arrayOfNumbers.length <= 1) {
        minMax[0] = arrayOfNumbers[0];
        return minMax;
      }
      
      let minimum;
      let maximum;
      
      if (arrayOfNumbers[0] <= arrayOfNumbers[1]) {
        minimum = arrayOfNumbers[0];
        maximum = arrayOfNumbers[1];
      }

      else if (arrayOfNumbers[0] > arrayOfNumbers[1]) {
        minimum = arrayOfNumbers[1];
        maximum = arrayOfNumbers[0];
      } 
      
      for(let counter = 2; counter < arrayOfNumbers.length; counter += 1) {
        if (arrayOfNumbers[counter] < minimum) {
          minimum = arrayOfNumbers[counter];
        }
        else if(arrayOfNumbers[counter] > maximum) {
          maximum = arrayOfNumbers[counter];
        }
      }
      
      if (minimum == maximum) {
        minMax[0] = minimum;
        return minMax;
      }
      
      minMax[0] = minimum;
      minMax[1] = maximum;

      return minMax;
    }
  }