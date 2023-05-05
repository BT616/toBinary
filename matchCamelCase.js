

// complete the function
function solution(string) {
    //finds match with regex, seperates then joins
    return string.match(/([A-Z]?[^A-Z]*)/g)
    .slice(0,-1)
    .join(" ")
        
    }

    //or 

    function solution(string) {
        return string.split(/(?=[A-Z])/).join(" ")
    }
    








/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/