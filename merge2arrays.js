// You are given two sorted arrays that both only contain integers.
// Your task is to find a way to merge them into a single one, sorted in asc order. 
// Complete the function mergeArrays(arr1, arr2), 
// where arr1 and arr2 are the original sorted arrays.

function mergeArrays(arr1, arr2) {

    let array=arr1.concat(arr2).sort((a, b)=>a-b)
    let result =[];
    for (let i=0; i<array.length; i++){
      if(array[i] !== array[i+1])
        result.push(array[i])
    }return result
  } 