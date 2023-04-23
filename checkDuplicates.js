

function duplicateEncode(str){
    //create a var to hold string value that IGNORES case
    var word = str.toLowerCase()
    //create a var to hold the finished string to return after it's looped through 
    var unique = '';
    //loop through all letters in string
      for (var i = 0; i < word.length; i++) {
    //check for any characters that repeat
        if (word.lastIndexOf(word[i]) === word.indexOf(word[i])) {
    //for each character that never dupes, place (
          unique += '(';
        } else
    //for each character that IS a dupe, place )
        unique += ')';
      }

    }

    // The goal of this exercise is to convert a string to a new string where each 
    // character in the new string is "(" if that character appears only once in the original string, or ")" 
    // if that character appears more than once in the original string. Ignore capitalization when determining 
    // if a character is a duplicate.