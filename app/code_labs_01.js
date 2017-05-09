'use strict';

module.exports = {
  
  dataTypes : (argument) => {
    
    if(argument === null || argument === undefined) {
      return 'no value';
    }
    
    else if(typeof argument === 'string') {
      return argument.length;
    }
    
    else if(typeof argument === 'number') {
      if (argument === 100) {
        return 'equal to 100';
      }
      
      else if(argument < 100) {
        return 'less than 100';
      }
      
      else if (argument > 100) {
        return 'more than 100';
      }
    }

    else if (typeof argument === 'boolean') {

      return argument;
    }
    
    else if(argument instanceof Array) {
      if(argument.length < 3) {
        return undefined;
      }
      
      return argument[2];
    }
    
    else if(argument instanceof Function) {
      return argument(true);
    }
  }

}