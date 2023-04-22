// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
    // Finish this :
  let current = 0;
   
    while (0<year){
      year = year - 100;
      current = current +1
    }
    return current 
  }