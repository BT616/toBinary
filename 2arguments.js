//Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// .substr() returns a portion of the string, 

function solution(str, ending){
  // TODO: complete
  return ending === str.substr(str.length -ending.length)
}

