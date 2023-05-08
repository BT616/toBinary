function sortArray(array) {
    // Return a sorted array.
    
    let odd= array.filter(e=> e%2).sort((a,b)=>a-b)
   
  return array.map(e=> e%2 ? odd.shift(): e)
    
    
  }
/*
  You will be given an array of numbers. 
  You have to sort the odd numbers in ascending order 
  while leaving the even numbers at their original positions.
  */