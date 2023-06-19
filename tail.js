const assertEqual = function (actual,expected){

  if(actual===expected)
  {
    console.log(`Assertion Passed!, ${actual} === ${expected}`); 
  }
  else 
  {
    console.log(`Assertion Failed!, ${actual} !== ${expected}`); 
  }
  

};
const tail= function (arr){
   let newarr= [];
  if(arr.length <=1){
    return [];
  }
  else{
    for(let i=1; i<arr.length; i++)
      {
        newarr[i-1]=arr[i];
      }
  } 
  return newarr;
};
//Test case 1: check empty array
const result1 = tail ([]);
console.log(result1);

// Test Case 2: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result + " "+result.length);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"





// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!