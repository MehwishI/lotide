const assertEqual = function (actual,expected){

  if(actual===expected)
  {
    //console.log(`Assertion Passed!, ${actual} === ${expected}`); 
    return true;
  }
  else 
  {
    //console.log(`Assertion Failed!, ${actual} !== ${expected}`); 
    return false;
  }
  
};
const eqArrays = function (arr1, arr2){
 if(arr1.length === arr2.length){
  for( let i=0; i <arr1.length; i++){

    if(assertEqual(arr1[i],arr2[i]) === false){
      return false;
    }
     
  }
  return true;
 }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false