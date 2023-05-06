function invert(array) {
    var result = [];
    
    for(let i=0; i<array.length; i++){
      if(array[i]===0){
      result.push(array[i])
  }else{  
       result.push(array[i] * -1);
    } 
  }  return result
  
  }

  /*
  
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, 
and the negatives become positives.
*/