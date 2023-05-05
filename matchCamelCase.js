

// complete the function
function solution(string) {
    //finds match with regex, seperates then joins
    return string.match(/([A-Z]?[^A-Z]*)/g)
    .slice(0,-1)
    .join(" ")
        
    }
    








/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/