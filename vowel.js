function getCount(str) {
    var letters = str.split('')
  var vowels=["a","e","i","o","u"];
  var count = 0;
    
    vowels.forEach(function(vowel){
      letters.forEach(function(letter){
          if( letter===vowel){
      count++
           }
      });
    });
   return count
    }

//     Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.